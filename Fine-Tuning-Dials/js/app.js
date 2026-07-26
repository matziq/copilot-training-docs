// js/app.js
//
// Main wiring: builds the dial grid from CONSTANTS, mounts a Knob per
// constant, keeps the consequence panel / universe status / info sheet in
// sync, and persists state to localStorage. No framework, no build step --
// everything below is plain DOM APIs.

import { CONSTANTS, SEVERITY, SEVERITY_LABEL } from './constants.js';
import {
  getBand,
  formatValue,
  formatMultiplier,
  observedT,
  computeUniverseStatus,
  severityLabel,
  FINE_T_STEP,
  FINE_STEP_MULTIPLIER,
  minimalHostileT,
} from './physics.js';
import { Knob } from './knob.js';
import { loadState, saveState, clearState } from './state.js';

const SEVERITY_COLOR_VAR = {
  [SEVERITY.OBSERVED]: 'var(--severity-observed)',
  [SEVERITY.MARGINAL]: 'var(--severity-marginal)',
  [SEVERITY.HOSTILE]: 'var(--severity-hostile)',
  [SEVERITY.CATASTROPHIC]: 'var(--severity-catastrophic)',
};

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Registry of live dial state, keyed by constant id. */
const dials = new Map(); // id -> { constant, knob, t, lastSeverity, els: {...} }

const savedT = loadState();

const dialGrid = document.getElementById('dial-grid');
const statusBar = document.getElementById('status-bar');
const infoDialog = document.getElementById('info-dialog');
const btnResetAll = document.getElementById('btn-reset-all');
const btnRandomize = document.getElementById('btn-randomize');
const btnNearestCatastrophe = document.getElementById('btn-nearest-catastrophe');
const btnNudgeAllUp = document.getElementById('btn-nudge-all-up');
const btnNudgeAllDown = document.getElementById('btn-nudge-all-down');

buildStatusBar();
CONSTANTS.forEach(buildDialCard);
refreshUniverseStatus();
registerServiceWorker();

btnResetAll.addEventListener('click', () => {
  for (const id of dials.keys()) resetDial(id, { persist: false });
  persist();
  refreshUniverseStatus();
  pulseStatusBar();
});

btnRandomize.addEventListener('click', () => {
  for (const [id, dial] of dials) {
    const t = randomTFor(dial.constant);
    dial.knob.setT(t);
    handleDialUpdate(id, t, { persist: false });
  }
  persist();
  refreshUniverseStatus();
  pulseStatusBar();
});

btnNearestCatastrophe.addEventListener('click', () => {
  // Snap every dial to the minimum possible deviation from its observed
  // value that still pushes it out of the life-permitting band -- shows
  // how thin the tuned window really is, rather than a wild random spin.
  for (const [id, dial] of dials) {
    const t = minimalHostileT(dial.constant);
    dial.knob.setT(t);
    handleDialUpdate(id, t, { persist: false });
  }
  persist();
  refreshUniverseStatus();
  pulseStatusBar();
});

btnNudgeAllUp.addEventListener('click', () => nudgeAllDials(1));
btnNudgeAllDown.addEventListener('click', () => nudgeAllDials(-1));

/** Nudge every non-stepper dial by a flat 1% relative step at once. */
function nudgeAllDials(direction) {
  for (const [id, dial] of dials) {
    if (dial.constant.scaleType === 'stepper') continue;
    const t = dial.knob.getT() + direction * FINE_T_STEP;
    dial.knob.setT(t);
    handleDialUpdate(id, t, { persist: false });
  }
  persist();
  refreshUniverseStatus();
  pulseStatusBar();
}

function randomTFor(constant) {
  if (constant.scaleType === 'stepper') {
    return Math.floor(Math.random() * constant.values.length);
  }
  return constant.tMin + Math.random() * (constant.tMax - constant.tMin);
}

function buildStatusBar() {
  statusBar.innerHTML = `
    <div class="status-bar__gauge">
      <div class="status-bar__gauge-track">
        <div class="status-bar__gauge-fill" id="gauge-fill"></div>
      </div>
      <span class="status-bar__gauge-label" id="gauge-label">100%</span>
    </div>
    <div class="status-bar__body">
      <h2 class="status-bar__headline" id="status-headline">Life-Permitting Universe</h2>
      <p class="status-bar__text" id="status-text">Every dial matches the universe we observe.</p>
    </div>
  `;
}

function buildDialCard(constant) {
  const card = document.createElement('article');
  card.className = 'dial-card';
  card.dataset.id = constant.id;
  card.dataset.severity = SEVERITY.OBSERVED;

  const header = document.createElement('header');
  header.className = 'dial-card__header';

  const nameBtn = document.createElement('button');
  nameBtn.type = 'button';
  nameBtn.className = 'dial-card__name';
  nameBtn.setAttribute('aria-haspopup', 'dialog');
  nameBtn.innerHTML = `${constant.name} <span class="dial-card__symbol">${constant.symbol}</span>`;
  nameBtn.addEventListener('click', () => openInfo(constant.id));

  const resetBtn = document.createElement('button');
  resetBtn.type = 'button';
  resetBtn.className = 'dial-card__reset';
  resetBtn.title = 'Reset this dial to its observed value';
  resetBtn.setAttribute('aria-label', `Reset ${constant.name} to observed value`);
  resetBtn.textContent = '⟲';
  resetBtn.addEventListener('click', () => {
    resetDial(constant.id, { persist: true });
    refreshUniverseStatus();
  });

  header.appendChild(nameBtn);
  header.appendChild(resetBtn);

  const knobMount = document.createElement('div');
  knobMount.className = 'dial-card__knob-mount';

  const readout = document.createElement('div');
  readout.className = 'dial-card__readout';
  readout.innerHTML = `
    <span class="dial-card__value" data-role="value"></span>
    <span class="dial-card__unit" data-role="unit">${constant.unit}</span>
    <span class="dial-card__multiplier" data-role="multiplier"></span>
  `;

  // Fine-adjust "clicker": nudges the dial by a flat 1% relative step
  // (e.g. 1.00x -> 1.01x) so users can tune precisely without hunting for
  // an exact drag angle. Not shown for the discrete dimensions stepper,
  // which has no meaningful "1%" between its integer positions.
  let fineAdjust = null;
  if (constant.scaleType !== 'stepper') {
    fineAdjust = document.createElement('div');
    fineAdjust.className = 'dial-card__fine-adjust';
    const stepLabel = `${FINE_STEP_MULTIPLIER.toFixed(2)}x`;
    fineAdjust.innerHTML = `
      <button type="button" class="dial-card__fine-btn" data-dir="-1" aria-label="Decrease ${constant.name} by 1 percent">−</button>
      <span class="dial-card__fine-label">fine ±1%</span>
      <button type="button" class="dial-card__fine-btn" data-dir="1" aria-label="Increase ${constant.name} by 1 percent">+</button>
    `;
    fineAdjust.title = `Nudge by ${stepLabel} per click`;
    fineAdjust.querySelectorAll('.dial-card__fine-btn').forEach((btn) => {
      btn.addEventListener('click', () => nudgeDial(constant.id, Number(btn.dataset.dir)));
    });
  }

  const consequence = document.createElement('div');
  consequence.className = 'consequence';
  consequence.innerHTML = `
    <span class="consequence__badge" data-role="badge"></span>
    <h3 class="consequence__headline" data-role="headline"></h3>
    <p class="consequence__text" data-role="text"></p>
  `;

  card.appendChild(header);
  card.appendChild(knobMount);
  card.appendChild(readout);
  if (fineAdjust) card.appendChild(fineAdjust);
  card.appendChild(consequence);
  dialGrid.appendChild(card);

  const initialT = clampInitial(constant, savedT[constant.id]);

  const knob = new Knob({
    mount: knobMount,
    constant,
    initialT,
    onChange: (t) => {
      handleDialUpdate(constant.id, t, { persist: false });
      refreshUniverseStatus();
    },
    onCommit: () => persist(),
  });

  dials.set(constant.id, {
    constant,
    knob,
    els: {
      card,
      value: readout.querySelector('[data-role="value"]'),
      multiplier: readout.querySelector('[data-role="multiplier"]'),
      badge: consequence.querySelector('[data-role="badge"]'),
      headline: consequence.querySelector('[data-role="headline"]'),
      text: consequence.querySelector('[data-role="text"]'),
    },
    lastSeverity: null,
  });

  handleDialUpdate(constant.id, initialT, { persist: false, initial: true });
}

function clampInitial(constant, t) {
  if (typeof t !== 'number' || Number.isNaN(t)) return observedT(constant);
  return t;
}

function handleDialUpdate(id, t, { persist: shouldPersist = true, initial = false } = {}) {
  const dial = dials.get(id);
  if (!dial) return;
  const { constant, els } = dial;
  const band = getBand(constant, t);

  els.value.textContent = formatValue(constant, t);
  const mult = formatMultiplier(constant, t);
  els.multiplier.textContent = mult ?? '';
  els.multiplier.style.display = mult ? '' : 'none';

  els.badge.textContent = severityLabel(band.severity);
  els.headline.textContent = band.headline;
  els.text.textContent = band.text;
  els.card.dataset.severity = band.severity;
  dial.knob.setArcColor(SEVERITY_COLOR_VAR[band.severity]);

  if (!initial && dial.lastSeverity && dial.lastSeverity !== band.severity) {
    vibrate();
    if (!prefersReducedMotion) flashCard(els.card);
  }
  dial.lastSeverity = band.severity;

  if (shouldPersist) persist();
}

function flashCard(card) {
  card.classList.remove('dial-card--flash');
  // Force reflow so the animation can restart if it's already running.
  void card.offsetWidth;
  card.classList.add('dial-card--flash');
}

function resetDial(id, { persist: shouldPersist }) {
  const dial = dials.get(id);
  if (!dial) return;
  const t = observedT(dial.constant);
  dial.knob.setT(t);
  handleDialUpdate(id, t, { persist: shouldPersist });
}

/** Nudge a dial by a flat 1% relative step (direction is +1 or -1). */
function nudgeDial(id, direction) {
  const dial = dials.get(id);
  if (!dial) return;
  const { constant, knob } = dial;
  if (constant.scaleType === 'stepper') return;
  const next = knob.getT() + direction * FINE_T_STEP;
  // emit:true routes through the same onChange the drag/keyboard handlers
  // use, which already updates the consequence panel and the universe
  // status gauge -- we only need to persist afterwards.
  knob.setT(next, { emit: true });
  persist();
}

function persist() {
  const values = {};
  for (const [id, dial] of dials) values[id] = dial.knob.getT();
  saveState(values);
}

function refreshUniverseStatus() {
  const tById = {};
  for (const [id, dial] of dials) tById[id] = dial.knob.getT();
  const status = computeUniverseStatus(CONSTANTS, tById);

  const fill = document.getElementById('gauge-fill');
  const label = document.getElementById('gauge-label');
  const headline = document.getElementById('status-headline');
  const text = document.getElementById('status-text');

  fill.style.transform = `scaleX(${status.score / 100})`;
  fill.style.background = SEVERITY_COLOR_VAR[status.worst];
  label.textContent = `${status.score}%`;

  if (status.worst === SEVERITY.OBSERVED) {
    headline.textContent = 'Life-Permitting Universe';
    text.textContent = 'Every dial matches the universe we actually observe. Stars shine, chemistry works, and there is time enough for it all to matter.';
  } else {
    const names = status.offenders.map((o) => dials.get(o.id).constant.name);
    const worstLabel = SEVERITY_LABEL[status.worst];
    headline.textContent = `${worstLabel} Universe`;
    const list = names.length > 3 ? `${names.slice(0, 3).join(', ')}, and ${names.length - 3} more` : names.join(', ');
    text.textContent = `Worst failure: ${worstLabel.toLowerCase()}, driven by ${list}.`;
  }
}

function pulseStatusBar() {
  if (prefersReducedMotion) return;
  statusBar.classList.remove('status-bar--pulse');
  void statusBar.offsetWidth;
  statusBar.classList.add('status-bar--pulse');
}

function vibrate() {
  if (typeof navigator.vibrate === 'function') {
    try {
      navigator.vibrate(12);
    } catch (err) {
      // Some browsers throw if called outside a user gesture context; ignore.
    }
  }
}

function openInfo(id) {
  const dial = dials.get(id);
  if (!dial) return;
  const { constant } = dial;
  const band = getBand(constant, dial.knob.getT());

  infoDialog.innerHTML = `
    <form method="dialog" class="info-dialog__form">
      <header class="info-dialog__header">
        <h2>${constant.name} <span class="dial-card__symbol">${constant.symbol}</span></h2>
        <button type="submit" class="info-dialog__close" aria-label="Close">✕</button>
      </header>
      <p class="info-dialog__observed">
        Observed value: <strong>${constant.observedDisplay ?? formatValue(constant, observedT(constant))}</strong>
        ${constant.observedDisplay ? '' : `<span class="info-dialog__unit">${constant.unit}</span>`}
      </p>
      <p class="info-dialog__blurb">${constant.blurb}</p>
      <p class="info-dialog__learn-more">${constant.learnMore}</p>
      <div class="info-dialog__current" data-severity="${band.severity}">
        <span class="consequence__badge">${severityLabel(band.severity)}</span>
        <strong>${band.headline}</strong>
        <p>${band.text}</p>
      </div>
    </form>
  `;

  if (typeof infoDialog.showModal === 'function') {
    infoDialog.showModal();
  } else {
    infoDialog.setAttribute('open', '');
  }
}

infoDialog.addEventListener('click', (evt) => {
  // Close when the backdrop (not the panel content) is clicked.
  const rect = infoDialog.getBoundingClientRect();
  const inBounds =
    evt.clientX >= rect.left && evt.clientX <= rect.right && evt.clientY >= rect.top && evt.clientY <= rect.bottom;
  if (!inBounds) infoDialog.close();
});

function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) return;
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch((err) => {
      console.warn('Fine-Tuning Dials: service worker registration failed', err);
    });
  });
}
