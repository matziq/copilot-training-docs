const menuButton = document.querySelector('[data-menu-button]');
const navigation = document.querySelector('[data-navigation]');
const themeButton = document.querySelector('[data-theme-button]') || (() => {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'theme-button';
  button.setAttribute('data-theme-button', '');
  button.setAttribute('aria-label', 'Switch color theme');
  button.setAttribute('aria-pressed', 'false');
  button.innerHTML = '<span class="moon" aria-hidden="true">☾</span><span class="sun" aria-hidden="true">☀</span><span data-theme-label>Theme</span>';
  document.body.prepend(button);
  return button;
})();

function getPreferredTheme() {
  const param = new URLSearchParams(window.location.search).get('scoutTheme');
  return param || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
}

function syncThemeLinks() {
  const theme = document.documentElement.getAttribute('data-theme') || getPreferredTheme();
  document.documentElement.setAttribute('data-theme', theme);
  const currentURL = new URL(window.location.href);
  currentURL.searchParams.set('scoutTheme', theme);
  if (window.location.protocol !== 'file:') window.history.replaceState(null, '', currentURL);
  document.querySelectorAll('a[href]').forEach((link) => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || /^(mailto|tel):/i.test(href)) return;
    const url = new URL(href, window.location.href);
    if (url.origin !== window.location.origin || !url.pathname.includes('/design-preview/')) return;
    url.searchParams.set('scoutTheme', theme);
    link.href = url.href;
  });
  themeButton.hidden = false;
  themeButton.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
  themeButton.setAttribute('aria-pressed', String(theme === 'dark'));
  const label = themeButton.querySelector('[data-theme-label]');
  if (label) label.textContent = theme === 'dark' ? 'Dark' : 'Light';
}

if (!document.documentElement.getAttribute('data-theme')) {
  document.documentElement.setAttribute('data-theme', getPreferredTheme());
}

themeButton.addEventListener('click', () => {
  const nextTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', nextTheme);
  syncThemeLinks();
});

syncThemeLinks();

if (menuButton && navigation) {
  const closeMenu = () => {
    menuButton.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
    menuButton.textContent = 'Menu';
  };

  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(expanded));
    navigation.classList.toggle('is-open', expanded);
    menuButton.textContent = expanded ? 'Close' : 'Menu';
  });

  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menuButton.focus();
    }
  });
  window.matchMedia('(min-width: 761px)').addEventListener('change', closeMenu);
}

// The published schedule says 9 AM MST, not the unused legacy countdown's 8:30 AM.
document.querySelectorAll('[data-calendar]').forEach((button) => {
  button.addEventListener('click', () => {
    const calendar = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Mini-Cassia Turkey Trot//Homepage Concept//EN',
      'BEGIN:VEVENT',
      'UID:mctt-2026-5k@minicassiaturkeytrot.com',
      'DTSTAMP:20260910T000000Z',
      'DTSTART:20261126T160000Z',
      'SUMMARY:Mini-Cassia Turkey Trot 5K',
      'LOCATION:West Minico Middle School\\, 155 S 600 W\\, Paul\\, Idaho',
      'DESCRIPTION:Check-in starts at 8 AM MST. Race starts at 9 AM MST.',
      'URL:https://minicassiaturkeytrot.com/#schedule',
      'END:VEVENT',
      'END:VCALENDAR',
      ''
    ].join('\r\n');
    const url = URL.createObjectURL(new Blob([calendar], { type: 'text/calendar;charset=utf-8' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = 'mini-cassia-turkey-trot-2026.ics';
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    const status = document.querySelector('[data-calendar-status]');
    if (status) status.textContent = 'Calendar file downloaded. Open it to add the race.';
  });
});
