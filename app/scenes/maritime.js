// Chapter scenes for "Maritime Asia". Each scene is a small map in the atlas grammar (docs/atlas-design-language.md),
// drawn on the viewer map while its chapter is in focus, plus "terms": the names in the chapter text, linked one move ahead.
// Borders are approximate: they show who held what, not surveyed lines.
// Layer extras for the viewer: minK / maxK (map zoom at which a layer appears or goes), fade (arrow fades out where
// the destination is only general), people (rulers under a point), year (printed after the name).
window.SCENES = window.SCENES || {};
(function () {
  const ABBASID = "#5f7a52", BYZ = "#7a5a8c", TANG = "#b0563a", PALA = "#c58b2c", SRI = "#2f7f86", JAVA = "#8c6a3a", FRANK = "#4f6fa0", SEA = "#2e5f8a";

  window.SCENES.maritime = {
    "ch-abbasid-baghdad": {
      caption: "The Abbasid caliphate around 800. Borders are approximate.",
      bbox: [[28, 14], [72, 42]],
      layers: [
        { type: "area", name: "Abbasid Caliphate", tier: "core", colour: ABBASID, labelAt: [57, 34.2],
          around: [[35.6, 36.6], [37.5, 37.2], [40, 38.2], [43, 39.4], [45.5, 40.6], [48.5, 41.3], [50, 38.5], [51.5, 36.8], [54, 37.3], [57.5, 38.2],
            [61, 37.5], [64, 39.6], [67, 41], [70, 40.6], [69.5, 37.4], [67.5, 35], [65, 32], [62, 30.2], [61.4, 25.4], [57.8, 25.6],
            [56.3, 26.9], [54, 26.6], [51.5, 27.8], [50, 29.4], [48.4, 29.9], [47.6, 28.6], [45, 25.5], [42.6, 22], [43.4, 17.5],
            [44.2, 13.4], [43, 12.8], [42.6, 15.6], [40.8, 19.5], [38.8, 22.5], [36.6, 26], [35, 28.2], [34.2, 27.8], [33.6, 27.4],
            [35.4, 23.8], [33.5, 22.1], [31.2, 22.1], [30.5, 25.5], [29.2, 29.2], [26.5, 30.2], [25.2, 31.6], [29, 30.9], [32.3, 31.3],
            [34.4, 31.5], [35.1, 33.4], [35.8, 35.2]] },
        { type: "area", name: "Ifriqiya", tier: "influence", colour: ABBASID, labelAt: [12.5, 33.6],
          around: [[8.4, 36.9], [11, 37.2], [11.2, 35.2], [10.3, 34], [11.6, 33.2], [15.2, 32.3], [19.8, 30.6], [19.6, 29.2], [12, 29.6], [8, 31], [7.6, 34.5]] },
        { type: "area", name: "Sind", tier: "conquest", colour: ABBASID, labelAt: [70.2, 27.4],
          around: [[66.6, 25.2], [67.4, 27.8], [68.6, 29.4], [71.2, 29.2], [71.6, 26.6], [70.3, 24.4], [68.8, 23.6], [67.3, 24.4]] },
        { type: "boundary", style: "dashed", colour: BYZ, path: [[35.8, 36.9], [37.4, 37.4], [39.6, 38.4], [42, 39.2], [44.2, 40.2]] },
        { type: "label", style: "region", text: "Byzantine Empire", at: [33, 39.4] },
        { type: "label", style: "water", text: "Tigris", at: [43.3, 35.4] },
        { type: "label", style: "water", text: "Euphrates", at: [40.2, 34.2] },
        { type: "label", style: "water", text: "Persian Gulf", at: [51.6, 26.4] },
        { type: "label", style: "water", text: "Arabian Sea", at: [62.5, 18], maxK: 14 },
        { type: "label", style: "water", text: "Red Sea", at: [38.6, 20.2] },
        { type: "route", style: "dotted", colour: SEA, name: "the sea road to Canton", labelAt: [88, 6.2],
          path: [[52.3, 27.6], [56.5, 24.6], [60.5, 22.8], [67, 18.5], [72.5, 13], [76.2, 8.4], [80.5, 5.6], [88, 5.4], [95.5, 5.6], [99.5, 3.2],
            [103.7, 1.2], [106.5, 5.5], [108.6, 11.5], [110.5, 17.4], [113.3, 22.6]] },
        { type: "arrow", fade: true, colour: SEA, name: "to India", labelAt: [59.6, 25.9],
          path: [[48.9, 29.4], [51.4, 27.6], [55, 26.1], [58.5, 24.9], [62.5, 24.6], [67, 23.6]] },
        { type: "arrow", fade: true, colour: SEA, name: "to China", labelAt: [57.4, 20.6], side: "l",
          path: [[52.8, 26.9], [56.6, 24.2], [59, 21.2], [61.4, 17.6], [63.5, 14]] },
        { type: "point", symbol: "port", name: "Quilon", at: [76.6, 8.9], colour: SEA, maxK: 14 },
        { type: "point", symbol: "port", name: "Canton", at: [113.3, 23.1], colour: SEA, maxK: 14 },
        { type: "point", symbol: "capital", name: "Baghdad", year: "762", at: [44.4, 33.3], side: "l",
          people: ["al-Mansur, founder", "Harun al-Rashid, r. 786–809", "al-Ma'mun, r. 813–833"], note: "House of Wisdom" },
        { type: "point", symbol: "port", name: "Basra", at: [47.8, 30.5], colour: SEA, side: "l" },
        { type: "point", symbol: "port", name: "Siraf", at: [52.3, 27.65], colour: SEA },
        { type: "point", symbol: "city", name: "Damascus", at: [36.3, 33.5], note: "old Umayyad capital", side: "l" },
        { type: "point", symbol: "temple", name: "Mecca", at: [39.8, 21.4], side: "l" },
        { type: "point", symbol: "city", name: "Merv", at: [61.8, 37.6] },
        { type: "point", symbol: "battle", name: "Talas", year: "751", at: [72.2, 42.5], note: "Abbasids beat Tang China" }
      ],
      terms: [
        { t: "Abbasid caliph", wiki: "Abbasid Caliphate", why: "The second great Islamic dynasty, 750–1258. They took power from the Umayyads in a revolution that began in Khurasan." },
        { t: "al-Mansur", wiki: "Al-Mansur", why: "Second Abbasid caliph, 754–775, and the real builder of the dynasty." },
        { t: "round city", wiki: "Round city of Baghdad", why: "Three rings of walls, four gates, the palace and mosque at the centre." },
        { t: "Tigris", wiki: "Tigris" },
        { t: "Harun al-Rashid", wiki: "Harun al-Rashid", why: "Caliph 786–809, the caliph of the Thousand and One Nights. He sent Charlemagne an elephant." },
        { t: "al-Ma'mun", wiki: "Al-Ma'mun", why: "Caliph 813–833. Won a civil war against his brother, then poured money into translation." },
        { t: "House of Wisdom", wiki: "House of Wisdom", why: "Library and translation centre: Greek, Persian and Sanskrit works into Arabic.",
          star: "How did Indian astronomy and numerals reach the House of Wisdom, and from there get to Europe?" },
        { t: "Basra", wiki: "Basra" },
        { t: "Siraf", wiki: "Siraf", why: "The great Persian port of the 9th century; its merchants sailed all the way to Canton.",
          star: "What do the ruins of Siraf and the Belitung shipwreck tell us about trade between the Gulf and Tang China?" }
      ]
    }
  };
})();
