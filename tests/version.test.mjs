import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const read = (f) => readFileSync(new URL("../" + f, import.meta.url), "utf8");

test("app/version.js matches package.json", () => {
  const pkg = JSON.parse(read("package.json"));
  const m = read("app/version.js").match(/window\.APP_VERSION = (\{.*\});/);
  assert.ok(m, "version.js has APP_VERSION; run npm run stamp");
  const v = JSON.parse(m[1]);
  assert.equal(v.version, pkg.version, "stale stamp; run npm run stamp");
  assert.match(v.commit, /^[0-9a-f]{7,}$|^unknown$/);
});

test("every page loads the version badge", () => {
  for (const [f, rel] of [["app/index.html", ""], ["app/board.html", ""], ["atlas/index.html", "../app/"], ["docs/speckit/index.html", "../../app/"]]) {
    const s = read(f);
    assert.ok(s.includes(`src="${rel}version.js"`), `${f} loads version.js`);
    assert.ok(s.includes(`src="${rel}js/version-badge.js"`), `${f} loads version-badge.js`);
  }
});

test("CHANGELOG mentions the current version", () => {
  const pkg = JSON.parse(read("package.json"));
  assert.ok(read("CHANGELOG.md").includes(`## ${pkg.version.replace(/-.*$/, "")}`));
});
