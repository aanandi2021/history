# history

Visual companion to **Amit's Notes of the History of the World**, the history wiki in the Obsidian vault
(`A:\Obsidian External Vaults\Fourth Vault July 2023\Amit's Notes of the History of the World\`).

The notes are the source of truth. This repo turns their frontmatter into timelines, maps and reading lists.

## The viewer

Open `app/index.html` in a browser (double-click is fine). It works from `file://`, offline, with no server or build. The full user manual is [docs/manual.md](docs/manual.md).

- **Very top:** a thin status line naming whatever is selected (chapter, person, event or book) with its path. Every
  step is a link, and × clears it. Under it, one fixed row: the title *is* the period picker (click it), then the
  date you're on, search, Board and ?.
- **Master timeline:** every period on one strip from 1800 BC to 1945, each one named. The open period is red with
  its from/to years; a black bracket under it is the stretch the lower timeline shows, and a small triangle is the
  date. Click a period to open it. The scale stretches toward the present: each stretch between the marked years
  gets the same width, so a six-year war isn't a hairline next to two thousand years of antiquity.
- **Controls where they act:** Play, speed, Follow chapters and Whole period sit on a bar above the timeline (with
  "Showing …" for the stretch in view); World sits on the map.
- **Top:** a world map. A muted period map ("World at this date", from historical-basemaps) shows states, peoples and nations at the nearest mapped date; the followed chapter's shapes come from its atlas plate; pins mark events near the date.
- **Bottom:** the timeline. Chapters in region lanes with filter chips and Expand all, then event lanes (Canada always first), who was in power, books, and your family.
- **Right:** what was happening everywhere around that date, and a card for whatever you click.

Hover the timeline to move through time, click empty space to pin the date, click anything to open its card.
Clicking a **chapter** zooms the map and timeline together; **Follow chapters** does it automatically while playing.
Keys: `←` `→` step between events, `Space` play, `/` search, `Esc` clear. `?` in the header shows the same.

The address bar always holds `#period/date/item` (for example `#russia/1812-09-14/moscow-burns-1812`), so any view can be pasted into an Obsidian note.

Cards link to the matching heading in the vault note (`obsidian://`), to Wikipedia, and to books in Calibre (`calibre://`) or the Ottawa Public Library.

**Amit's Fiction.** A period can list Amit's own writing as a book with `amits: true` and a vault `note`. Any event, ruler or chapter in its years then shows an "Amit's Fiction" section on its card. Items tagged `fic: "<heading>"` (or `fic: { note, heading }` for a sibling research file) also get an "Amit's Fiction" link straight to that heading. A lane with `fiction: true` holds the novel's own storyline. It is labelled as fiction, and each of its events must point into the novel. The first example is *The Unseen Tomorrow* in the Maritime Asia period (`#maritime`), whose research lives in the vault under `Writing/The Unseen Tomorrow/`.

Periods so far: **WW2** (1939–45), **Russia** (1450–1946), **Maritime Asia** (745–865: Bengal, Srivijaya, Java and Tang China), **The ancient world** (1800 BC–AD 700: Hammurabi, Han China and Rome), **The Middle Ages** (AD 500–1500: successor kingdoms, Byzantium, Islam, Franks, Vikings and Rus), **The age of transition** (1450–1650: Renaissance, voyages, Reformation, early Canada, American civilizations, Ottomans, Indian Ocean and Russia), **Age of Reason** (1600–1800), **The age of revolution** (1748–1815: political theory, the American and French Revolutions, Haiti, Napoleon, Canada and the War of 1812), **Restoration and revolution** (1815–1850: congress Europe, industrial Britain, Latin American independence, Canada, Greece, the Opium War and 1848), and **The age of national states** (1850–1890: Canada, the U.S. Civil War, Italy, Germany, Austria-Hungary, the Balkans, India, China, Japan and Africa before partition).

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
3. The first lane must be `{ id: "canada", pinned: true }`. Give every event a date (`YYYY`, `YYYY-MM` or `YYYY-MM-DD`; years before 1000 are zero-padded, e.g. `"0778"`), a lane, and if you can, `at: [lon, lat]` and a `section` matching a heading. For periods where only years are known, set `precision: "year"` so the cursor shows a bare year.
4. For owned books, run `python scripts/calibre_ids.py "Title"` and add `owned: true, calibreId: <id>`.
5. Run `npm run test:data`. The validator names any problem it finds.

The format is described in `specs/001-world-viewer/data-model.md` and `contracts/dataset.schema.json`.

## The atlas

`atlas/index.html` draws **plates** in the style of Kinder & Hilgemann's *Penguin Atlas of World History*: framed
maps with soft realm washes, hatched rivals, banner arrows, dotted trade lanes, the book's symbol key and a small
local legend on the left page, and date-led text on the right. Hovering a text entry lights up its map layers,
and the other way round.

- `docs/atlas-design-language.md` is the grammar, reverse-engineered from the first twenty spreads of Vol. 1 (two rounds of ten).
- `atlas/plates/*.js` are the plates (`maritime-monsoon` is mapified from the Maritime Asia note; `hammurabi` and
  `han-china` are fidelity tests on the book's own ground, one per round). `atlas/index.html#key` shows every symbol.
- Plates and the timeline viewer link both ways. A dataset's `plates: [{ id, title, start, end }]` adds an
  "Atlas plate" link to every card inside that span, and a plate's `viewer: "period/date"` turns its header link
  into "On the timeline".
- `.github/skills/mapify/SKILL.md` is the Copilot CLI skill that turns a vault note into a plate. It's linked into
  `~/.copilot/skills/mapify` with a directory junction, so it loads from any folder.
- `node scripts/plate_check.mjs <id> [--out <dir>]` validates a plate, runs the renderer's self-review (label
  collisions, labels under the legend, arrow labels that don't fit), screenshots it, and exports each figure as
  SVG and PNG for Obsidian.
- `node scripts/build_basemap.mjs [ne-dir]` rebuilds `atlas/data/base-50m.js` (Natural Earth 1:50m land, rivers, lakes;
  download `ne_50m_rivers_lake_centerlines.geojson` and `ne_50m_lakes.geojson` into `ne-dir`, default `%TEMP%\ne`).

The book scans used for the study stay in `study\`, which is git-ignored, and must never be committed.

## Chapter scenes

Chapters form a tree. A chapter can name a `parent` (by id, e.g. `parent: "ch-muscovy"`), and its dates must fall
inside the parent's. A top-level chapter with children is a **part**. The timeline gives each level its own lane
(Parts, Chapters, Details). A ▾ on a part folds it to ▸ and hides its children, and **open all / fold** sit beside
the Chapters heading. Folds are remembered per period in the browser. A part folds itself while it's too narrow on
screen to hold its children. Selecting a chapter opens any folded parts above it. The card shows the parts above
a chapter as breadcrumbs, and a part's card lists the chapters inside it.

Each chapter can also carry a **scene**: a small map in the atlas grammar. The map follows the timeline's zoom.
Zoomed out (or with a part folded), the part's overview scene shows; zoomed in, the scenes of its chapters take
over. More precisely, the map shows the shortest chapter with a scene that still fills a fifth of the visible time,
or a selected chapter. Chapters running at the same time in other stories show their areas faintly behind it.
Scenes live in `app/scenes/<period>.js` and are keyed by chapter id. `ch-abbasid-baghdad` in `scenes/maritime.js`
is the worked example of a detail scene, and `ch-muscovy` in `scenes/russia.js` of an overview.

- Layers use the plate types (`area` with `tier`, `boundary`, `route`, `arrow`, `point`, `label`). There are
  extras for the viewer: `minK`/`maxK` (detail that appears or goes with map zoom), `fade` (an arrow that fades out
  when its destination is general), `people` and `year` on points, and `style: "medallion"` labels (a great
  power's initial in a ring, for overviews). `bbox` sets the camera, and `caption` describes the map.
- **Time.** Any layer can carry `from`/`until`, so it appears and goes as the timeline moves, and dated areas build
  a growth ladder in the key (`ch-muscovy`). An `itinerary` is a campaign with dated stops: numbered legs, X at
  battles, solid where already marched and an arrowhead where the army is on that date (`ch-1812`). A `front` is a
  line with teeth on the side being pressed (`ch-barbarossa-to-stalingrad`). See `docs/atlas-design-language.md` §15.
- **Colour key.** The box at the top right of the map names who each colour is. Each scene file declares
  `window.SCENE_ACTORS[period]`, a map from colour to actor, and uses one colour per actor in every chapter. A layer's
  `who` or a scene's `key` overrides it. An arrow is always in the colour of whoever is moving.
- `terms` link the names in the chapter text "one move ahead": to a vault note if `note` is set, otherwise to
  Wikipedia. Each name links at its first mention, in the card and in the Now paragraph. Terms with a `star` carry
  a question worth asking, and the card has a **Copy question** button for each.
- `tests/scenes.test.mjs` checks that every scene matches a chapter and passes `validateScene`, that every term
  appears in its chapter's text, and that points sit inside the view. It also checks in the browser that scenes
  draw, link and respond to zoom. `tests/chapters.test.mjs` covers the tree, folding, the zoom-aware focus, the
  colour key, and that every part has an overview scene and every scene colour has an actor name.

## Cause-and-effect boards

`app/board.html#<id>` is a retention game, opened from **⇄ Board** in the viewer header. The board scatters event
tiles at random. You draw arrows from memory (click a cause, then what it led to), press **Check**, and try again.
Correct arrows lock green; wrong ones turn red and cost nothing. An arrow scores 10, 6, 3 or 1 depending on which
check it was first right on. A hint costs 3. When every required arrow is found, or you give up and **Show the
answer**, the tiles slide into the causal chain and each link shows its reason, followed by three books. The score
sets when the board comes back (21, 7, 3 or 1 days), and that date is kept in localStorage.

- `app/js/board-model.js` holds the rules: `validate`, `check`, `hint`, `percent`, `nextReviewDays`, the seeded
  `layout` and the after-game `tidy`. It works in the browser and in Node.
- `app/boards/*.js` are the boards. Each has `tiles`, required `links` (each with a `why`), and `also` for arrows
  that are fair readings but not required. `ww1-origins` ("The road to 1914") is the first.
- `?seed=N` fixes the starting layout. `window.BOARD` exposes `connect`, `check`, `hint`, `reveal` and `state` for
  the tests and the console.
- `tests/board.test.mjs` covers the rules, every board's data (no cycles, every tile used), and an end-to-end game.

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
