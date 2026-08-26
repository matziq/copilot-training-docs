/* ============================================================
   CompTIA A+ Prep — Brooks  |  shared app script
   ============================================================ */
(function (global) {
    "use strict";

    var AP = global.AP = global.AP || {};

    /* ---------- core facts ---------- */
    AP.EXAM_DATE = new Date(2026, 8, 4, 8, 0, 0);    // Fri Sep 4, 2026
    AP.PLAN_START = new Date(2026, 7, 26, 0, 0, 0);  // Wed Aug 26, 2026 = Day 1
    AP.PLAN_DAYS = 9;

    AP.PASS = { core1: 675, core2: 700 };
    AP.SCALE_MIN = 100;
    AP.SCALE_MAX = 900;

    /* Core 1 (220-1101) domains and their published exam weights. */
    AP.CORE1 = [
        { id: "mobile", name: "Mobile Devices", weight: 13, num: "1.0" },
        { id: "networking", name: "Networking", weight: 23, num: "2.0" },
        { id: "hardware", name: "Hardware", weight: 25, num: "3.0" },
        { id: "cloud", name: "Virtualization and Cloud Computing", weight: 11, num: "4.0" },
        { id: "troubleshooting", name: "Hardware and Network Troubleshooting", weight: 28, num: "5.0" }
    ];

    /* Core 2 (220-1102) domains. */
    AP.CORE2 = [
        { id: "os", name: "Operating Systems", weight: 28, num: "1.0" },
        { id: "security", name: "Security", weight: 28, num: "2.0" },
        { id: "swtrouble", name: "Software Troubleshooting", weight: 23, num: "3.0" },
        { id: "procedures", name: "Operational Procedures", weight: 21, num: "4.0" }
    ];

    AP.domainsFor = function (core) { return core === "core2" ? AP.CORE2 : AP.CORE1; };

    /* ---------- raw percent -> scaled score ----------
       CompTIA does not publish its raw-to-scaled conversion, and the real exam is
       adaptive in difficulty weighting. This curve is anchored on the two facts
       that are public: the 100-900 range, and the 675 (Core 1) / 700 (Core 2)
       passing marks. Treat the output as a readiness estimate, not a score.   */
    var CURVE = [
        [0, 100], [10, 175], [20, 250], [30, 330], [40, 410], [50, 490],
        [60, 570], [65, 615], [70, 660], [72, 675], [75, 700], [80, 745],
        [85, 785], [90, 825], [95, 865], [100, 900]
    ];

    AP.pctToScaled = function (pct) {
        var p = Math.max(0, Math.min(100, pct));
        for (var i = 1; i < CURVE.length; i++) {
            if (p <= CURVE[i][0]) {
                var lo = CURVE[i - 1], hi = CURVE[i];
                var span = hi[0] - lo[0];
                var t = span === 0 ? 0 : (p - lo[0]) / span;
                return Math.round(lo[1] + t * (hi[1] - lo[1]));
            }
        }
        return AP.SCALE_MAX;
    };

    AP.rawToScaled = function (right, total) {
        if (!total) return AP.SCALE_MIN;
        return AP.pctToScaled((right / total) * 100);
    };

    AP.passMark = function (core) { return AP.PASS[core === "core2" ? "core2" : "core1"]; };

    // The percent-correct that lands on the passing mark for each exam.
    AP.passPct = function (core) { return core === "core2" ? 75 : 72; };

    // How many more correct answers a run needs to reach the passing mark.
    AP.correctNeeded = function (core, total) {
        return Math.ceil(total * AP.passPct(core) / 100);
    };

    AP.verdict = function (scaled, core) {
        var pass = AP.passMark(core);
        if (scaled >= pass + 75) return { label: "Comfortably passing", cls: "good" };
        if (scaled >= pass) return { label: "Passing", cls: "good" };
        if (scaled >= pass - 60) return { label: "Just short", cls: "amber" };
        return { label: "Not there yet", cls: "bad" };
    };

    /* ---------- dates ---------- */
    function startOfDay(d) { return new Date(d.getFullYear(), d.getMonth(), d.getDate()); }

    AP.daysLeft = function () {
        var ms = startOfDay(AP.EXAM_DATE) - startOfDay(new Date());
        return Math.max(0, Math.round(ms / 86400000));
    };

    AP.currentPlanDay = function () {
        var ms = startOfDay(new Date()) - startOfDay(AP.PLAN_START);
        return Math.round(ms / 86400000) + 1;
    };

    AP.dateForDay = function (n) {
        var d = new Date(AP.PLAN_START.getTime());
        d.setDate(d.getDate() + (n - 1));
        return d;
    };

    var DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var MONS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    AP.fmtDate = function (d) { return DAYS[d.getDay()] + ", " + MONS[d.getMonth()] + " " + d.getDate(); };
    AP.fmtShort = function (d) { return MONS[d.getMonth()] + " " + d.getDate(); };
    AP.dayName = function (d) { return DAYS[d.getDay()]; };

    AP.fmtClock = function (totalSeconds) {
        var s = Math.max(0, Math.round(totalSeconds));
        var m = Math.floor(s / 60);
        var r = s % 60;
        return m + ":" + (r < 10 ? "0" : "") + r;
    };

    /* ---------- storage ---------- */
    var PREFIX = "aplus:";
    AP.store = {
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
    AP.initTheme = function () {
        var saved = AP.store.get("theme", null);
        var prefersDark = global.matchMedia && global.matchMedia("(prefers-color-scheme: dark)").matches;
        document.documentElement.setAttribute("data-theme", saved || (prefersDark ? "dark" : "light"));
    };

    AP.toggleTheme = function () {
        var cur = document.documentElement.getAttribute("data-theme");
        var next = cur === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", next);
        AP.store.set("theme", next);
        var btn = document.getElementById("themeBtn");
        if (btn) {
            btn.textContent = next === "dark" ? "\u2600" : "\u263D";
            btn.setAttribute("aria-label", next === "dark" ? "Switch to light mode" : "Switch to dark mode");
        }
    };

    /* ---------- navigation ---------- */
    var NAV = [
        { href: "index.html", label: "Home" },
        { href: "plan.html", label: "9-Day Plan" },
        { href: "hardware.html", label: "Hardware" },
        { href: "networking.html", label: "Networking" },
        { href: "mobile-cloud.html", label: "Mobile &amp; Cloud" },
        { href: "troubleshooting.html", label: "Troubleshooting" },
        { href: "core2.html", label: "Core 2" },
        { href: "drills.html", label: "Drills" },
        { href: "exams.html", label: "Practice Exams" },
        { href: "tools.html", label: "Tools" }
    ];

    function currentFile() {
        var p = global.location.pathname.split("/").pop();
        return (!p || p === "") ? "index.html" : p;
    }

    AP.renderTopbar = function () {
        var host = document.getElementById("topbar");
        if (!host) return;
        var here = currentFile();
        var links = "";
        for (var i = 0; i < NAV.length; i++) {
            var isActive = NAV[i].href === here ||
                (here.indexOf("practice-exam") === 0 && NAV[i].href === "exams.html") ||
                (here === "section.html" && NAV[i].href === "exams.html");
            links += '<a href="' + NAV[i].href + '"' + (isActive ? ' class="active" aria-current="page"' : "") + ">" +
                NAV[i].label + "</a>";
        }
        var left = AP.daysLeft();
        var pill = '<span class="countdown-pill" title="Exam day: Friday, September 4, 2026">' +
            "<b>" + left + "</b> day" + (left === 1 ? "" : "s") + " left</span>";
        var isDark = document.documentElement.getAttribute("data-theme") === "dark";

        host.className = "topbar";
        host.innerHTML =
            '<div class="topbar-inner">' +
            '<a class="brand" href="index.html"><span class="brand-mark">A+</span>' +
            '<span>Brooks\u2019s A+ Plan <span class="brand-sub">Sep 4</span></span></a>' +
            '<nav class="nav" id="mainNav" aria-label="Main">' + links + "</nav>" +
            '<div style="margin-left:auto;display:flex;align-items:center;gap:.5rem">' + pill +
            '<button class="icon-btn" id="themeBtn" type="button" aria-label="' +
            (isDark ? "Switch to light mode" : "Switch to dark mode") + '">' + (isDark ? "\u2600" : "\u263D") + "</button>" +
            '<button class="icon-btn nav-toggle" id="navBtn" type="button" aria-label="Toggle menu" aria-expanded="false">\u2261</button>' +
            "</div></div>";

        document.getElementById("themeBtn").addEventListener("click", AP.toggleTheme);
        var navBtn = document.getElementById("navBtn");
        navBtn.addEventListener("click", function () {
            var nav = document.getElementById("mainNav");
            var open = nav.classList.toggle("open");
            navBtn.setAttribute("aria-expanded", open ? "true" : "false");
        });
    };

    AP.renderFooter = function () {
        var host = document.getElementById("footer");
        if (!host) return;
        host.className = "footer";
        host.innerHTML = '<div class="wrap">' +
            "<p>Built for Brooks &middot; CompTIA A+ Core 1 (220-1101), Friday September 4, 2026. " +
            "Every question, explanation, and flashcard on this site is original practice material.</p>" +
            '<p class="faint">Scaled scores are readiness estimates anchored on the published 100\u2013900 range and the ' +
            "675 passing mark. They are not official CompTIA scores. Your progress is saved in this browser only.</p>" +
            "</div>";
    };

    /* ---------- toast ---------- */
    var toastEl = null, toastTimer = null;
    AP.toast = function (msg, ms) {
        if (!toastEl) {
            toastEl = document.createElement("div");
            toastEl.className = "toast";
            toastEl.setAttribute("role", "status");
            document.body.appendChild(toastEl);
        }
        toastEl.textContent = msg;
        void toastEl.offsetWidth;
        toastEl.classList.add("show");
        global.clearTimeout(toastTimer);
        toastTimer = global.setTimeout(function () { toastEl.classList.remove("show"); }, ms || 2200);
    };

    /* ---------- meters ---------- */
    AP.fillMeter = function (el, pct) {
        if (!el) return;
        var bar = el.tagName === "I" ? el : el.querySelector("i");
        if (!bar) return;
        var v = Math.max(0, Math.min(100, pct)) / 100;
        global.requestAnimationFrame(function () { bar.style.transform = "scaleX(" + v + ")"; });
    };

    AP.autoFillMeters = function (root) {
        var nodes = (root || document).querySelectorAll("[data-pct]");
        for (var i = 0; i < nodes.length; i++) {
            AP.fillMeter(nodes[i], parseFloat(nodes[i].getAttribute("data-pct")) || 0);
        }
    };

    /* ---------- persistent checkboxes ---------- */
    AP.bindPersistentChecks = function (storeKey, root) {
        var state = AP.store.get(storeKey, {});
        var boxes = (root || document).querySelectorAll('input[type="checkbox"][data-key]');
        for (var i = 0; i < boxes.length; i++) {
            (function (box) {
                var k = box.getAttribute("data-key");
                if (state[k]) box.checked = true;
                box.addEventListener("change", function () {
                    var s = AP.store.get(storeKey, {});
                    if (box.checked) { s[k] = 1; } else { delete s[k]; }
                    AP.store.set(storeKey, s);
                    if (typeof AP.onCheckChange === "function") AP.onCheckChange(s);
                });
            })(boxes[i]);
        }
        return state;
    };

    /* ---------- misc helpers ---------- */
    AP.escapeHtml = function (s) {
        return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    };

    // CompTIA answer choices are always A through D.
    var LETTERS = ["A", "B", "C", "D", "E", "F"];
    AP.letters = function () { return LETTERS; };

    AP.pluralize = function (n, word) { return n + " " + word + (n === 1 ? "" : "s"); };

    /* ---------- boot ---------- */
    AP.initTheme();
    document.addEventListener("DOMContentLoaded", function () {
        AP.renderTopbar();
        AP.renderFooter();
        AP.autoFillMeters(document);
    });

})(window);
