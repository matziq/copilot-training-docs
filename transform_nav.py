"""Transform all training HTML files from static <nav class="toc"> to sticky <nav class="quick-nav">.

Also removes per-module .toggle-bar elements (expand/collapse moves to the sticky nav).
"""

import re
import os
from pathlib import Path

ROOT = Path(__file__).parent

# Only process files that use the shared CSS and have class="toc"
SKIP_FILES = {
    "RCG Copilot Agents Training Session Demos.html",
    "transform_nav.py",
}

SKIP_DIRS = {
    ".git",
    "New folder",
    "files",        # self-contained pages with custom styles
    "images",
    "css",
    "js",
}


def find_html_files(root: Path):
    """Yield all .html files that should be transformed."""
    for path in root.rglob("*.html"):
        # Skip files in excluded dirs
        rel = path.relative_to(root)
        parts = rel.parts
        if any(p in SKIP_DIRS for p in parts):
            continue
        if path.name in SKIP_FILES:
            continue
        yield path


def extract_toc_links(toc_block: str):
    """Extract (href, link_text) pairs from the TOC HTML."""
    links = []
    for m in re.finditer(r'<a\s+href="([^"]+)"[^>]*>(.*?)</a>', toc_block, re.DOTALL):
        href = m.group(1)
        text = re.sub(r'<[^>]+>', '', m.group(2))  # strip inner tags
        text = text.strip()
        # Shorten very long link text for pill display
        # Remove "Module N — " prefix if present to keep pills compact
        # Actually keep them - they help identify sections
        links.append((href, text))
    return links


def build_quick_nav(links):
    """Build the quick-nav HTML from extracted links."""
    parts = ['        <nav class="quick-nav" id="quick-nav">']
    for href, text in links:
        # HTML-encode the text properly
        parts.append(f'            <a href="{href}">{text}</a>')
    parts.append('            <span class="nav-spacer"></span>')
    parts.append('            <button type="button" data-action="expand-all">Expand all</button>')
    parts.append('            <button type="button" data-action="collapse-all">Collapse all</button>')
    parts.append('        </nav>')
    return '\n'.join(parts)


def transform_file(path: Path):
    """Transform a single HTML file."""
    content = path.read_text(encoding='utf-8')

    # Check if file has a TOC to transform
    if 'class="toc"' not in content:
        return False

    # Already transformed?
    if 'class="quick-nav"' in content:
        return False

    # Extract the TOC block
    toc_match = re.search(
        r'<nav\s+class="toc">\s*.*?</nav>',
        content,
        re.DOTALL
    )
    if not toc_match:
        return False

    toc_block = toc_match.group(0)
    links = extract_toc_links(toc_block)
    if not links:
        return False

    # Build the replacement quick-nav
    quick_nav = build_quick_nav(links)

    # Replace the TOC with the quick-nav
    content = content[:toc_match.start()] + quick_nav + content[toc_match.end():]

    # Remove per-module toggle-bar elements
    # Pattern: <div class="toggle-bar">...<button>...</button>...<button>...</button>...</div>
    content = re.sub(
        r'\s*<div class="toggle-bar">.*?</div>\s*',
        '\n\n',
        content,
        flags=re.DOTALL
    )

    # Clean up any resulting excessive blank lines (more than 2 in a row)
    content = re.sub(r'\n{4,}', '\n\n\n', content)

    path.write_text(content, encoding='utf-8')
    return True


def main():
    transformed = []
    skipped = []

    for path in sorted(find_html_files(ROOT)):
        rel = path.relative_to(ROOT)
        if transform_file(path):
            transformed.append(str(rel))
            print(f"  [OK] {rel}")
        else:
            skipped.append(str(rel))

    print(f"\nTransformed: {len(transformed)} files")
    print(f"Skipped:     {len(skipped)} files")
    if skipped:
        print("Skipped files (no TOC or already transformed):")
        for s in skipped:
            print(f"  - {s}")


if __name__ == "__main__":
    main()
