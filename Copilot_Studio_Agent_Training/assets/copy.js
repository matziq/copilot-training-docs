// Attach copy handlers to every .copy-btn on the page.
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".copy-btn").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const targetId = btn.getAttribute("data-target");
      const pre = document.getElementById(targetId);
      if (!pre) return;
      try {
        await navigator.clipboard.writeText(pre.innerText);
        const original = btn.textContent;
        btn.textContent = "Copied!";
        btn.classList.add("copied");
        setTimeout(() => {
          btn.textContent = original;
          btn.classList.remove("copied");
        }, 1600);
      } catch (e) {
        // Fallback: select the text so the user can copy manually
        const range = document.createRange();
        range.selectNodeContents(pre);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
      }
    });
  });
});
