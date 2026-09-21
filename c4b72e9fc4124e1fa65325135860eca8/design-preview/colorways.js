const COLORWAY_OPTIONS = [
  {
    slug: 'cranberry-wheat',
    name: 'Cranberry + wheat',
    light: {
      '--cp-bg': '#fbf5ec', '--cp-bg-elevated': '#fffaf3', '--cp-surface': '#fffdf8', '--cp-surface-soft': '#f6eadb',
      '--cp-border': '#e6d6c0', '--cp-border-strong': '#b78a65', '--cp-text': '#251914', '--cp-text-muted': '#6f5548', '--cp-text-soft': '#80695c',
      '--cp-accent': '#a51f3f', '--cp-accent-hover': '#8f1935', '--cp-accent-soft': 'rgba(165, 31, 63, 0.1)', '--cp-accent-fg': '#ffffff',
      '--cp-link': '#8f1935', '--cp-panel': 'rgba(255, 250, 243, 0.88)', '--cp-panel-strong': 'rgba(255, 250, 243, 0.97)', '--cp-highlight': 'rgba(165, 31, 63, 0.14)',
      '--paper': '#fbf5ec', '--ink': '#251914', '--accent': '#a51f3f', '--button-ink': '#ffffff', '--line': '#e6d6c0'
    },
    dark: {
      '--cp-bg': '#2d211c', '--cp-bg-elevated': '#251b17', '--cp-surface': '#342620', '--cp-surface-soft': '#3b2b24',
      '--cp-border': '#5f4539', '--cp-border-strong': '#a8755d', '--cp-text': '#f5e8d9', '--cp-text-muted': '#cfb9a6', '--cp-text-soft': '#dcc9b9',
      '--cp-accent': '#ff8aa3', '--cp-accent-hover': '#ff7794', '--cp-accent-soft': 'rgba(255, 138, 163, 0.16)', '--cp-accent-fg': '#271316',
      '--cp-link': '#ff9bb0', '--cp-panel': 'rgba(52, 38, 32, 0.78)', '--cp-panel-strong': 'rgba(52, 38, 32, 0.96)', '--cp-highlight': 'rgba(255, 138, 163, 0.14)',
      '--paper': '#2d211c', '--ink': '#f5e8d9', '--accent': '#ff8aa3', '--button-ink': '#271316', '--line': '#5f4539'
    }
  },
  {
    slug: 'sage-copper',
    name: 'Sage + copper',
    light: {
      '--cp-bg': '#f4f3ea', '--cp-bg-elevated': '#fbfaf2', '--cp-surface': '#fffffa', '--cp-surface-soft': '#e9ebdf',
      '--cp-border': '#d6d9ca', '--cp-border-strong': '#7d8a6d', '--cp-text': '#20231b', '--cp-text-muted': '#59604e', '--cp-text-soft': '#6a715f',
      '--cp-accent': '#b65a2a', '--cp-accent-hover': '#99491f', '--cp-accent-soft': 'rgba(182, 90, 42, 0.12)', '--cp-accent-fg': '#ffffff',
      '--cp-link': '#8b481f', '--cp-panel': 'rgba(255, 255, 250, 0.88)', '--cp-panel-strong': 'rgba(255, 255, 250, 0.97)', '--cp-highlight': 'rgba(182, 90, 42, 0.14)',
      '--paper': '#f4f3ea', '--ink': '#20231b', '--accent': '#b65a2a', '--button-ink': '#ffffff', '--line': '#d6d9ca'
    },
    dark: {
      '--cp-bg': '#20241d', '--cp-bg-elevated': '#191d17', '--cp-surface': '#2a3025', '--cp-surface-soft': '#30382a',
      '--cp-border': '#47513d', '--cp-border-strong': '#79856c', '--cp-text': '#eef0e6', '--cp-text-muted': '#c1c7b4', '--cp-text-soft': '#d0d5c8',
      '--cp-accent': '#e7a15f', '--cp-accent-hover': '#f0ae70', '--cp-accent-soft': 'rgba(231, 161, 95, 0.16)', '--cp-accent-fg': '#241509',
      '--cp-link': '#efb77c', '--cp-panel': 'rgba(42, 48, 37, 0.78)', '--cp-panel-strong': 'rgba(42, 48, 37, 0.96)', '--cp-highlight': 'rgba(231, 161, 95, 0.14)',
      '--paper': '#20241d', '--ink': '#eef0e6', '--accent': '#e7a15f', '--button-ink': '#241509', '--line': '#47513d'
    }
  },
  {
    slug: 'midnight-gold',
    name: 'Midnight + gold',
    light: {
      '--cp-bg': '#f4f0e6', '--cp-bg-elevated': '#fbf8ef', '--cp-surface': '#fffdf7', '--cp-surface-soft': '#ebe5d7',
      '--cp-border': '#d7cdb9', '--cp-border-strong': '#746a58', '--cp-text': '#171b22', '--cp-text-muted': '#535b68', '--cp-text-soft': '#68707d',
      '--cp-accent': '#8f5b00', '--cp-accent-hover': '#754900', '--cp-accent-soft': 'rgba(143, 91, 0, 0.12)', '--cp-accent-fg': '#ffffff',
      '--cp-link': '#754900', '--cp-panel': 'rgba(255, 253, 247, 0.88)', '--cp-panel-strong': 'rgba(255, 253, 247, 0.97)', '--cp-highlight': 'rgba(143, 91, 0, 0.14)',
      '--paper': '#f4f0e6', '--ink': '#171b22', '--accent': '#8f5b00', '--button-ink': '#ffffff', '--line': '#d7cdb9'
    },
    dark: {
      '--cp-bg': '#111722', '--cp-bg-elevated': '#0d131d', '--cp-surface': '#182131', '--cp-surface-soft': '#202b3d',
      '--cp-border': '#334157', '--cp-border-strong': '#62708a', '--cp-text': '#eef2f7', '--cp-text-muted': '#b9c2d0', '--cp-text-soft': '#c9d1dc',
      '--cp-accent': '#f3bd4f', '--cp-accent-hover': '#ffd06c', '--cp-accent-soft': 'rgba(243, 189, 79, 0.16)', '--cp-accent-fg': '#1d1605',
      '--cp-link': '#ffd06c', '--cp-panel': 'rgba(24, 33, 49, 0.78)', '--cp-panel-strong': 'rgba(24, 33, 49, 0.96)', '--cp-highlight': 'rgba(243, 189, 79, 0.14)',
      '--paper': '#111722', '--ink': '#eef2f7', '--accent': '#f3bd4f', '--button-ink': '#1d1605', '--line': '#334157'
    }
  },
  {
    slug: 'cobalt-volt',
    name: 'Cobalt + volt',
    light: {
      '--cp-bg': '#173db6', '--cp-bg-elevated': '#183eb8', '--cp-surface': '#f6f7fc', '--cp-surface-soft': '#edf0fb',
      '--cp-border': '#607bd1', '--cp-border-strong': '#c5cde5', '--cp-text': '#ffffff', '--cp-text-muted': '#dce5ff', '--cp-text-soft': '#eef3ff',
      '--cp-accent': '#e6f16a', '--cp-accent-hover': '#f1fa84', '--cp-accent-soft': 'rgba(230, 241, 106, 0.16)', '--cp-accent-fg': '#172553',
      '--cp-link': '#e6f16a', '--cp-warning': '#e6f16a', '--cp-panel': 'rgba(23, 61, 182, 0.88)', '--cp-panel-strong': 'rgba(23, 61, 182, 0.96)', '--cp-highlight': 'rgba(230, 241, 106, 0.32)',
      '--paper': '#173db6', '--ink': '#ffffff', '--accent': '#e6f16a', '--button-ink': '#172553', '--line': '#607bd1'
    },
    dark: {
      '--cp-bg': '#111a3c', '--cp-bg-elevated': '#0d1530', '--cp-surface': '#16245a', '--cp-surface-soft': '#1c2d72',
      '--cp-border': '#33488f', '--cp-border-strong': '#7383d0', '--cp-text': '#f6f7fc', '--cp-text-muted': '#bec8f0', '--cp-text-soft': '#d2d9f6',
      '--cp-accent': '#e6f16a', '--cp-accent-hover': '#f1fa84', '--cp-accent-soft': 'rgba(230, 241, 106, 0.16)', '--cp-accent-fg': '#172553',
      '--cp-link': '#edf77d', '--cp-warning': '#e6f16a', '--cp-panel': 'rgba(22, 36, 90, 0.8)', '--cp-panel-strong': 'rgba(22, 36, 90, 0.96)', '--cp-highlight': 'rgba(230, 241, 106, 0.16)',
      '--paper': '#111a3c', '--ink': '#f6f7fc', '--accent': '#e6f16a', '--button-ink': '#172553', '--line': '#33488f'
    }
  }
];

const colorwayBySlug = new Map(COLORWAY_OPTIONS.map((option) => [option.slug, option]));
const initialColorway = () => {
  const param = new URLSearchParams(window.location.search).get('colorway');
  if (colorwayBySlug.has(param)) return param;
  const match = [...document.body.classList].find((name) => name.startsWith('colorway-'));
  if (!match) return '';
  const slug = match.replace('colorway-', '');
  return colorwayBySlug.has(slug) ? slug : '';
};

function ensureStyle() {
  if (document.querySelector('[data-colorway-style]')) return;
  const style = document.createElement('style');
  style.setAttribute('data-colorway-style', '');
  style.textContent = `
.colorway-strip { background: var(--cp-surface, var(--paper, #fff)); color: var(--cp-text, var(--ink, #222)); border-bottom: 1px solid var(--cp-border, var(--line, #ddd)); font: 13px/1.4 "Segoe UI", Aptos, Calibri, Arial, sans-serif; }
.colorway-strip__inner { width: min(1280px, calc(100% - 40px)); min-height: 46px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; gap: 16px; }
.colorway-strip__label { font-weight: 750; white-space: nowrap; }
.colorway-strip__options { display: flex; align-items: center; justify-content: flex-end; gap: 8px; flex-wrap: wrap; }
.colorway-strip__button { display: inline-flex; align-items: center; gap: 8px; min-height: 34px; border: 1px solid var(--cp-border, var(--line, #ddd)); border-radius: 999px; padding: 5px 10px; background: transparent; color: inherit; font: inherit; font-weight: 650; cursor: pointer; }
.colorway-strip__button[aria-pressed="true"] { background: var(--cp-accent, var(--accent)); color: var(--cp-accent-fg, var(--button-ink)); border-color: var(--cp-accent, var(--accent)); }
.colorway-strip__swatches { display: inline-flex; gap: 2px; }
.colorway-strip__swatches span { width: 10px; height: 10px; border-radius: 50%; border: 1px solid rgba(0,0,0,.16); }
@media (max-width: 760px) {
  .colorway-strip__inner { align-items: flex-start; flex-direction: column; gap: 8px; padding: 8px 0; }
  .colorway-strip__options { justify-content: flex-start; }
  .colorway-strip__button { font-size: 12px; }
}`;
  document.head.append(style);
}

function renderBar() {
  if (document.querySelector('[data-colorway-bar]')) return;
  ensureStyle();
  const bar = document.createElement('div');
  bar.className = 'colorway-strip';
  bar.setAttribute('data-colorway-bar', '');
  bar.innerHTML = `<div class="colorway-strip__inner"><span class="colorway-strip__label">Colorways</span><div class="colorway-strip__options" role="group" aria-label="Choose a color combination">${COLORWAY_OPTIONS.map((option) => `<button type="button" class="colorway-strip__button" data-colorway-option="${option.slug}" aria-pressed="false"><span class="colorway-strip__swatches" aria-hidden="true"><span style="background:${option.light['--cp-bg']}"></span><span style="background:${option.light['--cp-surface-soft']}"></span><span style="background:${option.light['--cp-accent']}"></span></span><span>${option.name}</span></button>`).join('')}</div></div>`;
  const skip = document.querySelector('.skip');
  document.body.insertBefore(bar, skip?.nextSibling || document.body.firstChild);
  bar.addEventListener('click', (event) => {
    const button = event.target.closest('[data-colorway-option]');
    if (!button) return;
    applyColorway(button.dataset.colorwayOption, true);
  });
}

function syncColorwayLinks(slug) {
  document.querySelectorAll('a[href]').forEach((link) => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || /^(mailto|tel):/i.test(href)) return;
    const url = new URL(href, window.location.href);
    if (url.origin !== window.location.origin || !url.pathname.includes('/design-preview/')) return;
    if (slug) url.searchParams.set('colorway', slug);
    else url.searchParams.delete('colorway');
    link.href = url.href;
  });
}

function updateButtonState(slug) {
  document.querySelectorAll('[data-colorway-option]').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.colorwayOption === slug));
  });
}

function applyColorway(slug = initialColorway(), updateURL = false) {
  const option = colorwayBySlug.get(slug);
  if (!option) {
    document.documentElement.removeAttribute('data-colorway');
    updateButtonState('');
    syncColorwayLinks('');
    return;
  }
  const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-colorway', slug);
  Object.entries(option[theme]).forEach(([name, value]) => document.body.style.setProperty(name, value));
  updateButtonState(slug);
  syncColorwayLinks(slug);
  if (updateURL && window.location.protocol !== 'file:') {
    const url = new URL(window.location.href);
    url.searchParams.set('colorway', slug);
    window.history.replaceState(null, '', url);
  }
}

renderBar();
applyColorway();

new MutationObserver(() => applyColorway(document.documentElement.getAttribute('data-colorway') || initialColorway()))
  .observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
