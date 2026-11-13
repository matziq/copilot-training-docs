"""Focused customer-menu checks. Run with: python tests\\customer_hubs_test.py."""
from functools import partial
from html.parser import HTMLParser
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from threading import Thread
from urllib.parse import unquote, urlsplit
import argparse
import re
import unittest

ROOT = Path(__file__).resolve().parents[1]
CUSTOMERS = ("inspire", "elc", "mcbc", "dg", "lids", "rcg")


class Links(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.urls = []
        self.robots = {}

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        for key in ("href", "src"):
            if key in attrs:
                self.urls.append(attrs[key])
        if tag == "meta" and attrs.get("name") in ("robots", "googlebot"):
            self.robots[attrs["name"]] = set(attrs.get("content", "").replace(" ", "").split(","))


class StaticChecks(unittest.TestCase):
    def test_all_relocated_pages_are_noindexed_and_local_links_resolve(self):
        for customer in CUSTOMERS:
            for page in (ROOT / customer).rglob("*.html"):
                with self.subTest(page=page):
                    parsed = Links()
                    parsed.feed(page.read_text(encoding="utf-8"))
                    for name in ("robots", "googlebot"):
                        self.assertTrue({"noindex", "nofollow", "noarchive"} <= parsed.robots.get(name, set()))
                    for value in parsed.urls:
                        url = urlsplit(value)
                        if url.scheme or url.netloc or not url.path:
                            continue
                        target = (ROOT / unquote(url.path.lstrip("/"))) if url.path.startswith("/") else (page.parent / unquote(url.path))
                        self.assertTrue(target.exists(), f"{page}: broken {value}")

    def test_customer_navigation_stays_scoped(self):
        for customer in CUSTOMERS:
            parsed = Links()
            parsed.feed((ROOT / customer / "index.html").read_text(encoding="utf-8"))
            for value in parsed.urls:
                if value.startswith(("data:", "#")):
                    continue
                self.assertFalse(urlsplit(value).netloc)
                self.assertTrue((ROOT / customer / value).resolve().is_relative_to(ROOT / customer))
            self.assertTrue(any(value.startswith("data:image/svg+xml,") for value in parsed.urls))
        self.assertTrue((ROOT / ".nojekyll").exists())
        self.assertFalse(list(ROOT.glob("*sitemap*")))
        for page in (ROOT / "index.html", ROOT / "4b83d8637cbfcfb446/index.html"):
            content = page.read_text(encoding="utf-8")
            self.assertNotIn("Copilot-Chat-IT-Superpower-MolsonCoors.html", content)
            self.assertNotIn("RCG%20Copilot%20Agents%20Training%20Session%20Demos.html", content)


class QuietHandler(SimpleHTTPRequestHandler):
    def log_message(self, *args):
        pass


class BrowserChecks(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        from playwright.sync_api import sync_playwright
        cls.server = ThreadingHTTPServer(("127.0.0.1", 0), partial(QuietHandler, directory=str(ROOT)))
        cls.thread = Thread(target=cls.server.serve_forever, daemon=True)
        cls.thread.start()
        cls.base = f"http://127.0.0.1:{cls.server.server_port}"
        cls.playwright = sync_playwright().start()
        cls.browser = cls.playwright.chromium.launch(channel="msedge", headless=True)

    @classmethod
    def tearDownClass(cls):
        cls.browser.close()
        cls.playwright.stop()
        cls.server.shutdown()
        cls.server.server_close()

    def test_filter_dates_disclosures_keyboard_and_theme(self):
        from playwright.sync_api import expect
        context = self.browser.new_context(viewport={"width": 1440, "height": 1000})
        page = context.new_page()
        errors = []
        page.on("pageerror", lambda error: errors.append(str(error)))
        for customer in CUSTOMERS:
            page.goto(f"{self.base}/{customer}/")
            entries = page.locator(".entry")
            total = entries.count()
            self.assertGreater(total, 0)
            expect(page.locator("#count")).to_have_text(f"{total} of {total} training entries shown")
            dates = entries.evaluate_all("(items) => items.map(item => item.dataset.dates.split(' ').filter(Boolean).sort().at(-1) || '')")
            self.assertEqual(dates, sorted(dates, reverse=True))
            page.locator("#filter").fill("no-such-training-987654")
            expect(page.locator(".entry:visible")).to_have_count(0)
            expect(page.locator("#no-results")).to_be_visible()
            page.get_by_role("button", name="Clear filters", exact=True).click()
            expect(page.locator(".entry:visible")).to_have_count(total)
            expect(page.locator("#filter")).to_be_focused()
            page.get_by_role("button", name="Collapse visible entries").click()
            self.assertTrue(entries.evaluate_all("(items) => items.every(item => !item.open)"))
            entries.first.locator("summary").focus()
            page.keyboard.press("Enter")
            self.assertTrue(entries.first.evaluate("(item) => item.open"))
            page.get_by_role("button", name="Expand visible entries").click()
            self.assertTrue(entries.evaluate_all("(items) => items.every(item => item.open)"))
            nav = page.locator("#menu-nav a")
            nav.first.focus()
            page.keyboard.press("ArrowDown")
            expect(nav.nth(1)).to_be_focused()
            page.keyboard.press("End")
            expect(nav.last).to_be_focused()
            page.keyboard.press("Home")
            expect(nav.first).to_be_focused()
            old_mode = page.locator("html").get_attribute("data-theme")
            page.locator("#theme").click()
            new_mode = page.locator("html").get_attribute("data-theme")
            self.assertNotEqual(old_mode, new_mode)
            page.reload()
            self.assertEqual(page.locator("html").get_attribute("data-theme"), new_mode)
            page.set_viewport_size({"width": 390, "height": 844})
            self.assertTrue(page.evaluate("document.documentElement.scrollWidth <= innerWidth"))
            page.set_viewport_size({"width": 1440, "height": 1000})
        page.goto(f"{self.base}/elc/")
        page.locator("#filter").fill("Excel")
        self.assertGreater(page.locator(".entry:visible").count(), 0)
        self.assertLess(page.locator(".entry:visible").count(), page.locator(".entry").count())
        page.get_by_role("button", name="Reset filters", exact=True).click()
        page.locator("#date-filter").select_option("2026-11-11")
        expect(page.locator(".entry:visible")).to_have_count(2)
        page.locator("#date-filter").select_option("unknown")
        self.assertTrue(page.locator(".entry:visible").evaluate_all("(items) => items.every(item => item.dataset.dates === '')"))
        page.goto(f"{self.base}/inspire/")
        page.locator("#filter").fill("2026-11-17 skills")
        expect(page.locator(".entry:visible")).to_have_count(1)
        if SCREENSHOT:
            page.set_viewport_size({"width": 1440, "height": 1000})
            page.screenshot(path=str(SCREENSHOT), full_page=True)
        self.assertEqual(errors, [])
        context.close()

    def test_storage_denial_system_dark_mode_and_menu_collapse(self):
        from playwright.sync_api import expect
        context = self.browser.new_context(color_scheme="dark", viewport={"width": 390, "height": 844})
        context.add_init_script("Object.defineProperty(window, 'localStorage', {get() {throw new DOMException('Denied', 'SecurityError')}});")
        page = context.new_page()
        errors = []
        page.on("pageerror", lambda error: errors.append(str(error)))
        page.goto(f"{self.base}/inspire/")
        expect(page.locator("#storage-warning")).to_be_visible()
        self.assertEqual(page.locator("html").get_attribute("data-theme"), "dark")
        page.locator("#theme").click()
        self.assertEqual(page.locator("html").get_attribute("data-theme"), "light")
        page.locator("aside summary").click()
        expect(page.locator("#menu-nav")).not_to_be_visible()
        page.locator("aside summary").press("Enter")
        expect(page.locator("#menu-nav")).to_be_visible()
        self.assertEqual(errors, [])
        context.close()

    def test_legacy_query_hash_and_guide_resource_opening(self):
        context = self.browser.new_context()
        page = context.new_page()
        cases = {
            "elc-student-fb7ed91b834e1690917159b8b48546db/": "elc/2026-10-23-leading-with-copilot/index.html",
            "6f0d9c72a4b1483ba793ab4a1d2e6f85/": "elc/2026-10-20-leading-with-copilot/index.html",
            "copilot-training-docs/6f0d9c72a4b1483ba793ab4a1d2e6f85/": "elc/2026-10-20-leading-with-copilot/index.html",
            "customer-student-9a655f298d2ec6e3eb100255b3d5d377/": "inspire/2026-11-17-copilot-skills/index.html",
        }
        for old, new in cases.items():
            page.goto(f"{self.base}/{old}?class=revisit#d01")
            page.wait_for_url(f"{self.base}/{new}?class=revisit#d01")
            self.assertTrue(page.locator("[data-customer-menu] a").count())
        for customer in CUSTOMERS:
            page.goto(f"{self.base}/{customer}/")
            guides = page.locator(".resources a").evaluate_all("(items) => items.map(item => item.href).filter(url => url.endsWith('.html'))")
            for url in guides:
                response = page.goto(url)
                self.assertEqual(response.status, 200)
                self.assertTrue(page.locator("[data-customer-menu] a").count())
                parsed = Links()
                parsed.feed(page.content())
                for value in parsed.urls:
                    parsed_url = urlsplit(value)
                    if parsed_url.scheme or parsed_url.netloc or not parsed_url.path:
                        continue
                    if parsed_url.path.endswith((".txt", ".csv", ".pdf", ".xlsx", ".svg", ".png")):
                        from urllib.parse import urljoin
                        resource = context.request.get(urljoin(page.url, value))
                        self.assertEqual(resource.status, 200, value)
                menu = page.locator("[data-customer-menu] a").get_attribute("href")
                from urllib.parse import urljoin
                self.assertEqual(urljoin(page.url, menu), f"{self.base}/{customer}/index.html")
        context.close()


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--static-only", action="store_true")
    parser.add_argument("--screenshot", type=Path)
    args = parser.parse_args()
    SCREENSHOT = args.screenshot
    suite = unittest.defaultTestLoader.loadTestsFromTestCase(StaticChecks)
    if not args.static_only:
        suite.addTests(unittest.defaultTestLoader.loadTestsFromTestCase(BrowserChecks))
    result = unittest.TextTestRunner(verbosity=2).run(suite)
    raise SystemExit(not result.wasSuccessful())
