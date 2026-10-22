# Guided tours

Tours live in `app/tours/*.js`. Each file registers one object on `window.TOURS`:

```js
window.TOURS[id] = {
  id, title, question, intro,
  stops: [{
    year, era, title, text,
    places: [{ name, lon, lat }],
    chapter, plate, focus, meanwhile,
    wiki, wideWiki,
    sources: [{ label, url }]
  }],
  answer: { pattern, openQuestions, reading, sources: [{ label, url }] }
};
```

`era` is a dataset id, including thread ids such as `russia` or `maritime`. `year` is a historical year number: use negative numbers for BC years. Every stop year must be inside its dataset's range. `places` supplies at least two named map positions. `focus` is optional map bounds as `[[west,south],[east,north]]`. Optional `chapter` must resolve within the dataset and cover the stop's year; `plate` must be an existing `atlas/plates/<id>.js` id. Keep stop text short: two to four plain sentences. `sources` gives direct public citations for claims; answer-level `sources` does the same for the synthesis. For the seven investigations, `wiki` is an exact English Wikipedia article title for the stop and `wideWiki` an exact title for its broader setting; they are article identifiers, not search text. Rendering these fields belongs to the viewer.

The original `jewish-history` and `rome-rise-fall` tours remain available. Seven further investigations live in separate files:

| ID | Question |
| --- | --- |
| `colonial-powers` | Compare Dutch, British, Portuguese, French and Belgian rule |
| `atlantic-slave-trade` | Atlantic slavery, African rulers and resistance |
| `us-slavery-and-backlash` | US slavery, Reconstruction and the road to Obama and backlash |
| `south-africa-colony-apartheid` | The Cape, apartheid and its end |
| `after-empire` | Partition, Mozambique and East Timor |
| `indigenous-north-america` | Indigenous nations before and after European contact |
| `mongols-to-mughals` | Steppe, Timurid and Mughal lineages |

**Timeline limit:** the current datasets end in 1945/46. Consequently events involving Obama, apartheid's end, Partition, Mozambique's independence and East Timor's independence cannot yet be plotted at their actual dates. The relevant tours state this in their introductions and cover later outcomes with sourced answer-card reading, rather than attaching a postwar date to a prewar dataset. Future datasets can add dated stops without changing the tour schema.

A running tour is stored in the URL hash as `?tour=<id>&stop=<n>`, so reload restores the card and current stop.
