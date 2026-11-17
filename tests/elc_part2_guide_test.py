"""Regression checks for the linked ELC Part 2 beginner practice package."""
import csv
from html.parser import HTMLParser
import io
from pathlib import Path
import unittest
from urllib.parse import unquote, urlsplit
from xml.etree import ElementTree as ET
from zipfile import ZipFile


ROOT = Path(__file__).resolve().parents[1]
PAGE = ROOT / "elc" / "2026-11-gccs" / "part-2" / "index.html"
ASSETS = PAGE.parent / "ELC_GCCS_Part2_practice_sources"


class Element:
    def __init__(self, tag="", attrs=()):
        self.tag = tag
        self.attrs = dict(attrs)
        self.children = []

    def walk(self):
        yield self
        for child in self.children:
            if isinstance(child, Element):
                yield from child.walk()

    def text(self):
        return "".join(c.text() if isinstance(c, Element) else c for c in self.children)

    def has_class(self, value):
        return value in self.attrs.get("class", "").split()


class Document(HTMLParser):
    def __init__(self, text):
        super().__init__(convert_charrefs=True)
        self.root = Element()
        self.stack = [self.root]
        self.feed(text)

    def handle_starttag(self, tag, attrs):
        node = Element(tag, attrs)
        self.stack[-1].children.append(node)
        if tag not in {"area", "base", "br", "col", "embed", "hr", "img", "input",
                       "link", "meta", "param", "source", "track", "wbr"}:
            self.stack.append(node)

    def handle_endtag(self, tag):
        for i in range(len(self.stack) - 1, 0, -1):
            if self.stack[i].tag == tag:
                del self.stack[i:]
                break

    def handle_data(self, data):
        self.stack[-1].children.append(data)


class GuideChecks(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.text = PAGE.read_text(encoding="utf-8")
        cls.nodes = list(Document(cls.text).root.walk())
        cls.ids = {n.attrs["id"]: n for n in cls.nodes if "id" in n.attrs}

    def test_section_order_and_navigation_match_app_sequence(self):
        sections = [n for n in self.nodes if n.has_class("section")]
        order = ["overview", "d01", "d02", "d03", "d04", "skills-prereqs",
                 "d05", "d06", "d07", "d08", "prompting", "memory", "tips",
                 "wrap-up", "about-guide"]
        self.assertEqual([n.attrs["id"] for n in sections], order)
        toc = next(n for n in self.nodes if n.tag == "nav" and n.has_class("toc"))
        self.assertEqual([n.attrs["href"] for n in toc.walk() if n.tag == "a"],
                         ["#" + key for key in order])
        for i, section in enumerate(sections):
            nav = next(n for n in section.walk() if n.has_class("section-nav"))
            expected = (["#" + order[i-1]] if i else []) + (
                ["#" + order[i+1]] if i + 1 < len(order) else [])
            self.assertEqual([n.attrs["href"] for n in nav.walk() if n.tag == "a"], expected)
        self.assertIn("Word", self.ids["d06"].text())
        self.assertIn("same Word document", self.ids["d06-source"].text())
        self.assertIn("PowerPoint", self.ids["d07"].text())

    def test_internal_links_and_source_payloads_resolve(self):
        all_ids = [n.attrs["id"] for n in self.nodes if "id" in n.attrs]
        self.assertEqual(len(all_ids), len(set(all_ids)), "Duplicate anchors")
        for node in self.nodes:
            for key in ("href", "src"):
                url = urlsplit(node.attrs.get(key, ""))
                if url.scheme or url.netloc:
                    continue
                if not url.path and url.fragment:
                    self.assertIn(unquote(url.fragment), self.ids)
                elif url.path:
                    target = (ROOT / url.path.lstrip("/")) if url.path.startswith("/") else PAGE.parent / unquote(url.path)
                    self.assertTrue(target.exists(), str(target))
        sources = [n for n in self.nodes if n.has_class("has-file")]
        self.assertEqual(len(sources), 8)
        for source in sources:
            payload = next(n.text() for n in source.walk() if n.tag == "pre")
            href = next(n.attrs["href"] for n in source.walk() if n.tag == "a")
            file_text = (PAGE.parent / href).read_text(encoding="utf-8")
            self.assertEqual(payload, file_text, href)

    def test_form_fields_match_optional_skill_definition(self):
        fields = [n.text() for n in self.ids["d05-start"].walk() if n.tag == "pre"]
        self.assertEqual(len(fields), 4)
        name, description, instructions, full = fields
        self.assertLessEqual(len(name), 64)
        self.assertRegex(name, r"^[a-z0-9]+(?:-[a-z0-9]+)*$")
        self.assertLessEqual(len(description), 1024)
        self.assertEqual(full, (ASSETS / "d05-aurora-status-brief-skill.txt").read_text(encoding="utf-8"))
        self.assertIn(f"name: {name}\n", full)
        self.assertIn(f"description: {description}\n", full)
        self.assertEqual(instructions, full.split("---", 2)[2].strip())
        self.assertNotIn("Starting prompt", self.ids["d05-start"].text())
        slide_fields = [n.text() for n in self.ids["d07-source"].walk() if n.tag == "pre"]
        self.assertEqual(slide_fields[0] + "\n" + slide_fields[1] + "\n", slide_fields[2])

    def test_excel_paste_and_backup_are_the_same_three_column_table(self):
        tsv = (ASSETS / "d08-excel-source.tsv").read_text(encoding="utf-8")
        rows = list(csv.reader(io.StringIO(tsv), delimiter="\t"))
        self.assertEqual(len(rows), 8)
        self.assertTrue(all(len(row) == 3 for row in rows))
        self.assertEqual(rows[0], ["Field", "Value", "Source"])
        ns = {"s": "http://schemas.openxmlformats.org/spreadsheetml/2006/main"}
        with ZipFile(ASSETS / "d08-excel-source.xlsx") as archive:
            book = ET.fromstring(archive.read("xl/workbook.xml"))
            self.assertEqual([s.attrib["name"] for s in book.findall("s:sheets/s:sheet", ns)], ["Source Data"])
            sheet = ET.fromstring(archive.read("xl/worksheets/sheet1.xml"))
            values = []
            for row in sheet.findall("s:sheetData/s:row", ns):
                values.append(["".join(c.itertext()) for c in row.findall("s:c", ns)])
            self.assertEqual(values, rows)
        for phrase in ("@skill-builder", "From Text/CSV", "Create OneDrive folder", "SKILL.md"):
            self.assertNotIn(phrase, self.ids["d08"].text())
        self.assertTrue(any(n.attrs.get("download") == "d08-excel-source.xlsx"
                            for n in self.ids["d08"].walk()))
        self.assertTrue(any(n.attrs.get("download") == "d03-approved-library-knowledge.txt"
                            for n in self.ids["d03"].walk()))

    def test_mirror_assets_and_preserved_guide_constraints(self):
        mirror = ROOT / "ai_skilling" / "ELC_GCCS_Part2_Copilot_Student_Guide.html"
        mirror_text = mirror.read_text(encoding="utf-8")
        self.assertEqual(mirror_text, self.text.replace('href="../../index.html"', 'href="index.html"'))
        mirror_assets = mirror.parent / ASSETS.name
        self.assertEqual(sorted(p.name for p in ASSETS.iterdir()),
                         sorted(p.name for p in mirror_assets.iterdir()))
        for source in ASSETS.iterdir():
            self.assertEqual(source.read_bytes(), (mirror_assets / source.name).read_bytes())
        self.assertNotIn("intro", self.ids)
        for tag in ("robots", "googlebot"):
            self.assertTrue(any(n.tag == "meta" and n.attrs.get("name") == tag
                                and "noindex" in n.attrs.get("content", "") for n in self.nodes))
        self.assertEqual(sum(n.has_class("hint") and n.has_class("tip") for n in self.nodes), 8)
        self.assertNotIn("Don't create or share a practice agent", self.text)
        for old in ("d06-powerpoint-source.txt", "d07-word-source.txt", "d08-excel-source.csv"):
            self.assertFalse((ASSETS / old).exists())
            self.assertFalse((mirror_assets / old).exists())
        for key in ("overview", "d05-source"):
            self.assertTrue(any(n.attrs.get("href") == "#skills-prereqs"
                                for n in self.ids[key].walk()))


if __name__ == "__main__":
    unittest.main()
