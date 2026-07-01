(function () {
  "use strict";

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }
    return Promise.reject(new Error("Clipboard API unavailable"));
  }

  function selectText(codeEl) {
    var range = document.createRange();
    range.selectNodeContents(codeEl);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  }

  document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll(".copy-button");

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var card = btn.closest(".prompt-card");
        if (!card) return;
        var code = card.querySelector("code");
        if (!code) return;

        var original = btn.getAttribute("data-label") || btn.textContent;
        btn.setAttribute("data-label", original);

        copyText(code.innerText)
          .then(function () {
            btn.textContent = "Copied";
            btn.classList.add("copied");
            setTimeout(function () {
              btn.textContent = original;
              btn.classList.remove("copied");
            }, 1600);
          })
          .catch(function () {
            selectText(code);
            btn.textContent = "Select text";
            setTimeout(function () {
              btn.textContent = original;
            }, 1600);
          });
      });
    });
  });
})();
