# Phase 0 Research: World Viewer

## R1. How should Obsidian links reach a section of a note?

- **Decision**: `obsidian://open?vault=<vault>&file=<path>%23<heading>` — the note path relative to the vault, with the heading appended after an encoded `#`.
- **Rationale**: This is Obsidian's built-in URI scheme. It needs no plugins, and Obsidian resolves `file` the same way it resolves wikilinks.
- **Alternatives considered**: The Advanced URI plugin (`obsidian://adv-uri?...&heading=`) is more precise but needs a plugin installed. A `file:///` link to the .md file opens a text editor rather than Obsidian.
- **Update (2026-10-05)**: Use the vault **id** (`333bfdd695459a48`), not its name. A stale OneDrive copy is registered in Obsidian under the same name, and name links opened that one. Verified by launching both forms and reading the Obsidian window title.
- **Risk**: Whether the heading anchor scrolls to the section depends on the Obsidian version. If it doesn't, the note still opens. Verification is a manual task (T040).

## R2. Wikipedia links when titles are uncertain

- **Decision**: `https://en.wikipedia.org/w/index.php?search=<topic>&title=Special:Search&go=Go`.
- **Rationale**: "Go" lands directly on an exact or redirect match and falls back to search results. A hand-entered topic like "Dieppe Raid" or "Treaty of Peking 1860" can't send the reader to a 404.
- **Alternatives considered**: Direct `/wiki/Title` links break on small title differences, and there are about 150 items to maintain.

## R3. Book links

- **Decision**: Owned books link to `calibre://show-book/CalibreLibrary/<book id>`. Books not owned link to an Ottawa Public Library BiblioCommons search: `https://ottawa.bibliocommons.com/v2/search?query=<title author>&searchType=smart`.
- **Rationale**: Calibre's URL scheme (calibre 5.0+) opens the book in Amit's library. Amit lives in Ottawa, so a library search is the most useful "find it" link.
- **Alternatives considered**: Amazon (commercial), Goodreads (a review site, not a source), Open Library (thin on recent titles).
- **Risk**: The Calibre library ID is the library folder name with spaces turned into underscores. Amit's folder is `CalibreLibrary`, so no change is needed. Verification is a manual task (T040).

## R4. Map zoom for chapters

- **Decision**: Use a d3-zoom transform on the map group and fly to a chapter by projecting its bounding box and computing scale and translate. Pins and strokes are counter-scaled (`1/k`) so they stay readable.
- **Rationale**: It is the same zoom behaviour as manual zooming, so the user can keep zooming or panning after a fly-to. No tile server is needed (Principle V).
- **Alternatives considered**: Swapping projections per chapter is jarring and loses context. Leaflet or MapLibre need tiles or network access.

## R5. Which chapter to follow when several overlap

- **Decision**: Follow the active chapter with the shortest duration.
- **Rationale**: Long chapters such as "Battle of the Atlantic" (1939–45) would otherwise swallow short ones such as "Dieppe". The shortest active chapter is the most specific.

## R6. Historical borders

- **Decision**: Not in this feature. WW2 uses modern borders with a visible note. Russia uses pins and chapter zooms only.
- **Rationale**: CShapes 2.0 covers 1886 onward. The `historical-basemaps` project covers earlier periods, but its quality varies by year. Both are larger than this feature's scope and deserve their own spec (candidate 002-historical-borders).

## R7. Testing in a browser

- **Decision**: Use Puppeteer driven by Node's built-in test runner (`node --test`), with `file://` URLs and no server.
- **Rationale**: Puppeteer is already used in Amit's other repos (Neon Rain), so its Chrome download is cached. Node's test runner needs no extra dependency.
- **Alternatives considered**: Playwright works well too, but it would be a second browser toolchain on the same machine.

## R8. Calendars

- **Decision**: Store all dates in the Gregorian calendar as given by modern references, and flag approximate dates. Don't convert Julian dates before 1582.
- **Rationale**: Mixing calendars inside one timeline would misplace events by 10–13 days. Old Style dates appear in the text where they matter (the "October" Revolution).
