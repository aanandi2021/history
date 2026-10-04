// Dataset validation (SC-003, SC-004) and constitution checks (II, III, VII).
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { loadDatasets, HM, ROOT } from "./load.mjs";

const DATASETS = loadDatasets();
const ids = Object.keys(DATASETS);

test("both datasets are registered", () => {
  assert.ok(ids.includes("ww2"));
  assert.ok(ids.includes("russia"));
});

for (const id of ids) {
  const raw = DATASETS[id];
  const ds = HM.normalise(raw);

  test(`${id}: passes validation`, () => {
    assert.deepEqual(HM.validate(raw), []);
  });

  test(`${id}: ids are unique after normalising`, () => {
    const all = [...ds.events, ...ds.leaders, ...ds.chapters, ...ds.books].map((x) => x.id);
    assert.equal(new Set(all).size, all.length);
  });

  test(`${id}: Canada lane is first and pinned (Principle III)`, () => {
    assert.equal(raw.lanes[0].id, "canada");
    assert.equal(raw.lanes[0].pinned, true);
    assert.ok(raw.events.filter((e) => e.lane === "canada").length >= 10, "at least ten Canada events");
  });

  test(`${id}: every event and chapter is reachable on the map or says why`, () => {
    const pinned = raw.events.filter((e) => e.at).length;
    assert.ok(pinned / raw.events.length > 0.9, `only ${pinned}/${raw.events.length} events have coordinates`);
    assert.ok(raw.chapters.length >= 8);
    assert.ok(raw.mapNote.length > 20);
  });

  test(`${id}: every link is well formed (SC-003)`, () => {
    for (const it of ds.byId.values()) {
      for (const l of HM.linksFor(ds, it)) {
        assert.doesNotThrow(() => new URL(l.href), `${it.id}: ${l.href}`);
        if (l.kind === "wiki") assert.match(l.href, /^https:\/\/en\.wikipedia\.org\/w\/index\.php\?search=[^&]+&title=Special%3ASearch&go=Go$/);
        if (l.kind === "library") assert.match(l.href, /^https:\/\/ottawa\.bibliocommons\.com\/v2\/search\?query=/);
        if (l.kind === "calibre") assert.match(l.href, /^calibre:\/\/show-book\/CalibreLibrary\/\d+$/);
        if (l.kind === "note") assert.match(l.href, /^obsidian:\/\/open\?vault=Fourth%20Vault%20July%202023&file=.+%23.+/);
      }
    }
  });

  test(`${id}: changelog exists (Principle II)`, () => {
    assert.ok(Array.isArray(raw.changelog) && raw.changelog.length >= 1);
  });
}

test("russia: sections match headings in the vault note when the vault is mounted", (t) => {
  const raw = DATASETS.russia;
  const vault = "A:\\Obsidian External Vaults\\Fourth Vault July 2023";
  const file = path.join(vault, ...raw.note.split("/")) + ".md";
  if (!fs.existsSync(file)) { t.skip("vault not mounted"); return; }
  const headings = new Set(fs.readFileSync(file, "utf8").split(/\r?\n/).filter((l) => l.startsWith("## ")).map((l) => l.slice(3).trim()));
  const ds = HM.normalise(raw);
  const missing = new Set();
  for (const it of ds.byId.values()) if (it.section && !headings.has(it.section)) missing.add(it.section);
  assert.deepEqual([...missing], []);
});

test("russia: every book in the vault note is in the dataset", (t) => {
  const raw = DATASETS.russia;
  const file = path.join("A:\\Obsidian External Vaults\\Fourth Vault July 2023", ...raw.note.split("/")) + ".md";
  if (!fs.existsSync(file)) { t.skip("vault not mounted"); return; }
  const titles = [...fs.readFileSync(file, "utf8").matchAll(/^- [^*]+\*([^*]+)\*/gm)].map((m) => m[1].split(":")[0].trim().toLowerCase());
  const have = raw.books.map((b) => b.title.toLowerCase());
  const missing = titles.filter((t) => !have.some((h) => h.startsWith(t) || t.startsWith(h.split(":")[0])));
  assert.deepEqual(missing, []);
});

test("no family birth years are committed to the repository (Principle VII)", () => {
  const src = fs.readFileSync(path.join(ROOT, "app", "js", "viewer.js"), "utf8");
  const famBlock = src.slice(src.indexOf("const FAMILY = ["), src.indexOf("];", src.indexOf("const FAMILY = [")));
  assert.doesNotMatch(famBlock, /born|\d{4}/);
});
