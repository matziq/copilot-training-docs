import functools
import threading
import unittest
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

from playwright.sync_api import sync_playwright


ROOT = Path(__file__).resolve().parents[1]
GUIDE = "/inspire/2026-11-17-agents-skills-office-hours/"


class QuietHandler(SimpleHTTPRequestHandler):
    def log_message(self, *_):
        pass


class InspireAppearanceTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.server = ThreadingHTTPServer(
            ("127.0.0.1", 0), functools.partial(QuietHandler, directory=str(ROOT))
        )
        cls.thread = threading.Thread(target=cls.server.serve_forever, daemon=True)
        cls.thread.start()
        cls.base = f"http://127.0.0.1:{cls.server.server_port}"
        cls.playwright = sync_playwright().start()
        cls.browser = cls.playwright.chromium.launch(
            channel="msedge", headless=True, timeout=15000
        )

    @classmethod
    def tearDownClass(cls):
        cls.browser.close()
        cls.playwright.stop()
        cls.server.shutdown()
        cls.server.server_close()
        cls.thread.join(timeout=5)

    def setUp(self):
        self.context = self.browser.new_context(
            permissions=["clipboard-read", "clipboard-write"]
        )
        self.addCleanup(self.context.close)
        self.page = self.context.new_page()
        self.page.set_default_timeout(5000)
        self.errors = []
        self.page.on("pageerror", lambda error: self.errors.append(str(error)))
        self.page.goto(self.base + GUIDE, wait_until="load", timeout=15000)

    def test_rendered_controls_and_all_responsive_palettes(self):
        page = self.page
        palettes = set()
        for width in (1440, 390):
            page.set_viewport_size({"width": width, "height": 1000})
            for mode in ("light", "dark"):
                if page.locator("#themebtn").inner_text() != f"Mode: {mode.title()}":
                    page.locator("#themebtn").click()
                for season in ("autumn", "winter", "spring", "summer"):
                    for _ in range(4):
                        if page.locator("html").get_attribute("data-season") == season:
                            break
                        page.locator("#seasonbtn").click()
                    self.assertEqual(page.locator("html").get_attribute("data-season"), season)
                    with self.subTest(width=width, mode=mode, season=season):
                        result = page.evaluate("""() => {
                          const style = e => getComputedStyle(e);
                          const header = document.querySelector('.topbar');
                          const h = style(header);
                          const rgb = s => s.match(/[\\d.]+/g).slice(0,3).map(Number);
                          const luminance = c => rgb(c).map(n => n / 255)
                            .map(n => n <= .04045 ? n / 12.92 : ((n + .055) / 1.055) ** 2.4)
                            .reduce((sum,n,i) => sum + n * [.2126,.7152,.0722][i], 0);
                          const controls = ['themebtn','seasonbtn','animationbtn'].map(id => {
                            const e = document.getElementById(id), s = style(e), r = e.getBoundingClientRect();
                            const bg = s.backgroundColor === 'rgba(0, 0, 0, 0)' ? h.backgroundColor : s.backgroundColor;
                            const a = luminance(s.color), b = luminance(bg);
                            return {id, contrast:(Math.max(a,b)+.05)/(Math.min(a,b)+.05),
                              width:r.width, height:r.height, left:r.left, right:r.right,
                              padding:parseFloat(s.paddingTop), visible:s.visibility !== 'hidden'};
                          });
                          const text = ['#overview .ihead','#overview .ihead span','#overview .ipill',
                            '#overview .ibody','.session-plan caption','.session-plan td',
                            '.toc a','.topic-links a'].map(selector => {
                              const e = document.querySelector(selector);
                              let ancestor = e;
                              while (style(ancestor).backgroundColor === 'rgba(0, 0, 0, 0)')
                                ancestor = ancestor.parentElement;
                              const a = luminance(style(e).color);
                              const b = luminance(style(ancestor).backgroundColor);
                              return {selector, contrast:(Math.max(a,b)+.05)/(Math.min(a,b)+.05)};
                            });
                          return {headerDisplay:h.display, headerBackground:h.backgroundColor,
                            controls, text, background:style(document.body).backgroundColor,
                            foreground:style(document.body).color,
                            overflow:document.documentElement.scrollWidth > innerWidth + 1,
                            headingFont:style(document.querySelector('#overview h2')).fontFamily};
                        }""")
                        self.assertEqual(result["headerDisplay"], "flex")
                        self.assertIn("Georgia", result["headingFont"])
                        self.assertFalse(result["overflow"])
                        for sample in result["text"]:
                            self.assertGreaterEqual(sample["contrast"], 4.5, sample)
                        for control in result["controls"]:
                            self.assertTrue(control["visible"])
                            self.assertGreaterEqual(control["contrast"], 4.5, control)
                            self.assertGreaterEqual(control["height"], 30, control)
                            self.assertGreaterEqual(control["padding"], 6, control)
                            self.assertGreaterEqual(control["left"], 0, control)
                            self.assertLessEqual(control["right"], width, control)
                        if width == 1440:
                            palettes.add((result["background"], result["foreground"]))
            print(f"PASS: rendered eight palettes and visible AA controls at {width}px", flush=True)
        self.assertEqual(len(palettes), 8)
        self.assertEqual(self.errors, [])

    def test_keyboard_preferences_effects_and_student_controls(self):
        page = self.page
        page.locator("#themebtn").focus()
        page.keyboard.press("Enter")
        self.assertEqual(page.locator("#themebtn").inner_text(), "Mode: Dark")
        page.locator("#seasonbtn").focus()
        page.keyboard.press("Enter")
        self.assertEqual(page.locator("html").get_attribute("data-season"), "winter")
        self.assertGreater(page.locator(".season-particle").count(), 0)
        self.assertNotEqual(
            page.locator(".season-particle").first.evaluate("e => getComputedStyle(e).animationName"),
            "none",
        )
        page.locator("#animationbtn").focus()
        page.keyboard.press("Space")
        self.assertEqual(page.locator("#animationbtn").get_attribute("aria-pressed"), "false")
        self.assertEqual(page.locator("#season-effects > *").count(), 0)
        page.reload(wait_until="load", timeout=15000)
        self.assertEqual(page.locator("#themebtn").inner_text(), "Mode: Dark")
        self.assertEqual(page.locator("html").get_attribute("data-season"), "winter")
        self.assertEqual(page.locator("#animationbtn").inner_text(), "Animations: Off")
        page.locator("#seasonbtn").click()
        self.assertEqual(page.locator("html").get_attribute("data-season"), "spring")
        self.assertEqual(page.locator("#season-effects > *").count(), 0)
        page.locator("#animationbtn").click()
        for season, selector in (("summer", ".season-sun"), ("autumn", ".season-particle"),
                                 ("winter", ".season-particle"), ("spring", ".season-particle")):
            page.locator("#seasonbtn").click()
            self.assertEqual(page.locator("html").get_attribute("data-season"), season)
            self.assertGreater(page.locator(selector).count(), 0)
        page.emulate_media(reduced_motion="reduce")
        page.wait_for_function("document.getElementById('animationbtn').disabled")
        self.assertEqual(page.locator("#season-effects > *").count(), 0)
        self.assertEqual(page.locator("#animationbtn").inner_text(), "Animations: Off")
        page.emulate_media(reduced_motion="no-preference")
        page.wait_for_function("!document.getElementById('animationbtn').disabled")
        self.assertEqual(page.locator("#animationbtn").inner_text(), "Animations: On")
        page.locator("#navbtn").click()
        page.reload(wait_until="load", timeout=15000)
        self.assertEqual(page.locator("html").get_attribute("data-navigation"), "compact")
        page.locator("#guide-search").fill("PowerPoint")
        page.locator("#search-results a").first.click()
        self.assertEqual(page.locator("#guide-search").input_value(), "")
        page.locator(".topic-links a[href='#d08']").click()
        self.assertTrue(page.locator("#d08").evaluate("e => e.open"))
        page.locator("#expandall").click()
        box = page.locator("#d08 .promptbox").first
        box.locator(".copy").click()
        self.assertEqual(
            page.evaluate("navigator.clipboard.readText()").replace("\r\n", "\n"),
            box.locator("pre").text_content().replace("\r\n", "\n"),
        )
        links = page.locator("a[href*='Inspire_Agents_Skills_practice_sources/']").evaluate_all(
            "elements => [...new Set(elements.map(e => e.href))]"
        )
        self.assertEqual(len(links), 9)
        for link in links:
            self.assertTrue(self.context.request.get(link, timeout=10000).ok, link)
        page.locator("#collapseall").click()
        self.assertEqual(page.locator("details[open]").count(), 0)
        self.assertEqual(self.errors, [])
        print("PASS: keyboard, persistence, effects, reduced motion, search/navigation, actual clipboard and nine files", flush=True)

    def test_starting_prompts_copy_four_plain_text_lines(self):
        page = self.page
        page.locator("#expandall").click()
        copied_demos = []
        for number in range(1, 9):
            demo = f"d{number:02}"
            boxes = page.locator(f"#{demo}-start .promptbox")
            for box in boxes.all():
                visible = box.locator("pre").text_content()
                box.locator(".copy").click()
                copied = page.evaluate("navigator.clipboard.readText()").replace("\r\n", "\n")
                self.assertEqual(copied, visible.replace("\r\n", "\n"))
                self.assertEqual(
                    [line.split(":", 1)[0] for line in copied.splitlines()],
                    ["Goal", "Context", "Source", "Expectation"],
                )
                self.assertNotRegex(copied, r"</?strong>|<br\s*/?>|&lt;")
                copied_demos.append(demo)
        self.assertEqual(copied_demos, ["d01", "d04", "d06", "d07", "d08"])
        self.assertEqual(self.errors, [])
        print("PASS: all eight demos inspected; five GCSE starting prompts copied as four readable plain-text lines", flush=True)


if __name__ == "__main__":
    unittest.main()
