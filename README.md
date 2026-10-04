# history

Visual companion to **Amit's Notes of the History of the World**, the history wiki in the Obsidian vault
(`A:\Obsidian External Vaults\Fourth Vault July 2023\Amit's Notes of the History of the World\`).

The notes are the source of truth. This repo turns their frontmatter into timelines, maps and reading lists.

## The viewer

Open `app/index.html` in a browser (double-click is fine). It works from `file://`, offline, with no server or build.

- **Top:** a world map. Countries are coloured at a few snapshot dates (WW2 only); pins mark events near the date you're looking at.
- **Bottom:** the timeline. Chapters across the top, then lanes (Canada always first), who was in power, books, and your family.
- **Right:** what was happening everywhere around that date, and a card for whatever you click.

Hover the timeline to move through time, click empty space to pin the date, click anything to open its card.
Clicking a **chapter** zooms the map and timeline together; **Follow chapters** does it automatically while playing.
Keys: `←` `→` step between events, `Space` play, `/` search, `Esc` clear. `?` in the header shows the same.

The address bar always holds `#period/date/item` (for example `#russia/1812-09-14/moscow-burns-1812`), so any view can be pasted into an Obsidian note.

Cards link to the matching heading in the vault note (`obsidian://`), to Wikipedia, and to books in Calibre (`calibre://`) or the Ottawa Public Library.

Family birth years are typed into the Family row and saved in this browser's localStorage only. They are never written to the repo.

### Tests

```
npm install      # once; fetches puppeteer and its Chrome
npm test         # data checks, model unit tests, and end-to-end tests in headless Chrome
```

`npm run test:data` runs only the fast checks. The end-to-end tests (one per user story in
`specs/001-world-viewer/spec.md`, plus the Spec Kit walkthrough) save screenshots to `tests/screenshots/` and block all network access to prove the pages work offline.
`node scripts/shot.mjs "#russia/1709" out.png` takes a one-off screenshot and prints any console errors.

### Adding a period

1. Write (or extend) the vault note first. Its `##` headings become link targets.
2. Copy `app/data/russia.js` as a template. Register it as `window.DATASETS.<id>` and add a `<script>` tag in `app/index.html`.
3. The first lane must be `{ id: "canada", pinned: true }`. Give every event a date (`YYYY`, `YYYY-MM` or `YYYY-MM-DD`), a lane, and if you can, `at: [lon, lat]` and a `section` matching a heading.
4. For owned books, run `python scripts/calibre_ids.py "Title"` and add `owned: true, calibreId: <id>`.
5. Run `npm run test:data`. The validator names any problem it finds.

The format is described in `specs/001-world-viewer/data-model.md` and `contracts/dataset.schema.json`.

## Mockups

`mockups/` holds the three variants that came before the viewer, built on a hand-entered WW2 dataset:

| File | Idea |
|---|---|
| `mockups/a-swimlanes.html` | Theatre lanes (Canada pinned), leader reigns over lifetimes, books as spans, family lifetimes, a "meanwhile" cursor |
| `mockups/b-map-timeline.html` | World map coloured by control, driven by a slider, linked to a timeline strip |
| `mockups/c-scroll-story.html` | Month-by-month vertical reading view with theatres as columns |

The viewer combines A and B.
## Notes → data

```
python scripts/build_data.py
```

Reads every note with `type: history_entry` in its frontmatter and writes `mockups/data/notes.json`.
The vault is only read.

## Process

The repo is initialised with [Spec Kit](https://github.com/github/spec-kit) (`.specify/`, `.github/skills/`).
The mockups were the exploration before the spec. The first feature, the viewer, then went through every step:
`.specify/memory/constitution.md`, then `specs/001-world-viewer/` (spec → clarifications → plan, research,
data model, contracts → tasks → analysis → implementation).
`docs/speckit/index.html` walks through the same steps using this project as the worked example: what each step is for,
the prompt (filled in from your own project's details), the real files and commits from here, pitfalls, and a "done when"
checklist saved in the browser. After editing anything under `specs/`, run `npm run build:walkthrough` to refresh its copy.
