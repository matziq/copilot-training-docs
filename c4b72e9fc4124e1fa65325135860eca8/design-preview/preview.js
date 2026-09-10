const menuButton = document.querySelector('[data-menu-button]');
const navigation = document.querySelector('[data-navigation]');

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
