import puppeteer from "puppeteer"; import path from "node:path"; import { pathToFileURL } from "node:url";
const b = await puppeteer.launch(); const p = await b.newPage(); await p.setViewport({width:1440,height:900});
await p.goto(pathToFileURL(path.resolve("app/index.html")).href + "#ww2/1939-09-01"); await p.waitForFunction("window.APP&&APP.ready");
console.log(await p.evaluate(() => [...document.querySelectorAll("#tl g.item.chapter")].map(g => { const r = g.querySelector("rect").getBoundingClientRect(); return g.dataset.id + " " + [r.x, r.y, r.width, r.height].map(Math.round).join(","); }).join("\n")));
const r = await (await p.$('#tl g.item.chapter[data-id="ch-barbarossa-to-stalingrad"] rect')).boundingBox();
console.log(await p.evaluate((x, y) => { const e = document.elementFromPoint(x, y); return e.tagName + " " + (e.closest("[data-id]")?.dataset.id); }, r.x + r.width / 2, r.y + r.height / 2));
await b.close();
