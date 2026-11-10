from __future__ import annotations

import sys
from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
from xml.etree import ElementTree


SITE_DIR = Path(__file__).resolve().parents[1] / "site"


class PageParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.ids: list[str] = []
        self.links: list[str] = []
        self.missing_alt: list[str] = []
        self.h1_count = 0
        self.main_count = 0

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        attributes = dict(attrs)
        element_id = attributes.get("id")
        if element_id:
            self.ids.append(element_id)
        if tag == "h1":
            self.h1_count += 1
        if tag == "main":
            self.main_count += 1
        if tag == "img" and "alt" not in attributes:
            self.missing_alt.append(attributes.get("src") or "unnamed image")
        if tag == "a":
            href = attributes.get("href")
            if href is not None:
                self.links.append(href)


def main() -> int:
    if not SITE_DIR.is_dir():
        print(f"Built site directory not found: {SITE_DIR}", file=sys.stderr)
        return 2

    pages = {
        path.relative_to(SITE_DIR).as_posix(): path
        for path in SITE_DIR.rglob("*.html")
    }
    parsed_pages: dict[str, PageParser] = {}
    failures: list[str] = []
    sitemap = SITE_DIR / "sitemap.xml"
    deployment_prefix = ""
    if not sitemap.is_file():
        failures.append("sitemap.xml is missing")
    else:
        try:
            locations = ElementTree.parse(sitemap).findall(".//{*}loc")
            expected_pages = len(pages) - int("404.html" in pages)
            if len(locations) != expected_pages:
                failures.append(
                    f"sitemap.xml: expected {expected_pages} page URLs, "
                    f"found {len(locations)}"
                )
            if locations:
                deployment_prefix = urlsplit(locations[0].text or "").path.rstrip("/")
        except ElementTree.ParseError as error:
            failures.append(f"sitemap.xml is invalid: {error}")

    for relative_path, path in pages.items():
        parser = PageParser()
        parser.feed(path.read_text(encoding="utf-8"))
        parsed_pages[relative_path] = parser
        duplicates = [
            element_id
            for element_id, count in Counter(parser.ids).items()
            if count > 1
        ]
        if duplicates:
            failures.append(
                f"{relative_path}: duplicate IDs: {', '.join(duplicates)}"
            )
        if parser.h1_count != 1:
            failures.append(f"{relative_path}: expected one h1, found {parser.h1_count}")
        if parser.main_count != 1:
            failures.append(
                f"{relative_path}: expected one main landmark, found {parser.main_count}"
            )
        if parser.missing_alt:
            failures.append(
                f"{relative_path}: images missing alt text: "
                f"{', '.join(parser.missing_alt)}"
            )

    checked_links = 0
    for relative_path, parser in parsed_pages.items():
        source = SITE_DIR / relative_path
        for href in parser.links:
            target_url = urlsplit(href)
            if target_url.scheme or target_url.netloc:
                continue

            path = unquote(target_url.path)
            if deployment_prefix and (
                path == deployment_prefix or path.startswith(f"{deployment_prefix}/")
            ):
                path = path[len(deployment_prefix):] or "/"
            target = (
                SITE_DIR / path.lstrip("/")
                if path.startswith("/")
                else source.parent / path
                if path
                else source
            ).resolve()
            if not target.is_relative_to(SITE_DIR):
                failures.append(f"{relative_path}: link escapes site directory: {href}")
                continue
            if target.is_dir():
                target /= "index.html"
            elif not target.suffix:
                target /= "index.html"

            if not target.is_file():
                failures.append(f"{relative_path}: broken link: {href}")
                continue

            if target_url.fragment and target.suffix.lower() == ".html":
                target_relative = target.relative_to(SITE_DIR).as_posix()
                target_ids = set(parsed_pages.get(target_relative, PageParser()).ids)
                fragment = unquote(target_url.fragment)
                if fragment not in target_ids:
                    failures.append(f"{relative_path}: broken fragment: {href}")
                    continue

            checked_links += 1

    if failures:
        print(
            f"Built-site check failed: {len(failures)} issue(s) "
            f"across {len(pages)} HTML pages."
        )
        for failure in failures:
            print(f"- {failure}")
        return 1

    print(
        f"Built-site check passed: {len(pages)} HTML pages, "
        f"{checked_links} local links, unique IDs."
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
