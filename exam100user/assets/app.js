/* ============================================================
   AB-100 Prep  |  shared app script

   Single-exam study site for Microsoft Exam AB-100: Agentic AI
   Business Solutions Architect. The exam date is user-settable
   and drives the countdown, the dated study plan, and which
   skills-outline weights are shown (the outline changes on
   November 16, 2026).
   ============================================================ */
(function (global) {
    "use strict";

    var AP = global.AP = global.AP || {};

    /* ---------- storage ---------- */
    var PREFIX = "ab100:";
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

    /* ============================================================
       Exam definition
       ============================================================ */
    AP.EXAM = {
        code: "AB-100",
        name: "Agentic AI Business Solutions Architect",
        cert: "Microsoft Certified: Agentic AI Business Solutions Architect Expert",
        pass: 700,
        planDays: 21,
        exams: ["exam1", "exam2", "exam3"],
        studyGuide: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ab-100",
        examPage: "https://learn.microsoft.com/en-us/credentials/certifications/exams/ab-100/",
        certPage: "https://learn.microsoft.com/en-us/credentials/certifications/agentic-ai-business-solutions-architect/"
    };
    AP.PASS = 700;
    AP.SCALE_MIN = 1;
    AP.SCALE_MAX = 1000;

    /* The domain names match the `topic` field on every question. */
    var PLAN = "Plan AI-powered business solutions";
    var DESIGN = "Design AI-powered business solutions";
    var DEPLOY = "Deploy AI-powered business solutions";

    AP.OUTLINES = {
        current: {
            id: "current",
            label: "Current outline",
            range: "through November 15, 2026",
            domains: [
                { id: "plan", name: PLAN, weight: "25\u201330", num: "1", href: "guide-plan.html" },
                { id: "design", name: DESIGN, weight: "25\u201330", num: "2", href: "guide-design.html" },
                { id: "deploy", name: DEPLOY, weight: "40\u201345", num: "3", href: "guide-deploy.html" }
            ]
        },
        upcoming: {
            id: "upcoming",
            label: "Upcoming outline",
            range: "starting November 16, 2026",
            domains: [
                { id: "plan", name: PLAN, weight: "35\u201340", num: "1", href: "guide-plan.html" },
                { id: "design", name: DESIGN, weight: "30\u201335", num: "2", href: "guide-design.html" },
                { id: "deploy", name: DEPLOY, weight: "20\u201325", num: "3", href: "guide-deploy.html" }
            ]
        }
    };
    var OUTLINE_SWITCH = new Date(2026, 10, 16, 0, 0, 0);

    // The outline that applies to the saved exam date.
    AP.outline = function () {
        return AP.examDate() >= OUTLINE_SWITCH ? AP.OUTLINES.upcoming : AP.OUTLINES.current;
    };

    // Kept for the shared test engine, which asks for domains by "core".
    AP.domainsFor = function () { return AP.outline().domains; };

    /* ============================================================
       Exam date
       ============================================================ */
    var DEFAULT_DATE = new Date(2026, 11, 4, 9, 0, 0);   // Fri Dec 4, 2026 - placeholder
    var DATE_KEY = "examDate";

    function parseYmd(s) {
        var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(s || ""));
        if (!m) return null;
        var y = +m[1], mo = +m[2], da = +m[3];
        if (mo < 1 || mo > 12 || da < 1 || da > 31) return null;
        var d = new Date(y, mo - 1, da, 9, 0, 0);
        if (d.getFullYear() !== y || d.getMonth() !== mo - 1 || d.getDate() !== da) return null;
        return d;
    }

    AP.toYmd = function (d) {
        function p(n) { return (n < 10 ? "0" : "") + n; }
        return d.getFullYear() + "-" + p(d.getMonth() + 1) + "-" + p(d.getDate());
    };

    AP.defaultExamDate = function () { return new Date(DEFAULT_DATE.getTime()); };
    AP.examDate = function () { return parseYmd(AP.store.get(DATE_KEY, null)) || AP.defaultExamDate(); };
    AP.setExamDate = function (ymd) {
        var d = parseYmd(ymd);
        if (!d) return false;
        AP.store.set(DATE_KEY, AP.toYmd(d));
        return true;
    };
    AP.resetExamDate = function () { AP.store.remove(DATE_KEY); };
    AP.isDefaultExamDate = function () { return !AP.store.get(DATE_KEY, null); };
    AP.isPlaceholderDate = AP.isDefaultExamDate;

    function startOfDay(d) { return new Date(d.getFullYear(), d.getMonth(), d.getDate()); }

    AP.daysLeft = function () {
        var ms = startOfDay(AP.examDate()) - startOfDay(new Date());
        return Math.max(0, Math.round(ms / 86400000));
    };
    AP.planDays = function () { return AP.EXAM.planDays; };
    AP.planStart = function () {
        var d = startOfDay(AP.examDate());
        d.setDate(d.getDate() - AP.planDays());
        return d;
    };
    AP.currentPlanDay = function () {
        return Math.round((startOfDay(new Date()) - AP.planStart()) / 86400000) + 1;
    };
    AP.dateForDay = function (n) {
        var d = new Date(AP.planStart().getTime());
        d.setDate(d.getDate() + (n - 1));
        return d;
    };
    AP.isPastExam = function () { return startOfDay(AP.examDate()) < startOfDay(new Date()); };

    AP.dateStatus = function () {
        var left = AP.daysLeft(), day = AP.currentPlanDay(), planDays = AP.planDays();
        if (AP.isPastExam()) {
            return { kind: "past", cls: "warn", title: "That date has passed",
                     msg: "Your saved date was " + AP.fmtLong(AP.examDate()) +
                          ". Set the new one below and the whole plan re-dates itself." };
        }
        if (left === 0) return { kind: "today", cls: "key", title: "Today is exam day", msg: "Nothing left to study. Go pass it." };
        if (day > planDays) return { kind: "past", cls: "warn", title: "Plan window has passed", msg: "The " + planDays + "-day plan window has closed." };
        if (day >= 1) {
            return { kind: "active", cls: "key", title: "You are on day " + day + " of " + planDays,
                     msg: AP.pluralize(left, "day") + " until AB-100 on " + AP.fmtLong(AP.examDate()) + "." };
        }
        return { kind: "upcoming", cls: "tip", title: "The plan starts in " + AP.pluralize(1 - day, "day"),
                 msg: "Day 1 is " + AP.fmtLong(AP.dateForDay(1)) + ", counting back " + planDays +
                      " days from " + AP.fmtLong(AP.examDate()) + ". You can start early." };
    };

    /* ---------- shared exam-date editor ---------- */
    AP.renderDateEditor = function (host, opts) {
        var el = typeof host === "string" ? document.getElementById(host) : host;
        if (!el) return;
        opts = opts || {};
        var uid = "dt-" + Math.random().toString(36).slice(2, 7);

        function paint() {
            var d = AP.examDate(), isDefault = AP.isDefaultExamDate(), st = AP.dateStatus();
            var html = "";
            if (isDefault) {
                html += '<div class="callout warn" style="margin-top:0"><span class="callout-title">Placeholder date</span>' +
                    '<p style="margin-bottom:0">This site assumes <strong>' + AP.fmtLong(d) +
                    "</strong> until you set your real appointment. Every date on the site updates when you save.</p></div>";
            } else {
                html += '<div class="callout ' + st.cls + '" style="margin-top:0"><span class="callout-title">' + st.title +
                    '</span><p style="margin-bottom:0">' + st.msg + "</p></div>";
            }
            html += '<div class="date-editor"><div class="field"><label for="' + uid + '">AB-100 exam date</label>' +
                '<input type="date" id="' + uid + '" value="' + AP.toYmd(d) + '"></div>' +
                '<div class="btn-row"><button class="btn sm" data-act="save">Save</button>' +
                (isDefault ? "" : '<button class="btn ghost sm" data-act="reset">Use default</button>') + "</div></div>" +
                '<p class="muted" style="margin:.7rem 0 0;font-size:.87rem">The ' + AP.planDays() +
                "-day plan runs <strong>" + AP.fmtDate(AP.dateForDay(1)) + "</strong> through <strong>" +
                AP.fmtDate(AP.dateForDay(AP.planDays())) + "</strong>. This date falls under the <strong>" +
                AP.outline().label.toLowerCase() + "</strong> (" + AP.outline().range + ").</p>";
            el.innerHTML = html;

            var input = document.getElementById(uid);
            var reset = el.querySelector('[data-act="reset"]');
            function done() {
                if (typeof opts.onSave === "function") { opts.onSave(); paint(); }
                else global.location.reload();
            }
            function commit() {
                if (!AP.setExamDate(input.value)) { AP.toast("That date did not look right."); return; }
                AP.toast("Exam date saved.");
                done();
            }
            el.querySelector('[data-act="save"]').addEventListener("click", commit);
            input.addEventListener("keydown", function (e) { if (e.key === "Enter") { e.preventDefault(); commit(); } });
            if (reset) reset.addEventListener("click", function () { AP.resetExamDate(); AP.toast("Reset to the default date."); done(); });
        }
        paint();
    };

    var DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var MONS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var MONS_LONG = ["January", "February", "March", "April", "May", "June",
                     "July", "August", "September", "October", "November", "December"];
    AP.fmtDate = function (d) { return DAYS[d.getDay()] + ", " + MONS[d.getMonth()] + " " + d.getDate(); };
    AP.fmtShort = function (d) { return MONS[d.getMonth()] + " " + d.getDate(); };
    AP.fmtLong = function (d) { return DAYS[d.getDay()] + ", " + MONS_LONG[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear(); };
    AP.dayName = function (d) { return DAYS[d.getDay()]; };
    AP.fmtClock = function (totalSeconds) {
        var s = Math.max(0, Math.round(totalSeconds)), m = Math.floor(s / 60), r = s % 60;
        return m + ":" + (r < 10 ? "0" : "") + r;
    };

    /* ============================================================
       Scoring

       Microsoft reports a scaled score from 1 to 1,000 with 700 to
       pass, and does not publish the conversion. Questions can carry
       different weights. This curve maps 70% correct to 700 as a
       readiness estimate only.
       ============================================================ */
    var CURVE = [
        [0, 1], [20, 200], [40, 400], [50, 500], [60, 600], [65, 650], [70, 700],
        [75, 745], [80, 790], [85, 840], [90, 890], [95, 945], [100, 1000]
    ];

    AP.pctToScaled = function (pct) {
        var p = Math.max(0, Math.min(100, pct));
        for (var i = 1; i < CURVE.length; i++) {
            if (p <= CURVE[i][0]) {
                var lo = CURVE[i - 1], hi = CURVE[i], span = hi[0] - lo[0];
                var t = span === 0 ? 0 : (p - lo[0]) / span;
                return Math.round(lo[1] + t * (hi[1] - lo[1]));
            }
        }
        return AP.SCALE_MAX;
    };
    AP.rawToScaled = function (right, total) { return total ? AP.pctToScaled((right / total) * 100) : AP.SCALE_MIN; };
    AP.passMark = function () { return AP.PASS; };
    AP.passPct = function () { return 70; };
    AP.correctNeeded = function (core, total) { return Math.ceil(total * AP.passPct() / 100); };
    AP.verdict = function (scaled) {
        var pass = AP.PASS;
        if (scaled >= pass + 80) return { label: "Comfortably passing", cls: "good" };
        if (scaled >= pass) return { label: "Passing", cls: "good" };
        if (scaled >= pass - 60) return { label: "Just short", cls: "amber" };
        return { label: "Not there yet", cls: "bad" };
    };

    /* ---------- progress summary ---------- */
    AP.progress = function () {
        var hist = AP.store.get("history", {}), runs = [];
        for (var i = 0; i < AP.EXAM.exams.length; i++) if (hist[AP.EXAM.exams[i]]) runs.push(hist[AP.EXAM.exams[i]]);
        runs.sort(function (a, b) { return a.at - b.at; });

        var drills = AP.store.get("drillScores", {}), drillDone = 0;
        var all = (global.AP_DATA && global.AP_DATA.drills) || [];
        for (var d = 0; d < all.length; d++) if (drills[all[d].id]) drillDone++;

        var checks = AP.store.get("plan", {}), tasksDone = 0;
        for (var k in checks) if (Object.prototype.hasOwnProperty.call(checks, k)) tasksDone++;

        var best = null, latest = null;
        for (var r = 0; r < runs.length; r++) {
            if (best === null || runs[r].scaled > best) best = runs[r].scaled;
            latest = runs[r];
        }
        return {
            runs: runs, examsTaken: runs.length, best: best, latest: latest,
            passing: best !== null && best >= AP.PASS,
            drillDone: drillDone, drillTotal: all.length, tasksDone: tasksDone, daysLeft: AP.daysLeft()
        };
    };
    AP.trackProgress = AP.progress;

    /* ---------- theme ---------- */
    AP.initTheme = function () {
        var saved = AP.store.get("theme", null);
        var prefersDark = global.matchMedia && global.matchMedia("(prefers-color-scheme: dark)").matches;
        document.documentElement.setAttribute("data-theme", saved || (prefersDark ? "dark" : "light"));
    };
    AP.toggleTheme = function () {
        var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", next);
        AP.store.set("theme", next);
        var btn = document.getElementById("themeBtn");
        if (btn) {
            btn.textContent = next === "dark" ? "\u2600" : "\u263D";
            btn.setAttribute("aria-label", next === "dark" ? "Switch to light mode" : "Switch to dark mode");
        }
    };

    /* ============================================================
       Navigation
       ============================================================ */
    function currentFile() {
        var p = global.location.pathname.split("/").pop();
        return (!p || p === "") ? "index.html" : p;
    }
    AP.currentFile = currentFile;

    AP.NAV = [
        { href: "index.html", label: "Overview" },
        { href: "plan.html", label: "Study Plan" },
        { href: "guide-plan.html", label: "Plan" },
        { href: "guide-design.html", label: "Design" },
        { href: "guide-deploy.html", label: "Deploy" },
        { href: "drills.html", label: "Drills" },
        { href: "exams.html", label: "Practice Exams" },
        { href: "tools.html", label: "Tools" }
    ];

    AP.renderTopbar = function () {
        var host = document.getElementById("topbar");
        if (!host) return;
        var here = currentFile(), links = "";
        for (var i = 0; i < AP.NAV.length; i++) {
            var isActive = AP.NAV[i].href === here ||
                (here.indexOf("practice-exam") === 0 && AP.NAV[i].href === "exams.html");
            links += '<a href="' + AP.NAV[i].href + '"' + (isActive ? ' class="active" aria-current="page"' : "") +
                ">" + AP.NAV[i].label + "</a>";
        }
        var left = AP.daysLeft();
        var isDark = document.documentElement.getAttribute("data-theme") === "dark";
        host.className = "topbar";
        host.innerHTML =
            '<div class="topbar-inner">' +
            '<a class="brand" href="index.html" title="AB-100 overview"><span class="brand-mark">AB</span>' +
            '<span>AB-100 Prep <span class="brand-sub">Agentic AI Architect \u00b7 ' + AP.fmtShort(AP.examDate()) + "</span></span></a>" +
            '<nav class="nav" id="mainNav" aria-label="Main">' + links + "</nav>" +
            '<div class="topbar-right">' +
            '<a class="countdown-pill" href="index.html" title="AB-100 on ' + AP.fmtLong(AP.examDate()) + '"><b>' + left +
            "</b> day" + (left === 1 ? "" : "s") + " left</a>" +
            '<button class="icon-btn" id="themeBtn" type="button" aria-label="' +
            (isDark ? "Switch to light mode" : "Switch to dark mode") + '">' + (isDark ? "\u2600" : "\u263D") + "</button>" +
            '<button class="icon-btn nav-toggle" id="navBtn" type="button" aria-label="Toggle menu" aria-expanded="false">\u2261</button>' +
            "</div></div>";

        document.getElementById("themeBtn").addEventListener("click", AP.toggleTheme);
        var navBtn = document.getElementById("navBtn");
        navBtn.addEventListener("click", function () {
            var open = document.getElementById("mainNav").classList.toggle("open");
            navBtn.setAttribute("aria-expanded", open ? "true" : "false");
        });
    };

    AP.renderFooter = function () {
        var host = document.getElementById("footer");
        if (!host) return;
        host.className = "footer";
        host.innerHTML = '<div class="wrap">' +
            "<p>AB-100 Prep &middot; Microsoft Exam AB-100: Agentic AI Business Solutions Architect. Every question, " +
            "explanation, and flashcard on this site is original practice material based on the published skills outline. " +
            '<a href="' + AP.EXAM.studyGuide + '" target="_blank" rel="noopener">Official study guide</a> &middot; ' +
            '<a href="../hub.html">Training hub</a></p>' +
            '<p class="faint">Scaled scores are readiness estimates anchored on the published 1\u20131,000 range and the 700 ' +
            "passing mark. They are not official Microsoft scores. Your progress is saved in this browser only.</p></div>";
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
        for (var i = 0; i < nodes.length; i++) AP.fillMeter(nodes[i], parseFloat(nodes[i].getAttribute("data-pct")) || 0);
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
