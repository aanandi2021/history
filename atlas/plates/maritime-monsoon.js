// Demo plate: mapified from the vault note
// "Amit's Notes of the History of the World/Maritime Asia — Bengal, Srivijaya and Java (750–850)".
// The note stays canonical; this file holds only coordinates, layer choices and short map-side entries.
(function () {
  const NOTE = "Amit's Notes of the History of the World/Maritime Asia — Bengal, Srivijaya and Java (750–850)";
  const SEA_ROAD = "#a8642c", WIND = "#5d93bd";

  window.PLATES["maritime-monsoon"] = {
    id: "maritime-monsoon",
    title: "Maritime Asia, 750–850",
    head: "Maritime Asia / Bengal, Srivijaya and Java",
    folio: "1",
    figures: [
      {
        caption: "The monsoon road, c. 750–850",
        share: 0.66,
        extent: [[42, -21], [122, 44]],
        projection: "mercator",
        layers: [
          // realms: soft washes, core over extent; rivals hatched
          { id: "abbasid", type: "area", colour: "#c58c62", opacity: 0.42, pad: 1.6, legend: "Abbasid Caliphate",
            around: [[36, 33], [44.4, 33.3], [47.8, 30.5], [52, 30], [58, 30], [60, 35], [51, 36.5], [40, 37], [45, 24], [40, 21.5]] },
          { id: "tang", type: "area", colour: "#d8b84a", opacity: 0.5, pad: 1.2, legend: "Tang China",
            around: [[108.9, 34.3], [116.4, 39.9], [120, 31], [118, 25], [113.3, 23.1], [110, 21.5], [106, 21.5], [104, 25], [103, 30], [103, 35.5], [110, 38]] },
          { id: "tibet", type: "area", colour: "#7d5a9e", pattern: "hatch", pad: 1.2, legend: "Tibetan Empire (rival of the Tang)",
            around: [[80, 33], [85, 30], [91, 29.6], [97, 31.5], [101, 35], [95, 37], [85, 36], [78, 36.5], [83, 39]] },
          { id: "pala", type: "area", colour: "#e07b39", opacity: 0.6, pad: 1.0, edge: "strong", legend: "Pala Bengal",
            around: [[85.4, 25.1], [88, 24.5], [90, 23.5], [88, 22.3], [84, 25.6], [86, 26.2], [89, 25.8]] },
          { id: "rashtrakuta", type: "area", colour: "#7f9c4a", pattern: "hatch", pad: 1.3, legend: "Rashtrakutas and Pratiharas, the Palas' rivals",
            around: [[75.2, 20], [77, 17.5], [78, 15], [74, 17], [73.5, 20.5], [78, 21]] },
          { id: "pratihara", type: "area", colour: "#7f9c4a", pattern: "hatch-back", pad: 1.3,
            around: [[73, 26.5], [75.8, 26.9], [79.9, 27], [78, 24.5], [72, 24.5]] },
          { id: "srivijaya", type: "area", colour: "#3f9c8f", opacity: 0.5, pad: 1.0, legend: "Srivijaya",
            around: [[104.75, -3], [103, -1], [101, 1.5], [100.4, 5.7], [99.96, 8.43], [106, -5.5], [105, -5]] },
          { id: "sailendra", type: "area", colour: "#2f6f5a", opacity: 0.7, pad: 0.8, edge: "strong", legend: "Sailendra Java",
            around: [[110.2, -7.6], [110.5, -7.75], [109, -7.2], [111.5, -7.5]] },
          { id: "champa", type: "area", colour: "#c25a5a", pattern: "dots", pad: 0.8, legend: "Champa",
            around: [[108.99, 11.56], [109.2, 12.27], [108.3, 15.9], [107, 16.5]] },

          // the sea road: dotted trade lanes
          { id: "sea-road", type: "route", colour: SEA_ROAD, legend: "The sea road (trade lanes)",
            path: [[47.9, 29.9], [50.5, 28.6], [52.3, 27.4], [56.3, 26.2], [57.5, 24.2], [62, 20], [68, 14.5], [74.5, 10], [76.4, 8.4], [80.2, 5.5], [88, 5.5], [95.5, 6.2], [98.8, 6.6], [99.9, 4.4], [101.3, 2.7], [103.2, 1.4], [104.5, 1.1], [106.3, 5.5], [109.5, 11], [110.2, 16.5], [113, 21.5]] },
          { id: "bengal-lane", type: "route", colour: SEA_ROAD,
            path: [[87.9, 21.6], [89, 17], [93, 10.5], [98.8, 6.6]] },
          { id: "java-lane", type: "route", colour: SEA_ROAD,
            path: [[110.4, -6.7], [108, -5], [106.2, -3.2], [105.8, -1.6], [104.5, 1.1]] },

          // winds: the engine of the whole system
          { id: "sw-monsoon", type: "arrow", colour: WIND, opacity: 0.55, width: 14, clip: "none", label: "SW monsoon", date: "Apr–Sep", legend: "Monsoon winds",
            path: [[52.5, 7], [61, 10.2], [69.5, 13.4]] },
          { id: "ne-monsoon", type: "arrow", colour: WIND, opacity: 0.55, width: 14, label: "NE monsoon", date: "Nov–Mar",
            path: [[123, 22], [120.5, 13], [117, 4.5]] },

          // force: rebellions and raids
          { id: "an-lushan", type: "arrow", colour: "#b8341f", width: 6, date: "755", legend: "Rebellion of An Lushan, 755–763",
            path: [[116.4, 39.9], [114.6, 36.4], [112.4, 34.7], [109.6, 34.4]] },
          { id: "tibet-763", type: "arrow", colour: "#5e3f80", width: 5, date: "763", legend: "Tibetans take Chang'an, 763",
            path: [[100.5, 36], [104.5, 35.4], [108.3, 34.4]] },
          { id: "java-raids", type: "arrow", colour: "#2f6f5a", width: 11, label: "Javanese raids", legend: "Raids from Java, 767–787",
            path: [[112, -6.2], [111.6, 0.5], [110.8, 6.8], [109.7, 11.6]] },
          { id: "raid-tonkin", type: "arrow", colour: "#2f6f5a", width: 5,
            path: [[110.3, 9], [109.3, 15], [107.2, 19.2], [106.2, 20.6]] },

          // places
          { id: "baghdad", type: "point", symbol: "capital", at: [44.36, 33.31], name: "Baghdad", labelPos: "e", tag: { text: "762 founded", colour: "#f1c75b" } },
          { id: "basra", type: "point", symbol: "port", at: [47.8, 30.5], name: "Basra", labelPos: "w", legend: "Port" },
          { id: "siraf", type: "point", symbol: "port", at: [52.3, 27.67], name: "Siraf", labelPos: "ne" },
          { id: "sohar", type: "point", symbol: "port", at: [56.7, 24.35], name: "Sohar", labelPos: "e" },
          { id: "quilon", type: "point", symbol: "port", at: [76.6, 8.9], name: "Quilon", labelPos: "w" },
          { id: "tamralipta", type: "point", symbol: "port", at: [87.92, 22.3], name: "Tamralipta", labelPos: "sw" },
          { id: "nalanda", type: "point", symbol: "university", at: [85.44, 25.13], name: "Nalanda", labelPos: "nw", legend: "Buddhist university or monastery" },
          { id: "vikramashila", type: "point", symbol: "university", at: [87.28, 25.32], name: "Vikramashila", labelPos: "n", size: 7 },
          { id: "somapura", type: "point", symbol: "monastery", at: [88.98, 25.03], name: "Somapura", labelPos: "s", size: 7 },
          { id: "ellora", type: "point", symbol: "temple", at: [75.18, 20.02], name: "Ellora", labelPos: "w", tag: { text: "756", colour: "#f1c75b" }, legend: "Temple" },
          { id: "kannauj", type: "point", symbol: "large-city", at: [79.92, 27.05], name: "Kannauj", labelPos: "n" },
          { id: "lhasa", type: "point", symbol: "capital", at: [91.13, 29.65], name: "Lhasa", labelPos: "w" },
          { id: "samye", type: "point", symbol: "monastery", at: [91.5, 29.33], name: "Samye", labelPos: "se", size: 7 },
          { id: "changan", type: "point", symbol: "capital", at: [108.94, 34.26], name: "Chang'an", labelPos: "s" },
          { id: "canton", type: "point", symbol: "large-city", at: [113.26, 23.13], name: "Canton", labelPos: "e", tag: { text: "758 sacked", colour: "#e8806a" } },
          { id: "talas", type: "point", symbol: "battle", at: [72.3, 42.5], name: "Talas", labelPos: "e", tag: { text: "751", colour: "#f1c75b" }, legend: "Battle" },
          { id: "kedah", type: "point", symbol: "port", at: [100.4, 5.9], name: "Kedah", labelPos: "e" },
          { id: "palembang", type: "point", symbol: "capital", at: [104.75, -2.99], name: "Palembang", labelPos: "sw" },
          { id: "borobudur", type: "point", symbol: "stupa", at: [110.2, -7.61], name: "Borobudur", labelPos: "e", tag: { text: "c. 780–833", colour: "#f1c75b" }, legend: "Stupa" },
          { id: "belitung", type: "point", symbol: "wreck", at: [107.6, -2.6], name: "Belitung wreck", labelPos: "nw", tag: { text: "c. 830", colour: "#f1c75b" }, legend: "Shipwreck" },
          { id: "kulen", type: "point", symbol: "monarch", at: [104.1, 13.56], name: "Phnom Kulen (Khmer)", labelPos: "w", tag: { text: "802", colour: "#f1c75b" } },
          { id: "po-nagar", type: "point", symbol: "destroyed", at: [109.2, 12.27], name: "Po Nagar", labelPos: "e", tag: { text: "774", colour: "#e8806a" } },

          // goods: a local glyph family
          { id: "pepper", type: "point", symbol: "spice", at: [75.9, 11.6], legend: "Pepper, camphor and spices" },
          { id: "camphor", type: "point", symbol: "spice", at: [98.4, 2.0] },
          { id: "cotton", type: "point", symbol: "textile", at: [90.2, 23.9], legend: "Fine cotton cloth" },
          { id: "changsha", type: "point", symbol: "porcelain", at: [112.9, 28.2], name: "Changsha", labelPos: "e", legend: "Glazed ceramics" },
          { id: "gold", type: "point", symbol: "gold", at: [101.2, -0.8], legend: "Gold" },
          { id: "tin", type: "point", symbol: "tin", at: [101.6, 4.6], legend: "Tin" },
          { id: "horses", type: "point", symbol: "horse", at: [56.8, 21.8], legend: "Horses for Indian armies" },
          { id: "gems", type: "point", symbol: "gem", at: [80.7, 7.0], legend: "Gems" },

          // names
          { type: "label", style: "realm", colour: "#9a6236", text: "Abbasid\nCaliphate", at: [59, 32], size: 11 },
          { type: "label", style: "realm", colour: "#a68826", text: "Tang", at: [114.2, 30.2] },
          { type: "label", style: "realm", colour: "#5e3f80", text: "Tibet", along: [[82, 34.3], [89.5, 33], [96.5, 34.3]] },
          { type: "label", style: "people", colour: "#c0602a", text: "Pala", at: [92.4, 25.3] },
          { type: "label", style: "people", colour: "#566f2b", text: "Rashtrakutas", at: [76.6, 17.2] },
          { type: "label", style: "people", colour: "#566f2b", text: "Pratiharas", at: [75.2, 24.4] },
          { type: "label", style: "realm", colour: "#2c7468", text: "Srivijaya", along: [[95.2, 3.6], [98.8, -0.2], [101.6, -4.0]], size: 12 },
          { type: "label", style: "people", colour: "#2f6f5a", text: "Sailendras", at: [106.2, -9.6] },
          { type: "label", style: "people", colour: "#a33f3f", text: "Champa", at: [106.6, 12.4] },
              { type: "label", style: "water", text: "Arabian Sea", at: [65.2, 19.6] },
          { type: "label", style: "water", text: "Bay of Bengal", at: [88.5, 14.5] },
          { type: "label", style: "water", text: "INDIAN OCEAN", at: [101, -15], size: 12 },
          { type: "label", style: "water", text: "South\nChina Sea", at: [113.6, 14.2] },
          { type: "label", style: "water", text: "Java Sea", at: [115.6, -4.6] },
            ],
        legend: { position: "bottom-left" }
      },
      {
        caption: "Central Java: the Sailendra temples",
        share: 0.34,
        extent: [[109.95, -8.25], [110.75, -7.3]],
        projection: "mercator",
        base: { rivers: false },
        layers: [
          { id: "kedu", type: "area", colour: "#2f6f5a", opacity: 0.25, pad: 0.07, edge: "dashed", legend: "Sailendra heartland",
            around: [[110.2, -7.61], [110.23, -7.6], [110.47, -7.77], [110.5, -7.74], [110.35, -7.7]] },
          { id: "merapi", type: "point", symbol: "volcano", at: [110.446, -7.54], name: "Merapi", labelPos: "e", legend: "Volcano" },
          { id: "merbabu", type: "point", symbol: "volcano", at: [110.44, -7.455], name: "Merbabu", labelPos: "e" },
          { id: "sumbing", type: "point", symbol: "volcano", at: [110.07, -7.384], name: "Sumbing", labelPos: "se" },
          { id: "borobudur-2", type: "point", symbol: "stupa", at: [110.2038, -7.6079], name: "Borobudur", labelPos: "w", tag: { text: "c. 780–833", colour: "#f1c75b" }, legend: "Buddhist stupa" },
          { id: "mendut", type: "point", symbol: "temple", at: [110.2297, -7.6055], name: "Mendut", labelPos: "ne", size: 7, legend: "Temple" },
          { id: "kalasan", type: "point", symbol: "temple", at: [110.4727, -7.7672], name: "Kalasan", labelPos: "w", tag: { text: "778", colour: "#f1c75b" } },
          { id: "sewu", type: "point", symbol: "temple", at: [110.4925, -7.7437], name: "Sewu (792)", labelPos: "n" },
          { id: "prambanan", type: "point", symbol: "temple", at: [110.4915, -7.752], colour: "#8a3b1f", name: "Prambanan (Hindu)", labelPos: "e", tag: { text: "856", colour: "#e8806a" } },
          { id: "ratu-boko", type: "point", symbol: "castle", at: [110.4894, -7.7705], name: "Ratu Boko", labelPos: "s", size: 7, legend: "Palace" },
          { id: "yogya", type: "point", symbol: "city", at: [110.3695, -7.7956], name: "Yogyakarta (today)", labelPos: "s", colour: "#777" },
          { type: "label", style: "region", text: "Kedu Plain", at: [110.2, -7.5] },
          { type: "label", style: "water", text: "Indian Ocean", at: [110.15, -8.18] }
        ],
        legend: { position: "top-right" }
      }
    ],
    text: {
      intro: "For a century the sea between Arabia and China ran on the monsoon. Ships sailed one way in summer and came back in winter. Bengal, Sumatra and Java grew rich in the middle of it.",
      sections: [
        { heading: "The sea road",
          entries: [
            { text: "Persian and Arab ships leave Basra and Siraf, cross to India on the summer wind, and wait in port for the winter wind to carry them on to China.", refs: ["sea-road", "siraf", "basra", "sw-monsoon", "ne-monsoon"] },
            { text: "Srivijaya, from Palembang, controls the Strait of Malacca and taxes every ship between India and China. Its gold gives Sumatra the old name 'island of gold'.", refs: ["srivijaya", "palembang", "gold", "tin"] },
            { date: "c. 830", text: "An Arab-style sewn ship sinks off Belitung with about 60,000 pieces of Changsha pottery. Found in 1998.", refs: ["belitung", "changsha"] }
          ] },
        { heading: "Bengal and the Palas",
          entries: [
            { date: "750", text: "Gopala is chosen king of Bengal. The Pala dynasty begins.", refs: ["pala"] },
            { date: "c. 783–810", text: "Dharmapala founds Vikramashila and Somapura. Nalanda draws students from Tibet, China and Java.", refs: ["nalanda", "vikramashila", "somapura"] },
            { text: "Three powers fight for Kannauj, the prize city of the north: Palas, Pratiharas and Rashtrakutas.", refs: ["kannauj", "pala", "pratihara", "rashtrakuta"] },
            { text: "Tamralipta, the old port of Bengal, is silting up. Its cloth still goes out to the whole sea road.", refs: ["tamralipta", "cotton", "bengal-lane"] }
          ] },
        { heading: "Java and the Sailendras",
          entries: [
            { date: "767–787", text: "Raiders from Java attack Tang-ruled Tonkin and the coast of Champa. The temple of Po Nagar burns in 774.", refs: ["java-raids", "raid-tonkin", "po-nagar", "champa"] },
            { date: "778", text: "The Kalasan inscription: the earliest dated Sailendra temple.", refs: ["kalasan"] },
            { date: "c. 780–833", text: "Borobudur rises over the Kedu Plain, in sight of Merapi.", refs: ["borobudur", "borobudur-2", "kedu", "merapi"] },
            { date: "802", text: "Jayavarman II declares Cambodia free of 'Java' on Phnom Kulen. The Khmer empire begins.", refs: ["kulen"] },
            { date: "856", text: "Prambanan is dedicated to Shiva, a stone's throw from Buddhist Sewu.", refs: ["prambanan", "sewu"] }
          ] },
        { heading: "Tang China and its neighbours",
          entries: [
            { date: "751", text: "An Abbasid army defeats the Tang at Talas in Central Asia.", refs: ["talas", "abbasid"] },
            { date: "755–763", text: "An Lushan rebels and marches on the capital. Eight years of war; the Tang survive but never fully recover.", refs: ["an-lushan", "changan", "tang"] },
            { date: "758", text: "Arab and Persian merchants sack Canton and leave by sea. Trade returns within years.", refs: ["canton"] },
            { date: "763", text: "Tibet, at the height of its power, holds Chang'an for about two weeks.", refs: ["tibet-763", "tibet", "lhasa", "samye"] },
            { date: "762", text: "Al-Mansur founds Baghdad, the round city on the Tigris.", refs: ["baghdad"] }
          ] }
      ]
    },
    sources: ["Coordinates from Wikipedia", "Coastlines and rivers: Natural Earth 1:50m"],
    from: { label: NOTE, href: "obsidian://open?vault=333bfdd695459a48&file=" + encodeURIComponent(NOTE) }
  };
})();
