/* ============================================================
   ACT Prep — Alina  |  shared app script
   ============================================================ */
(function (global) {
    "use strict";

    var ACT = global.ACT = global.ACT || {};

    /* ---------- core facts ---------- */
    ACT.TEST_DATE = new Date(2026, 8, 19, 8, 0, 0);   // Sat Sep 19, 2026, 8:00 AM
    ACT.PLAN_START = new Date(2026, 7, 24, 0, 0, 0);  // Mon Aug 24, 2026 = Day 1

    ACT.baseline = { english: 28, math: 24, reading: 26, science: 26, writing: 8, composite: 26 };
    ACT.target = { english: 30, math: 28, reading: 28, science: 27, writing: 10, composite: 29 };
    ACT.stretch = { english: 31, math: 30, reading: 29, science: 28, writing: 10, composite: 30 };

    ACT.SECTIONS = [
        { id: "english", name: "English", q: 50, min: 35, inComposite: true },
        { id: "math", name: "Mathematics", q: 45, min: 50, inComposite: true },
        { id: "reading", name: "Reading", q: 36, min: 40, inComposite: true },
        { id: "science", name: "Science", q: 40, min: 40, inComposite: false }
    ];

    /* ---------- raw -> scale score estimation ----------
       The ACT has not published official raw-score conversion tables for the
       Enhanced format, so these curves are modeled on the percent-correct
       thresholds of released ACT tests and rescaled to the new question counts.
       Treat the output as a close estimate, not an official score.          */
    var CURVES = {
        english: [100, 96, 94, 92, 89, 87.5, 85, 82.5, 80, 77, 74.5, 70.5, 68, 64, 60, 57, 54.5, 50.5, 48, 42.5, 38.5, 36, 33, 30.5, 26.5, 24, 20, 17, 14.5, 12, 10, 8, 6, 4, 2, 0],
        math: [100, 96.5, 95, 91.5, 88, 85, 81.5, 78, 75, 71.5, 68, 63, 60, 56.5, 53, 50, 46.5, 43, 40, 35, 31.5, 26.5, 21.5, 18, 13, 11.5, 8, 6.5, 5.5, 4.5, 3.5, 3, 2.5, 2, 1, 0],
        reading: [100, 97.5, 95, 92.5, 90, 87.5, 85, 82.5, 80, 77.5, 75, 72.5, 70, 67.5, 62.5, 60, 55, 52.5, 47.5, 45, 40, 37.5, 32.5, 30, 25, 20, 17.5, 15, 12.5, 10, 8, 6, 4, 3, 1.5, 0],
        science: [100, 97.5, 95, 92.5, 90, 87.5, 85, 82.5, 80, 77.5, 75, 72.5, 70, 65, 62.5, 57.5, 52.5, 47.5, 42.5, 40, 35, 32.5, 30, 27.5, 25, 22.5, 20, 17, 14, 11, 9, 7, 5, 3, 1.5, 0]
    };

    // CURVES arrays run from scale 36 down to scale 1.
    ACT.rawToScale = function (sectionId, raw, total) {
        var curve = CURVES[sectionId];
        if (!curve || !total) return 1;
        var pct = (raw / total) * 100;
        for (var i = 0; i < curve.length; i++) {
            if (pct >= curve[i]) return 36 - i;
        }
        return 1;
    };

    ACT.composite = function (scores) {
        var parts = [], k, keys = ["english", "math", "reading"];
        for (var i = 0; i < keys.length; i++) {
            k = keys[i];
            if (typeof scores[k] === "number" && scores[k] > 0) parts.push(scores[k]);
        }
        if (!parts.length) return null;
        var sum = 0;
        for (var j = 0; j < parts.length; j++) sum += parts[j];
        return Math.round(sum / parts.length);
    };

    /* ---------- dates ---------- */
    function startOfDay(d) { return new Date(d.getFullYear(), d.getMonth(), d.getDate()); }

    ACT.daysLeft = function () {
        var ms = startOfDay(ACT.TEST_DATE) - startOfDay(new Date());
        return Math.max(0, Math.round(ms / 86400000));
    };

    ACT.currentPlanDay = function () {
        var ms = startOfDay(new Date()) - startOfDay(ACT.PLAN_START);
        return Math.round(ms / 86400000) + 1; // Day 1 = Aug 24
    };

    ACT.dateForDay = function (n) {
        var d = new Date(ACT.PLAN_START.getTime());
        d.setDate(d.getDate() + (n - 1));
        return d;
    };

    var DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var MONS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    ACT.fmtDate = function (d) { return DAYS[d.getDay()] + ", " + MONS[d.getMonth()] + " " + d.getDate(); };
    ACT.fmtShort = function (d) { return MONS[d.getMonth()] + " " + d.getDate(); };
    ACT.dayName = function (d) { return DAYS[d.getDay()]; };

    ACT.fmtClock = function (totalSeconds) {
        var s = Math.max(0, Math.round(totalSeconds));
        var m = Math.floor(s / 60);
        var r = s % 60;
        return m + ":" + (r < 10 ? "0" : "") + r;
    };

    /* ---------- storage ---------- */
    var PREFIX = "actprep:";
    ACT.store = {
        get: function (key, fallback) {
            try {
                var v = global.localStorage.getItem(PREFIX + key);
                return v === null ? fallback : JSON.parse(v);
            } catch (e) { return fallback; }
        },
        set: function (key, value) {
            try { global.localStorage.setItem(PREFIX + key, JSON.stringify(value)); return true; }
            catch (e) { return false; }
        },
        remove: function (key) {
            try { global.localStorage.removeItem(PREFIX + key); } catch (e) { /* ignore */ }
        },
        keys: function () {
            var out = [];
            try {
                for (var i = 0; i < global.localStorage.length; i++) {
                    var k = global.localStorage.key(i);
                    if (k && k.indexOf(PREFIX) === 0) out.push(k.slice(PREFIX.length));
                }
            } catch (e) { /* ignore */ }
            return out;
        }
    };

    /* ---------- theme ---------- */
    ACT.initTheme = function () {
        var saved = ACT.store.get("theme", null);
        var prefersDark = global.matchMedia && global.matchMedia("(prefers-color-scheme: dark)").matches;
        var theme = saved || (prefersDark ? "dark" : "light");
        document.documentElement.setAttribute("data-theme", theme);
    };

    ACT.toggleTheme = function () {
        var cur = document.documentElement.getAttribute("data-theme");
        var next = cur === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", next);
        ACT.store.set("theme", next);
        var btn = document.getElementById("themeBtn");
        if (btn) {
            btn.textContent = next === "dark" ? "\u2600" : "\u263D";
            btn.setAttribute("aria-label", next === "dark" ? "Switch to light mode" : "Switch to dark mode");
        }
    };

    /* ---------- navigation ---------- */
    var NAV = [
        { href: "index.html", label: "Home" },
        { href: "plan.html", label: "26-Day Plan" },
        { href: "math.html", label: "Math" },
        { href: "english.html", label: "English" },
        { href: "reading.html", label: "Reading" },
        { href: "science.html", label: "Science" },
        { href: "writing.html", label: "Writing" },
        { href: "drills.html", label: "Drills" },
        { href: "tests.html", label: "Practice Tests" },
        { href: "tools.html", label: "Tools" }
    ];

    function currentFile() {
        var p = global.location.pathname.split("/").pop();
        return (!p || p === "") ? "index.html" : p;
    }

    ACT.renderTopbar = function () {
        var host = document.getElementById("topbar");
        if (!host) return;
        var here = currentFile();
        var links = "";
        for (var i = 0; i < NAV.length; i++) {
            var isActive = NAV[i].href === here ||
                (here.indexOf("practice-test") === 0 && NAV[i].href === "tests.html");
            links += '<a href="' + NAV[i].href + '"' + (isActive ? ' class="active" aria-current="page"' : "") + ">" +
                NAV[i].label + "</a>";
        }
        var left = ACT.daysLeft();
        var pill = '<span class="countdown-pill" title="Test day: Saturday, September 19, 2026">' +
            "<b>" + left + "</b> day" + (left === 1 ? "" : "s") + " left</span>";
        var isDark = document.documentElement.getAttribute("data-theme") === "dark";

        host.className = "topbar";
        host.innerHTML =
            '<div class="topbar-inner">' +
            '<a class="brand" href="index.html"><span class="brand-mark">ACT</span>' +
            '<span>Alina&rsquo;s ACT Plan <span class="brand-sub">Sep 19</span></span></a>' +
            '<nav class="nav" id="mainNav" aria-label="Main">' + links + "</nav>" +
            '<div style="margin-left:auto;display:flex;align-items:center;gap:.5rem">' + pill +
            '<button class="icon-btn" id="themeBtn" type="button" aria-label="' +
            (isDark ? "Switch to light mode" : "Switch to dark mode") + '">' + (isDark ? "\u2600" : "\u263D") + "</button>" +
            '<button class="icon-btn nav-toggle" id="navBtn" type="button" aria-label="Toggle menu" aria-expanded="false">\u2261</button>' +
            "</div></div>";

        document.getElementById("themeBtn").addEventListener("click", ACT.toggleTheme);
        var navBtn = document.getElementById("navBtn");
        navBtn.addEventListener("click", function () {
            var nav = document.getElementById("mainNav");
            var open = nav.classList.toggle("open");
            navBtn.setAttribute("aria-expanded", open ? "true" : "false");
        });
    };

    ACT.renderFooter = function () {
        var host = document.getElementById("footer");
        if (!host) return;
        host.className = "footer";
        host.innerHTML = '<div class="wrap">' +
            "<p>Built for Alina &middot; Enhanced ACT, Saturday September 19, 2026. " +
            "All passages, questions, and data sets on this site are original practice material.</p>" +
            '<p class="faint">Scale scores are estimates modeled on released ACT curves and rescaled to the ' +
            "Enhanced format. They are not official ACT scores. Your progress is saved in this browser only.</p>" +
            "</div>";
    };

    /* ---------- toast ---------- */
    var toastEl = null, toastTimer = null;
    ACT.toast = function (msg, ms) {
        if (!toastEl) {
            toastEl = document.createElement("div");
            toastEl.className = "toast";
            toastEl.setAttribute("role", "status");
            document.body.appendChild(toastEl);
        }
        toastEl.textContent = msg;
        // force reflow so the transition retriggers
        void toastEl.offsetWidth;
        toastEl.classList.add("show");
        global.clearTimeout(toastTimer);
        toastTimer = global.setTimeout(function () { toastEl.classList.remove("show"); }, ms || 2200);
    };

    /* ---------- meters ---------- */
    ACT.fillMeter = function (el, pct) {
        if (!el) return;
        var bar = el.tagName === "I" ? el : el.querySelector("i");
        if (!bar) return;
        var v = Math.max(0, Math.min(100, pct)) / 100;
        global.requestAnimationFrame(function () { bar.style.transform = "scaleX(" + v + ")"; });
    };

    ACT.autoFillMeters = function (root) {
        var nodes = (root || document).querySelectorAll("[data-pct]");
        for (var i = 0; i < nodes.length; i++) {
            ACT.fillMeter(nodes[i], parseFloat(nodes[i].getAttribute("data-pct")) || 0);
        }
    };

    /* ---------- persistent checkboxes ---------- */
    ACT.bindPersistentChecks = function (storeKey, root) {
        var state = ACT.store.get(storeKey, {});
        var boxes = (root || document).querySelectorAll('input[type="checkbox"][data-key]');
        for (var i = 0; i < boxes.length; i++) {
            (function (box) {
                var k = box.getAttribute("data-key");
                if (state[k]) box.checked = true;
                box.addEventListener("change", function () {
                    var s = ACT.store.get(storeKey, {});
                    if (box.checked) { s[k] = 1; } else { delete s[k]; }
                    ACT.store.set(storeKey, s);
                    if (typeof ACT.onCheckChange === "function") ACT.onCheckChange(s);
                });
            })(boxes[i]);
        }
        return state;
    };

    /* ---------- misc helpers ---------- */
    ACT.escapeHtml = function (s) {
        return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    };

    // ACT answer letters: odd-numbered questions use A-D, even use F-J.
    ACT.letters = function (n) {
        return (n % 2 === 1) ? ["A", "B", "C", "D"] : ["F", "G", "H", "J"];
    };

    ACT.pluralize = function (n, word) { return n + " " + word + (n === 1 ? "" : "s"); };

    /* ---------- boot ---------- */
    ACT.initTheme();
    document.addEventListener("DOMContentLoaded", function () {
        ACT.renderTopbar();
        ACT.renderFooter();
        ACT.autoFillMeters(document);
    });

})(window);
