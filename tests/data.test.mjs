// Dataset validation (SC-003, SC-004) and constitution checks (II, III, VII).
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { loadDatasets, HM, ROOT } from "./load.mjs";

const DATASETS = loadDatasets();
const ids = Object.keys(DATASETS);

test("all datasets are registered", () => {
  for (const id of ["ww2", "russia", "maritime", "ancient"]) assert.ok(ids.includes(id), id);
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
        assert.doesNotThrow(() => new URL(l.href, "file:///A:/coding/history/app/index.html"), `${it.id}: ${l.href}`);
        if (l.kind === "plate") assert.match(l.href, /^\.\.\/atlas\/index\.html#[a-z0-9-]+$/);
        if (l.kind === "wiki") assert.match(l.href, /^https:\/\/en\.wikipedia\.org\/w\/index\.php\?search=[^&]+&title=Special%3ASearch&go=Go$/);
        if (l.kind === "library") assert.match(l.href, /^https:\/\/ottawa\.bibliocommons\.com\/v2\/search\?query=/);
        if (l.kind === "calibre") assert.match(l.href, /^calibre:\/\/show-book\/CalibreLibrary\/\d+$/);
        if (l.kind === "note") assert.match(l.href, /^obsidian:\/\/open\?vault=333bfdd695459a48&file=.+%23.+/);
        if (l.kind === "fiction") assert.match(l.href, /^obsidian:\/\/open\?vault=333bfdd695459a48&file=Writing%2F.+/);
      }
    }
  });

  test(`${id}: changelog exists (Principle II)`, () => {
    assert.ok(Array.isArray(raw.changelog) && raw.changelog.length >= 1);
  });
}

const VAULT = "A:\\Obsidian External Vaults\\Fourth Vault July 2023";
const vaultFile = (notePath) => path.join(VAULT, ...notePath.split("/")) + ".md";
const headingsOf = (file) => new Set(fs.readFileSync(file, "utf8").split(/\r?\n/).filter((l) => /^#{2,3} /.test(l)).map((l) => l.replace(/^#+ /, "").trim()));

test("Golden Road aha links point only to headings in the vault note", (t) => {
  const note = vaultFile(HM.BOOKS["golden-road"].note);
  if (!fs.existsSync(note)) { t.skip("Golden Road note not found"); return; }
  const headings = headingsOf(note);
  const bad = [];
  for (const raw of Object.values(DATASETS)) {
    const ds = HM.normalise(raw);
    for (const it of ds.byId.values()) for (const a of it.aha || []) {
      if (a.book === "golden-road" && !headings.has(a.heading)) bad.push([raw.id, it.title || it.name, a.heading]);
    }
  }
  assert.deepEqual(bad, []);
});

for (const id of ids.filter((i) => DATASETS[i].note)) {
  test(`${id}: sections match headings in the vault note when the vault is mounted`, (t) => {
    const raw = DATASETS[id];
    const file = vaultFile(raw.note);
    if (!fs.existsSync(file)) { t.skip("vault note not found"); return; }
    const headings = headingsOf(file);
    const ds = HM.normalise(raw);
    const missing = new Set();
    for (const it of ds.byId.values()) if (it.section && !headings.has(it.section)) missing.add(it.section);
    assert.deepEqual([...missing], []);
  });

  test(`${id}: Amit's Fiction links land on real headings in the novel's notes`, (t) => {
    const raw = DATASETS[id];
    const ds = HM.normalise(raw);
    const targets = [];
    for (const it of ds.byId.values()) {
      const f = HM.ficTarget(ds, it);
      if (f) targets.push([it.id, f.note, f.heading]);
      if (it.amits) targets.push([it.id, it.note, it.heading]);
    }
    if (!targets.length) { t.skip("no fiction links"); return; }
    if (!fs.existsSync(vaultFile(targets[0][1]))) { t.skip("vault not mounted"); return; }
    const bad = targets.filter(([, note, h]) => !fs.existsSync(vaultFile(note)) || (h && !headingsOf(vaultFile(note)).has(h)));
    assert.deepEqual(bad, []);
  });

  test(`${id}: every book in the vault note is in the dataset`, (t) => {
    const raw = DATASETS[id];
    const file = vaultFile(raw.note);
    if (!fs.existsSync(file)) { t.skip("vault note not found"); return; }
    const titles = [...fs.readFileSync(file, "utf8").matchAll(/^- [^*]+\*([^*]+)\*/gm)].map((m) => m[1].split(":")[0].trim().toLowerCase());
    const have = raw.books.map((b) => b.title.toLowerCase());
    const missing = titles.filter((t) => !have.some((h) => h.startsWith(t) || t.startsWith(h.split(":")[0])));
    assert.deepEqual(missing, []);
  });
}

test("maritime: the fiction lane is labelled as fiction and every event in it points into the novel", () => {
  const raw = DATASETS.maritime;
  const lane = raw.lanes.find((l) => l.fiction);
  assert.ok(lane && /fiction/i.test(lane.label));
  const evs = raw.events.filter((e) => e.lane === lane.id);
  assert.ok(evs.length >= 8);
  for (const e of evs) assert.ok(e.fic, e.title);
  assert.ok(raw.books.some((b) => b.amits && b.title === "The Unseen Tomorrow"));
});

test("no family birth years are committed to the repository (Principle VII)", () => {
  const src = fs.readFileSync(path.join(ROOT, "app", "js", "viewer.js"), "utf8");
  const famBlock = src.slice(src.indexOf("const FAMILY = ["), src.indexOf("];", src.indexOf("const FAMILY = [")));
  assert.doesNotMatch(famBlock, /born|\d{4}/);
});

test("events inside a plate's span link to the plate; books and events outside do not", () => {
  const ds = HM.normalise(DATASETS.maritime);
  const inside = ds.events.find((e) => e.t0 >= HM.parseDate("0760") && e.t1 <= HM.parseDate("0840"));
  const outside = ds.events.find((e) => e.t0 > HM.parseDate("0851"));
  const plateLinks = (it) => HM.linksFor(ds, it).filter((l) => l.kind === "plate");
  assert.deepEqual(plateLinks(inside).map((l) => l.href), ["../atlas/index.html#maritime-monsoon"]);
  if (outside) assert.deepEqual(plateLinks(outside), []);
  assert.deepEqual(plateLinks(ds.books[0]), []);
});

test("validate catches a malformed plate reference", () => {
  const raw = { ...DATASETS.maritime, plates: [{ id: "Bad Id", title: "", start: "0900", end: "0800" }] };
  const errs = HM.validate(raw).join("\n");
  assert.match(errs, /lowercase/);
  assert.match(errs, /needs a title/);
  assert.match(errs, /bad dates/);
});
