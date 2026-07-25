// js/physics.js
//
// Pure helper functions that translate a dial's raw knob position (`t`)
// into physical values, active outcome bands, formatted display strings,
// and an aggregate "universe status" across every dial. No DOM, no state
// mutation -- everything here is a plain function of its inputs, which
// makes it straightforward to reason about and to unit-check by hand.

import { SEVERITY, SEVERITY_ORDER, SEVERITY_LABEL, SEVERITY_SCORE } from './constants.js';

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
 */
export function computeUniverseStatus(constants, tById) {
  let worst = SEVERITY.OBSERVED;
  let scoreSum = 0;
  const perDial = [];

  for (const constant of constants) {
    const t = tById[constant.id] ?? observedT(constant);
    const band = getBand(constant, t);
    perDial.push({ id: constant.id, band, t });
    scoreSum += severityScore(band.severity);
    if (isAtLeastAsBad(band.severity, worst)) worst = band.severity;
  }

  const score = constants.length ? Math.round(scoreSum / constants.length) : 100;
  const offenders = perDial.filter((d) => d.band.severity === worst && worst !== SEVERITY.OBSERVED);

  return { worst, score, offenders, perDial };
}
