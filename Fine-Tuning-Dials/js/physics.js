// js/physics.js
//
// Pure helper functions that translate a dial's raw knob position (`t`)
// into physical values, active outcome bands, formatted display strings,
// and an aggregate "universe status" across every dial. No DOM, no state
// mutation -- everything here is a plain function of its inputs, which
// makes it straightforward to reason about and to unit-check by hand.

import { SEVERITY, SEVERITY_ORDER, SEVERITY_LABEL, SEVERITY_SCORE } from './constants.js';

/**
 * The "fine adjust" nudge step: a flat 1% relative change to the
 * multiplier, e.g. 1.00x -> 1.01x -> 1.02x, regardless of how wide a
 * given dial's overall range is. Expressed as a t-delta (log-scale) so it
 * can be added to/subtracted from `t` directly: t' = t + FINE_T_STEP
 * always multiplies the displayed value by FINE_STEP_MULTIPLIER.
 */
export const FINE_STEP_MULTIPLIER = 1.01;
export const FINE_T_STEP = Math.log10(FINE_STEP_MULTIPLIER);

/**
 * Convert a knob position `t` into the physical value it represents.
 * For log-scale dials: value = observedValue * 10^t (t = 0 => observed).
 * For steppers: `t` is an index into constant.values.
 */
export function valueFromT(constant, t) {
  if (constant.scaleType === 'stepper') {
    const idx = clampIndex(constant, t);
    return constant.values[idx];
  }
  return constant.observedValue * Math.pow(10, t);
}

/** The multiplier relative to the observed value (log dials only). */
export function multiplierFromT(t) {
  return Math.pow(10, t);
}

/** Clamp a continuous t to the constant's [tMin, tMax] range. */
export function clampT(constant, t) {
  if (constant.scaleType === 'stepper') return clampIndex(constant, t);
  if (Number.isNaN(t)) return 0;
  return Math.min(constant.tMax, Math.max(constant.tMin, t));
}

function clampIndex(constant, t) {
  const max = constant.values.length - 1;
  const rounded = Math.round(t);
  return Math.min(max, Math.max(0, rounded));
}

/** The index of the observed value for a stepper constant. */
export function observedIndex(constant) {
  return constant.values.indexOf(constant.observedValue);
}

/** The t value corresponding to the observed (real-world) setting. */
export function observedT(constant) {
  return constant.scaleType === 'stepper' ? observedIndex(constant) : 0;
}

/** Look up the active outcome band for the given knob position. */
export function getBand(constant, t) {
  if (constant.scaleType === 'stepper') {
    const idx = clampIndex(constant, t);
    return constant.bands[idx] ?? constant.bands[0];
  }
  const clamped = clampT(constant, t);
  for (const band of constant.bands) {
    if (clamped <= band.tMax) return band;
  }
  return constant.bands[constant.bands.length - 1];
}

/**
 * Build the ascending list of { t, score } control points used to turn a
 * dial's discrete bands into a continuous curve. Every non-observed band
 * contributes one knot at its center; the 'observed' band contributes two
 * knots (one at each edge) so the score stays pinned at its full value
 * across the *entire* observed range, not just its exact center.
 */
function bandKnots(constant) {
  const knots = [];
  let prevTMax = constant.tMin;
  for (const band of constant.bands) {
    const bandTMax = band.tMax === Infinity ? constant.tMax : band.tMax;
    const score = severityScore(band.severity);
    if (band.severity === SEVERITY.OBSERVED) {
      knots.push({ t: prevTMax, score });
      knots.push({ t: bandTMax, score });
    } else {
      knots.push({ t: (prevTMax + bandTMax) / 2, score });
    }
    prevTMax = bandTMax;
  }
  return knots;
}

/**
 * The minimum-deviation dial position that pushes a constant just outside
 * its 'observed' band -- i.e. the smallest possible nudge, in whichever
 * direction requires less change, that makes this one dial inhospitable
 * to life. Used by the "Nearest Catastrophe" control to show how thin the
 * observed band really is: it snaps every dial to the closest edge of its
 * life-permitting range, rather than to a random or extreme value.
 */
export function minimalHostileT(constant) {
  if (constant.scaleType === 'stepper') {
    const obsIdx = observedIndex(constant);
    const last = constant.values.length - 1;
    // Prefer stepping toward whichever neighbor still exists; a stepper
    // constant like the number of spatial dimensions has no "distance" to
    // minimize beyond one integer step off the observed index.
    if (obsIdx < last) return obsIdx + 1;
    if (obsIdx > 0) return obsIdx - 1;
    return obsIdx;
  }

  let prevTMax = constant.tMin;
  let lowerEdge = constant.tMin;
  let upperEdge = constant.tMax;
  for (const band of constant.bands) {
    const bandTMax = band.tMax === Infinity ? constant.tMax : band.tMax;
    if (band.severity === SEVERITY.OBSERVED) {
      lowerEdge = prevTMax;
      upperEdge = bandTMax;
    }
    prevTMax = bandTMax;
  }

  const obs = observedT(constant);
  // Push just past whichever edge is nearer to the observed setting, by a
  // hair more than the fine-adjust step so it lands solidly inside the
  // neighboring (non-observed) band rather than right on the boundary.
  const eps = FINE_T_STEP / 2;
  const distLower = obs - lowerEdge;
  const distUpper = upperEdge - obs;
  if (distLower <= distUpper) {
    return clampT(constant, lowerEdge - eps);
  }
  return clampT(constant, upperEdge + eps);
}

/**
 * A continuous, interpolated habitability score in [0, 100] for a single
 * dial at position `t`. Unlike `getBand`, which snaps to a new severity
 * the instant `t` crosses a threshold, this ramps smoothly between the
 * anchor scores of neighboring bands -- so nudging a dial by a tiny
 * amount (e.g. 1.99x -> 2.00x observed) never produces a sudden cliff in
 * the aggregate "Life-Permitting Universe" gauge. The discrete band
 * text/headline/color badge are unaffected; only the numeric score is
 * smoothed.
 */
export function continuousSeverityScore(constant, t) {
  if (constant.scaleType === 'stepper') {
    return severityScore(getBand(constant, t).severity);
  }
  const clamped = clampT(constant, t);
  const knots = bandKnots(constant);
  if (clamped <= knots[0].t) return knots[0].score;
  const last = knots[knots.length - 1];
  if (clamped >= last.t) return last.score;
  for (let i = 0; i < knots.length - 1; i++) {
    const a = knots[i];
    const b = knots[i + 1];
    if (clamped >= a.t && clamped <= b.t) {
      if (b.t === a.t) return b.score;
      const frac = (clamped - a.t) / (b.t - a.t);
      return a.score + (b.score - a.score) * frac;
    }
  }
  return last.score;
}

/** Numeric "worst is 0" ordering index for a severity, for comparisons. */
export function severityRank(severity) {
  const idx = SEVERITY_ORDER.indexOf(severity);
  return idx === -1 ? SEVERITY_ORDER.length - 1 : idx;
}

/** True if severityA is at least as bad as severityB. */
export function isAtLeastAsBad(severityA, severityB) {
  return severityRank(severityA) <= severityRank(severityB);
}

export function severityLabel(severity) {
  return SEVERITY_LABEL[severity] ?? severity;
}

export function severityScore(severity) {
  return SEVERITY_SCORE[severity] ?? 0;
}

/** Format a plain number in compact scientific notation, e.g. "6.67×10⁻¹¹". */
export function toScientific(value, sigFigs = 3) {
  if (value === 0) return '0';
  const negative = value < 0;
  const abs = Math.abs(value);
  const exponent = Math.floor(Math.log10(abs));
  const mantissa = abs / Math.pow(10, exponent);
  const mantissaStr = mantissa.toPrecision(sigFigs).replace(/\.?0+$/, '');
  const sign = negative ? '-' : '';
  if (exponent === 0) return `${sign}${mantissaStr}`;
  return `${sign}${mantissaStr}×10${superscript(exponent)}`;
}

const SUPERSCRIPT_DIGITS = {
  '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴',
  '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹',
  '-': '⁻', '+': '',
};

export function superscript(n) {
  return String(n)
    .split('')
    .map((ch) => SUPERSCRIPT_DIGITS[ch] ?? ch)
    .join('');
}

/** Human readout of the current physical value with units. */
export function formatValue(constant, t) {
  if (constant.scaleType === 'stepper') {
    const value = valueFromT(constant, t);
    return `${value}`;
  }
  const value = valueFromT(constant, t);
  return toScientific(value);
}

/** "1.0× observed" / "10⁶× observed" style multiplier readout. */
export function formatMultiplier(constant, t) {
  if (constant.scaleType === 'stepper') return null;
  const clamped = clampT(constant, t);
  const mult = multiplierFromT(clamped);
  if (Math.abs(clamped) < 0.005) return '1.0× observed';
  if (mult >= 1000 || mult <= 0.001) {
    return `${toScientific(mult)}× observed`;
  }
  return `${mult.toPrecision(3).replace(/\.?0+$/, '')}× observed`;
}

/**
 * Aggregate every dial's current band into an overall "universe status":
 * the worst severity present, a 0-100 habitability score, and the list of
 * dials responsible for the worst severity (empty if everything is
 * 'observed').
 *
 * Habitability is a "weakest link" property, not an average across dials.
 * A single catastrophically wrong constant (e.g. gravity turned up until
 * all matter collapses into black holes) kills the universe outright no
 * matter how perfect every other dial is -- it doesn't matter that the
 * fine-structure constant is fine if there are no stars left to shine.
 * So the score is the *minimum* of every dial's continuous score (see
 * `continuousSeverityScore`), which also means the gauge moves smoothly
 * as any single dial is nudged, rather than jumping the instant a band
 * boundary is crossed. A small extra penalty is applied for each
 * additional dial that shares the same worst discrete severity (more
 * independent failures compound).
 */
export function computeUniverseStatus(constants, tById) {
  let worst = SEVERITY.OBSERVED;
  let minScore = 100;
  const perDial = [];

  for (const constant of constants) {
    const t = tById[constant.id] ?? observedT(constant);
    const band = getBand(constant, t);
    const contScore = continuousSeverityScore(constant, t);
    perDial.push({ id: constant.id, band, t, score: contScore });
    if (contScore < minScore) minScore = contScore;
    if (isAtLeastAsBad(band.severity, worst)) worst = band.severity;
  }

  const offenders = perDial.filter((d) => d.band.severity === worst && worst !== SEVERITY.OBSERVED);
  const extraOffenders = Math.max(0, offenders.length - 1);
  const score = Math.max(0, Math.min(100, Math.round(minScore - extraOffenders * 4)));

  return { worst, score, offenders, perDial };
}
