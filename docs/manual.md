# Manual: Amit's Notes of the History of the World

This is a personal atlas and timeline of world history. It's built on the *Penguin Atlas of World History* (Kinder and Hilgemann) and on Amit's notes in his Obsidian vault. This manual is for anyone looking at it for the first time, including Amit six months from now.

Open `app/index.html` in a browser. It works offline from `file://`, with no server and no install.

---

## 1. The idea

The aim is to move through history the way you'd move through a city with a good guide. You start with the whole shape, then step into a period, then a place, then a book. Three things work together:

- **The viewer** (`app/index.html`): a map, a timeline and a side panel, all at one moment in time.
- **The atlas** (`atlas/index.html`): 94 plates drawn in the style of the Penguin Atlas, one per spread.
- **The vault**: Amit's notes, which are the source of truth. The app links to them; it never copies them.

## 2. First visit

A short orientation card opens the first time. It offers four ways in:

- **Take a tour**: a guided walk built around one question, such as "Why and when were Jews persecuted?"
- **Browse an era**: jump straight into one period.
- **Books**: the reading shelves.
- **Start exploring**: close the card and look around.

Untick **Show this at start** to stop it appearing. You can reopen it from the **?** box.

## 3. The screen

### Header
- **The title is the era picker.** Click it to switch eras. Under **Threads** are the topic investigations (Russia, Maritime Asia), which cut across eras.
- **The date** you're on is shown next to the title.
- **Search** (or press `/`) finds events, people, chapters and books.
- **Board** opens a comparison board, such as Mongols → Mughals.
- **Tour** lists the guided tours.
- **Investigations** (on the bar above the lower timeline) slides a drawer over that timeline, leaving the map, date and card visible. Questions shows six standing questions and five colonial questions answered with sources for the open era; Guided routes opens the question-led tours.
- **Books** opens the reading shelves.
- **?** opens quick help.

The small arrows on the upper timeline, lower timeline and right pane hide or restore each area independently. Collapsing a pane does not change your date or selection; the map takes the freed space. Your choices are remembered in this browser. Hiding the lower timeline also closes its Investigations drawer.

### Master strip
This is the whole of history on one strip, from 1800 BC to 1945. Each era is a bar; the open one is red. Click an era to jump to it. **The year comes with you.** If you're at 1500 and switch eras, you stay at 1500, or the nearest year that era covers.
Short bars have labels above or below the strip, with red arrows pointing back to their periods. The strip grows to keep those labels separate; the labels are clickable too.

The scale stretches toward the present, so a six-year war isn't a hairline next to two thousand years of antiquity. The Penguin Vol. 2 spine now runs through the age of revolution, Napoleon, Restoration Europe, 1848, the age of national states, the age of imperialism, the First World War and both inter-war decades before WW2.

### Map
- **World at this date.** A quiet political map underneath everything, showing who held what at the nearest mapped date. The label says which date's map you're seeing. It shows states, and also peoples, nomads and Indigenous nations.
  - Soft, dashed edges mean the border is approximate. Solid edges mean it was fixed by treaty. Watching borders harden over the centuries is part of the story.
  - Source: the open historical-basemaps project. Treat it as a school-atlas sketch, not a survey.
- **Story layers.** The chapter you're following is drawn on top, with real outlines taken from its atlas plate, plus arrows for movements and dots for events.
- **Key.** It says who each colour is.
- Wheel to zoom, and drag to pan. **World** zooms back out.

### Lower timeline
- **Region chips:** Europe, Islamic world, Asia, Africa, Americas. Click a chip to show only that region's chapters. Greyed chips mean there are no chapters there yet. That gap is deliberate information, not a bug.
- **Lanes.** Chapters sit in region lanes. **Parts** (big groupings) start folded; click ▸ to open one, and the other open part in the lane closes.
- **Expand all** clears the filters and opens everything.
- **Atlas plates** lane, just under the chapters: a small gold square for each plate in the period, placed at the middle of its date range. Hover for the title and dates; click to open the plate. Plates that share a date stack upward.
- **Events** run below in their own lanes, with Canada always first.
- To move through time:
  - **Hover** to scrub through time.
  - **Click** empty space to pin a date, and click again to let go.
  - **Drag** to pan; **Ctrl + wheel** to zoom.
- **Play** runs time forward. **Follow chapters** lets the map follow the story as it plays.

### Side panel
- **The year**, and **NOW**: a short paragraph on the chapter you're in.
- **Atlas plate**: the best-matching plate shown large, with other relevant plates as small thumbnails. Click one to open it.
- **Chapter** chips: every chapter active at this date.
- **Meanwhile**: what was happening elsewhere at the same time. It always includes at least one region outside Europe when the data has one. If nothing outside Europe has been recorded yet, it says so.
- **A card** for anything you click (event, person, chapter, book), with links to the vault note, the library, and two Wikipedia articles where suitable: an overview of the subject and wider history of its period. The NOW chapter, tour stops, atlas plates and board tiles also offer the pair.

Wikipedia targets are verified direct articles stored in the app, not search results; the viewer itself still works offline. A book only gets Wikipedia links if a relevant article about that book exists. Fiction events never present Wikipedia as historical evidence.

## 4. Tours

Click **Tour** and pick one. A card appears at the top of the side panel:

- the stop's title, year and a short text;
- its places marked on the map;
- the matching atlas plate;
- a "meanwhile" line.

Use **‹ Prev / Next ›** or the `←` `→` keys. **✕** leaves the tour. The last stop is an **answer card**: the pattern, open questions and books to read next.

Tours so far:
- **Why and when were Jews persecuted?** 14 stops, 586 BC to 1945.
- **The rise and fall of Rome.** 16 stops, from the founding to 1453.
- **How did five colonial powers rule differently?** Dutch, British, Portuguese, French and Belgian comparisons.
- **How did the Atlantic trade in enslaved people work?** Includes African rulers and the people sold.
- **From US slavery to Obama and the backlash.** Follows slavery and Reconstruction; the sourced answer carries the later years beyond the timeline.
- **From the Cape Colony to apartheid and its end.** The later years are in the answer card.
- **What happens after empire leaves?** Partition, Mozambique and East Timor, with post-1946 outcomes in the answer card.
- **Indigenous North America before and after contact.**
- **How did the Mongols become the Mughals?**

Tours are written as data in `app/tours/*.js`. `docs/tours.md` explains how to add one.

The **Investigations** drawer's standing answers apply to the era, not to an individual event: changing the selected card or scrubbing the date does not silently change their claims. Switching eras changes all eleven answers. For the canonical wording and reasoning behind the questions, see the vault note *History - Interrogations*.

## 5. Books

**Books** opens the reading shelves. Each shelf answers a question or topic:

- Seeing past the Western lens.
- Comparing colonial powers. Tharoor and Ferguson are paired on purpose, to show both sides of an argument.
- After the colonisers left.
- The Atlantic slave trade.
- From slavery to Obama and the backlash.
- One shelf for each tour.

A shelf entry in italics is a gap still to fill. The shelves live in `app/data/reading.js`.

## 6. The interrogations

The atlas, like most general histories, looks mostly from Europe outward. So every era, map and tour is checked against a set of standing questions, such as *who is on this map, and who is missing?* and *whose names are we using?* There's a second set for the colonial era. The full list lives in the vault note **History - Interrogations**, which stays the only copy.

## 7. The atlas

`atlas/index.html` lists every plate. Each plate is drawn from data in `atlas/plates/*.js`. Shapes are built from real province outlines and clipped to land, and each plate carries a key and short notes. Small multiples show the same map at several dates side by side; institution diagrams show how a constitution or empire worked.

## 8. Links into Obsidian

The address bar always holds where you are, for example `#medieval/1096` or `#medieval/1096?tour=jewish-history&stop=4`. Copy it into a vault note and it opens at the same place, tour stop included.

## 9. Keys

| Key | Does |
|---|---|
| `←` `→` | Previous / next event (or tour stop during a tour) |
| `Space` | Play / pause |
| `/` | Search |
| `Esc` | Close a panel or clear the selection |

## 10. What it isn't (yet)

- **WW2** still uses an older style that colours whole modern countries. It will be repainted to match.
- **Sub-Saharan Africa, the Pacific and much of the Americas** are thin on chapters. Region chips show where.
- **Borders are approximate** everywhere before about 1800, and that is labelled.
