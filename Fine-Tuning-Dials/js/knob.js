// js/knob.js
//
// A real rotary knob rendered as inline SVG: draggable with mouse and touch
// via Pointer Events, fully keyboard accessible, and driven by a simple,
// reversible angle<->value mapping so the same math renders the knob and
// interprets drag/keyboard input.
//
// ANGLE CONVENTION
// ----------------
// Angles are measured in degrees, clockwise-positive, with 0 = straight up
// (12 o'clock). The knob sweeps from -135 (7:30, fully counter-clockwise)
// to +135 (4:30, fully clockwise) -- a 270 degree sweep with a 90 degree
// dead zone at the bottom, exactly like a real hardware knob.
//
//   angleForT(t)  maps a dial position to a display angle   [rendering]
//   tForAngle(a)  maps a pointer angle back to a dial position [input]
//
// These two are exact inverses of one another over the valid range, so a
// value always round-trips: tForAngle(angleForT(t)) === t.

import { clampT, valueFromT, observedT } from './physics.js';

const SWEEP_MIN = -135;
const SWEEP_MAX = 135;
const SWEEP_RANGE = SWEEP_MAX - SWEEP_MIN;
const SVG_NS = 'http://www.w3.org/2000/svg';

/** Dial position (t, or stepper index) -> display angle in degrees. */
export function angleForT(constant, t) {
  if (constant.scaleType === 'stepper') {
    const n = constant.values.length;
    const idx = Math.min(n - 1, Math.max(0, Math.round(t)));
    return n <= 1 ? 0 : SWEEP_MIN + (idx / (n - 1)) * SWEEP_RANGE;
  }
  const clamped = clampT(constant, t);
  const frac = (clamped - constant.tMin) / (constant.tMax - constant.tMin);
  return SWEEP_MIN + frac * SWEEP_RANGE;
}

/** Pointer/keyboard angle in degrees -> dial position (t, or stepper index). */
export function tForAngle(constant, angleDeg) {
  const clampedAngle = Math.min(SWEEP_MAX, Math.max(SWEEP_MIN, angleDeg));
  const frac = (clampedAngle - SWEEP_MIN) / SWEEP_RANGE;
  if (constant.scaleType === 'stepper') {
    const n = constant.values.length;
    return Math.round(frac * (n - 1));
  }
  return constant.tMin + frac * (constant.tMax - constant.tMin);
}

function polarToCartesian(cx, cy, r, angleDeg) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: cx + r * Math.sin(rad), y: cy - r * Math.cos(rad) };
}

function describeArc(cx, cy, r, angleA, angleB) {
  const a1 = Math.min(angleA, angleB);
  const a2 = Math.max(angleA, angleB);
  if (a2 - a1 < 0.05) return '';
  const p1 = polarToCartesian(cx, cy, r, a1);
  const p2 = polarToCartesian(cx, cy, r, a2);
  const largeArc = a2 - a1 > 180 ? 1 : 0;
  return `M ${p1.x.toFixed(2)} ${p1.y.toFixed(2)} A ${r} ${r} 0 ${largeArc} 1 ${p2.x.toFixed(2)} ${p2.y.toFixed(2)}`;
}

function el(name, attrs = {}) {
  const node = document.createElementNS(SVG_NS, name);
  for (const [key, value] of Object.entries(attrs)) node.setAttribute(key, value);
  return node;
}

let uid = 0;

export class Knob {
  /**
   * @param {object} opts
   * @param {HTMLElement} opts.mount - element to render the knob into
   * @param {object} opts.constant - the constants.js entry this knob controls
   * @param {number} opts.initialT - starting dial position
   * @param {(t:number) => void} opts.onChange - fired live while dragging/typing
   * @param {(t:number) => void} [opts.onCommit] - fired once a drag/key gesture ends
   */
  constructor({ mount, constant, initialT, onChange, onCommit }) {
    this.constant = constant;
    this.onChange = onChange;
    this.onCommit = onCommit || (() => {});
    this.t = clampT(constant, initialT);
    this.instanceId = `knob-${uid++}`;
    this.dragging = false;
    this.pointerId = null;

    this._buildDom(mount);
    this._bindEvents();
    this.render();
  }

  _buildDom(mount) {
    const wrap = document.createElement('div');
    wrap.className = 'knob';
    wrap.setAttribute('tabindex', '0');
    wrap.setAttribute('role', 'slider');
    wrap.setAttribute('aria-label', `${this.constant.name} dial`);
    wrap.setAttribute('aria-valuemin', '0');
    wrap.setAttribute('aria-valuemax', '100');
    wrap.style.touchAction = 'none';
    this.wrap = wrap;

    const svg = el('svg', {
      viewBox: '0 0 100 100',
      class: 'knob__svg',
      'aria-hidden': 'true',
      focusable: 'false',
    });

    const defs = el('defs');
    const bezelGrad = el('radialGradient', {
      id: `${this.instanceId}-bezel`,
      cx: '35%',
      cy: '30%',
      r: '75%',
    });
    bezelGrad.appendChild(el('stop', { offset: '0%', 'stop-color': '#7c828c' }));
    bezelGrad.appendChild(el('stop', { offset: '55%', 'stop-color': '#4a4f57' }));
    bezelGrad.appendChild(el('stop', { offset: '100%', 'stop-color': '#1c1f24' }));
    defs.appendChild(bezelGrad);

    const faceGrad = el('radialGradient', {
      id: `${this.instanceId}-face`,
      cx: '40%',
      cy: '35%',
      r: '70%',
    });
    faceGrad.appendChild(el('stop', { offset: '0%', 'stop-color': '#33373e' }));
    faceGrad.appendChild(el('stop', { offset: '100%', 'stop-color': '#15171b' }));
    defs.appendChild(faceGrad);
    svg.appendChild(defs);

    // Outer brushed-metal bezel.
    svg.appendChild(el('circle', { cx: 50, cy: 50, r: 46, fill: `url(#${this.instanceId}-bezel)` }));

    // Knurled grip texture around the bezel edge.
    const knurl = el('g', { class: 'knob__knurl', opacity: '0.35' });
    const knurlCount = 40;
    for (let i = 0; i < knurlCount; i++) {
      const angle = (360 / knurlCount) * i;
      const p1 = polarToCartesian(50, 50, 44.5, angle);
      const p2 = polarToCartesian(50, 50, 41.5, angle);
      knurl.appendChild(
        el('line', { x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y, stroke: '#0b0c0e', 'stroke-width': 0.6 })
      );
    }
    svg.appendChild(knurl);

    // Inner face.
    svg.appendChild(el('circle', { cx: 50, cy: 50, r: 38, fill: `url(#${this.instanceId}-face)`, stroke: '#05070a', 'stroke-width': 1 }));

    // Tick marks.
    const ticks = el('g', { class: 'knob__ticks' });
    this.tickCount = this.constant.scaleType === 'stepper' ? this.constant.values.length : 13;
    for (let i = 0; i < this.tickCount; i++) {
      const frac = this.tickCount === 1 ? 0 : i / (this.tickCount - 1);
      const angle = SWEEP_MIN + frac * SWEEP_RANGE;
      const p1 = polarToCartesian(50, 50, 44, angle);
      const p2 = polarToCartesian(50, 50, 39, angle);
      ticks.appendChild(
        el('line', { x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y, stroke: '#7d8590', 'stroke-width': 1, 'stroke-linecap': 'round' })
      );
    }
    svg.appendChild(ticks);

    // Reference tick showing exactly where the *observed* value sits.
    const refAngle = angleForT(this.constant, observedT(this.constant));
    const refOuter = polarToCartesian(50, 50, 45.5, refAngle);
    const refInner = polarToCartesian(50, 50, 37, refAngle);
    svg.appendChild(
      el('line', {
        class: 'knob__reference-tick',
        x1: refOuter.x,
        y1: refOuter.y,
        x2: refInner.x,
        y2: refInner.y,
        stroke: '#3ddc84',
        'stroke-width': 1.6,
        'stroke-linecap': 'round',
      })
    );

    // Deviation arc (from observed to current position); color set in render().
    this.arcPath = el('path', {
      class: 'knob__arc',
      fill: 'none',
      'stroke-width': 3.4,
      'stroke-linecap': 'round',
    });
    svg.appendChild(this.arcPath);

    // Center hub + pointer needle (rotated group).
    this.pointerGroup = el('g', { class: 'knob__pointer-group' });
    this.pointerGroup.appendChild(
      el('line', { x1: 50, y1: 50, x2: 50, y2: 17, stroke: '#ffb454', 'stroke-width': 3, 'stroke-linecap': 'round', class: 'knob__needle' })
    );
    this.pointerGroup.appendChild(el('circle', { cx: 50, cy: 15, r: 2.6, fill: '#4fd8e0', class: 'knob__needle-tip' }));
    svg.appendChild(this.pointerGroup);

    svg.appendChild(el('circle', { cx: 50, cy: 50, r: 8, fill: '#20242b', stroke: '#05070a', 'stroke-width': 1 }));
    svg.appendChild(el('circle', { cx: 50, cy: 50, r: 3, fill: '#0b0c0e' }));

    wrap.appendChild(svg);
    this.svg = svg;
    mount.appendChild(wrap);
  }

  _bindEvents() {
    this.wrap.addEventListener('pointerdown', this._onPointerDown.bind(this));
    this.wrap.addEventListener('pointermove', this._onPointerMove.bind(this));
    this.wrap.addEventListener('pointerup', this._onPointerUp.bind(this));
    this.wrap.addEventListener('pointercancel', this._onPointerUp.bind(this));
    this.wrap.addEventListener('keydown', this._onKeyDown.bind(this));
  }

  _angleFromEvent(evt) {
    const rect = this.wrap.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = evt.clientX - cx;
    const dy = evt.clientY - cy;
    const distance = Math.hypot(dx, dy);
    if (distance < 6) return null; // dead zone right at the center pivot
    return (Math.atan2(dx, -dy) * 180) / Math.PI;
  }

  _onPointerDown(evt) {
    evt.preventDefault();
    this.dragging = true;
    this.pointerId = evt.pointerId;
    this.wrap.setPointerCapture(evt.pointerId);
    this.wrap.classList.add('knob--dragging');
    this._applyAngle(evt);
  }

  _onPointerMove(evt) {
    if (!this.dragging || evt.pointerId !== this.pointerId) return;
    evt.preventDefault();
    this._applyAngle(evt);
  }

  _onPointerUp(evt) {
    if (evt.pointerId !== this.pointerId) return;
    this.dragging = false;
    this.pointerId = null;
    this.wrap.classList.remove('knob--dragging');
    this.onCommit(this.t);
  }

  _applyAngle(evt) {
    const angle = this._angleFromEvent(evt);
    if (angle === null) return;
    const t = tForAngle(this.constant, angle);
    this.setT(t, { emit: true });
  }

  _onKeyDown(evt) {
    const c = this.constant;
    const step = c.tStep ?? 1;
    const coarse = c.tCoarseStep ?? step * 10;
    let handled = true;
    switch (evt.key) {
      case 'ArrowUp':
      case 'ArrowRight':
        this.setT(this.t + step, { emit: true });
        break;
      case 'ArrowDown':
      case 'ArrowLeft':
        this.setT(this.t - step, { emit: true });
        break;
      case 'PageUp':
        this.setT(this.t + coarse, { emit: true });
        break;
      case 'PageDown':
        this.setT(this.t - coarse, { emit: true });
        break;
      case 'Home':
        this.setT(observedT(c), { emit: true });
        break;
      case 'End':
        this.setT(c.scaleType === 'stepper' ? c.values.length - 1 : c.tMax, { emit: true });
        break;
      default:
        handled = false;
    }
    if (handled) {
      evt.preventDefault();
      this.onCommit(this.t);
    }
  }

  /** Programmatically move the knob (used by reset / randomize / restore). */
  setT(t, { emit = false } = {}) {
    const clamped = clampT(this.constant, t);
    if (clamped === this.t && emit === false) {
      this.render();
      return;
    }
    this.t = clamped;
    this.render();
    if (emit) this.onChange(this.t);
  }

  getT() {
    return this.t;
  }

  render() {
    const angle = angleForT(this.constant, this.t);
    this.pointerGroup.setAttribute('transform', `rotate(${angle.toFixed(2)} 50 50)`);

    const refAngle = angleForT(this.constant, observedT(this.constant));
    const path = describeArc(50, 50, 41.5, refAngle, angle);
    this.arcPath.setAttribute('d', path);

    const value = valueFromT(this.constant, this.t);
    this.wrap.setAttribute('aria-valuetext', String(value));
    const frac = this.constant.scaleType === 'stepper'
      ? this.t / Math.max(1, this.constant.values.length - 1)
      : (clampT(this.constant, this.t) - this.constant.tMin) / (this.constant.tMax - this.constant.tMin);
    this.wrap.setAttribute('aria-valuenow', Math.round(frac * 100));
  }

  setArcColor(color) {
    // Use the style property (not setAttribute) so CSS custom properties
    // (e.g. "var(--severity-hostile)") resolve correctly.
    this.arcPath.style.stroke = color;
  }

  destroy() {
    this.wrap.remove();
  }
}
