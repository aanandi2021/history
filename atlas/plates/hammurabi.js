// Fidelity test: an atlas-style plate on the book's own ground (Mesopotamia, 2nd millennium B.C.),
// written from general knowledge to check the renderer can hold the grammar: small multiples with
// a constant base, rival powers hatched, core over extent, dated tags on cities, banner arrows for
// outside shocks. Dates follow the conventional middle chronology.
(function () {
  const EXT = [[35.2, 29.6], [50.2, 38.3]];
  const BAB = [44.42, 32.54], MARI = [40.89, 34.55], ESH = [44.73, 33.48], LARSA = [45.85, 31.28], ASSUR = [43.26, 35.46],
    LEILAN = [41.92, 36.96], ALEPPO = [37.16, 36.2], SUSA = [48.25, 32.19], QATNA = [36.86, 34.84], UR = [46.1, 30.96],
    NINEVEH = [43.15, 36.36], SIPPAR = [44.25, 33.06], NIPPUR = [45.23, 32.13];
  const water = [
    { type: "label", style: "water", text: "Persian Gulf", at: [49.3, 29.85], size: 8.5 }
  ];

  window.PLATES.hammurabi = {
    id: "hammurabi",
    title: "Mesopotamia in the age of Hammurabi",
    head: "The Early Empires / Mesopotamia (fidelity test)",
    folio: "2",
    figures: [
      {
        caption: "The balance of power, c. 1780 B.C.",
        share: 0.42, extent: EXT, projection: "mercator",
        layers: [
          { id: "upper-mesopotamia", type: "area", colour: "#4f7fb0", pattern: "hatch", pad: 0.8, legend: "Kingdom of Shamshi-Adad",
            around: [LEILAN, ASSUR, NINEVEH, [40.5, 36.6], [43.6, 34.9]] },
          { id: "mari-k", type: "area", colour: "#5e9a4c", opacity: 0.5, pad: 0.7, legend: "Mari",
            around: [MARI, [40.1, 35.2], [41.9, 34.3]] },
          { id: "esh-k", type: "area", colour: "#8c5aa6", opacity: 0.5, pad: 0.5, legend: "Eshnunna", around: [ESH, [45.2, 34.3]] },
          { id: "bab-1780", type: "area", colour: "#e07b39", opacity: 0.7, pad: 0.4, edge: "strong", legend: "Babylon", around: [BAB, SIPPAR] },
          { id: "larsa-k", type: "area", colour: "#c25a5a", opacity: 0.5, pad: 0.5, legend: "Larsa", around: [LARSA, UR, NIPPUR] },
          { id: "yamhad-1", type: "area", colour: "#9c7a3c", pattern: "hatch-back", pad: 0.8, legend: "Yamhad and Qatna", around: [ALEPPO, QATNA] },
          { id: "elam-1", type: "area", colour: "#777777", pattern: "crosshatch", pad: 1.0, legend: "Elam", around: [SUSA, [49, 33.2]] },
          { id: "leilan-1", type: "point", symbol: "capital", at: LEILAN, name: "Shubat-Enlil", labelPos: "e" },
          { id: "assur-1", type: "point", symbol: "large-city", at: ASSUR, name: "Assur", labelPos: "e" },
          { id: "mari-1", type: "point", symbol: "capital", at: MARI, name: "Mari", labelPos: "s" },
          { id: "esh-1", type: "point", symbol: "capital", at: ESH, name: "Eshnunna", labelPos: "e" },
          { id: "bab-1", type: "point", symbol: "capital", at: BAB, name: "Babylon", labelPos: "w" },
          { id: "larsa-1", type: "point", symbol: "capital", at: LARSA, name: "Larsa", labelPos: "e" },
          { id: "aleppo-1", type: "point", symbol: "capital", at: ALEPPO, name: "Aleppo", labelPos: "e" },
          { id: "susa-1", type: "point", symbol: "capital", at: SUSA, name: "Susa", labelPos: "s" },
          ...water
        ],
        legend: { position: "bottom-left" }
      },
      {
        caption: "The Empire of Hammurabi, c. 1750 B.C.",
        share: 0.58, extent: EXT, projection: "mercator",
        layers: [
          { id: "hammurabi-reach", type: "area", colour: "#e07b39", opacity: 0.3, pad: 0.6, edge: "dashed", legend: "Hammurabi's empire at its widest",
            around: [MARI, BAB, ESH, LARSA, UR, ASSUR, NINEVEH, [40.6, 35.1], [46.5, 31.2]] },
          { id: "babylonia", type: "area", colour: "#e07b39", opacity: 0.75, pad: 0.45, edge: "strong", legend: "Babylonia, the core",
            around: [BAB, SIPPAR, NIPPUR, [44.9, 32.9]] },
          { id: "yamhad-2", type: "area", colour: "#9c7a3c", pattern: "hatch-back", pad: 0.8, legend: "Yamhad (ally, then rival)", around: [ALEPPO, QATNA] },
          { id: "elam-2", type: "area", colour: "#777777", pattern: "crosshatch", pad: 1.0, legend: "Elam", around: [SUSA, [49, 33.2]] },
          { id: "hittites", type: "arrow", colour: "#2a2622", width: 12, label: "Hittites", date: "1595", legend: "Hittite raid that ends the dynasty",
            path: [[36.4, 38.1], [37.6, 36.6], [39.8, 35.6], [41.6, 34.2], [43.6, 33.0], [44.25, 32.65]] },
          { id: "kassites", type: "arrow", colour: "#e0b43a", width: 12, label: "Kassites", legend: "Kassites from the Zagros",
            path: [[48.8, 36.6], [47.2, 35.0], [45.7, 33.6], [44.7, 32.75]] },
          { id: "bab-2", type: "point", symbol: "capital", at: BAB, name: "Babylon", labelPos: "w", tag: { text: "1792–1750", colour: "#f1c75b" } },
          { id: "larsa-2", type: "point", symbol: "city", at: LARSA, name: "Larsa", labelPos: "e", tag: { text: "1763", colour: "#e8806a" } },
          { id: "esh-2", type: "point", symbol: "city", at: ESH, name: "Eshnunna", labelPos: "e", tag: { text: "1762", colour: "#e8806a" } },
          { id: "mari-2", type: "point", symbol: "destroyed", at: MARI, name: "Mari", labelPos: "s", tag: { text: "1761", colour: "#e8806a" }, legend: "Destroyed town" },
          { id: "assur-2", type: "point", symbol: "city", at: ASSUR, name: "Assur", labelPos: "e" },
          { id: "nineveh-2", type: "point", symbol: "city", at: NINEVEH, name: "Nineveh", labelPos: "e" },
          { id: "sippar-2", type: "point", symbol: "city", at: SIPPAR, name: "Sippar", labelPos: "e" },
          { id: "ur-2", type: "point", symbol: "ziggurat", at: UR, name: "Ur", labelPos: "s", legend: "Ziggurat" },
          { id: "nippur-2", type: "point", symbol: "temple", at: NIPPUR, name: "Nippur", labelPos: "e", legend: "Temple city" },
          { id: "aleppo-2", type: "point", symbol: "capital", at: ALEPPO, name: "Aleppo", labelPos: "e" },
          { id: "susa-2", type: "point", symbol: "capital", at: SUSA, name: "Susa", labelPos: "s" },
          { type: "label", style: "realm", colour: "#a8521f", text: "Babylonia", at: [43.1, 31.7], size: 13 },
          { type: "label", style: "people", colour: "#5e3f80", text: "Hurrians", along: [[38.6, 37.6], [41, 37.85], [43.6, 37.5]] },
          { type: "label", style: "people", colour: "#6a6a6a", text: "Elam", at: [48.8, 33.8] },
          { type: "label", style: "people", colour: "#7a5a2a", text: "Amorites", at: [38.6, 33.2] },
          ...water.map((l) => Object.assign({}, l))
        ],
        legend: { position: "bottom-left" }
      }
    ],
    text: {
      intro: "In the eighteenth century B.C. Mesopotamia was a crowd of rival kingdoms. One king of a middling city, Babylon, outlasted and then swallowed the rest.",
      sections: [
        { heading: "A crowded board",
          entries: [
            { date: "c. 1808–1776", text: "Shamshi-Adad builds a kingdom across the north from Shubat-Enlil and Assur. His sons rule Mari and Ekallatum.", refs: ["upper-mesopotamia", "leilan-1", "assur-1"] },
            { text: "Mari on the middle Euphrates grows rich on river trade. Its palace archive of letters is our best window on the period.", refs: ["mari-k", "mari-1"] },
            { text: "Larsa under Rim-Sin holds the old Sumerian south. Eshnunna guards the Diyala road to the Zagros.", refs: ["larsa-k", "larsa-1", "esh-k", "esh-1"] },
            { text: "Yamhad (Aleppo) and Elam (Susa) are the great powers at the edges.", refs: ["yamhad-1", "elam-1", "aleppo-1", "susa-1"] }
          ] },
        { heading: "Hammurabi",
          entries: [
            { date: "1792", text: "Hammurabi becomes king of Babylon, then a small state.", refs: ["bab-1780", "bab-1", "bab-2"] },
            { date: "1763", text: "He takes Larsa and with it the whole south.", refs: ["larsa-2"] },
            { date: "1762", text: "Eshnunna falls.", refs: ["esh-2"] },
            { date: "1761", text: "He turns on his old ally Zimri-Lim and destroys Mari.", refs: ["mari-2"] },
            { text: "At its widest the empire reaches Assur and Nineveh. The law code on a stone stele sets out about 280 rulings.", refs: ["hammurabi-reach", "babylonia", "assur-2", "nineveh-2"] }
          ] },
        { heading: "Afterwards",
          entries: [
            { date: "1595", text: "A Hittite king raids down the Euphrates and sacks Babylon. The dynasty ends.", refs: ["hittites"] },
            { text: "Kassites from the Zagros take over Babylonia and rule it for four centuries.", refs: ["kassites"] },
            { text: "Hurrian kingdoms rise across the north, later united as Mitanni.", refs: [] }
          ] }
      ]
    },
    sources: ["Conventional middle chronology", "Coastlines and rivers: Natural Earth 1:50m"]
  };
})();
