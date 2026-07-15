// Theme cycling: Spring (default) -> Summer -> Fall -> Dark -> Spring ...
const THEME_STORAGE_KEY = 'mybookcentral-theme';
const THEMES = [
  { id: 'spring', label: 'Spring', icon: '🌱' },
  { id: 'summer', label: 'Summer', icon: '☀️' },
  { id: 'fall', label: 'Fall', icon: '🍂' },
  { id: 'dark', label: 'Dark', icon: '🌙' },
];

const themeToggle = document.querySelector('[data-theme-toggle]');
const themeIcon = document.querySelector('[data-theme-icon]');
const themeLabel = document.querySelector('[data-theme-label]');

function applyTheme(themeId) {
  const theme = THEMES.find((t) => t.id === themeId) || THEMES[0];
  if (theme.id === 'spring') {
    document.documentElement.removeAttribute('data-theme');
  } else {
    document.documentElement.setAttribute('data-theme', theme.id);
  }
  if (themeIcon) themeIcon.textContent = theme.icon;
  if (themeLabel) themeLabel.textContent = theme.label;
  if (themeToggle) themeToggle.setAttribute('aria-label', `Change site theme (currently ${theme.label})`);
}

function getStoredTheme() {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY);
  } catch (err) {
    return null;
  }
}

function storeTheme(themeId) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, themeId);
  } catch (err) {
    // Ignore write errors (e.g., private browsing mode).
  }
}

applyTheme(getStoredTheme() || 'spring');

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'spring';
    const currentIndex = THEMES.findIndex((t) => t.id === current);
    const next = THEMES[(currentIndex + 1) % THEMES.length];
    applyTheme(next.id);
    storeTheme(next.id);
  });
}

const navToggle = document.querySelector('.nav-toggle');

const navLinks = document.querySelector('.nav-links');

const navAnchors = navLinks ? Array.from(navLinks.querySelectorAll('a[href^="#"]')) : [];

const ACTIVE_NAV_CLASS = 'nav-link-active';

// When the user clicks a nav item, the page smooth-scrolls. During that scroll,
// the IntersectionObserver may briefly report the previous section (e.g., #contact)
// as most visible and override the clicked highlight. We lock observer updates for
// a short window to keep the UI stable.
let suppressScrollSpyUntil = 0;
let lastRequestedHash = '';

const now = () => Date.now();

function lockScrollSpy(ms) {
  suppressScrollSpyUntil = Math.max(suppressScrollSpyUntil, now() + ms);
}

const yearSlot = document.querySelector('[data-year]');



if (navToggle && navLinks) {

  navToggle.addEventListener('click', () => {

    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';

    navToggle.setAttribute('aria-expanded', String(!isExpanded));

    navLinks.classList.toggle('open');

  });



  navLinks.addEventListener('click', (event) => {

    if (event.target.matches('a')) {

      // If a nav anchor link was clicked, set active state immediately.
      const href = event.target.getAttribute('href') || '';
      if (href.startsWith('#')) {
        lastRequestedHash = href;
        lockScrollSpy(900);
        setActiveNavByHash(href);
      }

      navLinks.classList.remove('open');

      navToggle.setAttribute('aria-expanded', 'false');

    }

  });

}



function setActiveNavByHash(hash) {

  if (!hash || !hash.startsWith('#') || navAnchors.length === 0) {
    return;
  }

  navAnchors.forEach((link) => {
    const isActive = link.getAttribute('href') === hash;
    link.classList.toggle(ACTIVE_NAV_CLASS, isActive);
    // Keep aria-current for a11y (existing CSS underline uses it too)
    if (isActive) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });

}



function setupScrollSpy() {

  if (navAnchors.length === 0) {
    return;
  }

  // Map valid section IDs from nav links.
  const sectionIds = navAnchors
    .map((a) => a.getAttribute('href'))
    .filter((href) => typeof href === 'string' && href.startsWith('#') && href.length > 1)
    .map((href) => href.slice(1));

  const sections = sectionIds
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  if (sections.length === 0) {
    return;
  }

  // Prefer intersection observer; fall back to a lightweight scroll handler.
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        if (now() < suppressScrollSpyUntil) {
          return;
        }

        // Pick the most visible intersecting section.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0));

        if (visible.length) {
          setActiveNavByHash(`#${visible[0].target.id}`);
        }
      },
      {
        // Account for the sticky header; this biases activation to the area below the header.
        root: null,
        threshold: [0.2, 0.35, 0.5, 0.65],
        rootMargin: '-30% 0px -55% 0px',
      }
    );

    sections.forEach((section) => observer.observe(section));
  } else {
    const onScroll = () => {
      if (now() < suppressScrollSpyUntil) {
        return;
      }

      const headerOffset = 110;
      const scrollPos = window.scrollY + headerOffset;

      let activeSection = sections[0];
      for (const section of sections) {
        if (section.offsetTop <= scrollPos) {
          activeSection = section;
        }
      }

      if (activeSection && activeSection.id) {
        setActiveNavByHash(`#${activeSection.id}`);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // If the hash changes (back/forward buttons or manual edits), respect it and
  // briefly lock the scroll spy to avoid flicker.
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash;
    if (hash && document.getElementById(hash.slice(1))) {
      lastRequestedHash = hash;
      lockScrollSpy(700);
      setActiveNavByHash(hash);
    }
  });

  // Set initial active state based on the URL hash, otherwise default to #home if it exists.
  const initialHash = window.location.hash;
  if (initialHash && document.getElementById(initialHash.slice(1))) {
    setActiveNavByHash(initialHash);
  } else if (document.getElementById('home')) {
    setActiveNavByHash('#home');
  }

}



setupScrollSpy();



if (yearSlot) {

  yearSlot.textContent = new Date().getFullYear();

}



const animateItems = document.querySelectorAll('[data-animate]');



if ('IntersectionObserver' in window && animateItems.length) {

  const observer = new IntersectionObserver(

    (entries, obs) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add('visible');

          obs.unobserve(entry.target);

        }

      });

    },

    {

      threshold: 0.2,

      rootMargin: '0px 0px -40px 0px',

    }

  );



  animateItems.forEach((item) => observer.observe(item));

} else {

  animateItems.forEach((item) => item.classList.add('visible'));

}

const contactForms = document.querySelectorAll('[data-contact-form]');

function buildMailtoLink(payload) {
  const to = 'fdml@pmt.org';
  const subject = `Website message from ${payload.name || 'Visitor'}`;
  const lines = [
    `Name: ${payload.name || ''}`,
    `Email: ${payload.email || ''}`,
    payload.phone ? `Phone: ${payload.phone}` : '',
    '',
    'Message:',
    payload.message || '',
  ].filter(Boolean);

  const body = lines.join('\n');

  // Use URLSearchParams to encode safely.
  const params = new URLSearchParams({
    subject,
    body,
  });

  return `mailto:${encodeURIComponent(to)}?${params.toString()}`;
}

if (contactForms.length) {
  contactForms.forEach((contactForm) => {
    const statusField = contactForm.querySelector('[data-contact-status]');
    const submitButton = contactForm.querySelector('[data-contact-submit]');

    if (!statusField || !submitButton) {
      return;
    }

    const setStatusMessage = (message, state) => {
      statusField.textContent = message;
      statusField.dataset.state = state;
    };

    const endpoint = contactForm.getAttribute('action') || '/api/contact';

    contactForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const formData = new FormData(contactForm);
      const payload = Object.fromEntries(formData.entries());

      Object.keys(payload).forEach((key) => {
        if (typeof payload[key] === 'string') {
          payload[key] = payload[key].trim();
        }
        if (payload[key] === '') {
          delete payload[key];
        }
      });

      submitButton.disabled = true;
      submitButton.classList.add('loading');
      setStatusMessage('Sending…', 'pending');

      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        // The API generally returns JSON, but when something goes wrong (proxy, server error,
        // misconfigured response) we might get plain text/HTML. Handle both.
        const rawText = await response.text();
        const body = (() => {
          try {
            return rawText ? JSON.parse(rawText) : {};
          } catch {
            return { detail: rawText };
          }
        })();

        if (!response.ok) {
          const errorMsg = typeof body.detail === 'string'
            ? body.detail
            : 'We could not send your message. Please try again.';
          throw new Error(errorMsg);
        }

        contactForm.reset();
        setStatusMessage(body.message || "Thanks for your message! We'll be in touch soon.", 'success');
      } catch (error) {
        // Common local-dev case: serving via `python -m http.server`.
        // That server doesn't support POST and returns an HTML 501 page.
        const msg = error instanceof Error ? error.message : '';
        const looksLikeUnsupportedPost = /Unsupported method \('POST'\)/i.test(msg) || /Error code:\s*501/i.test(msg);

        if (looksLikeUnsupportedPost) {
          const mailto = buildMailtoLink(payload);
          // Open the user's email client with a pre-filled message.
          window.location.href = mailto;
          setStatusMessage('Opening your email app to send the message…', 'success');
          return;
        }

        const errorMsg = msg || 'Something went wrong. Please try again later.';
        setStatusMessage(errorMsg, 'error');
      } finally {
        submitButton.disabled = false;
        submitButton.classList.remove('loading');
      }
    });
  });
}

