# Atlas design language

What makes a Kinder & Hilgemann plate (*The Penguin Atlas of World History*, Vol. 1) work, written down so the
`mapify` skill and `atlas/js/plate.js` can follow it. Source: a close reading of the first ten spreads of Vol. 1
(PDF pages 14–33: the Palaeolithic to the Neo-Babylonian empire) plus the book's own symbol key (PDF p. 9).

The study files (page renders, OCR text, and one JSON analysis per spread) live in `C:\Users\amita\atlas-study\`,
**outside this repo**. The book is under copyright, so the scans, crops and analyses never get committed. This
document describes the grammar in our own words. It doesn't reproduce any of the book's content.

## The numbers from ten spreads

| | |
|---|---|
| Figures analysed | 25 (22 thematic maps, 3 reference maps, 0 charts in this early stretch) |
| Figures per plate | 1–5 (median 2) |
| Encodings counted | point symbols 39, area fills 38, labels 23, arrows 15, lines 13, insets 4 |
| Text-to-figure links found | 125 (about 12 per spread) |
| Link types | locates 71 · explains movement 30 · classifies 11 · sequences 10 · compares 3 |

Two things stand out. First, **most of what the text says about a map is "where"** (57% of links), then
"who moved where" (24%). Sequence and comparison are rare on the map and live in the text. Second, every spread
has a long *text-only* list, and it's always the same kind of thing: religion, law, social order, technology,
art, burial custom. **The map carries place, power and movement. The text carries how and why.** Mapify follows
the same division and doesn't try to draw ideas.

## 1. Page anatomy

- **Left page: the plate.** One to four black-framed figures stacked vertically. Each has a **bold serif caption
  under the frame** that names the subject and period ("The Empire of …, c. …"). A thin running head in serif
  sits at the top: *Part / Chapter*.
- **Right page: the text.** Two justified columns, a bold title, then bold section heads. Entries are **date-led**:
  the date or span in bold, then a compressed sentence or two. Abbreviations and arrows (→) save space.
  Cross-references point to other plates by page number.
- The two pages are designed together. Nearly every place on the map is named in the text, and nearly every text
  paragraph has something on the map. In the viewer, hovering shows this: a text entry lights up its map layers,
  and a map layer lights up its entries.

## 2. Figure kinds and when to use them

| Kind | Use when the write-up… | Seen on |
|---|---|---|
| **Single synthesis map** (≈ 0.85 of plate) | tells one story in one region | Egypt I |
| **Two stacked maps** (≈ 0.5 + 0.5) | moves from evidence to interpretation, or from region to world | Palaeolithic, Near East, Mesopotamia I–II |
| **Main map + local insets** (0.6 + 0.2 + 0.15) | has one dense core (a delta, a capital district) | Egypt II |
| **Small multiples** (3–4 panels, identical extent) | describes a succession: empire after empire, culture after culture | Mesolithic/Neolithic, Mesopotamia III |
| **Small multiples + synthesis** (4 small + 1 big) | names several cultures and then their combined effect | Neolithic Europe, Bronze Age |

Rules learned:
- **Pair an evidence map with a story map** when the source mixes a catalogue (sites, finds, digs) with narrative.
  Don't merge them into one figure.
- **Small multiples keep the extent fixed.** Only the historical layer changes from panel to panel, and the eye
  does the comparison.
- **Use an inset** when more than about eight labelled places fall inside 5% of the main frame.

## 3. Base map

- **Pale land, light blue sea, blue rivers.** Strong colour is reserved for history, never for terrain.
- **Relief appears only when it explains something.** It shows mountains as a barrier, a desert as a frontier, a
  river valley as a cradle. Egypt's plate draws the green cultivated strip along the Nile because the strip *is*
  the civilisation. *(Gap: our base map has no relief yet.)*
- No modern borders on historical maps. Modern country names appear only on "excavations" maps, where the
  present day is the subject.
- Rivers matter more than coastlines in river civilisations. Draw them heavier there.

## 4. Areas: realms, cultures, zones

- **Translucent washes, not hard borders.** A realm is a soft field of colour with a light edge. Cultures get
  feathered edges, and white holes inside a field are allowed (uneven distribution).
- **Core over extent.** A darker, smaller patch for the heartland sits on a paler, larger patch for the furthest
  reach. Same hue, two values.
- **Hatching for rivals and overlaps.** A second power drawn over the first is hatched, so both stay visible.
  Hatch direction can tell rivals apart.
- **One dominant colour per actor across a sequence of panels.** When a new power takes over, the colour changes.
- Environment belts (desert, steppe, cultivable land) are broad semi-transparent stripes behind everything.

## 5. Movement: arrows, routes, links

| Line | Means | Look |
|---|---|---|
| **Banner arrow** | a people moving, a conquest, a campaign | wide band, solid head, the people's name in spaced capitals *inside* the band, date beside it |
| **Thin arrow** | a single raid or expedition | narrow, same colour family as the actor |
| **Black heavy arrow** | an outside shock (an invader from off the map) | near-black, thick |
| **Yellow arrow** | migration rather than conquest | warm yellow band |
| **Dotted lane** | trade | rows of dots, earthy colour, no head |
| **Thin curve** | diplomacy, letters, alliance | hairline, no head |

- Arrows show **force and direction, not an itinerary.** Draw them broad and smooth; they don't follow roads.
- Separate kinds of movement by colour *and* style (solid for the first campaign, dashed for later ones).
- Trade gets three layers: **sources** (glyphs), **lanes** (dots) and **finds** (dots where the goods ended up).

## 6. Points

The book's key (PDF p. 9) is the fixed vocabulary: city ●, large city ■, capital ■ with the name underlined,
fortress ◆, battlefield ✕, treaty ◉, destroyed town (half-filled circle), siege, pass, blockade ▲▲▲,
insurrection (flame), conflict (lightning), monarch (crown), and others. Our registry is in
`atlas/js/plate-model.js` (`SYMBOLS`, `SYMBOL_GROUPS`) and drawn on the **Symbol key** page.

- **Resource glyphs form a local family** for each plate: small coloured shapes (gold disc, copper square, stone
  bar…), explained in that plate's own small legend.
- **Decisive dates sit beside the city** in a small coloured tag: the year of a sack, a founding, a battle.
  The regnal chronology stays in the text.
- Destroyed cities get the destroyed symbol *and* a date. They anchor the chronology on the map.
- Dense black dots are fine when abundance is the message. Clutter can be the evidence.
- Use a black-dot gazetteer when the text lists many sites; don't over-encode categories.

## 7. Type

| Element | Style |
|---|---|
| Realms and regions | bold spaced capitals, often **curved along the area** instead of a border |
| Peoples | bold spaced capitals in the actor's darker colour, set directly in the field or along their movement |
| Water | blue italic, light, often left out entirely |
| Cities | small sans, black; capitals bold and underlined |
| Dates on the map | small numerals beside symbols, or in coloured tags |
| Captions | bold serif under the frame |

Labels that bend across a zone **replace borders**. That's how the atlas draws fuzzy cultures without lying about
frontiers.

## 8. Legend

- **Small, local and unboxed.** It sits in the emptiest part of the figure, usually a sea or a desert, at
  bottom-left. Rows are a swatch or symbol followed by a short label.
- It lists only the variables this figure needs. Direct labels carry everything else.
- It can be split by theme (resources in one corner, political symbols in another).
- Small multiples often have no legend: the caption and the repeated grammar are enough.

## 9. Palette (approximate, from the plates)

Sea `#b9dff5`, land `#f3ebcb`–`#f7f7fb`, desert `#efd96d`, cultivation `#72ad4a`; realm washes in warm oranges
`#ee7d27`, yellows `#f4d442`, greens `#82c982`, lavenders `#b99bd8`; campaign red `#d95733`, diplomatic purple
`#8d62b4`, trade-lane ochre `#c58b32`; type near-black `#222`. The viewer's renderer uses close equivalents.

## 10. Named techniques (the reusable moves)

1. **Two-scale pairing**: a regional detail map with a world or synthesis map.
2. **Evidence / story split**: excavations or finds on one map, the political story on another.
3. **Small multiples on a constant base**: for successions.
4. **Core over extent**: same hue, two values.
5. **Rival hatching**: a second power hatched over the first.
6. **Banner arrows**: the people's name inside the arrow.
7. **Soft culture washes**: feathered fields, no borders.
8. **Labels as borders**: names curved across a zone.
9. **Date tags at places**: decisive years pinned to symbols.
10. **Destroyed-city anchors**: collapse made visible.
11. **Three-layer trade**: sources, lanes, finds.
12. **Environment as explanation**: draw the river, desert or steppe that caused the history.
13. **Legend in empty terrain**: unboxed, local, minimal.
14. **Insets for dense cores**.
15. **Neighbours named around the edge**: the balance of power shown by labelling the realms around the main one.

## 11. What we implement and what we don't yet

| Grammar | Status in `atlas/` |
|---|---|
| Framed figures, captions, running heads, two-page spread | done |
| Washes, core over extent, hatch / crosshatch / dots | done |
| Banner arrows with names and dates, thin arrows, dotted lanes, boundaries | done |
| The book's symbol key + site and resource glyphs | done (47 symbols) |
| Date tags, capital underline, curved labels with a straight fallback | done |
| Local legend, auto-built, one or two columns | done |
| Text page: date-led entries, linked to map layers, hover both ways | done |
| Self-review: label collisions, labels under the legend, arrow labels that don't fit | done (`ATLAS.current.warnings`) |
| Relief / environment tints | **not yet**: needs a hillshade or land-cover layer |
| Coastlines finer than 1:50m for insets under about 2° | **not yet**: add Natural Earth 1:10m |
| Charts, org charts, family trees, pies (later volumes; see the Austria-Hungary plate) | **not yet** |
| Collision checks against arrow bodies (not just text) | **not yet**: do it by eye |
