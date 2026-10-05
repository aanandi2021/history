# Changelog

Each version is a git tag (`git checkout v0.4.0` to see that build). The version you're looking at shows in the
viewer header next to the series title, and in the bottom-left corner of the board, atlas and walkthrough. Hover it
for the branch, commit and time it was stamped. `npm run stamp` rewrites `app/version.js` from `package.json` and git.

Work in progress lives on the `next` branch, checked out in a second folder (`A:\coding\history-next`) and served at
<http://127.0.0.1:8766/app/>, so it never disturbs the copy in `A:\coding\history` that you open from disk.

## 0.5.0 (in progress, `next`)

- Version badge on every page; this changelog; `npm run stamp` and `npm run serve` (port 8766).
- Atlas round 4 (PDF pp. 74–93, Rome): dated layers that appear as the timeline reaches them, with a growth ladder in the key; campaign itineraries with numbered, dated legs and an arrowhead that moves with the date; fronts with teeth; an ally ring.
- Muscovy grows tier by tier, Napoleon's 1812 march plays out day by day, and the Eastern Front shows its Dec 1941 and Nov 1942 lines and the Leningrad siege.

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
