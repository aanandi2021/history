# Contract: address (URL hash)

```
index.html#<dataset>/<date>[/<item-id>]
```

| Part | Example | Rule |
|---|---|---|
| dataset | `russia` | Must be a registered dataset id. Otherwise the viewer uses the default (`ww2`). |
| date | `1812-09-14`, `1812` | `YYYY`, `YYYY-MM` or `YYYY-MM-DD`. It is clamped into the dataset range. If it is invalid, the range start is used. |
| item-id | `borodino-1812` | Must be an event, leader, chapter or book id. Unknown ids are ignored. |

The viewer updates the hash with `history.replaceState` whenever the cursor settles, the selection changes, or the dataset changes.
That way the back button doesn't fill up with intermediate states. Loading a hash, or changing it by hand, restores the
dataset, date and selection.

Examples to paste into Obsidian:

- `[Moscow burns](file:///A:/coding/history/app/index.html#russia/1812-09-14/moscow-burns-1812)`
- `[Dieppe in context](file:///A:/coding/history/app/index.html#ww2/1942-08-19/dieppe-1942)`
