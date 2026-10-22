import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { APP, HM, ROOT, loadDatasets } from "./load.mjs";

const datasets = loadDatasets();
const titles = await import("../app/data/wiki-titles.js");
const catalog = titles.default;
const context = { window: {} };
vm.createContext(context);
for (const name of ["interrogation-questions.js", "interrogations-early.js", "interrogations-modern.js"]) {
  vm.runInContext(fs.readFileSync(path.join(APP, "data", name), "utf8"), context, { filename: name });
}

test("every era answers all eleven investigations with public sources", () => {
  const questions = context.window.INTERROGATION_QUESTIONS;
  const answers = context.window.INTERROGATION_ANSWERS;
  const ids = Array.from(questions, (q) => q.id);
  assert.equal(questions.length, 11);
  assert.deepEqual(ids, Array.from({ length: 11 }, (_, i) => `q${i + 1}`));
  assert.deepEqual(Object.keys(answers).sort(), Object.keys(datasets).sort());
  for (const [era, entries] of Object.entries(answers)) {
    assert.deepEqual(Object.keys(entries).sort(), ids.slice().sort(), `${era}: question coverage`);
    for (const [id, entry] of Object.entries(entries)) {
      assert.ok(typeof entry.answer === "string" && entry.answer.trim().length >= 35, `${era}/${id}: substantive answer`);
      assert.ok(Array.isArray(entry.sources) && entry.sources.length, `${era}/${id}: no sources`);
      for (const source of entry.sources) {
        assert.ok(source.label && source.label.trim(), `${era}/${id}: source label`);
        const url = new URL(source.url);
        assert.equal(url.protocol, "https:", `${era}/${id}: source must be a public HTTPS page`);
      }
    }
  }
});

test("every historical card and map period gets two distinct verified article URLs", () => {
  for (const [era, raw] of Object.entries(datasets)) {
    const ds = HM.normalise(raw);
    for (const item of [...ds.events, ...ds.leaders, ...ds.chapters]) {
      if (item.kind === "event" && ds.lanes.find((l) => l.id === item.lane)?.fiction) continue;
      const pair = HM.linksFor(ds, item).filter((l) => l.kind.startsWith("wiki"));
      assert.equal(pair.length, 2, `${era}/${item.id}: missing Wikipedia pair`);
      assert.notEqual(pair[0].href, pair[1].href, `${era}/${item.id}: same article twice`);
      for (const link of pair) {
        assert.match(link.href, /^https:\/\/en\.wikipedia\.org\/wiki\/[^?]+$/, `${era}/${item.id}: direct article URL`);
        assert.ok(Object.values(catalog).includes(link.title), `${era}/${item.id}: article not in verified catalog`);
      }
    }
    assert.equal(HM.wikiPair([HM.WIDE_WIKI[era]], ["World history"]).length, 2, `${era}: map context`);
  }
});

test("suitable books use author-qualified article targets, never a namesake historical subject", () => {
  const suitable = [];
  for (const [era, raw] of Object.entries(datasets)) {
    const ds = HM.normalise(raw);
    for (const book of ds.books.filter((b) => !b.fiction && !b.amits)) {
      const key = `book:${book.title} by ${book.author}`;
      const links = HM.linksFor(ds, book).filter((l) => l.kind.startsWith("wiki"));
      if (catalog[key]) {
        suitable.push(key);
        assert.equal(links.length, 2, `${era}/${book.title}`);
        assert.equal(links[0].title, catalog[key], `${era}/${book.title}`);
      } else assert.equal(links.length, 0, `${era}/${book.title}: no invented article`);
    }
  }
  assert.ok(suitable.length, "at least one actual book has a verified article");
});

test("all explicit Wikipedia topics and board tiles resolve to verified direct articles", () => {
  const missing = [];
  for (const [era, ds] of Object.entries(datasets)) {
    for (const item of [...ds.events, ...ds.leaders, ...ds.chapters]) {
      if (item.wiki && !HM.wikiUrl(item.wiki)) missing.push(`${era}/${item.id}: ${item.wiki}`);
    }
  }
  const boardContext = { window: { BOARDS: {} } };
  vm.createContext(boardContext);
  for (const name of fs.readdirSync(path.join(APP, "boards")).filter((f) => f.endsWith(".js"))) {
    vm.runInContext(fs.readFileSync(path.join(APP, "boards", name), "utf8"), boardContext, { filename: name });
  }
  for (const board of Object.values(boardContext.window.BOARDS)) {
    for (const tile of board.tiles) if (tile.wiki && !HM.wikiUrl(tile.wiki)) missing.push(`${board.id}/${tile.id}: ${tile.wiki}`);
  }
  assert.deepEqual(missing, []);
});

test("every atlas plate, board tile and tour stop has a subject and wider article", () => {
  const plateContext = { window: { PLATES: {} }, encodeURIComponent };
  vm.createContext(plateContext);
  for (const name of fs.readdirSync(path.join(ROOT, "atlas", "plates")).filter((f) => f.endsWith(".js"))) {
    vm.runInContext(fs.readFileSync(path.join(ROOT, "atlas", "plates", name), "utf8"), plateContext, { filename: name });
  }
  for (const spec of Object.values(plateContext.window.PLATES)) {
    const [era, , chapter] = spec.viewer.split("/");
    const ch = chapter && HM.normalise(datasets[era]).byId.get(decodeURIComponent(chapter));
    assert.ok(HM.wikiUrl(spec.wiki || spec.title), `plate ${spec.id}: specific article`);
    assert.equal(HM.wikiPair(
      [spec.wiki, spec.title, ch && (ch.wiki || ch.title), HM.WIDE_WIKI[era]],
      [HM.WIDE_WIKI[era], "World history"]
    ).length, 2, `plate ${spec.id}`);
  }
  const boardContext = { window: { BOARDS: {} } };
  vm.createContext(boardContext);
  for (const name of fs.readdirSync(path.join(APP, "boards")).filter((f) => f.endsWith(".js"))) {
    vm.runInContext(fs.readFileSync(path.join(APP, "boards", name), "utf8"), boardContext, { filename: name });
  }
  for (const board of Object.values(boardContext.window.BOARDS)) {
    const wide = board.id === "ww1-origins" ? "World War I" : "Mongol Empire";
    for (const tile of board.tiles) assert.equal(HM.wikiPair([tile.wiki, tile.title, wide], [wide, "World history"]).length, 2, `${board.id}/${tile.id}`);
  }
  const tourContext = { window: { TOURS: {} } };
  vm.createContext(tourContext);
  for (const name of fs.readdirSync(path.join(APP, "tours")).filter((f) => f.endsWith(".js"))) {
    vm.runInContext(fs.readFileSync(path.join(APP, "tours", name), "utf8"), tourContext, { filename: name });
  }
  for (const tour of Object.values(tourContext.window.TOURS)) {
    for (const stop of tour.stops) {
      const ch = stop.chapter && HM.normalise(datasets[stop.era]).byId.get(stop.chapter);
      if (stop.wiki) assert.ok(HM.wikiUrl(stop.wiki), `${tour.id}/${stop.title}: stop article`);
      if (stop.wideWiki) assert.ok(HM.wikiUrl(stop.wideWiki), `${tour.id}/${stop.title}: wider article`);
      assert.equal(HM.wikiPair(
        [stop.wiki, stop.title, ch && (ch.wiki || ch.title), HM.WIDE_WIKI[stop.era]],
        [stop.wideWiki, HM.WIDE_WIKI[stop.era], "World history"]
      ).length, 2, `${tour.id}/${stop.title}`);
    }
  }
});

test("each entrypoint loads the static catalog before the viewer model", () => {
  for (const file of [path.join(APP, "index.html"), path.join(APP, "board.html"), path.join(ROOT, "atlas", "index.html")]) {
    const html = fs.readFileSync(file, "utf8");
    assert.ok(html.indexOf("wiki-titles.js") >= 0 && html.indexOf("wiki-titles.js") < html.indexOf("js/model.js"), file);
  }
});
