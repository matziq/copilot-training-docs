const themeButton = document.querySelector('[data-theme-button]');

function syncThemeLinks() {
  const theme = document.documentElement.getAttribute('data-theme');
  const currentURL = new URL(window.location.href);
  currentURL.searchParams.set('scoutTheme', theme);
  if (window.location.protocol !== 'file:') window.history.replaceState(null, '', currentURL);
  document.querySelectorAll('a[data-theme-link]').forEach((link) => {
    const url = new URL(link.getAttribute('href'), window.location.href);
    url.searchParams.set('scoutTheme', theme);
    link.href = url.href;
  });
  if (themeButton) {
    themeButton.hidden = false;
    themeButton.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
    themeButton.setAttribute('aria-pressed', String(theme === 'dark'));
  }
}

if (themeButton) {
  themeButton.addEventListener('click', () => {
    const nextTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', nextTheme);
    syncThemeLinks();
  });
}
syncThemeLinks();

const faqSearch = document.querySelector('[data-faq-search]');
if (faqSearch) {
  const field = faqSearch.querySelector('input');
  const items = [...document.querySelectorAll('[data-faq-item]')];
  const count = document.querySelector('[data-faq-count]');
  const empty = document.querySelector('[data-no-results]');
  const filterQuestions = () => {
    const query = field.value.trim().toLocaleLowerCase('en-US');
    let matches = 0;
    items.forEach((item) => {
      const match = item.textContent.toLocaleLowerCase('en-US').includes(query);
      item.hidden = !match;
      if (match) matches += 1;
    });
    count.textContent = `${matches} ${matches === 1 ? 'question' : 'questions'}${query ? ' found' : ' available'}`;
    empty.hidden = matches > 0;
  };
  faqSearch.hidden = false;
  field.addEventListener('input', filterQuestions);
  document.querySelector('[data-clear-search]').addEventListener('click', () => {
    field.value = '';
    filterQuestions();
    field.focus();
  });
  filterQuestions();
}

const checklist = document.querySelector('[data-checklist]');
if (checklist) {
  const inputs = [...checklist.querySelectorAll('input[type="checkbox"]')];
  const status = checklist.querySelector('[role="status"]');
  const updateChecklist = () => {
    status.textContent = `${inputs.filter((input) => input.checked).length} of ${inputs.length} ready. This checklist is not saved.`;
  };
  checklist.addEventListener('change', updateChecklist);
  updateChecklist();
}

const dialog = document.querySelector('[data-photo-dialog]');
const photos = [...document.querySelectorAll('[data-photo-open]')];
if (dialog && photos.length) {
  const image = dialog.querySelector('img');
  const caption = dialog.querySelector('[data-photo-caption]');
  const count = dialog.querySelector('[data-photo-count]');
  let selected = 0;
  const showPhoto = (index) => {
    selected = (index + photos.length) % photos.length;
    const source = photos[selected].querySelector('img');
    image.src = source.src;
    image.alt = source.alt;
    caption.textContent = photos[selected].dataset.caption;
    count.textContent = `${selected + 1} of ${photos.length}`;
  };
  photos.forEach((button, index) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      showPhoto(index);
      dialog.showModal();
    });
  });
  dialog.querySelector('[data-photo-close]').addEventListener('click', () => dialog.close());
  dialog.querySelector('[data-photo-previous]').addEventListener('click', () => showPhoto(selected - 1));
  dialog.querySelector('[data-photo-next]').addEventListener('click', () => showPhoto(selected + 1));
  dialog.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      showPhoto(selected + (event.key === 'ArrowLeft' ? -1 : 1));
    }
  });
}
