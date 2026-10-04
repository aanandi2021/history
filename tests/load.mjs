// Load the app's data files the way a browser would, inside a vm sandbox.
import fs from "node:fs";
import vm from "node:vm";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
export const APP = path.join(ROOT, "app");
export const HM = createRequire(import.meta.url)(path.join(APP, "js", "model.js"));

export function loadDatasets() {
  const ctx = { window: {} };
  vm.createContext(ctx);
  const dir = path.join(APP, "data");
  for (const f of fs.readdirSync(dir).filter((f) => f.endsWith(".js") && f !== "world-110m.js")) {
    vm.runInContext(fs.readFileSync(path.join(dir, f), "utf8"), ctx, { filename: f });
  }
  // JSON round-trip moves the data out of the vm realm so deepEqual and instanceof behave.
  return JSON.parse(JSON.stringify(ctx.window.DATASETS));
}

