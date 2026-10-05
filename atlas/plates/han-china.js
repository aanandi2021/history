// Fidelity test for round 2 of the atlas study (PDF pp. 34–53), on the book's own China ground.
// Written from general knowledge to check the grammar the second twenty pages added: degrees of
// control (solid core, striped conquest, pale influence), a fortified frontier drawn as a wall
// with its dates printed on it, a built road kept distinct from journeys and campaigns, and
// new commandery seats marked by a halo. Dates are conventional; some commandery dates vary by source.
(function () {
  const CHANGAN = [108.94, 34.26], LUOYANG = [112.45, 34.62], DUNHUANG = [94.66, 40.14], WUWEI = [102.64, 37.93],
    ZHANGYE = [100.45, 38.93], PANYU = [113.26, 23.13], JIAOZHI = [105.85, 21.03], WANGXIAN = [125.75, 39.02],
    DIAN = [102.7, 24.9], KASHGAR = [75.99, 39.47], KUCHA = [82.96, 41.72], TURFAN = [89.19, 42.95], KHOTAN = [79.92, 37.11],
    DAYUAN = [71.8, 40.6], CHENGDU = [104.07, 30.67], LINZI = [118.3, 36.8], JIUYUAN = [109.9, 40.6];
  const WALL = [[93.6, 40.4], [97.5, 40.0], [100.5, 39.4], [103.4, 38.6], [106.4, 39.4], [107.4, 41.0], [110.6, 41.2], [114.2, 41.3], [117.6, 40.9], [120.6, 41.7], [123.0, 42.2]];

  window.PLATES["han-china"] = {
    id: "han-china",
    title: "China under the Han, c. 100 B.C.",
    head: "The Early Empires / China (fidelity test, round 2)",
    folio: "3",
    viewer: "ancient/-0100/ch-han-china",
    figures: [
      {
        caption: "The Han Empire under Wudi, c. 100 B.C.",
        share: 0.62, extent: [[67, 19.5], [130, 49.5]], projection: "mercator",
        layers: [
          { id: "xiongnu", type: "area", colour: "#6f6f6f", pattern: "hatch", pad: 2.2, legend: "Xiongnu confederacy",
            around: [[96, 46.5], [102, 47.8], [107, 48.2], [112, 46], [116, 44.8], [104, 44.2], [99, 44.5]] },
          { id: "han-core", type: "area", tier: "core", colour: "#c8553d", pad: 1.0, legend: "Han China, the core",
            around: [CHANGAN, LUOYANG, LINZI, CHENGDU, [116.4, 39.9], [120.3, 36.1], [121.3, 31.2], [119.6, 28.4], [114.3, 25.4], [110.3, 25.3], [104.6, 28.8], [106.5, 36.6], [110.5, 38.6]] },
          { id: "conquests", type: "area", tier: "conquest", colour: "#c8553d", pad: 0.9, legend: "Conquered under Wudi, 121–108 B.C.",
            around: [DUNHUANG, ZHANGYE, WUWEI, [97.5, 39.7]] },
          { id: "conquest-south", type: "area", tier: "conquest", colour: "#c8553d", pad: 0.9,
            around: [PANYU, JIAOZHI, DIAN, [108.3, 22.8], [110.4, 21.3], [104.8, 23.2]] },
          { id: "conquest-korea", type: "area", tier: "conquest", colour: "#c8553d", pad: 0.8,
            around: [WANGXIAN, [124.6, 40.7], [126.9, 40.2]] },
          { id: "western-regions", type: "area", tier: "influence", colour: "#c8553d", pad: 1.4, legend: "Western Regions, Han influence",
            around: [KASHGAR, KUCHA, TURFAN, KHOTAN, [86, 38.4], [91, 40.6]] },
          { id: "wall", type: "boundary", style: "wall", colour: "#4a2e22", path: WALL, legend: "Wall and frontier forts" },
          { id: "zhidao", type: "route", style: "road", colour: "#8a2a1a", path: [[108.7, 34.6], [108.5, 36.5], [109.1, 38.6], JIUYUAN],
            legend: "The Straight Road, 212 B.C." },
          { id: "silk", type: "route", colour: "#a8642c", label: "Silk Road", legend: "Silk Road caravan route",
            path: [CHANGAN, [104.5, 36.0], WUWEI, ZHANGYE, DUNHUANG, TURFAN, KUCHA, KASHGAR, DAYUAN] },
          { id: "zhang-qian", type: "route", style: "dashed", colour: "#3d6d8f", legend: "Zhang Qian's mission, 138–126 B.C.",
            path: [CHANGAN, [103.5, 36.6], [99, 36.2], [93, 37.6], [87, 37.4], KHOTAN, [74.5, 37.2], [69.8, 37.6]], head: true, dates: [[0.5, "138–126 B.C."]] },
          { id: "campaign-119", type: "arrow", colour: "#b03a2e", width: 12, label: "Han", date: "119 B.C.", legend: "Han campaigns into the steppe",
            path: [[111.6, 37.4], [111.2, 40.2], [110.6, 43.0], [109.2, 45.6]] },
          { id: "ferghana", type: "arrow", colour: "#b03a2e", width: 6, date: "104–101", path: [[83, 40.3], [79, 40.6], [75.5, 40.7], [72.6, 40.6]] },
          { id: "raids", type: "arrow", colour: "#2a2622", width: 5, legend: "Xiongnu raids",
            path: [[101.6, 43.6], [102.6, 40.3]] },
          { id: "raids-east", type: "arrow", colour: "#2a2622", width: 5, path: [[116.2, 44.2], [115.8, 41.9]] },
          { id: "changan", type: "point", symbol: "capital", at: CHANGAN, name: "Chang'an", labelPos: "sw" },
          { id: "luoyang", type: "point", symbol: "large-city", at: LUOYANG, name: "Luoyang", labelPos: "e" },
          { id: "chengdu", type: "point", symbol: "city", at: CHENGDU, name: "Chengdu", labelPos: "w" },
          { id: "dunhuang", type: "point", symbol: "fortress", at: DUNHUANG, name: "Dunhuang", labelPos: "s", halo: "#f1c75b", legend: "Seat of a new commandery" },
          { id: "panyu", type: "point", symbol: "city", at: PANYU, name: "Panyu", labelPos: "e", halo: "#f1c75b", tag: { text: "111", colour: "#e8806a" } },
          { id: "jiaozhi", type: "point", symbol: "city", at: JIAOZHI, name: "Jiaozhi", labelPos: "w", halo: "#f1c75b", tag: { text: "111", colour: "#e8806a" } },
          { id: "dian", type: "point", symbol: "city", at: DIAN, name: "Dian", labelPos: "w", halo: "#f1c75b", tag: { text: "109", colour: "#e8806a" } },
          { id: "wangxian", type: "point", symbol: "city", at: WANGXIAN, name: "Lelang", labelPos: "w", halo: "#f1c75b", tag: { text: "108", colour: "#e8806a" } },
          { id: "kashgar", type: "point", symbol: "city", at: KASHGAR, name: "Kashgar", labelPos: "s" },
          { id: "kucha", type: "point", symbol: "city", at: KUCHA, name: "Kucha", labelPos: "n" },
          { id: "dayuan", type: "point", symbol: "city", at: DAYUAN, name: "Dayuan (Ferghana)", labelPos: "s" },
          { type: "label", style: "realm", colour: "#a8421f", text: "Han", at: [113.2, 31.4], size: 16 },
          { type: "label", style: "people", colour: "#4a4a4a", text: "Xiongnu", along: [[97.5, 46.3], [104, 47.2], [111, 46.4]] },
          { type: "label", style: "region", text: "Tarim Basin", at: [84.2, 39.4], size: 9 },
          { type: "label", style: "region", text: "Ordos", at: [108.3, 39.4], size: 8 },
          { type: "label", style: "people", colour: "#6a5a3a", text: "Yuezhi", at: [68.6, 35.4], size: 9 },
          { type: "label", style: "water", text: "Yellow Sea", at: [123.6, 35.6] },
          { type: "label", style: "water", text: "South China Sea", at: [114.5, 19.2] }
        ],
        legend: { position: "bottom-left" }
      },
      {
        caption: "The Hexi Corridor: the wall goes west",
        share: 0.38, extent: [[92.6, 35.6], [105.6, 42.6]], projection: "mercator",
        layers: [
          { id: "xiongnu-2", type: "area", colour: "#6f6f6f", pattern: "hatch", pad: 1.2, legend: "Xiongnu",
            around: [[95, 42.2], [99, 42.4], [103, 42.2], [104.5, 41.3], [99.5, 41.2], [96, 41.4]] },
          { id: "corridor", type: "area", tier: "conquest", colour: "#c8553d", pad: 0.55, legend: "Hexi commanderies, 121–c. 100 B.C.",
            around: [DUNHUANG, [96.5, 40.0], [98.49, 39.73], ZHANGYE, WUWEI, [103.4, 37.4], [101.4, 37.9], [97.6, 39.2], [95.2, 39.6]] },
          { id: "qiang", type: "area", colour: "#7d5a9e", pattern: "stipple", pad: 1.0, legend: "Qiang peoples",
            around: [[95, 37.2], [99, 36.6], [102, 36.2], [97, 36.1]] },
          { id: "wall-2", type: "boundary", style: "wall", colour: "#4a2e22", legend: "Han wall and watchtowers",
            path: [[93.4, 40.4], [95.2, 40.5], [97.5, 40.1], [99.2, 39.75], [100.5, 39.35], [102.2, 38.95], [103.4, 38.6], [104.6, 38.4], [105.5, 38.6]],
            dates: [[0.3, "c. 101 B.C."], [0.66, "121–111 B.C."]] },
          { id: "silk-2", type: "route", colour: "#a8642c", label: "Silk Road",
            path: [[105.5, 36.2], [103.7, 36.5], WUWEI, ZHANGYE, [98.49, 39.73], DUNHUANG, [93.0, 40.3]] },
          { id: "yumen", type: "point", symbol: "fortress", at: [93.86, 40.35], name: "Jade Gate", labelPos: "n", legend: "Frontier pass" },
          { id: "dunhuang-2", type: "point", symbol: "city", at: DUNHUANG, name: "Dunhuang", labelPos: "s", halo: "#f1c75b", legend: "Commandery seat" },
          { id: "jiuquan", type: "point", symbol: "city", at: [98.49, 39.73], name: "Jiuquan", labelPos: "s", halo: "#f1c75b" },
          { id: "zhangye-2", type: "point", symbol: "city", at: ZHANGYE, name: "Zhangye", labelPos: "s", halo: "#f1c75b" },
          { id: "wuwei-2", type: "point", symbol: "city", at: WUWEI, name: "Wuwei", labelPos: "e", halo: "#f1c75b" },
          { type: "label", style: "region", text: "Gobi", at: [100.4, 41.6], size: 10 },
          { type: "label", style: "region", text: "Qilian Mountains", along: [[96.2, 38.2], [99, 37.7], [101.6, 37.3]], size: 8 },
          { type: "label", style: "people", colour: "#4a4a4a", text: "Xiongnu", at: [97.4, 41.75] }
        ],
        legend: { position: "bottom-right" }
      }
    ],
    text: {
      intro: "The Qin unified China in 221 B.C. and the Han kept it whole for four centuries. Under Emperor Wu (Wudi, 141–87 B.C.) the Han pushed out in every direction, and the frontier with the steppe became the long story of Chinese history.",
      sections: [
        { heading: "The core and the wall",
          entries: [
            { date: "221–206", text: "The Qin unify the Warring States. Their straight road runs north from the capital to the Ordos frontier.", refs: ["zhidao"] },
            { date: "214", text: "Meng Tian joins older state walls into one northern line against the steppe.", refs: ["wall"] },
            { date: "206 B.C.–A.D. 220", text: "The Han rule from Chang'an and later Luoyang. Most people live on the Yellow River plain and in the Sichuan basin.", refs: ["han-core", "changan", "luoyang", "chengdu"] }
          ] },
        { heading: "The steppe",
          entries: [
            { text: "The Xiongnu, a confederacy of horse peoples, raid the frontier and are bought off with silk and princesses.", refs: ["xiongnu", "raids", "raids-east"] },
            { date: "119", text: "Wudi's generals Wei Qing and Huo Qubing drive deep into the steppe and push the Xiongnu north of the Gobi.", refs: ["campaign-119"] },
            { date: "121–101", text: "The Hexi Corridor is taken and walled to Dunhuang, opening the road west. Four commanderies are set along it, and the Jade Gate becomes the edge of China.", refs: ["conquests", "dunhuang", "wall", "corridor", "wall-2", "yumen", "dunhuang-2", "jiuquan", "zhangye-2", "wuwei-2"] },
            { text: "South of the corridor the Qiang hold the mountains. Keeping them apart from the Xiongnu was half the point of the wall.", refs: ["qiang", "xiongnu-2"] }
          ] },
        { heading: "West, south and east",
          entries: [
            { date: "138–126", text: "Zhang Qian goes west to find allies against the Xiongnu. He finds none, but brings back news of Ferghana, Bactria and their horses.", refs: ["zhang-qian"] },
            { date: "104–101", text: "Two expeditions to Dayuan (Ferghana) win the 'heavenly horses'.", refs: ["ferghana", "dayuan"] },
            { text: "The Silk Road takes shape along the oases of the Tarim Basin. Han influence there is real but loose, and a Protectorate follows in 60 B.C.", refs: ["silk", "silk-2", "western-regions", "kashgar", "kucha"] },
            { date: "111–108", text: "Nanyue in the far south and Dian in Yunnan fall, then Choson in Korea, where Lelang becomes a Chinese outpost for four centuries.", refs: ["conquest-south", "conquest-korea", "panyu", "jiaozhi", "dian", "wangxian"] }
          ] }
      ]
    },
    sources: ["Conventional dates; some commandery foundations vary by source", "Coastlines and rivers: Natural Earth 1:50m"]
  };
})();
