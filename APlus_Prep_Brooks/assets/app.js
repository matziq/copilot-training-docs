/* ============================================================
   CompTIA A+ Prep — Brooks  |  shared app script

   The site runs in one of two "tracks" at a time: Core 1
   (220-1101) or Core 2 (220-1102). The chosen track drives the
   navigation, the countdown, the study plan, and which exams and
   drills are shown. It is chosen at the root and persisted.
   ============================================================ */
(function (global) {
    "use strict";

    var AP = global.AP = global.AP || {};

    /* ---------- storage (declared first; the track getter needs it) ---------- */
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

    /* ============================================================
       Track definitions
       ============================================================ */
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

    AP.TRACKS = {
        core1: {
            id: "core1",
            code: "220-1101",
            name: "Core 1",
            longName: "Core 1 (220-1101)",
            blurb: "Hardware, networking, mobile devices, virtualization, and troubleshooting.",
            pass: 675,
            planDays: 9,
            home: "core1.html",
            domains: AP.CORE1,
            exams: ["exam1", "exam2", "exam3"],
            drillPrefix: "c1-",
            guides: [
                { href: "hardware.html", label: "Hardware" },
                { href: "networking.html", label: "Networking" },
                { href: "mobile-cloud.html", label: "Mobile &amp; Cloud" },
                { href: "troubleshooting.html", label: "Troubleshooting" }
            ]
        },
        core2: {
            id: "core2",
            code: "220-1102",
            name: "Core 2",
            longName: "Core 2 (220-1102)",
            blurb: "Operating systems, security, software troubleshooting, and operational procedures.",
            pass: 700,
            planDays: 14,
            home: "core2.html",
            domains: AP.CORE2,
            exams: ["exam4", "exam5", "exam6"],
            drillPrefix: "c2-",
            guides: [
                { href: "c2-os.html", label: "Operating Systems" },
                { href: "c2-security.html", label: "Security" },
                { href: "c2-software.html", label: "Software" },
                { href: "c2-procedures.html", label: "Procedures" }
            ]
        }
    };

    AP.domainsFor = function (core) { return core === "core2" ? AP.CORE2 : AP.CORE1; };

    /* ---------- current track ---------- */
    AP.track = function () {
        var t = AP.store.get("track", null);
        return (t === "core1" || t === "core2") ? t : "core1";
    };

    AP.hasChosenTrack = function () {
        var t = AP.store.get("track", null);
        return t === "core1" || t === "core2";
    };

    AP.setTrack = function (t) {
        if (t !== "core1" && t !== "core2") return false;
        AP.store.set("track", t);
        return true;
    };

    AP.trackInfo = function (t) { return AP.TRACKS[t || AP.track()]; };

    /* ============================================================
       Exam dates

       Core 1 is booked for Friday September 4, 2026. Core 2 has no
       booking yet, so it defaults to four weeks later and can be
       changed by the user; the change is persisted.
       ============================================================ */
    var CORE1_DATE = new Date(2026, 8, 4, 8, 0, 0);      // Fri Sep 4, 2026
    var CORE2_DEFAULT = new Date(2026, 9, 2, 8, 0, 0);   // Fri Oct 2, 2026

    function parseYmd(s) {
        var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(s || ""));
        if (!m) return null;
        var d = new Date(+m[1], +m[2] - 1, +m[3], 8, 0, 0);
        return isNaN(d.getTime()) ? null : d;
    }

    AP.toYmd = function (d) {
        function p(n) { return (n < 10 ? "0" : "") + n; }
        return d.getFullYear() + "-" + p(d.getMonth() + 1) + "-" + p(d.getDate());
    };

    AP.examDate = function (t) {
        t = t || AP.track();
        if (t === "core2") {
            return parseYmd(AP.store.get("core2Date", null)) || new Date(CORE2_DEFAULT.getTime());
        }
        return parseYmd(AP.store.get("core1Date", null)) || new Date(CORE1_DATE.getTime());
    };

    AP.setExamDate = function (t, ymd) {
        var d = parseYmd(ymd);
        if (!d) return false;
        AP.store.set(t === "core2" ? "core2Date" : "core1Date", ymd);
        return true;
    };

    AP.resetExamDate = function (t) {
        AP.store.remove(t === "core2" ? "core2Date" : "core1Date");
    };

    AP.isDefaultExamDate = function (t) {
        return !AP.store.get(t === "core2" ? "core2Date" : "core1Date", null);
    };

    /* ---------- date helpers ---------- */
    function startOfDay(d) { return new Date(d.getFullYear(), d.getMonth(), d.getDate()); }

    AP.daysLeft = function (t) {
        var ms = startOfDay(AP.examDate(t)) - startOfDay(new Date());
        return Math.max(0, Math.round(ms / 86400000));
    };

    AP.planDays = function (t) { return AP.trackInfo(t).planDays; };

    // The plan is the N days that end the day before the exam.
    AP.planStart = function (t) {
        t = t || AP.track();
        var d = startOfDay(AP.examDate(t));
        d.setDate(d.getDate() - AP.planDays(t));
        return d;
    };

    AP.currentPlanDay = function (t) {
        var ms = startOfDay(new Date()) - AP.planStart(t);
        return Math.round(ms / 86400000) + 1;
    };

    AP.dateForDay = function (n, t) {
        var d = new Date(AP.planStart(t).getTime());
        d.setDate(d.getDate() + (n - 1));
        return d;
    };

    var DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var MONS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var MONS_LONG = ["January", "February", "March", "April", "May", "June",
                     "July", "August", "September", "October", "November", "December"];
    AP.fmtDate = function (d) { return DAYS[d.getDay()] + ", " + MONS[d.getMonth()] + " " + d.getDate(); };
    AP.fmtShort = function (d) { return MONS[d.getMonth()] + " " + d.getDate(); };
    AP.fmtLong = function (d) {
        return DAYS[d.getDay()] + ", " + MONS_LONG[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
    };
    AP.dayName = function (d) { return DAYS[d.getDay()]; };

    AP.fmtClock = function (totalSeconds) {
        var s = Math.max(0, Math.round(totalSeconds));
        var m = Math.floor(s / 60);
        var r = s % 60;
        return m + ":" + (r < 10 ? "0" : "") + r;
    };

    /* ============================================================
       Scoring

       CompTIA does not publish its raw-to-scaled conversion, and the
       real exam weights questions by difficulty. This curve is
       anchored on the two facts that are public: the 100-900 range,
       and the 675 (Core 1) / 700 (Core 2) passing marks.
       ============================================================ */
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

    // How many correct answers a run of `total` questions needs to pass.
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

    /* ---------- progress summary for a track ---------- */
    AP.trackProgress = function (t) {
        t = t || AP.track();
        var info = AP.TRACKS[t];
        var hist = AP.store.get("history", {});
        var runs = [];
        for (var i = 0; i < info.exams.length; i++) {
            if (hist[info.exams[i]]) runs.push(hist[info.exams[i]]);
        }
        runs.sort(function (a, b) { return a.at - b.at; });

        var drills = AP.store.get("drillScores", {});
        var drillDone = 0, drillTotal = 0;
        var all = (global.AP_DATA && global.AP_DATA.drills) || [];
        for (var d = 0; d < all.length; d++) {
            if (all[d].id.indexOf(info.drillPrefix) === 0) {
                drillTotal++;
                if (drills[all[d].id]) drillDone++;
            }
        }

        var checks = AP.store.get("plan-" + t, {});
        var tasksDone = 0;
        for (var k in checks) { if (Object.prototype.hasOwnProperty.call(checks, k)) tasksDone++; }

        var best = null, latest = null;
        for (var r = 0; r < runs.length; r++) {
            if (best === null || runs[r].scaled > best) best = runs[r].scaled;
            latest = runs[r];
        }

        return {
            track: t, info: info, runs: runs, examsTaken: runs.length,
            best: best, latest: latest,
            passing: best !== null && best >= info.pass,
            drillDone: drillDone, drillTotal: drillTotal,
            tasksDone: tasksDone,
            daysLeft: AP.daysLeft(t)
        };
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

    /* ============================================================
       Navigation
       ============================================================ */
    function currentFile() {
        var p = global.location.pathname.split("/").pop();
        return (!p || p === "") ? "index.html" : p;
    }
    AP.currentFile = currentFile;

    // Pages that belong to a specific track, used to auto-switch the
    // track when the user lands directly on one of them.
    var PAGE_TRACK = {
        "core1.html": "core1", "hardware.html": "core1", "networking.html": "core1",
        "mobile-cloud.html": "core1", "troubleshooting.html": "core1",
        "practice-exam-1.html": "core1", "practice-exam-2.html": "core1", "practice-exam-3.html": "core1",
        "core2.html": "core2", "c2-os.html": "core2", "c2-security.html": "core2",
        "c2-software.html": "core2", "c2-procedures.html": "core2",
        "practice-exam-4.html": "core2", "practice-exam-5.html": "core2", "practice-exam-6.html": "core2"
    };
    AP.pageTrack = function (file) { return PAGE_TRACK[file || currentFile()] || null; };

    function navFor(t) {
        var info = AP.TRACKS[t];
        var nav = [{ href: info.home, label: "Overview" }, { href: "plan.html", label: "Study Plan" }];
        for (var i = 0; i < info.guides.length; i++) nav.push(info.guides[i]);
        nav.push({ href: "drills.html", label: "Drills" });
        nav.push({ href: "exams.html", label: "Practice Exams" });
        nav.push({ href: "tools.html", label: "Tools" });
        return nav;
    }

    AP.renderTopbar = function () {
        var host = document.getElementById("topbar");
        if (!host) return;

        var here = currentFile();
        // Landing on a track-specific page selects that track.
        var pt = AP.pageTrack(here);
        if (pt && pt !== AP.track()) AP.setTrack(pt);

        var t = AP.track();
        var info = AP.TRACKS[t];
        var onIndex = here === "index.html";

        var links = "";
        if (!onIndex) {
            var nav = navFor(t);
            for (var i = 0; i < nav.length; i++) {
                var isActive = nav[i].href === here ||
                    (here.indexOf("practice-exam") === 0 && nav[i].href === "exams.html");
                links += '<a href="' + nav[i].href + '"' + (isActive ? ' class="active" aria-current="page"' : "") +
                    ">" + nav[i].label + "</a>";
            }
        }

        var left = AP.daysLeft(t);
        var pill = onIndex ? "" :
            '<a class="countdown-pill" href="' + info.home + '" title="' + info.longName +
            " on " + AP.fmtLong(AP.examDate(t)) + '"><b>' + left + "</b> day" + (left === 1 ? "" : "s") +
            " left</a>";

        var isDark = document.documentElement.getAttribute("data-theme") === "dark";

        var switcher = onIndex ? "" :
            '<div class="track-switch" role="group" aria-label="Which exam are you studying for">' +
            '<button type="button" data-track="core1"' + (t === "core1" ? ' class="on" aria-pressed="true"' : ' aria-pressed="false"') + ">Core 1</button>" +
            '<button type="button" data-track="core2"' + (t === "core2" ? ' class="on" aria-pressed="true"' : ' aria-pressed="false"') + ">Core 2</button>" +
            "</div>";

        host.className = "topbar";
        host.innerHTML =
            '<div class="topbar-inner">' +
            '<a class="brand" href="index.html" title="Back to the exam chooser">' +
            '<span class="brand-mark">A+</span>' +
            '<span>Brooks\u2019s A+ Plan <span class="brand-sub">' +
            (onIndex ? "Both exams" : info.name + " \u00b7 " + AP.fmtShort(AP.examDate(t))) + "</span></span></a>" +
            (onIndex ? "" : '<nav class="nav" id="mainNav" aria-label="Main">' + links + "</nav>") +
            '<div class="topbar-right">' + switcher + pill +
            '<button class="icon-btn" id="themeBtn" type="button" aria-label="' +
            (isDark ? "Switch to light mode" : "Switch to dark mode") + '">' + (isDark ? "\u2600" : "\u263D") + "</button>" +
            (onIndex ? "" :
                '<button class="icon-btn nav-toggle" id="navBtn" type="button" aria-label="Toggle menu" aria-expanded="false">\u2261</button>') +
            "</div></div>";

        document.getElementById("themeBtn").addEventListener("click", AP.toggleTheme);

        var navBtn = document.getElementById("navBtn");
        if (navBtn) {
            navBtn.addEventListener("click", function () {
                var nav = document.getElementById("mainNav");
                var open = nav.classList.toggle("open");
                navBtn.setAttribute("aria-expanded", open ? "true" : "false");
            });
        }

        var sw = host.querySelectorAll(".track-switch button");
        for (var s = 0; s < sw.length; s++) {
            (function (btn) {
                btn.addEventListener("click", function () {
                    var want = btn.getAttribute("data-track");
                    if (want === AP.track()) return;
                    AP.setTrack(want);
                    // If the current page belongs to the other track, go to that
                    // track's overview; otherwise stay put and re-render.
                    var thisPageTrack = AP.pageTrack(currentFile());
                    if (thisPageTrack && thisPageTrack !== want) {
                        global.location.href = AP.TRACKS[want].home;
                    } else {
                        global.location.reload();
                    }
                });
            })(sw[s]);
        }
    };

    AP.renderFooter = function () {
        var host = document.getElementById("footer");
        if (!host) return;
        host.className = "footer";
        host.innerHTML = '<div class="wrap">' +
            "<p>Built for Brooks &middot; CompTIA A+ &mdash; Core 1 (220-1101) and Core 2 (220-1102). " +
            "Both exams must be passed to be certified. Every question, explanation, and flashcard on this " +
            "site is original practice material.</p>" +
            '<p class="faint">Scaled scores are readiness estimates anchored on the published 100\u2013900 range and the ' +
            "675 and 700 passing marks. They are not official CompTIA scores. Your progress is saved in this browser only.</p>" +
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
