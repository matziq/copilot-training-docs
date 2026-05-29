/* ============================================================
   SITE NAV  (shared across every page in the Training Hub)
   - Injects a top navigation bar with topic links
   - Injects a dark-mode toggle (top right)
   - Auto-detects the site root prefix so it works at any depth
   - Self-contained styles so it works even on pages that
     don't load css/styles.css
   - Persists theme in localStorage
   ============================================================ */
(function () {
    'use strict';

    /* ---- Apply stored theme ASAP to limit FOUC ---- */
    try {
        var stored = localStorage.getItem('theme');
        var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        var theme = stored || (prefersDark ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', theme);
    } catch (e) { /* localStorage unavailable; ignore */ }

    /* ---- Detect root prefix ----
       Look for the script tag that loaded this file and walk back the
       path to find the site root. e.g. "../js/sitenav.js" => "../"
       Fallback: scan stylesheet hrefs for "css/styles.css".
    */
    function detectRoot() {
        var scripts = document.getElementsByTagName('script');
        for (var i = 0; i < scripts.length; i++) {
            var src = scripts[i].getAttribute('src') || '';
            var m = src.match(/^(.*?)js\/sitenav\.js(\?.*)?$/);
            if (m) return m[1] || './';
        }
        var links = document.getElementsByTagName('link');
        for (var j = 0; j < links.length; j++) {
            var href = links[j].getAttribute('href') || '';
            var m2 = href.match(/^(.*?)css\/styles\.css(\?.*)?$/);
            if (m2) return m2[1] || './';
        }
        return './';
    }
    var ROOT = detectRoot();

    /* ---- Topic nav definition ---- */
    var NAV_ITEMS = [
        { label: 'Home', href: ROOT + 'index.html', match: ['index.html', ''] },
        { label: 'Copilot Chat', href: ROOT + 'index.html#cat-copilot-chat', cat: 'copilot-chat' },
        { label: 'Agents', href: ROOT + 'index.html#cat-agents', cat: 'agents' },
        { label: 'Prompting', href: ROOT + 'index.html#cat-prompting', cat: 'prompting' },
        { label: 'M365 Copilot', href: ROOT + 'index.html#cat-m365-copilot', cat: 'm365-copilot' },
        { label: 'Exam Prep', href: ROOT + 'index.html#cat-exam-prep', cat: 'exam-prep' },
        { label: 'Trainer Docs', href: ROOT + 'trainerdocs.html', match: ['trainerdocs.html'] },
        { label: 'Customer Tools', href: ROOT + 'index.html#cat-customer-tools', cat: 'customer-tools' }
    ];

    /* ---- Self-contained styles (only applied if not already styled) ---- */
    var STYLES = [
        '.site-nav{position:sticky;top:0;z-index:90;background:var(--bg-card,#fff);border-bottom:1px solid var(--border-light,#e8ecf1);padding:0 1rem;display:flex;align-items:center;gap:.25rem;overflow-x:auto;-webkit-overflow-scrolling:touch;box-shadow:0 1px 3px rgba(0,0,0,.04);font-family:var(--font-sans,Inter,Segoe UI,system-ui,-apple-system,sans-serif)}',
        '.site-nav-brand{font-weight:700;color:var(--purple-deep,#3a1d6e);text-decoration:none;padding:.75rem .5rem;margin-right:.5rem;white-space:nowrap;font-size:.95rem;letter-spacing:.01em}',
        '.site-nav-brand:hover{text-decoration:none;color:var(--purple-mid,#5b2d9e)}',
        '.site-nav-links{display:flex;align-items:center;gap:.125rem;flex:1;min-width:0;overflow-x:auto;scrollbar-width:none}',
        '.site-nav-links::-webkit-scrollbar{display:none}',
        '.site-nav-link{display:inline-block;padding:.75rem .85rem;color:var(--text-secondary,#606c76);font-size:.85rem;font-weight:600;text-decoration:none;border-bottom:2px solid transparent;white-space:nowrap;transition:color .15s,border-color .15s}',
        '.site-nav-link:hover{color:var(--purple-mid,#5b2d9e);text-decoration:none}',
        '.site-nav-link.active{color:var(--purple-mid,#5b2d9e);border-bottom-color:var(--purple-mid,#5b2d9e)}',
        '.site-theme-toggle{flex-shrink:0;margin-left:auto;width:38px;height:38px;border-radius:50%;border:1px solid var(--border-light,#e8ecf1);background:var(--bg-card,#fff);color:var(--purple-mid,#5b2d9e);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:1.1rem;line-height:1;transition:background .15s,color .15s}',
        '.site-theme-toggle:hover{background:var(--purple-bg,#f3eefa)}',
        '.site-theme-toggle:focus-visible{outline:2px solid var(--purple-mid,#5b2d9e);outline-offset:2px}',
        '.site-theme-toggle .icon-sun{display:none}',
        ':root[data-theme="dark"] .site-theme-toggle .icon-sun{display:inline}',
        ':root[data-theme="dark"] .site-theme-toggle .icon-moon{display:none}',
        '/* When the legacy floating toggle exists on the same page, hide it (we use the in-nav one) */',
        '.site-nav ~ * .theme-toggle, body > .theme-toggle{display:none !important}',
        '@media print{.site-nav,.site-theme-toggle{display:none !important}}'
    ].join('');

    function injectStyles() {
        if (document.getElementById('site-nav-style')) return;
        var s = document.createElement('style');
        s.id = 'site-nav-style';
        s.textContent = STYLES;
        document.head.appendChild(s);
    }

    /* ---- Build the nav DOM ---- */
    function build() {
        if (document.querySelector('.site-nav')) return; // idempotent
        injectStyles();

        var nav = document.createElement('nav');
        nav.className = 'site-nav';
        nav.setAttribute('aria-label', 'Site');

        var brand = document.createElement('a');
        brand.className = 'site-nav-brand';
        brand.href = ROOT + 'index.html';
        brand.textContent = 'Training Hub';
        nav.appendChild(brand);

        var linksWrap = document.createElement('div');
        linksWrap.className = 'site-nav-links';

        // Determine which link should be marked active
        var path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
        var hash = (location.hash || '').toLowerCase();

        NAV_ITEMS.forEach(function (item) {
            var a = document.createElement('a');
            a.className = 'site-nav-link';
            a.href = item.href;
            a.textContent = item.label;

            var isActive = false;
            if (item.cat && hash === '#cat-' + item.cat) {
                isActive = true;
            } else if (item.match) {
                if (item.match.indexOf(path) !== -1) isActive = true;
                // Special-case: on a sub-folder index.html that isn't the hub, leave Home inactive
                if (item.label === 'Home' && path === 'index.html' && !atHubRoot()) {
                    isActive = false;
                }
            }
            if (isActive) a.classList.add('active');
            linksWrap.appendChild(a);
        });

        nav.appendChild(linksWrap);

        // Theme toggle button (sits at the right edge of the nav bar)
        var toggle = document.createElement('button');
        toggle.type = 'button';
        toggle.className = 'site-theme-toggle';
        toggle.setAttribute('aria-label', 'Toggle dark mode');
        toggle.setAttribute('title', 'Toggle dark mode');
        toggle.innerHTML = '<span class="icon-moon" aria-hidden="true">&#9790;</span><span class="icon-sun" aria-hidden="true">&#9728;</span>';
        toggle.addEventListener('click', function () {
            var current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
            var next = current === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', next);
            try { localStorage.setItem('theme', next); } catch (e) { /* ignore */ }
        });
        nav.appendChild(toggle);

        document.body.insertBefore(nav, document.body.firstChild);

        // Remove any legacy floating .theme-toggle that main.v3.js may have injected
        document.querySelectorAll('body > .theme-toggle').forEach(function (el) { el.remove(); });
    }

    function atHubRoot() {
        // Heuristic: hub root is when the page is the file index.html or trainerdocs.html
        // at depth 0 (i.e. ROOT === './' or '').
        return ROOT === './' || ROOT === '';
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', build);
    } else {
        build();
    }
})();
