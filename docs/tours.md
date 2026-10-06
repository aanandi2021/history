# Guided tours

Tours live in `app/tours/*.js`. Each file registers one object on `window.TOURS`:

```js
window.TOURS[id] = {
  id, title, question, intro,
  stops: [{ year, era, title, text, focus, plate, meanwhile }],
  answer: { pattern, openQuestions, reading }
};
```

`era` is a dataset id, including thread ids such as `russia` or `maritime`. `year` is a historical year number: use negative numbers for BC years. `focus` is optional map bounds as `[[west,south],[east,north]]`. `plate` must be an existing `atlas/plates/<id>.js` id. Keep stop text short: two to four plain sentences.

A running tour is stored in the URL hash as `?tour=<id>&stop=<n>`, so reload restores the card and current stop.
