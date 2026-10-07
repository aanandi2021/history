# Changelog

Each version is a git tag (`git checkout v0.4.0` to see that build). The version you're looking at shows in the
viewer header next to the series title, and in the bottom-left corner of the board, atlas and walkthrough. Hover it
for the branch, commit and time it was stamped. `npm run stamp` rewrites `app/version.js` from `package.json` and git.

Work in progress lives on the `next` branch, checked out in a second folder (`A:\coding\history-next`) and served at
<http://127.0.0.1:8766/app/>, so it never disturbs the copy in `A:\coding\history` that you open from disk.

## 1.2.0 (Unreleased / 1.2.0-dev)

- Added Penguin Atlas Vol. 2 round 1: the age of revolution period, chapter scenes, five plates, Canada-first War of 1812 coverage, Haiti and abolition, and the master-strip gap moved to 1815-1939.
- Revised the Vol. 2 round 1 plates with fuller historical geography for 1812 Europe, Vienna, Haiti, the War of 1812 and the American/French revolutionary campaigns, plus a Minard-style Russian campaign figure.
- Books button opens reading shelves (`app/data/reading.js`): the Western lens, comparing colonial powers, after empire, the Atlantic slave trade, slavery to Obama and the backlash; tour shelves pull their reading from the tour and link to it.

## 1.1.0 (7 Oct 2026)

- Reframed the top spine as eras only: Russia and Maritime Asia are now threads in the period dropdown, while preserving their existing datasets. Switching eras or threads carries the current year and clamps to the nearest edge.
- Marked the 1800-1939 Penguin Vol. 2 gap on the master strip.
- Added a subtle "World at this date" political underlay built from Natural Earth region blocks, with dated snapshots from 1500 BC to 1939 and a map toggle.
- Added guided tours, URL-deep-linked tour state, keyboard stop navigation and two pilot tours: Jewish persecution history and Rome's rise/fall.
- Documented how to write tours and world snapshots, with tests for tour references, spine behaviour and snapshot region codes.

## 1.0.0 (6 Oct 2026)

- Atlas round 14 (PDF pp. 274-289): closes the atlas proper with Qing China, Mughal/Company India, Atlantic America and New France, the Seven Years' War, Prussia, the partitions of Poland and enlightened despotism.
- Expanded Natural Earth region building blocks beyond Europe for North America, Atlantic America, India and China, while keeping dissolved admin-0/admin-1 arcs in one compact file.

## 0.9.0 (6 Oct 2026)

- Added Natural Earth Europe region building blocks for atlas area layers, with `regions` / `minus` support and rebuilt round 13 plates from administrative shapes.
- Atlas round 13 (PDF pp. 254–273): opened the **Age of Reason** / early-modern period (1600–1789) with Canada-first context for Acadia, Quebec, Montreal, Hudson Bay and Utrecht.
- Added four plates for the Thirty Years' War and Westphalia, Louis XIV and French absolutism, Austria's Ottoman-Danube frontier, and Sweden/Russia in the Baltic.
- Added early-modern scenes and tests covering Westphalia, Versailles, Karlowitz/Passarowitz, Stuart Britain, Utrecht, Poltava and Nystad.

## 0.8.0 (6 Oct 2026)

- Atlas round 12 (PDF pp. 234–253): added four Age of Religious Discord plates for the German Reformation, Charles V and Habsburg-Valois Europe, confessional Europe, and the Dutch revolt plus maritime empires.
- Transition data now has Reformation, Catholic renewal, Huguenot wars, Dutch revolt, Baltic conflict and Thirty Years War chapters/scenes, so the master timeline and plate links resolve.
- Added confessional hatching guidance for Reformation-era maps: solid colour for dominant confessions, hatching/crosshatching for mixed or contested religious geography.

## 0.7.0 (6 Oct 2026)

- Atlas round 6 (PDF pp. 114–133): opened the medieval period with successor kingdoms, Justinian's reconquest, early Islam, Franks/Carolingians, Normans/Vikings and Kievan Rus roots.
- New period dataset, **The Middle Ages** (AD 500–1500), with lanes for Canada and the Americas, Western Europe, Byzantium, Islam, Steppe/Rus and Asia.
- Three new plates: the barbarian kingdoms around 500, Justinian's reconquest, and Charlemagne's empire plus the Treaty of Verdun.
- New atlas boundary style for partition lines, used for Verdun-style divisions that are not modern state borders.
- Atlas area layers can opt into land clipping with `clipToLand: true`; the Roman frontier, Augustus and late-antique migration plates now keep empire washes off the Mediterranean, Black Sea and Atlantic water.
- Added a second cause-and-effect board, "From Mongols to Mughals", connecting Genghis Khan, the khanates, Timur, Babur, Panipat, Mughal India, Russia and maritime Asia.
- Added Golden Road aha links: datasets can tag events or chapters with a registered book/heading, and viewer cards open Ford's canonical Obsidian note without copying note text into the repo.
- Atlas round 7 (PDF pp. 134–153): added Abbasid Baghdad and the House of Wisdom, the Abbasid political world, Ottonian/Salian Germany, church reform, and the First through Third Crusades.
- Three new plates: Abbasid Baghdad's Round City and knowledge flows, the Abbasid caliphate after 750, and the first three crusades with the crusader states.
- Atlas figures can now turn the basemap off for diagrammatic city plans while keeping the same legend, label and cross-reference system.
- Atlas round 8 (PDF pp. 154–173): added Capetian France, Norman/Angevin England, Hohenstaufen Germany, Reconquista context, and the Poland-Hungary-Rus frontier at the Mongol arrival.
- Three new plates: Capetian France, England and the Angevin empire, and Poland/Hungary/Rus under the Mongol shock.
- Added institution diagrams to the atlas renderer and a Roman Republic constitution plate, linked from the end-of-the-Republic chapter.
- Added small-multiple atlas figures and a four-panel Rome growth plate from 264 BC to AD 117.
- Fixed atlas land clipping: clipped areas now paint through land instead of relying on a broad realm path over water, and polygon winding is normalised before drawing.
- Atlas round 9 (PDF pp. 174–193): added Byzantium under Basil II and after Manzikert, late-medieval trade networks, the Black Death route context, and France/England through the Hundred Years War.
- Three new plates: Byzantium from Basil II to the Fourth Crusade, Hanseatic plus Venetian/Genoese trade networks, and the Hundred Years War from Bretigny to Castillon.
- Added trade-network styling to the atlas renderer: weighted dotted routes and hub rings for ports and kontors.
- Atlas round 10 (PDF pp. 194–213): closed the medieval period with Baltic unions and the Teutonic Knights, Muscovy's bridge into the Russia period, the Ottoman rise to 1453, humanism, Portugal's turn toward India and the Timurid-to-Mughal prelude.
- Three new plates: Baltic unions and the Teutonic frontier, Muscovy/Lithuania/steppe, and Byzantium's end plus Ottoman expansion.
- Added phase labels for dated expansion zones, used on the Ottoman and Muscovy maps to mark 1326/1362/1451 and 1462/1505 fields directly on the area wash.
- Atlas round 11 (PDF pp. 214–233): opened **The age of transition** (1450–1650), with Canada-first coverage for Cabot, Cartier, Red Bay, Champlain, Wendat/Haudenosaunee context, plus Renaissance economy, voyages, American civilizations, Reformation, Ottomans, the Indian Ocean and Russia.
- Three new plates: economic life around 1500, Portuguese/Spanish voyages and Tordesillas, and American civilizations on the eve of conquest.
- Added a meridian boundary style for treaty claim lines such as Tordesillas, so a diplomatic line does not read like a modern border or a voyage route.

## 0.6.0 (5 Oct 2026)

- Master timeline across the very top: every period on one strip, the open one highlighted with its from/to years and the current date, in sync with the Period dropdown both ways.
- New header (mockup D): a status line with the selection and clickable breadcrumbs; the title is the period dropdown; one fixed row that no longer jumps between periods; playback moved onto the timeline, World onto the map; every period named on the strip, gaps marked "not yet covered", and a bracket for what the lower timeline shows.
- Atlas round 5 (PDF pp. 94–113): late Rome, Christianity and the migrations; new plates for Augustus, the high empire's frontiers, and Christianity plus successor peoples; the ancient period now extends to AD 700 with matching viewer chapters.

## 0.5.0 (5 Oct 2026)

- Version badge on every page; this changelog; `npm run stamp` and `npm run serve` (port 8766).
- Atlas round 4 (PDF pp. 74–93, Rome): dated layers that appear as the timeline reaches them, with a growth ladder in the key; campaign itineraries with numbered, dated legs and an arrowhead that moves with the date; fronts with teeth; an ally ring.
- Muscovy grows tier by tier, Napoleon's 1812 march plays out day by day, and the Eastern Front shows its Dec 1941 and Nov 1942 lines and the Leningrad siege.
- BC dates (`-0218` = 218 BC, no year 0), with a timeline axis that reads "300 BC … AD 100".
- New period, the ancient world (1800 BC – AD 500): Hammurabi, Han China, and Rome as a tree from city to empire, through the Punic Wars, Hannibal, Caesar in Gaul, the Pax Romana and the fall of the West.
- Three Roman plates (Rome conquers Italy, Hannibal's war, Caesar in Gaul), and the Hammurabi and Han plates now open on their chapters.
- Plates point back to the bigger picture: a "Where this sits" strip on every plate links to the period, the chapters above it, what's inside it, what else was happening, and the period's other plates. A chapter's own plate comes first on its card.

## 0.4.0 (5 Oct 2026), 6dfd741

- Chapters form a tree: parts, chapters and details, with ▾/▸ folding on the timeline.
- Part overview maps; the map follows the timeline's zoom.
- Colour key on the map; one colour per actor across a period.
- Atlas round 3 (PDF pp. 54–73).

## 0.3.0 (5 Oct 2026), 05dfbfb

- Every chapter has its own atlas-style scene, with names linked one move ahead and starred questions.
- Cause-and-effect board, first board "The road to 1914".
- Atlas round 2 (PDF pp. 34–53); plates link to the viewer and back.

## 0.2.0 (4 Oct 2026), 4e4c965

- Atlas plates and the mapify skill (PDF pp. 14–33).
- Maritime Asia period (745–865) and Amit's Fiction links.
- Spec Kit walkthrough.

## 0.1.0 (4 Oct 2026), 44625da

- The world viewer: map, swimlanes, chapters and cards, with Russia and the Second World War.
