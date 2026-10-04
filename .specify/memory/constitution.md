<!--
Sync Impact Report
- Version change: template → 1.0.0 (first ratification)
- Principles added: I. The Vault Is the Source of Truth · II. Accuracy Is Visible ·
  III. Canada and "Meanwhile" · IV. Plain Language for a Curious Non-Specialist ·
  V. Static, Offline, Zero-Build · VI. Tested Before It Ships · VII. Personal Data Stays Local
- Sections added: Technology Constraints, Development Workflow, Governance
- Removed sections: none
- Deferred TODOs: none
-->
# Amit's World Constitution

## Core Principles

### I. The Vault Is the Source of Truth

The Obsidian notes in `Amit's Notes of the History of the World` are the primary record. The viewer
MUST link back to them and MUST NOT write to the vault. Anything the viewer shows that has a vault
note MUST link to that note. Data that does not yet live in the vault is allowed in `app/data/`, but
each dataset MUST name the note it belongs to once one exists.

Rationale: Amit reads and writes history in Obsidian. The viewer is a lens on the notes, not a
second place to keep them.

### II. Accuracy Is Visible

Every event MUST carry a date, and approximate dates MUST be flagged as approximate (`approx: true`)
and shown as such. Map states that simplify history (modern borders, whole countries) MUST say so on
screen. When a fact is corrected, the correction MUST be recorded in the dataset's changelog rather
than silently edited.

Rationale: a timeline looks authoritative. Simplifications that are not labelled become errors in
the reader's head.

### III. Canada and "Meanwhile"

Every timeline view MUST include a Canada (or Canada & the Americas) lane, pinned at the top. The
interface MUST make simultaneity visible: for any date, the reader MUST be able to see what was
happening in every lane, who was in power, and how old their own family members were.

Rationale: the project exists to give a Canadian reader anchors in unfamiliar history. Seeing events
side by side is the main thing the visualisation adds over reading the notes.

### IV. Plain Language for a Curious Non-Specialist

On-screen text MUST be written for an intelligent reader without a European-history background, in
the calm, plain voice set out in the vault's `_style.md`. Jargon MUST be explained the first time it
appears. Headings name topics; they do not sell them.

Rationale: the reader is Amit, and `_style.md` records how he wants to be written to.

### V. Static, Offline, Zero-Build

The viewer MUST open by double-clicking an HTML file (`file://`) with no server, no install and no
network. Third-party libraries MUST be vendored. Data files MUST load via `<script>` tags so they
work from `file://`. Build steps are allowed only for optional generation from the vault, never to
make the viewer run.

Rationale: it has to keep working in ten years, on any machine, without maintenance.

### VI. Tested Before It Ships

Every dataset MUST pass the data validation tests (schema, dates, references, links, coordinates).
Every user story MUST have at least one automated browser test. `npm test` MUST pass before a commit
to `main`.

Rationale: hand-entered history data fails quietly. A wrong date or a broken link should fail a test,
not reach the reader.

### VII. Personal Data Stays Local

Family names and birth years MUST NOT be committed to the repository. They are entered in the browser
and kept in `localStorage`. The repository stays private.

Rationale: the personal lanes are valuable to Amit and to no one else.

## Technology Constraints

- HTML, CSS and plain JavaScript (ES2020); D3 v7 and topojson-client, vendored.
- Map base: Natural Earth 110m (world-atlas), vendored.
- Tests: Node's built-in test runner plus Puppeteer for browser tests.
- Optional tooling in Python 3.12 for reading the vault (read-only).

## Development Workflow

- New features follow Spec Kit: constitution → specify → clarify → plan → tasks → analyze → implement.
- Exploratory mockups are allowed in `mockups/` and are not held to Principle VI.
- Specs, plans and tasks live in `specs/NNN-name/` and are committed alongside the code they describe.

## Governance

This constitution overrides other practices in the repository. Amendments are made with
`/speckit-constitution`, recorded with a version bump (MAJOR for removed or redefined principles,
MINOR for new principles or sections, PATCH for wording), and committed with a message that names the
change. `/speckit-analyze` treats conflicts with this document as critical.

**Version**: 1.0.0 | **Ratified**: 2026-10-04 | **Last Amended**: 2026-10-04
