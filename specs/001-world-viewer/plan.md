# Implementation Plan: World Viewer — linked timeline and map

**Branch**: `001-world-viewer` | **Date**: 2026-10-04 | **Spec**: [spec.md](spec.md)
**Input**: Feature specification from `specs/001-world-viewer/spec.md`

## Summary

Merge mockup A (swimlanes and the "meanwhile" panel) and mockup B (map and slider) into a single viewer in `app/`.
The viewer adds chapters, which zoom both the map and the timeline; detail cards with links to Obsidian, Wikipedia,
Calibre and the library; a second dataset (Russia 1450–1946) built from the vault note; and an address that can be shared.
Approach: plain HTML and ES-module-free JavaScript, D3 v7 vendored, data loaded through `<script>` tags, a pure "model"
module that can be tested in Node, and Puppeteer browser tests run by `node --test`.

## Technical Context

**Language/Version**: JavaScript (ES2020, browser), Python 3.12 for helper scripts, Node 18+ for tests
**Primary Dependencies**: D3 v7, topojson-client 3 (both vendored); dev only: puppeteer
**Storage**: Static JS data files; localStorage for family years
**Testing**: `node --test` (data validation, model unit tests, Puppeteer e2e over `file://`)
**Target Platform**: Desktop Chrome or Edge on Windows (file://); iPad Safari later
**Project Type**: Static single-page web app
**Performance Goals**: Interactive in under 2 s from file://; chapter fly-to in under 1.5 s; 60 fps scrubbing with fewer than 200 events
**Constraints**: No network, no build step, no server (Principle V)
**Scale/Scope**: 2 datasets, about 80 events each, 1 user

## Constitution Check

| # | Principle | How this plan complies | Status |
|---|---|---|---|
| I | Vault is the source of truth | The app only reads the vault (`build_data.py`), and Russia links point back into the note's headings. Nothing is written to the vault. | ✅ |
| II | Accuracy is visible | `approx` flag shown as "c." with a dotted outline; `changelog` per dataset; on-screen map note | ✅ |
| III | Canada & Meanwhile | The Canada lane is pinned first in both datasets (validated by a test), and the panel always lists Canada first | ✅ |
| IV | Plain language | Card text is written in Ford's style: short sentences, no hype | ✅ |
| V | Static, offline, zero-build | file://, vendored libs, data through `<script>`; the e2e tests run with the network blocked | ✅ |
| VI | Tested | `npm test`, with at least one browser test per user story | ✅ |
| VII | Personal data stays local | Family data lives in localStorage, and a test confirms the repo has no family values | ✅ |

No violations, so the Complexity Tracking table is empty.

## Project Structure

### Documentation (this feature)

```text
specs/001-world-viewer/
├── spec.md · plan.md · research.md · data-model.md · quickstart.md
├── contracts/dataset.schema.json · contracts/url-hash.md
├── checklists/requirements.md
├── tasks.md          (/speckit-tasks)
└── analysis.md       (/speckit-analyze report, saved)
```

### Source Code (repository root)

```text
app/
├── index.html            # layout, script tags
├── css/viewer.css
├── js/model.js           # pure: dates, active leaders, nearby events, chapters, links, hash parse/format (Node-testable)
├── js/viewer.js          # D3 rendering: map, chapters band, lanes, panel, cards, controls
├── data/ww2.js           # window.DATASETS.ww2
├── data/russia.js        # window.DATASETS.russia
├── data/world-110m.js    # window.WORLD (copied from mockups)
└── vendor/d3.min.js, topojson-client.min.js
tests/
├── load.mjs              # loads data/*.js into a sandbox (vm) for Node tests
├── data.test.mjs         # schema + semantic validation (SC-003, SC-004)
├── model.test.mjs        # unit tests for model.js
└── e2e.test.mjs          # Puppeteer, one test per user story (SC-006)
docs/speckit/             # the Spec Kit walkthrough (separate deliverable, not part of this feature's FRs)
mockups/                  # kept as history; not modified
package.json
```

**Structure Decision**: A single static app. `model.js` exposes `window.HM` in the browser and `module.exports` in Node
(a UMD wrapper), so the same logic is unit-tested without a browser.

## Complexity Tracking

None.
