(function () {
  "use strict";

  function applyTheme(theme) {
    var root = document.documentElement;
    var btn = document.getElementById("theme-toggle");
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
    if (btn) {
      var isDark = theme === "dark";
      var icon = btn.querySelector(".tt-icon");
      var label = btn.querySelector(".tt-label");
      if (icon) icon.textContent = isDark ? "☀️" : "🌙";
      if (label) label.textContent = isDark ? "Light" : "Dark";
      btn.setAttribute("aria-pressed", String(isDark));
      btn.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
    }
  }

  function initTheme() {
    var stored = null;
    try { stored = localStorage.getItem("workshop-theme"); } catch (e) {}
    if (!stored) {
      var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      stored = prefersDark ? "dark" : "light";
    }
    applyTheme(stored);

    var btn = document.getElementById("theme-toggle");
    if (btn) {
      btn.addEventListener("click", function () {
        var isDark = document.documentElement.getAttribute("data-theme") === "dark";
        var next = isDark ? "light" : "dark";
        applyTheme(next);
        try { localStorage.setItem("workshop-theme", next); } catch (e) {}
      });
    }
  }

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
    initTheme();
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
