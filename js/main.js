/* ============================================================
   INTERACTIVE BEHAVIOURS
   - Expand / Collapse cards
   - Copy Prompt to clipboard
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

    /* ---- Copy Prompt ---- */
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const promptBox = btn.closest('.prompt-block').querySelector('.prompt-box');
            if (!promptBox) return;
            const text = promptBox.textContent.trim();
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
