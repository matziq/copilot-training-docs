// js/state.js
//
// Tiny localStorage-backed persistence layer for dial positions. Kept
// deliberately dependency-free (no server, no cookies) so the app's state
// model works identically under file://, a static file server, or inside a
// Capacitor WebView.

const STORAGE_KEY = 'fine-tuning-dials:v1';

/**
 * Load saved dial positions. Returns a plain object of { [constantId]: t }.
 * Falls back to an empty object (meaning "every dial at its observed
 * value") if nothing is saved yet, storage is unavailable, or the saved
 * data is corrupt.
 */
export function loadState() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object' || typeof parsed.values !== 'object') return {};
    return { ...parsed.values };
  } catch (err) {
    console.warn('Fine-Tuning Dials: could not read saved state', err);
    return {};
  }
}

/** Persist the current dial positions. Silently no-ops if storage fails. */
export function saveState(tById) {
  try {
    const payload = { version: 1, values: tById, savedAt: Date.now() };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch (err) {
    console.warn('Fine-Tuning Dials: could not save state', err);
  }
}

/** Wipe saved state (used by "Reset all"). */
export function clearState() {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.warn('Fine-Tuning Dials: could not clear saved state', err);
  }
}
