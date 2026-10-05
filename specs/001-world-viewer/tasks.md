# Tasks: World Viewer — linked timeline and map

**Input**: plan.md, spec.md, data-model.md, contracts/, research.md
**Tests**: Included. The constitution (VI) requires `npm test` and a browser test for each story.

Format: `- [ ] T### [P] [US#] description (path)`. `[P]` means it can run in parallel (different file, no dependency).

## Phase 1: Setup

- [x] T001 Create the `app/` tree, copy the vendored d3 and topojson and `world-110m.js` from `mockups/` (app/vendor, app/data)
- [x] T002 [P] Add `package.json` with puppeteer as a devDependency and the scripts `test`, `test:data`, `test:e2e` (package.json)
- [x] T003 [P] Add `.gitignore` entries for `node_modules/` and `tests/screenshots/` (.gitignore)

## Phase 2: Foundational (blocks all stories)

- [x] T004 Write `model.js` (UMD): date parse/format with partial-date midpoints, `activeLeaders`, `nearbyEvents`, `activeChapter` (shortest wins), `normalise` (ids, terms), link builders, hash parse/format (app/js/model.js)
- [x] T005 [P] Write the Node loader that evaluates data files in a vm sandbox (tests/load.mjs)
- [x] T006 Migrate the WW2 data to the new format: ids, `at`, `wiki`, `section`, chapters, terms, and the Canada lane first (app/data/ww2.js)
- [x] T007 [P] Write data validation tests against the schema rules and semantics (tests/data.test.mjs)
- [x] T008 [P] Write model unit tests: dates, leaders with multiple terms, chapters, links, hash (tests/model.test.mjs)

## Phase 3: US1 — see a moment everywhere (P1) 🎯 MVP

- [x] T009 [US1] Lay out the page: header with controls, map, chapter band, lanes, panel; responsive under 1000 px (app/index.html, app/css/viewer.css)
- [x] T010 [US1] Render the map: countries, state colouring, legend, map note, event pins near the cursor (app/js/viewer.js)
- [x] T011 [US1] Render the timeline: lanes with greedy label rows, leaders, books, cursor, zoom and pan (app/js/viewer.js)
- [x] T012 [US1] Fill the panel: events near the cursor grouped by lane with Canada first, leaders in power; approximate dates shown as "c." (FR-015) (app/js/viewer.js)
- [x] T013 [US1] Add Play/Pause (app/js/viewer.js)
- [x] T014 [US1] e2e test (with the network blocked, FR-016): at 1942-08-19 the panel lists Dieppe, Stalingrad and Guadalcanal plus the four leaders, and Dieppe is pinned (tests/e2e.test.mjs)

## Phase 4: US2 — chapter zoom (P2)

- [x] T015 [US2] Render the chapter band; clicking a chapter zooms the timeline and flies the map to its bbox (app/js/viewer.js)
- [x] T016 [US2] Add the "follow chapters" toggle and the "World" reset; counter-scale pins (app/js/viewer.js)
- [x] T017 [US2] e2e test: clicking Barbarossa changes the map transform and the domain, and World resets them (tests/e2e.test.mjs)

## Phase 5: US3 — links (P3)

- [x] T018 [US3] Add the detail card for events, leaders, chapters and books, with Obsidian, Wikipedia, Calibre and library links (app/js/viewer.js)
- [x] T019 [US3] Look up the Calibre ids for owned books (scripts/calibre_ids.py)
- [x] T020 [US3] e2e test: the Poltava and Peter cards have a well-formed obsidian:// link, a Wikipedia link with target=_blank, and the books (tests/e2e.test.mjs)

## Phase 6: US4 — datasets and addresses (P4)

- [x] T021 [P] [US4] Write the Russia dataset from the vault note: rulers, about 80 events, chapters, books, sections (app/data/russia.js)
- [x] T022 [US4] Add the dataset selector and read/write the hash with fallback (app/js/viewer.js)
- [x] T023 [US4] Add search (FR-012) and keyboard support: arrow keys, Esc, `/` to focus search (app/js/viewer.js)
- [x] T024 [US4] e2e test: `#russia/1812-09-14` loads Russia at that date; switching updates the hash; a bad hash falls back (tests/e2e.test.mjs)

## Phase 7: US5 — family (P5)

- [x] T025 [US5] Add the family lane with "add birth year", saved in localStorage, and ages in the panel (app/js/viewer.js)
- [x] T026 [US5] e2e test: enter a year, reload, check it persists; check the repo has no family values (tests/e2e.test.mjs)

## Phase 8: Polish

- [x] T027 [P] Update the README: how to open the app, `npm test`, adding a dataset (README.md)
- [x] T028 [P] Make `mockups/index.html` link to the new app
- [x] T029 Check timing: interactive in under 2 s and fly-to in under 1.5 s, measured in e2e (tests/e2e.test.mjs)
- [x] T030 Run the quickstart scenarios and record the screenshots (tests/screenshots)
- [ ] T040 (Obsidian links fixed 2026-10-05: vault id instead of name, checked by launching one; Calibre still to confirm) Manual (Amit): click an Obsidian heading link and a Calibre link on his PC and confirm they open

## Dependencies

Setup → Foundational → US1 → (US2, US3, US4 can run in parallel after US1; they all touch viewer.js, so in practice they run in sequence) → US5 → Polish.
T021 (Russia data) can be written in parallel with US1–US3.

