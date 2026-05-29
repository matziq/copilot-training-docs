/* ============================================================
   INTERACTIVE BEHAVIORS  v3
   - Expand / Collapse cards
   - Copy Prompt to clipboard (whitespace-normalized)
   - Sticky quick-nav: auto-expand target section on click
   - Dark / Light theme toggle (persisted in localStorage)
   ============================================================ */

/* ---- Theme: applied as early as possible to limit FOUC ---- */
(function applyStoredTheme() {
    try {
        const stored = localStorage.getItem('theme');
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        const theme = stored || (prefersDark ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', theme);
    } catch (e) {
        /* localStorage may be unavailable (e.g. file://); fall back silently */
    }
})();

document.addEventListener('DOMContentLoaded', () => {

    /* ---- Expand / Collapse individual cards ---- */
    document.querySelectorAll('.section-card-header').forEach(header => {
        header.addEventListener('click', () => {
            header.closest('.section-card').classList.toggle('collapsed');
        });
    });

    /* ---- Expand All / Collapse All buttons ---- */
    document.querySelectorAll('[data-action="expand-all"]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.section-card').forEach(c => c.classList.remove('collapsed'));
        });
    });
    document.querySelectorAll('[data-action="collapse-all"]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.section-card').forEach(c => c.classList.add('collapsed'));
        });
    });

    /* ---- Quick-nav: auto-expand target section on click ---- */
    document.querySelectorAll('.quick-nav a').forEach(a => {
        a.addEventListener('click', () => {
            const id = a.getAttribute('href');
            if (!id || !id.startsWith('#')) return;
            const target = document.getElementById(id.slice(1));
            if (!target) return;
            // Expand all collapsed section-cards within the target
            target.querySelectorAll('.section-card.collapsed').forEach(c => c.classList.remove('collapsed'));
            // If the target itself is a section-card, expand it
            if (target.classList.contains('section-card') && target.classList.contains('collapsed')) {
                target.classList.remove('collapsed');
            }
        });
    });

    /* ---- Copy Prompt ---- */
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const promptBox = btn.closest('.prompt-block').querySelector('.prompt-box');
            if (!promptBox) return;
            const text = promptBox.textContent.replace(/\s+/g, ' ').trim();
            navigator.clipboard.writeText(text).then(() => {
                btn.classList.add('copied');
                const original = btn.innerHTML;
                btn.innerHTML = '&#10003; Copied!';
                setTimeout(() => {
                    btn.classList.remove('copied');
                    btn.innerHTML = original;
                }, 2000);
            });
        });
    });

    /* ---- Theme toggle (floating button) ----
       Skipped when sitenav.js is loaded — sitenav provides an in-nav toggle. */
    if (!document.querySelector('.theme-toggle') &&
        !document.querySelector('.site-theme-toggle') &&
        !document.getElementById('site-nav-style')) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'theme-toggle';
        btn.setAttribute('aria-label', 'Toggle dark mode');
        btn.setAttribute('title', 'Toggle dark mode');
        btn.innerHTML = '<span class="icon-moon" aria-hidden="true">&#9790;</span><span class="icon-sun" aria-hidden="true">&#9728;</span>';
        btn.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
            const next = current === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', next);
            try { localStorage.setItem('theme', next); } catch (e) { /* ignore */ }
        });
        document.body.appendChild(btn);
    }

});

