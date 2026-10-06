# Changelog

Each version is a git tag (`git checkout v0.4.0` to see that build). The version you're looking at shows in the
viewer header next to the series title, and in the bottom-left corner of the board, atlas and walkthrough. Hover it
for the branch, commit and time it was stamped. `npm run stamp` rewrites `app/version.js` from `package.json` and git.

Work in progress lives on the `next` branch, checked out in a second folder (`A:\coding\history-next`) and served at
<http://127.0.0.1:8766/app/>, so it never disturbs the copy in `A:\coding\history` that you open from disk.

## Unreleased

- Atlas area layers can opt into land clipping with `clipToLand: true`; the Roman frontier, Augustus and late-antique migration plates now keep empire washes off the Mediterranean, Black Sea and Atlantic water.

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
