# Atlas design language

What makes a Kinder & Hilgemann plate (*The Penguin Atlas of World History*, Vol. 1) work, written down so the
`mapify` skill and `atlas/js/plate.js` can follow it. Source: a close reading of the first ten spreads of Vol. 1
(PDF pages 14–33: the Palaeolithic to the Neo-Babylonian empire) plus the book's own symbol key (PDF p. 9),
and a second pass over the next ten (PDF pages 34–53: the Indo-Europeans to Greek colonization), in §12.

The study files (page renders, OCR text, and one JSON analysis per spread) live in `study\`, which is **git-ignored**. The book is under copyright, so the scans, crops and analyses never get committed. This
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
6. **Confessional hatching**: for Reformation-era maps, solid washes show dominant confessions while hatch or crosshatch marks mixed, contested or legally unsettled religious geography. Do not draw belief as a clean state border.
6. **Banner arrows**: the people's name inside the arrow.
7. **Soft culture washes**: feathered fields, no borders.
8. **Labels as borders**: names curved across a zone.
9. **Date tags at places**: decisive years pinned to symbols.
10. **Destroyed-city anchors**: collapse made visible.
11. **Three-layer trade**: sources, lanes, finds.
12. **Environment as explanation**: draw the river, desert or steppe that caused the history.
13. **Legend in empty terrain**: unboxed, local, minimal.
14. **Insets for dense cores**.
15. **Confessional hatching** for religious pluralism and contested settlement belts.
16. **Neighbours named around the edge**: the balance of power shown by labelling the realms around the main one.

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
| Degrees of control: `tier` core / conquest (stripe) / influence (pale, dashed) | done (round 2) |
| Fortified frontier (`boundary` style `wall`), dates printed on lines (`dates`) | done (round 2), with a run-off check |
| Partition lines (`boundary` style `partition`) | done (round 6) for Verdun-style family or treaty divisions that cut one realm without pretending to be modern borders |
| Treaty meridians (`boundary` style `meridian`) | done (round 11) for world-scale claim lines such as Tordesillas: a pale bed with a dotted purple stroke, visually separate from routes and state borders |
| Multi-segment sea routes (`route.segments`) | done (round 11) for antimeridian crossings and broken ocean tracks such as Magellan-Elcano: one legend item, separate drawn segments, no false line across land |
| Geographic sea routes (`route.geo:true`) | done (round 11) for ocean voyages: routes render through `d3.geoPath`, so world projections clip antimeridian crossings and avoid false straight screen lines across continents |
| World projections (`projection:"naturalEarth"` / `"equirectangular"`, optional `centerLon`) | done (round 11) for global voyage plates that need a standard world projection rather than a regional conic or flat planning grid |
| Geographic crop bands (`base.cropToExtent`) | done (round 11) for global world-projection plates that should hide polar land outside the stated latitude band while keeping the chosen projection scale |
| Built roads (`route` style `road`), fine stipple for fuzzy social zones | done (round 2) |
| Origin halos on points (colony by founder) | done (round 2) |
| Relief / environment tints | **not yet**: needs a hillshade or land-cover layer. Round 2 used terrain only faintly, so this stays low priority |
| Coastlines finer than 1:50m for insets under about 2° | **not yet**: add Natural Earth 1:10m |
| Institution diagrams: compartments, nodes and labelled arrows inside an atlas frame | done for constitution-style "government machine" plates |
| Charts, family trees, pies (later volumes; see the Austria-Hungary plate) | **not yet** |
| Collision checks against arrow bodies (not just text) | **not yet**: do it by eye |

## 12. Round 2: the next ten spreads (PDF pp. 34–53)

Indo-Europeans and Crete, Asia Minor, Palestine I and II with Phoenicia, China, India, Persia, and Greece (the
Mycenaeans, the city-states and their cults, colonization). Analysed the same way as the first ten.

| | |
|---|---|
| Figures analysed | 20, every one a thematic map. Still no charts, trees or city plans in this stretch |
| Text-to-figure links | 134: locates 69 · explains movement 23 · classifies 22 · sequences 13 · compares 4 · quantifies 3 |

Classification doubled compared with round 1 (22 against 11). These plates sort places into kinds: palace or
tomb, tyranny or oligarchy, cult of which god, colony of which mother city. The grammar grows to carry that.

What was new, in the order it matters for us:

1. **Degrees of control.** China under the Han and India under Asoka separate a solid core, striped conquests
   and a pale wash of influence, all in one hue. Persia does the same with successive tints of one colour for
   cumulative growth. This is the most reusable move for any empire thread (Rome, the Mongols, the Mughals,
   the British in India). Implemented as `tier`.
2. **Lines that carry their own dates.** Frontier and campaign dates are printed on the line itself instead of
   in a tag or the legend, and a wall is drawn with battlements so a fortified frontier reads differently from a
   treaty line. Implemented as `style: "wall"` and `dates`.
3. **Infrastructure kept apart from movement.** The Persian royal road is drawn in its own dotted two-colour style
   so it is never mistaken for a campaign. Implemented as `route` `style: "road"`.
4. **Same-extent grids.** Palestine and India each get four small maps of the same ground in sequence. Our
   renderer already allows four figures. The skill now says when to use them.
5. **Labels instead of borders when borders would overclaim.** The tribes of Israel and the Greek dialects are
   giant names over the land, with no lines. Uncertain language limits are dashed arcs.
6. **Classification by symbol.** Mycenaean sites are sorted into palace, fortress and domed tomb; Greek cities
   get a black triangle for tyranny; cult sites carry the god's name in brackets as a micro-legend. The symbol
   set already has most of these. The bracket trick needs nothing new.
7. **Sea-first networks.** Phoenician and Greek colonization put the sea at the centre and mark each colony by
   its mother city with a coloured dot, the mother city with a square, and rival colonizers as competing fields.
   Implemented as `halo` on points.
8. **Dense regions without insets.** The Aegean is handled by fine coastlines, tiny symbols and rotated labels
   in open sea, not by an inset. When we need this, the fix is 1:10m coastlines rather than a new figure kind.

The fidelity plate for round 2 is `atlas/plates/han-china.js`: an overview of Wudi's empire plus a large-scale
figure of the Hexi Corridor, using every new primitive.

## 13. Scenes: the grammar on the viewer map

The same grammar now has a second renderer. Each chapter on the timeline can carry a scene (`app/scenes/*.js`),
drawn by `viewer.js` on the zoomable world map instead of on a framed plate. Three things differ from a plate.

- **Zoom is part of the grammar.** A plate is printed at one scale. A scene is seen at many, so layers take
  `minK`/`maxK`. Distant ports can drop away as you zoom in, and fine detail can appear only when you're close.
  Symbols and type stay the same size on screen at every zoom.
- **Arrows can fade.** When a source says only "to India and China", `fade: true` draws the arrow as a gradient
  that dies out, rather than pointing to a place the source doesn't name. Named ports get their own points.
- **The text is linked, not keyed.** On a plate the text and map share numbered references. In a scene the
  chapter's names link one move ahead (`terms`), and a few carry a starred question to ask.

The base map under a scene is still today's coastlines at 1:110m, so city-scale views (Baghdad's round city)
need their own plate. That's left for later.

## 14. Round 3: overview and detail (PDF pp. 54–73)

Ten more spreads: Sparta and the Peloponnese, Solon and Cleisthenes, the Persian Wars and the Delian League, a
text-only culture page, Athens' empire, Thebes and Philip, Alexander, the Diadochi, Hellenistic cities, and the
Hellenistic economy. Analyses are in `study/analysis/spread-p054…p072.json` and `round3-{a,b}-findings.md`.

**How the atlas pairs overview and detail.** There are no zoom insets in this batch. Instead:

- **Paired maps on one page.** The upper Athens map shows the theatre (Athens among Carthage, Etruria and
  Persia, a few bases and treaty lines). The lower one, on the same colours, adds Sparta, neutrals, battles,
  routes and dates. The reader carries colour and symbol from the overview into the detail.
- **Small multiples on a fixed extent.** The Diadochi are three panels of the same ground in 303, after 301 and
  around 180 BC. The comparison is the point, so nothing moves.
- **Overview and detail fused.** Alexander is one empire wash with a dated route drawn over it: the route is the
  detail.

**Colour.** It usually means *who* on political plates (Athens orange, Sparta blue, Persia green), but it also
means phase or degree (Philip's core, gains, allies, friends) and, on economic plates, kind (resource classes).
Arrows are the least reliable: black can mean one campaign's chronology rather than a black actor. A key appears
whenever colour is overloaded; plates that a few big labels can explain go without one.

**New techniques.** Great-power initials in a ring (C, E, P; M and P) to mark actors at overview scale;
coalition envelopes (dotted loops for the Corinthian League) that claim a sphere without a border; treaty arcs
and sea-limit lines (“off limits for Persian ships”) as lines rather than areas; fiscal districts drawn on the
sea; constitutional diagrams in the same frames as maps; city dots classed by founder; mint and harbour symbols.

**What we built from it.**

- **A chapter tree.** Chapters take a `parent`. A *part* is a top-level chapter with children; its scene is
  the overview: realm washes for the whole span, two to four big arrows, three to six anchor places, and
  medallions (`{ type: "label", style: "medallion", text: "R" }`) for the main powers. Its chapters reuse its
  colours exactly.
- **The map follows the timeline's zoom.** Zoomed out, the shortest chapter that still fills a fifth of the
  visible time tells the story, which is usually a part. Zoomed in, its chapters take over. Folding a part
  (▸ on the timeline) also makes its overview the map. This is the scene version of paired maps.
- **A colour key on the map**, grouped as the atlas does: *Who* (areas, and arrows in an actor's colour) and
  *Routes and lines*. Each scene file names its colours in `window.SCENE_ACTORS[dataset]`, one colour per actor
  for the whole period, and a test fails if a scene uses an unnamed colour. Canada and Japan share colours
  between the Russia and WW2 periods. The key shows pattern beside colour (solid held, stripes newly won, pale
  influence) and folds away.

Not yet: coalition envelopes as their own layer type and genealogy diagrams.

Side-branch follow-up: atlas figures can now use `kind: "small-multiples"` with one shared projection and a
list of dated `panels`. Each panel gets the same frame and base map, so changes in territory read as changes in
history rather than changes in camera position. The first example is `rome-growth-small-multiples`, four
Mediterranean panels for 264 BC, 133 BC, 44 BC and AD 117.

## 15. Round 4: Rome (PDF pp. 74–93)

The Rome section adds time to the grammar. The atlas shows a state growing by repeating the same extent with dated tiers (Rome in Italy c. 380, to 303, to 272), and it prints acquisition years in place (Sicily 241, Africa 146). The legend becomes a chronological ladder rather than a plain colour key. Wars between two powers give each commander a route of their own: Hannibal, the Scipios and Caesar get one heavy line each, with dates beside the stops, black X marks at battles, and numbered route styles where a campaign is too tangled to follow. Fronts and sea control are drawn as lines with teeth, not arrows. Movement is an arrow; pressure is a toothed line. Allies get hollow rings over the area, separate from territory. The section also has the first non-map figure, the Roman constitution, drawn as an institution diagram (people at the base, offices stacked above, edges labelled with verbs). Culture pages carry their material as text, with no figures.

What the viewer took from it (v0.5.0):

- **Dated layers.** Any layer can carry `from` and `until` (YYYY, YYYY-MM or YYYY-MM-DD). A tier appears when the timeline reaches its date. The key shows a **Growth** ladder of the dated area tiers, with the ones already reached in bold. Overlapping tiers stack, so older ground reads darker, as on the atlas. First example: Muscovy 1462 → 1478 → 1552 → 1582.
- **`itinerary`.** A campaign drawn as stops with dates: numbered legs, the date beside each stop, X at battles (`battle: true`), and optional `via` points to bend a leg. Legs already marched are solid, legs still to come are faint, and an arrowhead sits where the army is on the timeline's date, interpolated between stops. `style: "dashed"` is for a second phase by the same actor (a retreat), and `numbered: false` drops the leg numbers. First example: Napoleon's 1812 advance and retreat, which now share France's colour instead of the retreat using an unrelated one.
- **`front`.** A line with teeth on the side being pressed (`side: "l"` or `"r"` of the direction drawn). First examples: the Eastern Front in Dec 1941 and Nov 1942, each live only in its own months, and the siege line around Leningrad.
- **`ally` symbol.** A hollow ring for allied or free cities.

Not built yet: coalition and settlement hatches by recipient. A Rome period needs BC dates first, because the model only reads four-digit AD years.

§15 plate follow-up: the first Rome-style standalone plates using this grammar are `rome-italy`, `hannibal` and
`caesar`. `rome-italy` uses four same-extent Italian panels with dated citizen/allied tiers, colony points,
roads and battle Xs. `hannibal` uses rival western-Mediterranean spheres, Hannibal and Scipio campaign routes,
defecting-allied-city rings and the 201 settlement as a second figure. `caesar` pairs a Gaul campaign map with a
civil-war Mediterranean itinerary, separating Caesar's and Pompey's routes by style and colour. No new renderer
primitive was needed; the existing area tiers, hatches, roads, wall/teeth lines, routes, battle symbols, halos and
date tags covered the round 4 plate requirements closely enough.

## 16. Round 5: late Rome, Christianity and early medieval peoples (PDF pp. 94–113)

This batch changes the subject from conquest to systems. Rome is no longer only an expanding area or a campaign
route; it is an administrative settlement, a frontier machine, an economy, a church network and then a field of
successor peoples. Analyses are in `study/analysis/spread-p094…p112.json` and `round5-findings.md`.

New moves:

- **Administrative colour.** Augustus and the fourth-century empire use colour for legal status and government
  structure: imperial/senatorial provinces, prefectures, dioceses and client zones. The colour is not a people;
  it is an office or jurisdiction.
- **Constitution diagrams.** The Principate and Diocletian/Constantine figures use atlas frames for abstract
  power diagrams: fields, compartments, node shapes and arrows labelled with verbs. The renderer now supports
  that grammar through `kind: "diagram"`; the first built example is `roman-republic-constitution`.
- **Genealogy diagrams.** The Julian-Claudian tree treats marriages, dynastic lines and ruler marks as political
  geography. Also not yet implemented as a plate primitive.
- **Fort lattices.** The Limes figure makes the frontier from many coloured fort points by reign, with walls and
  moats as separate lines.
- **Commodity carpets.** The economic map deliberately uses many glyphs. The crowding is the evidence: grain,
  oil, metals, animals, textiles and trade routes together show the imperial economy.
- **Missionary diffusion.** Christianity is mapped with date-horizon areas, centre points, council symbols and
  travel routes, plus insets when a missionary itinerary is too dense for the main map.
- **Settlement mosaics.** Germanic and Slavic spreads use soft fields and large labels rather than hard borders.
  Terrain and swamps are explanatory layers, not decoration.

What we built from it:

- Three new plates: `augustus-principate`, `roman-frontiers` and `christianity-migrations`.
- The ancient period now runs to AD 700 and adds nested chapters for Augustus, the high empire, late antiquity,
  and Christianity plus migrations. This keeps the late Roman and early medieval material in the same Rome tree.
- No new renderer primitive was needed for the delivered plates. The current map primitives handled the chosen
  plates; institution and genealogy diagrams are the next useful atlas-only primitive.

## 17. Round 6: early Middle Ages (PDF pp. 114–133)

This batch moves from late Roman systems into medieval successor maps: Attila and the steppe peoples, Germanic
kingdoms, Lombard and Byzantine Italy, the Franks, Charlemagne, Verdun, Anglo-Saxon England, Normans and Kievan
Rus. Analyses are in `study/analysis/spread-p114…p132.json` and `round6-findings.md`.

New moves:

- **Partition lines.** Verdun, Mersen and Ribemont divide one Carolingian inheritance. These are not modern
  frontiers, so they now use `boundary` `style: "partition"`: a warm casing with a strong centre line. It reads
  as a legal/family cut across a realm, not a state border.
- **State mosaics in sequence.** The Franks and England spreads use fixed-extent small maps to show settlement,
  kingdom growth and later partition. Our delivered plates use one synthesis map, but the grammar points toward
  small multiples for later rounds.
- **Routes hardening into states.** Viking, Norman and Rus pages start as arrows and dotted trade lines, then
  become Normandy, Sicily, England and Kiev. Use both: movement first, then a soft field where movement becomes
  rule.
- **Administration diagrams return.** Charlemagne's court diagram is a map-page figure without geography. This
  remains a future atlas-only chart primitive rather than a viewer-map primitive.

What we built from it:

- New medieval period dataset, AD 500–1500, with lanes for Canada and the Americas, Western Europe, Byzantium,
  Islam, Steppe/Rus and Asia.
- Three plates: `barbarian-kingdoms`, `justinian-reconquest` and `carolingian-partition`.
- First use of `boundary` `style: "partition"` on the Verdun plate.

### Round 7: diagram figures for city plans

Most atlas figures are geographic maps, but a few subjects are better explained as plans. A figure can now set `projection: "plan"` with `base: { map: false }` to keep the Penguin-Atlas frame, legend, labels and cross-reference machinery while suppressing the Natural Earth basemap. Use the same layer grammar inside the frame: `boundary` for walls, `route` for rivers and canals, `point` for gates and institutions, and `area` for suburbs or precincts.

The Baghdad plate uses this sparingly: the Round City is a schematic plan with circular walls, four gates, canals, the Tigris, the palace, mosque and House of Wisdom. Its companion figure returns to a geographic map for knowledge flows. This keeps city form and world context on one spread without pretending the city plan is a surveyed modern map.

### Soft hand-drawn region edges

Area polygons default to softened closed curves (`smooth: true`) that interpolate through the hand-placed vertices with Catmull-Rom corners. This is intentional: the atlas should read as historical fields and soft frontiers, but the vertices remain the territory you drew. Use `smooth: false` only when the line must be exact, such as the shared Verdun partition edges. Area layers clip to land by default; set `clipToLand: false` only for deliberate sea zones or diagrammatic areas.

The clipping implementation is deliberately defensive. A land-clipped area now uses the area itself as the clip and paints the basemap land through it, so a broad realm field cannot bleed into the sea even when Natural Earth polygons, SVG clip-path fill rules or smoothed rings behave differently in Chrome. Polygon rings are normalised before drawing; a ring that D3 would read as the complement of the globe is reversed.

### Administrative region building blocks

For state-like areas, prefer Natural Earth building blocks over hand polygons. `atlas/data/regions-eu.js` is now the shared atlas region file: it is built from public-domain Natural Earth admin-1 states/provinces (1:10m), with admin-0 country codes derived by dissolving those same admin-1 features so country/province unions share arcs. `scripts/build_regions.mjs` also downloads the Natural Earth admin-0 package for source parity, clips and filters Europe plus the North American, Atlantic and Asian countries needed by the atlas, then simplifies and quantises for `file://` loading. Country features use ISO_A3 codes such as `FRA`, `SWE`, `CAN`, `USA`, `IND` and `CHN`; admin-1 features use `iso_3166_2` such as `FR-67`, `CA-QC`, `US-OH`, `IN-WB` or `CN-XJ`.

An area can now use `regions:[...]`, with optional `minus:[...]` and optional `polygon` additions. The renderer merges the listed regions and draws them as one SVG path, so adjacent provinces fill once instead of creating muddy overlap stripes. Use `minus` for a modern country minus provinces that were not yet in the state. Hand polygons remain appropriate for war zones, spheres of influence and vanished frontiers with no modern analogue, but snap them to region edges where possible and keep them subordinate to real administrative shapes.

## 18. Round 9: late-medieval networks and two-state war maps (PDF pp. 174–193)

This batch covers Byzantium under Basil II and after Manzikert, the Mongol and Chinese context pages, late-medieval towns and trade, England, France, the Hundred Years War, Switzerland and Burgundy. Analyses are in `study/analysis/spread-p174…p192.json` and `round9-findings.md`.

New moves:

- **Trade-network routes.** A `route` can carry `weight`, which scales the dotted or dashed line without changing its semantic style. Use it for relative route importance, not measured tonnage.
- **Hub symbols.** A `point` can carry `hub` and `hubColour`, drawing a ring around a port or trading centre. This lets a trade plate distinguish Lubeck, Bruges, Novgorod, Venice, Genoa or Alexandria from ordinary ports.
- **Two-map war comparison.** The Hundred Years War plate uses the same extent twice: first the treaty map after Crecy, Poitiers and Bretigny, then the 1429–1453 recovery. The reader compares the political field without learning a new base map.

What we built from it:

- Three plates: `byzantium-basil-crisis`, `medieval-trade-networks` and `hundred-years-war`.
- The medieval period now carries late Byzantine crisis, Hansa/Venice/Genoa trade, Black Death transmission context, Joan of Arc and the French recovery to 1453.
- The Hansa/Italian trade plate is the fidelity target for weighted trade routes and hub rings.

## 19. Round 10: closing the medieval period (PDF pp. 194–213)

This batch covers the Baltic and Teutonic Knights, late-medieval Germany and Poland-Lithuania, Muscovy and the successor khanates, the Balkans, Byzantium after 1204, Ottoman expansion to and beyond 1453, Yuan China, the Delhi Sultanate and the humanist/Atlantic turn. Analyses are in `study/analysis/spread-p194…p212.json` and `round10-findings.md`.

New move:

- **Phase labels on areas.** An `area` can carry `phaseLabel` and optional `phaseAt`. The renderer draws a small boxed date directly on the zone. Use this for dated expansion fields where the legend alone is too far away from the map: Ottoman `1326`, `1362`, `1451`; Muscovy `1462`, `1505`. It is not a general label replacement; keep proper labels and text refs for named places.

What we built from it:

- Three plates: `baltic-orders-kalmar`, `muscovy-lithuania-steppe` and `ottoman-rise-1453`.
- The medieval period now hands off explicitly to Russia through Ivan III and the Ugra, to Maritime Asia through Dias and Vasco da Gama, and to the Mongols-to-Mughals board through Timur and Babur.
- The Ottoman plate is the fidelity target for dated phase labels on expansion zones.
