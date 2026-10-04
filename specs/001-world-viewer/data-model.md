# Data Model: World Viewer

Datasets are plain JavaScript files that register themselves:
`window.DATASETS = window.DATASETS || {}; window.DATASETS.russia = { ... }`.
They load by `<script>` tag so the viewer works from `file://` (constitution, Principle V). The machine-checkable
schema is in [contracts/dataset.schema.json](contracts/dataset.schema.json).

## Dates

A date string is `YYYY`, `YYYY-MM` or `YYYY-MM-DD`. Partial dates are treated as approximate and placed at the
middle of the year or month. `approx: true` marks a full date as approximate as well.

## Dataset

| Field | Type | Rules |
|---|---|---|
| `id` | string | lowercase slug, unique, used in the address |
| `title`, `subtitle` | string | shown in the header |
| `range` | [date, date] | start < end |
| `note` | string? | vault path of the main note, without `.md` |
| `lanes` | Lane[] | at least one; the first MUST be the Canada lane (`pinned: true`) |
| `events` | Event[] | |
| `leaders` | Leader[] | |
| `books` | Book[] | |
| `chapters` | Chapter[] | |
| `mapStates` | MapState[]? | optional; omitted means no colouring |
| `mapNote` | string | the on-screen note about map simplifications |
| `colours` | { lanes, sides } | colour per lane id and per side |
| `changelog` | {date, text}[] | corrections (Principle II) |
| `precision` | `"year"`? | the cursor shows a bare year (ancient periods) |

## Lane

`id`, `label`, `pinned?`, `fiction?`. A fiction lane holds the storyline of one of Amit's own works. Its label must say so, and every event in it needs `fic`.

## Amit's Fiction

A book with `amits: true` is Amit's own writing. It needs `note` (the vault path of its main research note) and may have `heading`.
It never appears in the "Reading" list. Instead, any item in its years shows an "Amit's Fiction" section on its card.
Any event, leader or chapter may carry `fic`: a heading in that note, or `{ note, heading }` for a sibling file.
Items with `fic` get a direct "Amit's Fiction" link to it. If a dataset lists more than one work, `work` (a book id or title) chooses which one.

## Event

| Field | Type | Rules |
|---|---|---|
| `id` | string? | generated from title and year if absent; unique in the dataset |
| `lane` | string | MUST match a lane id |
| `date`, `end?` | date | inside `range`; `end` ≥ `date` |
| `title` | string | short, plain |
| `text?` | string | one or two sentences |
| `at?` | [lon, lat] | lon −180…180, lat −90…90 |
| `section?` | string | heading in the dataset note |
| `wiki?` | string | Wikipedia topic |
| `approx?` | boolean | |

## Leader

`id?`, `name`, `country`, `side` (a key of `colours.sides`), `born`, `died`, either `terms: [[start, end], ...]` or `start` and `end`,
plus `section?` and `wiki?`. Every term must fall within the person's lifetime. For rulers whose birth and death are unknown, set `lifeUnknown: true` and leave out `born` and `died`.

## Chapter

`id?`, `title`, `start`, `end`, `bbox: [[west, south], [east, north]]`, `text?`, `section?`, `wiki?`.

## Book

`title`, `author`, `start`, `end`, `owned` (boolean), `calibreId?` (required when owned), `section?`, `canadian?`, `fiction?`, `amits?`, `note?` (required when `amits`), `heading?`.

## MapState

`date`, `label`, `status: { <side>: [ISO numeric country codes] }`. The state that applies is the most recent one at or
before the cursor date.

## Family member (browser only)

The code holds `id` and `label`. Birth and death years are kept in localStorage under `history.family.v1`.
They are never committed (Principle VII).

## Derived state (runtime)

`cursor` (date) · `selected` (item id) · `zoomDomain` ([date, date]) · `mapTransform` · `follow` (bool) · `playing` (bool).
The address carries `dataset/date/selected` (see [contracts/url-hash.md](contracts/url-hash.md)).
