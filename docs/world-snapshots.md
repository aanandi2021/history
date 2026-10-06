# World snapshots

The viewer's muted political underlay is `app/data/world-snapshots.js`. It defines dated snapshots and the viewer picks the latest snapshot at or before the current year.

Each polity is approximate and deliberately quiet:

```js
{ id, name, colour, regions:["FRA", "DEU"], minus:[...], polygon:[[lon,lat],...], label:[lon,lat], approx:true }
```

`regions` and `minus` use Natural Earth region codes from `atlas/data/regions-eu.js`, the same building blocks used by atlas plates. Use modern countries or provinces only as school-atlas approximations. If a border is uncertain, prefer omitting the polity or marking it approximate rather than inventing precision. `tests/spine.test.mjs` fails on unknown region codes.
