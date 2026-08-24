/* ============================================================
   ACT Prep — Alina  |  practice test engine
   Renders timed sections, tracks answers, scores, and reviews.
   ============================================================ */
(function (global) {
    "use strict";

    var ACT = global.ACT = global.ACT || {};

    function bank() { return global.ACT_DATA || {}; }
    function el(tag, cls, html) {
        var e = document.createElement(tag);
        if (cls) e.className = cls;
        if (html != null) e.innerHTML = html;
        return e;
    }
    function qsa(root, sel) { return Array.prototype.slice.call(root.querySelectorAll(sel)); }

    /* ============================================================
       Engine instance
       ============================================================ */
    function Engine(opts) {
        this.o = opts;
        this.root = opts.el;
        this.key = "run:" + opts.testId;
        this.sections = [];

        for (var i = 0; i < opts.sections.length; i++) {
            var s = bank()[opts.sections[i]];
            if (s) this.sections.push(s);
        }
        if (!this.sections.length) {
            this.root.innerHTML = '<div class="card"><h3>Content not loaded</h3>' +
                "<p>The question data for this test did not load. Check that the data scripts are present, " +
                "then refresh the page.</p></div>";
            return;
        }

        this.state = this.load();
        this.observer = null;
        this.timer = null;
        this.currentQ = null;
        this.reviewFilter = "all";
        this.render();
        this.bindKeys();
    }

    Engine.prototype.blank = function () {
        var st = {
            screen: "intro", sectionIdx: 0, unitIdx: 0,
            answers: {}, flags: {}, timeLeft: {}, spent: {}, done: {},
            timed: true, startedAt: null, finishedAt: null
        };
        for (var i = 0; i < this.sections.length; i++) {
            var s = this.sections[i];
            st.answers[s.id] = {};
            st.flags[s.id] = {};
            st.timeLeft[s.id] = s.timeMinutes * 60;
            st.spent[s.id] = 0;
        }
        return st;
    };

    Engine.prototype.load = function () {
        var saved = ACT.store.get(this.key, null);
        if (!saved || !saved.answers) return this.blank();
        var base = this.blank();
        for (var k in saved) { if (Object.prototype.hasOwnProperty.call(saved, k)) base[k] = saved[k]; }
        // repair any section added after the run was saved
        for (var i = 0; i < this.sections.length; i++) {
            var s = this.sections[i];
            if (!base.answers[s.id]) base.answers[s.id] = {};
            if (!base.flags[s.id]) base.flags[s.id] = {};
            if (typeof base.timeLeft[s.id] !== "number") base.timeLeft[s.id] = s.timeMinutes * 60;
            if (typeof base.spent[s.id] !== "number") base.spent[s.id] = 0;
        }
        return base;
    };

    Engine.prototype.save = function () { ACT.store.set(this.key, this.state); };

    Engine.prototype.reset = function () {
        this.stopTimer();
        ACT.store.remove(this.key);
        this.state = this.blank();
        this.render();
    };

    /* ---------- helpers ---------- */
    Engine.prototype.section = function (i) {
        return this.sections[typeof i === "number" ? i : this.state.sectionIdx];
    };

    Engine.prototype.allQuestions = function (sec) {
        var out = [];
        for (var u = 0; u < sec.units.length; u++) {
            for (var q = 0; q < sec.units[u].questions.length; q++) {
                out.push({ q: sec.units[u].questions[q], unit: u });
            }
        }
        return out;
    };

    Engine.prototype.hasPassages = function (sec) {
        for (var u = 0; u < sec.units.length; u++) {
            if (sec.units[u].html && sec.units[u].html.length > 10) return true;
        }
        return false;
    };

    // Section objects are keyed "test1_english" / "drill_math-linear", but the
    // scoring curves and baseline scores are keyed by the bare section name.
    var BASE_IDS = ["english", "math", "reading", "science"];
    Engine.prototype.baseId = function (sec) {
        if (BASE_IDS.indexOf(sec.id) >= 0) return sec.id;
        var m = /^test\d+_([a-z]+)$/.exec(sec.id);
        if (m && BASE_IDS.indexOf(m[1]) >= 0) return m[1];
        return null; // drills and anything unrecognized do not scale
    };

    Engine.prototype.answeredCount = function (sec) {
        var a = this.state.answers[sec.id] || {}, c = 0;
        for (var k in a) { if (Object.prototype.hasOwnProperty.call(a, k)) c++; }
        return c;
    };

    Engine.prototype.scoreSection = function (sec) {
        var list = this.allQuestions(sec), a = this.state.answers[sec.id] || {};
        var right = 0, wrong = 0, blank = 0, topics = {};
        for (var i = 0; i < list.length; i++) {
            var q = list[i].q;
            var pick = a[q.n];
            var t = q.topic || "Untagged";
            if (!topics[t]) topics[t] = { right: 0, total: 0 };
            topics[t].total++;
            if (pick === undefined || pick === null) { blank++; }
            else if (pick === q.answer) { right++; topics[t].right++; }
            else { wrong++; }
        }
        var base = this.baseId(sec);
        return {
            right: right, wrong: wrong, blank: blank, total: list.length,
            base: base,
            scale: base ? ACT.rawToScale(base, right, list.length) : null,
            topics: topics
        };
    };

    /* ============================================================
       Render dispatcher
       ============================================================ */
    Engine.prototype.render = function () {
        this.stopTimer();
        if (this.observer) { this.observer.disconnect(); this.observer = null; }
        this.root.innerHTML = "";
        var s = this.state.screen;
        if (s === "intro") this.renderIntro();
        else if (s === "sectionIntro") this.renderSectionIntro();
        else if (s === "exam") this.renderExam();
        else if (s === "break") this.renderBreak();
        else if (s === "results") this.renderResults();
        else if (s === "review") this.renderReview();
        global.scrollTo(0, 0);
    };

    /* ---------- intro ---------- */
    Engine.prototype.renderIntro = function () {
        var self = this;
        var inProgress = !!this.state.startedAt && !this.state.finishedAt;
        var finished = !!this.state.finishedAt;

        var rows = "";
        var totalQ = 0, totalMin = 0;
        for (var i = 0; i < this.sections.length; i++) {
            var s = this.sections[i], n = this.allQuestions(s).length;
            totalQ += n; totalMin += s.timeMinutes;
            rows += "<tr><td><strong>" + s.name + "</strong></td><td>" + n + " questions</td><td>" +
                s.timeMinutes + " minutes</td><td>" +
                (Math.round((s.timeMinutes * 60 / n) * 10) / 10) + " sec/question</td>" +
                "<td>" + (s.id === "science"
                    ? '<span class="badge">Optional &middot; not in composite</span>'
                    : '<span class="badge accent">Counts toward composite</span>') + "</td></tr>";
        }

        var wrap = el("div");
        wrap.innerHTML =
            '<div class="card" style="margin-bottom:1.25rem">' +
            "<h2 style=\"margin-top:0\">" + this.o.title + "</h2>" +
            '<p class="lede">' + (this.o.blurb || "") + "</p>" +
            '<div class="table-scroll"><table class="data-table"><thead><tr>' +
            "<th>Section</th><th>Length</th><th>Time</th><th>Pace</th><th>Scoring</th>" +
            "</tr></thead><tbody>" + rows +
            '<tr><td><strong>Total</strong></td><td><strong>' + totalQ + " questions</strong></td><td><strong>" +
            Math.floor(totalMin / 60) + " hr " + (totalMin % 60) + " min</strong></td><td>&mdash;</td><td>&mdash;</td></tr>" +
            "</tbody></table></div>" +
            '<div class="callout warn"><span class="callout-title">Before you start</span>' +
            "<p>Sit somewhere quiet, put your phone in another room, and use scratch paper and a calculator " +
            "for Math exactly as you will on test day. Each section is timed separately and will submit " +
            "itself when the clock runs out, just like the real thing. Do not pause mid-section.</p></div>" +
            '<div class="field" style="max-width:320px">' +
            '<label><input type="checkbox" id="timedBox"' + (this.state.timed ? " checked" : "") +
            ' style="width:auto;margin-right:.5rem"> Timed mode (strongly recommended)</label></div>' +
            '<div class="btn-row" id="introBtns"></div>' +
            "</div>";

        var btns = wrap.querySelector("#introBtns");

        if (finished) {
            var b1 = el("button", "btn lg", "See my results");
            b1.onclick = function () { self.state.screen = "results"; self.save(); self.render(); };
            btns.appendChild(b1);
        }
        if (inProgress) {
            var b2 = el("button", "btn lg", "Resume &mdash; " + this.section().name);
            b2.onclick = function () { self.state.screen = "exam"; self.save(); self.render(); };
            btns.appendChild(b2);
        }
        if (!finished && !inProgress) {
            var b3 = el("button", "btn lg", "Start the test");
            b3.onclick = function () {
                self.state.startedAt = Date.now();
                self.state.sectionIdx = 0; self.state.unitIdx = 0;
                self.state.screen = "sectionIntro";
                self.save(); self.render();
            };
            btns.appendChild(b3);
        }
        if (finished || inProgress) {
            var b4 = el("button", "btn secondary", "Start over");
            b4.onclick = function () {
                if (global.confirm("Erase every answer on this test and start fresh?")) self.reset();
            };
            btns.appendChild(b4);
        }

        wrap.querySelector("#timedBox").addEventListener("change", function () {
            self.state.timed = this.checked; self.save();
        });

        this.root.appendChild(wrap);
    };

    /* ---------- section intro ---------- */
    Engine.prototype.renderSectionIntro = function () {
        var self = this, sec = this.section();
        var n = this.allQuestions(sec).length;
        var mins = Math.round(this.state.timeLeft[sec.id] / 60);
        var pace = Math.round((sec.timeMinutes * 60 / n) * 10) / 10;

        var tips = {
            english: "Read the whole sentence, not just the underlined words. When two choices mean the same thing, both are wrong. The shortest grammatical option usually wins.",
            math: "Do the easy ones first and circle anything that will take more than 90 seconds. Never leave a bubble blank &mdash; there is no penalty for a wrong answer.",
            reading: "You have more time per question than the old ACT. Read the passage properly once, then answer from the text. Every right answer is provable.",
            science: "Go to the figures first and read the prose only when a question forces you to. Find the trend before you look at the choices."
        };

        var wrap = el("div", "wrap-narrow");
        wrap.innerHTML =
            '<div class="card center" style="padding:2.5rem 2rem">' +
            '<div class="badge accent">Section ' + (this.state.sectionIdx + 1) + " of " + this.sections.length + "</div>" +
            '<h2 style="margin:.7rem 0 .3rem;font-size:2rem">' + sec.name + "</h2>" +
            '<p class="lede" style="margin:0 auto 1.5rem">' + n + " questions &middot; " + mins +
            " minutes &middot; about " + pace + " seconds per question</p>" +
            '<div class="callout tip" style="text-align:left"><span class="callout-title">Focus for this section</span>' +
            "<p>" + (tips[sec.id] || "") + "</p></div>" +
            '<div class="btn-row" style="justify-content:center"><button class="btn lg" id="goBtn">Begin ' +
            sec.name + "</button></div>" +
            '<p class="faint" style="margin:1rem 0 0;font-size:.82rem">' +
            (this.state.timed ? "The clock starts as soon as you click." : "Untimed practice mode is on.") + "</p>" +
            "</div>";

        wrap.querySelector("#goBtn").onclick = function () {
            self.state.screen = "exam"; self.save(); self.render();
        };
        this.root.appendChild(wrap);
    };

    /* ---------- break ---------- */
    Engine.prototype.renderBreak = function () {
        var self = this;
        var until = Date.now() + 10 * 60 * 1000;
        var wrap = el("div", "wrap-narrow");
        wrap.innerHTML =
            '<div class="card center" style="padding:2.5rem 2rem">' +
            "<h2 style=\"margin-top:0\">Break</h2>" +
            '<p class="lede" style="margin:0 auto 1rem">Stand up, drink some water, eat something. ' +
            "You get a real break on test day &mdash; take this one too.</p>" +
            '<div class="big-timer" id="breakClock">10:00</div>' +
            '<div class="btn-row" style="justify-content:center">' +
            '<button class="btn lg" id="skipBreak">I\'m ready &mdash; continue</button></div></div>';

        var clock = wrap.querySelector("#breakClock");
        this.timer = global.setInterval(function () {
            var left = Math.max(0, Math.round((until - Date.now()) / 1000));
            clock.textContent = ACT.fmtClock(left);
            if (left <= 0) {
                global.clearInterval(self.timer);
                self.state.screen = "sectionIntro"; self.save(); self.render();
            }
        }, 250);

        wrap.querySelector("#skipBreak").onclick = function () {
            self.state.screen = "sectionIntro"; self.save(); self.render();
        };
        this.root.appendChild(wrap);
    };

    /* ============================================================
       Exam screen
       ============================================================ */
    Engine.prototype.renderExam = function () {
        var self = this, sec = this.section();

        var shell = el("div", "test-shell");
        var main = el("div");
        var side = el("div");

        // ---- exam bar ----
        var bar = el("div", "exam-bar");
        bar.innerHTML =
            '<span class="section-name">' + sec.name + "</span>" +
            '<span class="sep">|</span>' +
            '<span class="muted" id="progressTxt" style="font-size:.86rem"></span>' +
            '<span class="spacer"></span>' +
            '<span class="timer" id="clock">' + ACT.fmtClock(this.state.timeLeft[sec.id]) + "</span>" +
            '<button class="btn sm secondary" id="submitSec">Submit section</button>';
        main.appendChild(bar);

        // ---- body ----
        var body = el("div");
        main.appendChild(body);
        this.examBody = body;
        this.drawUnit();

        // ---- palette ----
        var pal = el("div", "palette");
        pal.innerHTML = '<h4>Questions</h4><div class="palette-grid" id="palGrid"></div>' +
            '<div class="palette-legend">' +
            '<span><i class="swatch" style="background:var(--accent);border-color:var(--accent)"></i> Answered</span>' +
            '<span><i class="swatch" style="border-color:var(--amber);box-shadow:inset 0 0 0 2px var(--amber-soft)"></i> Flagged for review</span>' +
            '<span><i class="swatch"></i> Not yet answered</span></div>';
        side.appendChild(pal);
        shell.appendChild(main);
        shell.appendChild(side);
        this.root.appendChild(shell);

        this.palGrid = pal.querySelector("#palGrid");
        this.clockEl = bar.querySelector("#clock");
        this.progressEl = bar.querySelector("#progressTxt");
        this.drawPalette();
        this.updateProgress();

        bar.querySelector("#submitSec").onclick = function () { self.confirmSubmit(); };
        if (this.state.timed) this.startTimer();
    };

    Engine.prototype.drawUnit = function () {
        var self = this, sec = this.section();
        var split = this.hasPassages(sec);
        var body = this.examBody;
        body.innerHTML = "";

        if (!split) {
            this.passageEl = null;
            var col = el("div", "q-list");
            for (var ui = 0; ui < sec.units.length; ui++) {
                var qs = sec.units[ui].questions;
                for (var i = 0; i < qs.length; i++) col.appendChild(this.qCard(qs[i], sec, false));
            }
            var endRow = el("div", "btn-row");
            endRow.style.marginTop = "1.1rem";
            var fin = el("button", "btn", "Finish section \u2192");
            fin.onclick = function () { self.confirmSubmit(); };
            endRow.appendChild(fin);
            col.appendChild(endRow);
            body.appendChild(col);
        } else {
            var u = sec.units[this.state.unitIdx];
            var sp = el("div", "split");

            var pcol = el("div", "passage-col");
            var pass = el("div", "passage");
            pass.innerHTML = (u.intro ? '<p class="passage-intro">' + u.intro + "</p>" : "") + (u.html || "");
            if (u.title) {
                var h = el("h3", null, u.title);
                h.style.marginTop = "0";
                h.style.fontSize = ".82rem";
                h.style.textTransform = "uppercase";
                h.style.letterSpacing = ".09em";
                h.style.color = "var(--accent)";
                pcol.appendChild(h);
            }
            pcol.appendChild(pass);
            this.passageEl = pass;

            var qcol = el("div", "q-list");
            for (var j = 0; j < u.questions.length; j++) qcol.appendChild(this.qCard(u.questions[j], sec, false));

            // passage navigation
            var nav = el("div", "btn-row");
            nav.style.marginTop = "1.1rem";
            nav.style.justifyContent = "space-between";
            var prev = el("button", "btn secondary sm", "\u2190 Previous passage");
            var next = el("button", "btn sm", "Next passage \u2192");
            prev.disabled = this.state.unitIdx === 0;
            if (this.state.unitIdx >= sec.units.length - 1) {
                next.textContent = "Finish section \u2192";
                next.onclick = function () { self.confirmSubmit(); };
            } else {
                next.onclick = function () { self.state.unitIdx++; self.save(); self.drawUnit(); self.drawPalette(); global.scrollTo(0, 0); };
            }
            prev.onclick = function () { self.state.unitIdx--; self.save(); self.drawUnit(); self.drawPalette(); global.scrollTo(0, 0); };
            nav.appendChild(prev); nav.appendChild(next);
            qcol.appendChild(nav);

            sp.appendChild(pcol); sp.appendChild(qcol);
            body.appendChild(sp);
            this.markPassage();
        }
        this.watchCurrent();
    };

    Engine.prototype.qCard = function (q, sec, review) {
        var self = this;
        var picked = (this.state.answers[sec.id] || {})[q.n];
        var flagged = (this.state.flags[sec.id] || {})[q.n];
        var letters = ACT.letters(q.n);

        var card = el("div", "q-card");
        card.setAttribute("data-qn", q.n);
        card.id = "q-" + sec.id + "-" + q.n;

        var head = el("div", "q-head");
        head.innerHTML = '<span class="q-num">' + q.n + "</span>" +
            (q.topic ? '<span class="badge">' + ACT.escapeHtml(q.topic) + "</span>" : "");
        if (!review) {
            var fb = el("button", "flag-btn" + (flagged ? " on" : ""), flagged ? "\u2691 Flagged" : "\u2690 Flag");
            fb.onclick = function () {
                var f = self.state.flags[sec.id];
                if (f[q.n]) { delete f[q.n]; fb.className = "flag-btn"; fb.innerHTML = "\u2690 Flag"; }
                else { f[q.n] = 1; fb.className = "flag-btn on"; fb.innerHTML = "\u2691 Flagged"; }
                self.save(); self.drawPalette();
            };
            head.appendChild(fb);
        } else {
            var ok = picked === q.answer;
            var tag = el("span", "badge " + (picked === undefined ? "" : (ok ? "good" : "bad")),
                picked === undefined ? "Left blank" : (ok ? "Correct" : "Missed"));
            tag.style.marginLeft = "auto";
            head.appendChild(tag);
        }
        card.appendChild(head);

        if (q.prompt) card.appendChild(el("div", "q-prompt", q.prompt));

        var box = el("div", "choices");
        for (var i = 0; i < q.choices.length; i++) {
            (function (i) {
                var lab = el("label", "choice");
                var cls = "";
                if (review) {
                    if (i === q.answer) cls = " correct";
                    else if (i === picked) cls = " wrong";
                    lab.className = "choice" + cls;
                } else if (picked === i) {
                    lab.className = "choice selected";
                }
                lab.innerHTML = '<input type="radio" name="q-' + sec.id + "-" + q.n + '" value="' + i + '"' +
                    (picked === i ? " checked" : "") + (review ? " disabled" : "") + ">" +
                    '<span class="letter">' + letters[i] + "</span>" +
                    '<span class="ctext">' + q.choices[i] + "</span>";
                if (!review) {
                    lab.addEventListener("click", function () {
                        self.state.answers[sec.id][q.n] = i;
                        var sibs = qsa(box, ".choice");
                        for (var k = 0; k < sibs.length; k++) sibs[k].className = "choice";
                        lab.className = "choice selected";
                        self.save(); self.drawPalette(); self.updateProgress(); self.markPassage();
                    });
                }
                box.appendChild(lab);
            })(i);
        }
        card.appendChild(box);

        if (review && q.explanation) {
            card.appendChild(el("div", "explain",
                '<div class="explain-head">Why ' + letters[q.answer] + " is right</div>" + q.explanation));
        }
        return card;
    };

    /* ---------- passage markers ---------- */
    Engine.prototype.markPassage = function () {
        if (!this.passageEl) return;
        var sec = this.section(), a = this.state.answers[sec.id] || {};
        var marks = qsa(this.passageEl, "u[data-q],.qmark[data-q]");
        for (var i = 0; i < marks.length; i++) {
            var n = parseInt(marks[i].getAttribute("data-q"), 10);
            marks[i].classList.toggle("q-done", a[n] !== undefined);
            marks[i].classList.toggle("q-active", this.currentQ === n);
        }
    };

    /* ---------- track which question is on screen ---------- */
    Engine.prototype.watchCurrent = function () {
        var self = this;
        if (this.observer) this.observer.disconnect();
        if (!global.IntersectionObserver) return;
        this.observer = new global.IntersectionObserver(function (entries) {
            var best = null;
            for (var i = 0; i < entries.length; i++) {
                if (entries[i].isIntersecting) {
                    var n = parseInt(entries[i].target.getAttribute("data-qn"), 10);
                    if (best === null || n < best) best = n;
                }
            }
            if (best !== null && best !== self.currentQ) {
                self.currentQ = best;
                self.markPassage();
                self.highlightPalette();
                var mark = self.passageEl && self.passageEl.querySelector('[data-q="' + best + '"]');
                if (mark && typeof mark.scrollIntoView === "function") {
                    var box = self.passageEl.parentNode;
                    if (box && box.scrollHeight > box.clientHeight + 40) {
                        mark.scrollIntoView({ block: "center", behavior: "smooth" });
                    }
                }
            }
        }, { rootMargin: "-90px 0px -55% 0px", threshold: 0 });

        var cards = qsa(this.root, ".q-card");
        for (var i = 0; i < cards.length; i++) this.observer.observe(cards[i]);
    };

    /* ---------- palette ---------- */
    Engine.prototype.drawPalette = function () {
        if (!this.palGrid) return;
        var self = this, sec = this.section();
        var list = this.allQuestions(sec);
        var a = this.state.answers[sec.id] || {}, f = this.state.flags[sec.id] || {};
        this.palGrid.innerHTML = "";
        for (var i = 0; i < list.length; i++) {
            (function (item) {
                var n = item.q.n;
                var b = el("button", "pdot", String(n));
                b.type = "button";
                b.setAttribute("data-qn", n);
                if (a[n] !== undefined) b.classList.add("answered");
                if (f[n]) b.classList.add("flagged");
                b.onclick = function () { self.goToQuestion(n, item.unit); };
                self.palGrid.appendChild(b);
            })(list[i]);
        }
        this.highlightPalette();
    };

    Engine.prototype.highlightPalette = function () {
        if (!this.palGrid) return;
        var dots = qsa(this.palGrid, ".pdot");
        for (var i = 0; i < dots.length; i++) {
            dots[i].classList.toggle("current",
                parseInt(dots[i].getAttribute("data-qn"), 10) === this.currentQ);
        }
    };

    Engine.prototype.goToQuestion = function (n, unitIdx) {
        var sec = this.section();
        if (this.hasPassages(sec) && unitIdx !== undefined && unitIdx !== this.state.unitIdx) {
            this.state.unitIdx = unitIdx;
            this.save();
            this.drawUnit();
            this.drawPalette();
        }
        var target = document.getElementById("q-" + sec.id + "-" + n);
        if (target) target.scrollIntoView({ behavior: "smooth", block: "center" });
    };

    Engine.prototype.updateProgress = function () {
        if (!this.progressEl) return;
        var sec = this.section(), total = this.allQuestions(sec).length;
        var done = this.answeredCount(sec);
        this.progressEl.textContent = done + " of " + total + " answered";
    };

    /* ---------- timer ---------- */
    Engine.prototype.startTimer = function () {
        var self = this, sec = this.section();
        var last = Date.now(), saveTick = 0;
        this.stopTimer();
        this.timer = global.setInterval(function () {
            var now = Date.now();
            var delta = (now - last) / 1000;
            last = now;
            self.state.timeLeft[sec.id] = Math.max(0, self.state.timeLeft[sec.id] - delta);
            self.state.spent[sec.id] += delta;

            var left = self.state.timeLeft[sec.id];
            if (self.clockEl) {
                self.clockEl.textContent = ACT.fmtClock(left);
                self.clockEl.className = "timer" + (left <= 60 ? " danger" : (left <= 300 ? " warn" : ""));
            }
            if (++saveTick >= 5) { saveTick = 0; self.save(); }
            if (left <= 0) {
                self.stopTimer();
                ACT.toast("Time is up on " + sec.name + ".", 3200);
                self.finishSection();
            }
        }, 1000);
    };

    Engine.prototype.stopTimer = function () {
        if (this.timer) { global.clearInterval(this.timer); this.timer = null; }
    };

    /* ---------- submission ---------- */
    Engine.prototype.confirmSubmit = function () {
        var sec = this.section();
        var total = this.allQuestions(sec).length;
        var blank = total - this.answeredCount(sec);
        var msg = blank > 0
            ? "You have " + blank + " unanswered question" + (blank === 1 ? "" : "s") +
              " in " + sec.name + ". There is no penalty for a wrong answer on the ACT, so guess on every one.\n\nSubmit anyway?"
            : "Submit " + sec.name + " and move on?";
        if (global.confirm(msg)) this.finishSection();
    };

    Engine.prototype.finishSection = function () {
        this.stopTimer();
        this.state.done[this.section().id] = 1;
        if (this.state.sectionIdx >= this.sections.length - 1) {
            this.state.finishedAt = Date.now();
            this.state.screen = "results";
        } else {
            var wasSecond = this.state.sectionIdx === 1;
            this.state.sectionIdx++;
            this.state.unitIdx = 0;
            this.currentQ = null;
            this.state.screen = (wasSecond && this.sections.length > 2) ? "break" : "sectionIntro";
        }
        this.save();
        this.render();
    };

    /* ============================================================
       Results
       ============================================================ */
    Engine.prototype.renderResults = function () {
        var self = this;
        var COMP_KEYS = ["english", "math", "reading"];
        var scores = {}, results = [], compPresent = 0;
        for (var i = 0; i < this.sections.length; i++) {
            var sec = this.sections[i];
            var r = this.scoreSection(sec);
            results.push({ sec: sec, r: r });
            if (r.base) {
                scores[r.base] = r.scale;
                if (COMP_KEYS.indexOf(r.base) >= 0) compPresent++;
            }
        }
        var isFullTest = compPresent === 3;
        var comp = isFullTest ? ACT.composite(scores) : null;

        var wrap = el("div");

        // hero — a composite only makes sense when all three scored sections are present
        if (isFullTest) {
            var base = ACT.baseline.composite;
            var diff = comp - base;
            var deltaTxt = diff === 0
                ? "Same as your last real ACT composite of " + base + "."
                : (diff > 0 ? "That is " + diff + " point" + (diff === 1 ? "" : "s") + " above your " + base + "."
                    : "That is " + Math.abs(diff) + " point" + (Math.abs(diff) === 1 ? "" : "s") + " below your " + base + ". One test is noise \u2014 look at the topic table below.");
            wrap.appendChild(el("div", "score-hero",
                '<div class="composite-label">Estimated composite</div>' +
                '<div class="composite">' + comp + "</div>" +
                '<div class="delta">' + deltaTxt + "</div>" +
                '<div class="delta" style="font-size:.8rem;opacity:.8;margin-top:.5rem">' +
                "English, Math, and Reading only \u2014 Science is reported separately on the Enhanced ACT.</div>"));
        } else {
            var only = results[0];
            var noScale = only.r.scale == null;
            var pct = Math.round(only.r.right / only.r.total * 100);
            var headline = noScale ? pct + "%" : String(only.r.scale);
            var label = noScale ? "Drill score" : "Estimated " + only.sec.name + " score";
            var sub = noScale
                ? only.r.right + " of " + only.r.total + " correct. A drill is too short to scale, so treat this as a percentage."
                : only.r.right + " of " + only.r.total + " correct. A composite needs all three scored sections, so there is no composite here.";
            wrap.appendChild(el("div", "score-hero",
                '<div class="composite-label">' + label + "</div>" +
                '<div class="composite">' + headline + "</div>" +
                '<div class="delta">' + sub + "</div>"));
        }

        // tiles
        var tiles = el("div", "score-grid");
        tiles.style.marginBottom = "1.5rem";
        for (var j = 0; j < results.length; j++) {
            var sec2 = results[j].sec, r2 = results[j].r;
            var prev = r2.base ? ACT.baseline[r2.base] : undefined;
            var pctRight = Math.round(r2.right / r2.total * 100);
            var chgHtml = "";
            if (typeof prev === "number" && r2.scale != null) {
                var chg = r2.scale - prev;
                var cls = chg > 0 ? "up" : (chg < 0 ? "down" : "flat");
                var arrow = chg > 0 ? "\u25B2 +" + chg : (chg < 0 ? "\u25BC " + chg : "\u2014 no change");
                chgHtml = '<div class="schg ' + cls + '">' + arrow + " vs " + prev + "</div>";
            }
            tiles.appendChild(el("div", "score-tile",
                '<div class="sname">' + sec2.name + (r2.base === "science" ? " \u00b7 optional" : "") + "</div>" +
                '<div class="sval">' + (r2.scale == null ? pctRight + "%" : r2.scale) + "</div>" +
                '<div class="sraw">' + r2.right + " / " + r2.total + " correct" +
                (r2.blank ? " &middot; " + r2.blank + " blank" : "") + "</div>" + chgHtml +
                '<div class="meter" style="margin-top:.6rem"><i data-pct="' + pctRight + '"></i></div>'));
        }
        wrap.appendChild(tiles);

        // pacing
        var paceRows = "";
        for (var p = 0; p < results.length; p++) {
            var sp = Math.round(this.state.spent[results[p].sec.id] / 60);
            paceRows += "<tr><td>" + results[p].sec.name + "</td><td>" + sp + " of " +
                results[p].sec.timeMinutes + " min</td><td>" +
                (sp >= results[p].sec.timeMinutes ? '<span class="badge amber">Used the full clock</span>'
                    : '<span class="badge good">Finished with time to spare</span>') + "</td></tr>";
        }

        // topic weaknesses
        var agg = {};
        for (var t = 0; t < results.length; t++) {
            var tp = results[t].r.topics;
            for (var name in tp) {
                if (!Object.prototype.hasOwnProperty.call(tp, name)) continue;
                var key = results[t].sec.name + " \u2014 " + name;
                if (!agg[key]) agg[key] = { right: 0, total: 0 };
                agg[key].right += tp[name].right;
                agg[key].total += tp[name].total;
            }
        }
        var rowsArr = [];
        for (var kk in agg) {
            if (Object.prototype.hasOwnProperty.call(agg, kk)) {
                rowsArr.push({ name: kk, right: agg[kk].right, total: agg[kk].total, pct: agg[kk].right / agg[kk].total });
            }
        }
        rowsArr.sort(function (a, b) { return a.pct - b.pct || b.total - a.total; });

        var weak = rowsArr.filter(function (x) { return x.pct < 1; }).slice(0, 12);
        var weakHtml = "";
        for (var w = 0; w < weak.length; w++) {
            var pctv = Math.round(weak[w].pct * 100);
            var barCls = pctv >= 80 ? "good" : (pctv >= 50 ? "amber" : "bad");
            weakHtml += '<div class="meter-row"><span class="mlabel">' + ACT.escapeHtml(weak[w].name) + "</span>" +
                '<span class="meter"><i class="' + barCls + '" data-pct="' + pctv + '"></i></span>' +
                '<span class="mval">' + weak[w].right + "/" + weak[w].total + "</span></div>";
        }

        wrap.appendChild(el("div", "grid grid-2",
            '<div class="card"><h3 style="margin-top:0">Pacing</h3>' +
            '<div class="table-scroll"><table class="data-table"><thead><tr><th>Section</th><th>Time used</th><th></th></tr></thead><tbody>' +
            paceRows + "</tbody></table></div></div>" +
            '<div class="card"><h3 style="margin-top:0">What to fix first</h3>' +
            (weakHtml ? "<p class=\"muted\" style=\"font-size:.88rem\">Your weakest topics, worst first. Put the top three on tomorrow's study list.</p>" + weakHtml
                : "<p>You did not miss anything. Take the next test.</p>") +
            "</div>"));

        // review buttons
        var actions = el("div", "card");
        actions.style.marginTop = "1.25rem";
        actions.innerHTML = '<h3 style="margin-top:0">Review your answers</h3>' +
            "<p class=\"muted\">This is the part that actually raises your score. For every question you missed, " +
            "read the explanation and write the rule in your error log before you move on.</p>" +
            '<div class="btn-row" id="revBtns"></div>';
        var rb = actions.querySelector("#revBtns");
        for (var rr = 0; rr < this.sections.length; rr++) {
            (function (idx) {
                var b = el("button", "btn" + (idx === 0 ? "" : " secondary"),
                    "Review " + self.sections[idx].name);
                b.onclick = function () {
                    self.state.screen = "review";
                    self.state.reviewIdx = idx;
                    self.reviewFilter = "wrong";
                    self.save(); self.render();
                };
                rb.appendChild(b);
            })(rr);
        }
        var again = el("button", "btn ghost", "Retake this test");
        again.onclick = function () {
            if (global.confirm("Erase every answer on this test and start fresh?")) self.reset();
        };
        rb.appendChild(again);
        wrap.appendChild(actions);

        this.root.appendChild(wrap);
        ACT.autoFillMeters(this.root);

        // remember the result so the dashboard and drill list can show it
        if (isFullTest) {
            var hist = ACT.store.get("history", {});
            hist[this.o.testId] = {
                title: this.o.title, at: this.state.finishedAt || Date.now(),
                scores: scores, composite: comp
            };
            ACT.store.set("history", hist);
        } else if (this.o.testId.indexOf("drill_") === 0) {
            var ds = ACT.store.get("drillScores", {});
            var did = this.o.testId.slice(6);
            var only2 = results[0].r;
            var p = Math.round(only2.right / only2.total * 100);
            if (!ds[did] || p > ds[did].pct) {
                ds[did] = { right: only2.right, total: only2.total, pct: p, at: Date.now() };
            }
            ACT.store.set("drillScores", ds);
        }
    };

    /* ============================================================
       Review
       ============================================================ */
    Engine.prototype.renderReview = function () {
        var self = this;
        var idx = this.state.reviewIdx || 0;
        var sec = this.sections[idx];
        var r = this.scoreSection(sec);

        var head = el("div", "card");
        head.style.marginBottom = "1.25rem";
        var tabs = "";
        for (var i = 0; i < this.sections.length; i++) {
            tabs += '<button class="btn sm ' + (i === idx ? "" : "secondary") + '" data-sec="' + i + '">' +
                this.sections[i].name + "</button>";
        }
        head.innerHTML =
            '<h2 style="margin-top:0">' + sec.name + " review</h2>" +
            "<p class=\"muted\">" + r.right + " right &middot; " + r.wrong + " wrong &middot; " + r.blank +
            " blank" + (r.scale == null
                ? " &middot; " + Math.round(r.right / r.total * 100) + "% correct"
                : " &middot; estimated scale score <strong>" + r.scale + "</strong>") + "</p>" +
            '<div class="btn-row" style="margin-bottom:.8rem" id="secTabs">' + tabs + "</div>" +
            '<div class="btn-row" id="filters">' +
            '<button class="btn sm ghost" data-f="wrong">Missed and blank only</button>' +
            '<button class="btn sm ghost" data-f="flagged">Flagged</button>' +
            '<button class="btn sm ghost" data-f="all">Everything</button>' +
            '<button class="btn sm secondary" id="backRes" style="margin-left:auto">Back to results</button>' +
            "</div>";
        this.root.appendChild(head);

        qsa(head, "#secTabs button").forEach(function (b) {
            b.onclick = function () {
                self.state.reviewIdx = parseInt(b.getAttribute("data-sec"), 10);
                self.save(); self.render();
            };
        });
        qsa(head, "#filters button[data-f]").forEach(function (b) {
            if (b.getAttribute("data-f") === self.reviewFilter) b.className = "btn sm";
            b.onclick = function () { self.reviewFilter = b.getAttribute("data-f"); self.render(); };
        });
        head.querySelector("#backRes").onclick = function () {
            self.state.screen = "results"; self.save(); self.render();
        };

        var a = this.state.answers[sec.id] || {}, f = this.state.flags[sec.id] || {};
        var shown = 0;

        for (var u = 0; u < sec.units.length; u++) {
            var unit = sec.units[u];
            var keep = [];
            for (var q = 0; q < unit.questions.length; q++) {
                var qq = unit.questions[q];
                var pick = a[qq.n];
                var isWrong = pick === undefined || pick !== qq.answer;
                if (this.reviewFilter === "wrong" && !isWrong) continue;
                if (this.reviewFilter === "flagged" && !f[qq.n]) continue;
                keep.push(qq);
            }
            if (!keep.length) continue;
            shown += keep.length;

            var block = el("div", "review-mode");
            block.style.marginBottom = "1.75rem";

            if (unit.html && unit.html.length > 10) {
                var det = el("details", "acc");
                det.innerHTML = "<summary>" + (unit.title || "Passage " + (u + 1)) +
                    " &mdash; show the passage</summary>";
                var bodyDiv = el("div", "acc-body");
                var pw = el("div", "passage");
                pw.innerHTML = (unit.intro ? '<p class="passage-intro">' + unit.intro + "</p>" : "") + unit.html;
                bodyDiv.appendChild(pw);
                det.appendChild(bodyDiv);
                block.appendChild(det);
            } else if (unit.title) {
                block.appendChild(el("h3", null, unit.title));
            }

            var list = el("div", "q-list");
            for (var kq = 0; kq < keep.length; kq++) list.appendChild(this.qCard(keep[kq], sec, true));
            block.appendChild(list);
            this.root.appendChild(block);
        }

        if (!shown) {
            this.root.appendChild(el("div", "card center",
                "<p style=\"margin:0\">Nothing to show with this filter. " +
                (this.reviewFilter === "wrong" ? "You did not miss a single question in this section."
                    : "You did not flag anything here.") + "</p>"));
        }
    };

    /* ---------- keyboard ---------- */
    Engine.prototype.bindKeys = function () {
        var self = this;
        document.addEventListener("keydown", function (e) {
            if (self.state.screen !== "exam") return;
            var tag = (e.target.tagName || "").toLowerCase();
            if (tag === "input" || tag === "textarea" || tag === "select") return;
            if (e.ctrlKey || e.metaKey || e.altKey) return;

            var map = { a: 0, b: 1, c: 2, d: 3, f: 0, g: 1, h: 2, j: 3, 1: 0, 2: 1, 3: 2, 4: 3 };
            var k = e.key.toLowerCase();
            if (self.currentQ !== null && Object.prototype.hasOwnProperty.call(map, k)) {
                var card = self.root.querySelector('.q-card[data-qn="' + self.currentQ + '"]');
                if (card) {
                    var choices = qsa(card, ".choice");
                    if (choices[map[k]]) { choices[map[k]].click(); e.preventDefault(); }
                }
            }
        });
    };

    /* ============================================================
       Public mounts
       ============================================================ */
    ACT.Test = {
        mount: function (opts) { return new Engine(opts); },

        mountDrill: function (opts) {
            var set = null, all = (bank().drills || []);
            for (var i = 0; i < all.length; i++) if (all[i].id === opts.drillId) set = all[i];
            if (!set) {
                opts.el.innerHTML = '<div class="card"><h3>Drill not found</h3><p>No drill set matches "' +
                    ACT.escapeHtml(opts.drillId) + '".</p></div>';
                return null;
            }
            var sectionObj = {
                id: "drill_" + set.id,
                name: set.title,
                timeMinutes: set.timeMinutes || 10,
                units: [{
                    title: set.passageTitle || "",
                    html: set.passageHtml || "",
                    questions: set.questions
                }]
            };
            bank()[sectionObj.id] = sectionObj;
            return new Engine({
                el: opts.el,
                testId: "drill_" + set.id,
                title: set.title,
                blurb: set.blurb || "",
                sections: [sectionObj.id]
            });
        }
    };

})(window);
