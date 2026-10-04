# history

Visual companion to **Amit's Notes of the History of the World**, the history wiki in the Obsidian vault
(`A:\Obsidian External Vaults\Fourth Vault July 2023\Amit's Notes of the History of the World\`).

The notes are the source of truth. This repo turns their frontmatter into timelines, maps and reading lists.

## Status

Exploration. `mockups/` holds three HTML variants built on a hand-entered WW2 dataset:

| File | Idea |
|---|---|
| `mockups/a-swimlanes.html` | Theatre lanes (Canada pinned), leader reigns over lifetimes, books as spans, family lifetimes, a "meanwhile" cursor |
| `mockups/b-map-timeline.html` | World map coloured by control, driven by a slider, linked to a timeline strip |
| `mockups/c-scroll-story.html` | Month-by-month vertical reading view with theatres as columns |

Open `mockups/index.html` directly in a browser; no server or build is needed. d3, topojson-client and the
Natural Earth 110m world map are vendored in `mockups/vendor` and `mockups/data`.

Family birth years entered in variant A are kept in the browser's localStorage only, never in the repo.

## Notes → data

```
python scripts/build_data.py
```

Reads every note with `type: history_entry` in its frontmatter and writes `mockups/data/notes.json`.
The vault is only read.

## Process

The repo is initialised with [Spec Kit](https://github.com/github/spec-kit) (`.specify/`, `.github/skills/`).
The mockups are the exploration that comes before the spec. Once a direction is chosen:
`/speckit-constitution` → `/speckit-specify` → `/speckit-plan` → `/speckit-tasks` → `/speckit-implement`.
