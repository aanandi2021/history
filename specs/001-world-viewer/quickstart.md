# Quickstart: validate the World Viewer

## Prerequisites

- Node 18 or later (`node --version`)
- Run `npm install` once in the repo root. Puppeteer reuses the Chrome already cached for Neon Rain.

## Run it

Double-click `app/index.html`. No server is needed.

## Automated checks

```
npm test            # data validation + model unit tests + browser tests
npm run test:data   # datasets only (fast)
npm run test:e2e    # browser tests only
```

All three should pass. The browser tests also save screenshots to `tests/screenshots/`.

## Manual scenarios (one per user story)

1. **US1 Meanwhile**: open `app/index.html#ww2/1942-08-19`. The panel should list Dieppe (Canada), Stalingrad (Eastern Front) and Guadalcanal (Asia & Pacific), with Churchill, Roosevelt, King and Stalin in power. Dieppe should be pinned on the map.
2. **US2 Chapters**: click the "Barbarossa to Stalingrad" chapter. The map should fly to the western USSR and the timeline should show mid-1941 to early 1943. Press **World** to return.
3. **US3 Links**: open `#russia/1709-07-08/poltava-1709`. The card should show "Open note", "Wikipedia" and the era's books. Click "Open note" to check that Obsidian opens the Russia note at the Peter the Great section (task T040).
4. **US4 Datasets and addresses**: switch the selector from Russia to WW2 and watch the address change. Paste `#nonsense/9999` and the viewer should fall back to WW2 at its start.
5. **US5 Family**: click "add birth year" on the Amit row and enter a year. Reload, and the bar should still be there. `git status` should show no changes.
