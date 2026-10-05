---
name: "mapify"
description: "Turn a historical write-up (usually a note in Amit's Notes of the History of the World) into an atlas plate in the style of Kinder & Hilgemann's Penguin Atlas of World History: framed maps with washes, banner arrows, symbols and a local legend on the left page, and date-led text linked to the map on the right. Use when Ford asks to mapify, make an atlas plate, or draw a period or event as a map."
compatibility: "Requires the history repo at A:\\coding\\history (Node, puppeteer installed) and its atlas/ renderer."
metadata:
  author: "Herschel (Claude Opus 5.5), for Ford"
  design-language: "docs/atlas-design-language.md"
---

# Mapify

You turn prose history into a **plate**: a two-page spread like the Penguin Atlas. The left page has one to four
framed map figures with captions. The right page has date-led text entries, each pointing at the map layers it
talks about. Plates are plain JavaScript data files rendered by `atlas/js/plate.js`. You write the data; the
renderer does the drawing.

Repo: `A:\coding\history`. Every shell call starts elsewhere, so `cd` there first.

## Before you start

1. Read `docs/atlas-design-language.md` (the grammar) and skim one finished plate,
   `atlas/plates/maritime-monsoon.js`, so you copy its shape.
2. Read the source write-up all the way through. It is usually a vault note under
   `A:\Obsidian External Vaults\Fourth Vault July 2023\Amit's Notes of the History of the World\`.
   **Never copy the note's prose into the repo.** The plate holds coordinates, layer choices and *short*
   map-side entries (one or two sentences each), plus a `from` link back to the note.

## Step 1: extract

Go through the write-up and list, in a scratch table (session SQL is fine):

| Kind | What to pull out | Becomes |
|---|---|---|
| Places | every named city, port, temple, battle, site, with what happened there and when | `point` |
| Realms and cultures | every state, empire, culture or people with territory | `area` (+ a `label`) |
| Movements | campaigns, migrations, raids, invasions, with direction and date | `arrow` |
| Connections | trade, pilgrimage, diplomacy | `route` (dotted) or a thin route |
| Frontiers | treaty lines, walls, limits (ice edge, desert edge) | `boundary` |
| Goods | resources and what was traded | resource `point`s with a local legend |
| Environment | river, desert, monsoon, steppe, when it *explains* the story | arrows (winds), areas, or base choices |
| Ideas | religion, law, art, technology, society | **text only**: the atlas doesn't draw these |

Look up coordinates as `[longitude, latitude]` (Wikipedia's coordinates are fine). Longitude comes first.
Check every one; a swapped pair puts Baghdad in Antarctica. Mark doubtful locations in the text, not the map.

## Step 2: choose the figures

Pick from the design language §2:
- one story in one region → **one big map** (`share` about 0.85), or a big map plus an **inset** for a dense core;
- catalogue plus story → **evidence map + story map**, stacked;
- a succession (empire after empire) → **small multiples on the same `extent`**, two to four panels;
- several cultures then their combined effect → small multiples + one synthesis map.

At most four figures. Each figure needs a caption naming subject and period ("The Empire of X, c. 1750 B.C.").
Set each figure's `extent` as `[[west, south], [east, north]]`, a little wider than the places, with empty sea or
desert somewhere for the legend (bottom-left by default).

## Step 3: write the plate

Create `atlas/plates/<id>.js` and add `<script src="plates/<id>.js"></script>` to `atlas/index.html` next to the
others, before `js/plate.js`.

```js
(function () {
  window.PLATES["<id>"] = {
    id: "<id>",                       // lowercase-slug, same as the key
    title: "…", head: "Part / Chapter", folio: "3",
    figures: [{
      caption: "…", share: 0.6, extent: [[W, S], [E, N]], projection: "mercator",   // or "conic" for big mid-latitude areas
      base: { rivers: true, riverRank: 6 },                                            // optional
      layers: [
        { id: "empire-x", type: "area", colour: "#e07b39", opacity: 0.5, pad: 1.2, around: [[lon, lat], …], legend: "Empire of X" },
        { id: "rival", type: "area", colour: "#7d5a9e", pattern: "hatch", around: […], legend: "…" },          // hatch | hatch-back | crosshatch | dots | stripe | stipple; or tier: "core" | "conquest" | "influence"
        { id: "campaign", type: "arrow", colour: "#b8341f", width: 12, label: "Name", date: "755", path: [[lon, lat], …], legend: "…" },
        { id: "trade", type: "route", colour: "#a8642c", path: […], legend: "Trade lanes" },                  // style: "dashed" for journeys and non-trade links, "road" for built roads; head: true
        { id: "frontier", type: "boundary", style: "dashdot", path: […] },                                      // solid | dashed | dashdot | wall; dates: [[0.3, "214 B.C."]] prints dates on the line
        { id: "city", type: "point", symbol: "capital", at: [lon, lat], name: "…", labelPos: "e", tag: { text: "762", colour: "#f1c75b" } },  // halo: "#f1c75b" colours a point by who founded it
        { type: "label", style: "realm", colour: "#a8521f", text: "…", at: [lon, lat] },                      // or along: [[lon, lat], …] to curve it
        { type: "label", style: "water", text: "…", at: […] }                                                  // styles: region realm people water date note
      ],
      legend: { position: "bottom-left" }            // top-left | top-right | bottom-right; columns: 2; hidden: true; extra: [{ text, swatch }]
    }],
    text: {
      intro: "One to three plain sentences.",
      sections: [{ heading: "…", entries: [{ date: "755–763", text: "…", refs: ["campaign", "city"] }] }]
    },
    sources: ["…"],
    from: { label: "<note title>", href: "obsidian://open?vault=333bfdd695459a48&file=" + encodeURIComponent("<vault path without .md>") }
  };
})();
```

Symbols: only the names on the **Symbol key** page (`atlas/index.html#key`, defined in `atlas/js/plate-model.js`).
For a symbol the registry doesn't have, add it to `SYMBOLS`, `SYMBOL_GROUPS` and `drawSymbol` together; the tests
check that they agree.

Grammar to follow (design language §4–8):
- **Core over extent**: a darker small area for the heartland over a paler large one, same hue.
- **Rivals hatched** so both powers stay visible. **One colour per actor** across small multiples.
- **Banner arrows** for peoples and armies, with the name inside (`label`) and the date beside it (`date`). Keep
  labels short ("Kassites", not "Kassite migration from the Zagros"); put detail in `legend`.
  Black for an outside shock, yellow for migration, the actor's colour for campaigns.
- **Dotted routes** for trade. Resource glyphs at the sources. Goods go in the legend once.
- **Date tags** only for decisive moments (founding, sack, battle). Everything else goes in the text.
- **Degrees of control** (round 2, from the China, India and Persia plates): `tier: "core"` for the heartland,
  `"conquest"` (upright stripes) for newly taken land, `"influence"` (pale, dashed edge) for loose overlordship.
  Use one hue for all three tiers of one power.
- **Fortified frontiers** are `boundary` with `style: "wall"`. When the text is date-led, print the dates on the line
  (`dates: [[t, "214 B.C."]]`, `t` from 0 to 1 along the path as drawn) rather than in a tag.
- **Built roads** (`route`, `style: "road"`) must never look like a journey (`dashed`) or trade (dotted).
- **Colonies and outposts**: a `halo` colours each settlement by who founded it. Mother cities get a different symbol.
- **One small region over many periods**: a grid of up to four same-extent figures, not one crowded overlay.
  **Approximate peoples** get large `people` labels and no borders; borders would claim more than we know.
- **A sea-borne story** (Phoenicians, Greeks, the monsoon road) puts the sea at the centre of the extent and keeps
  inland detail out.
- **Legend** lists only what the eye can't read directly. Give a `legend` text to the first layer of each kind
  only. Put place names on the map, not in the legend.
- **Text entries are date-led and short.** Each entry's `refs` names every layer it talks about; every named
  layer should be talked about by some entry. Ideas (religion, law, art) are entries with `refs: []`.
- Plain, calm English in entries, like the vault notes. No grand one-liners.

## Step 4: check and fix (loop until clean)

```powershell
cd A:\coding\history; node scripts/plate_check.mjs <id>
```

It prints JSON and exits 1 until the plate is clean:
- `errors`: the spec is invalid (bad coordinates, unknown symbol, a `refs` to a missing layer…). Fix them first.
- `warnings`: the renderer's self-review. A label collides with another label, sits under the legend, or an
  arrow label doesn't fit its arrow. Fix them by moving `at`, changing `labelPos`
  (`n s e w ne nw se sw`), lengthening the arrow `path`, shortening a label, moving the legend, or dropping a
  minor date tag into the text.
- `coverage`: aim for `entriesMapped ≥ 0.8` and `layersExplained ≥ 0.6` (the tests enforce this).

Then **look at the screenshot** (`tests/screenshots/atlas-<id>.png`) with the view tool. The checker can't see
everything, so review by eye:
- labels sitting on top of an arrow band or a hatched area;
- an area that bleeds into the wrong country (adjust `around` points or `pad`; `clip: "none"` lets it cover sea);
- an arrow that goes the wrong way, or whose head lands short of its target;
- a figure where the main subject isn't the strongest colour;
- an empty quarter that could take the legend instead of covering something.

Expect three to six rounds. Stop when `plate_check` exits 0 and the screenshot reads cleanly at a glance.

## Step 5: export to the vault and link

```powershell
cd A:\coding\history; node scripts/plate_check.mjs <id> --out "A:\Obsidian External Vaults\Fourth Vault July 2023\Amit's Notes of the History of the World\plates"
```

This writes `<id>-fig1.svg` / `.png` (one pair per figure). In the source note, **append** (don't rewrite) a short
section near the top or under its main heading:

```markdown
## Atlas plate
![[<id>-fig1.png]]
*Interactive version:* [open the plate](file:///A:/coding/history/atlas/index.html#<id>)
```

Use the vault's edit rules: append with the edit tool, never delete and recreate a vault file.

## Step 6: test and commit

```powershell
cd A:\coding\history; node --test tests/atlas.test.mjs
```

The tests validate every plate, check coverage, render each one headless with the network blocked, and require
zero self-review warnings. Then commit the plate file and the `index.html` line (with the Copilot trailers), and
push. Never commit anything from `study\` (git-ignored): those are scans of a copyrighted book.

## Scenes on the viewer map: overview and detail

When the text is a period with sub-chapters, mapify it for the viewer as well as (or instead of) a plate:

- Give the period a **part** chapter, and set `parent` on each sub-chapter in `app/data/<period>.js`.
- Write the part's **overview scene** first (`app/scenes/<period>.js`). Use realm washes for the whole span, two to
  four big arrows, three to six anchor places with years, and one to three `medallion` labels for the main powers.
  Then write each chapter's **detail scene** in the same colours. That's the atlas's paired-maps move
  (`docs/atlas-design-language.md` §14).
- Name every colour in `window.SCENE_ACTORS[period]` (one colour per actor). The on-map key reads from it.
- Check with `node --test tests/scenes.test.mjs tests/chapters.test.mjs`, then screenshot both the zoomed-out
  part and a zoomed-in chapter.

## Known limits (say so rather than fake it)

- There's no relief or land cover yet, so mountains and deserts can only be suggested with labels or areas.
- Coastlines are 1:50m, too coarse for insets under about 2° across (Java's temple plain looks blobby).
- No chart, family-tree or org-chart figures yet; the atlas uses these in later periods.
- Realms are drawn as smooth hulls around anchor points, not historical borders. That suits the atlas's soft
  style, but don't present the edge as a frontier.
