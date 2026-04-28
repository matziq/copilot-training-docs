/* ============================================================
   INTERACTIVE BEHAVIORS  v3
   - Expand / Collapse cards
   - Copy Prompt to clipboard (whitespace-normalized)
   - Sticky quick-nav: auto-expand target section on click
   ============================================================ */

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

});
