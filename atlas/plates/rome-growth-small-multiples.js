// Rome's growth as small multiples: one projection, four dated panels.
(function () {
  const R = "#d66a4a", CORE = "#b9472f", ALLY = "#e6a45b", CONQ = "#c77b54", SEA = "#2f6a95";
  const EXT = [[-12, 24], [48, 56]];
  const ROME = [12.496, 41.902], CARTHAGE = [10.31, 36.85], ANTIOCH = [36.2, 36.2], ALEX = [29.92, 31.20], BYZ = [28.98, 41.01];
  const italy = [[9.2, 44.2], [12.5, 43.7], [14.2, 41.0], [16.2, 40.0], [17.2, 40.5], [15.0, 42.5], [12.7, 42.8], [12.0, 41.8]];
  const sicily = [[12.5, 38.0], [14.0, 38.2], [15.3, 37.3], [13.5, 36.8]];
  const sardiniaCorsica = [[8.7, 41.8], [9.4, 40.1], [9.0, 39.1], [8.4, 40.7]];
  const spainEast = [[-3.0, 42.5], [-1.0, 41.2], [-0.5, 39.5], [-1.2, 37.8], [-4.5, 36.7], [-5.2, 39.0]];
  const spainAll = [[-8.8, 43.0], [-1.5, 42.5], [1.0, 40.0], [-1.2, 37.0], [-6.5, 36.3], [-8.7, 39.5]];
  const africa = [[8.5, 37.0], [11.0, 36.8], [13.5, 35.8], [16.0, 34.5], [14.0, 33.2], [10.0, 34.2]];
  const greece = [[19.0, 41.0], [22.5, 40.2], [24.5, 38.8], [23.0, 37.2], [20.0, 38.0]];
  const asia = [[26.0, 40.5], [29.0, 40.0], [31.0, 38.3], [30.0, 36.5], [27.0, 37.0], [25.8, 39.0]];
  const gaul = [[-1.0, 51.0], [3.5, 50.5], [7.7, 48.3], [7.0, 44.0], [3.5, 43.0], [0.0, 44.5], [-3.0, 47.5]];
  const illyricum = [[13.0, 45.5], [17.0, 45.0], [19.5, 43.0], [18.0, 41.0], [14.5, 42.5]];
  const syria = [[34.5, 37.0], [38.0, 36.5], [39.5, 34.0], [37.0, 32.0], [35.0, 33.5]];
  const egypt = [[29.0, 31.5], [32.5, 31.0], [33.0, 29.0], [31.0, 27.5], [29.0, 29.0]];
  const britain = [[-4.7, 55.2], [-1.0, 54.8], [0.5, 52.2], [-1.0, 50.5], [-4.3, 51.5]];
  const danube = [[14.0, 48.2], [19.0, 47.2], [25.5, 45.0], [28.0, 44.0], [23.5, 43.3], [18.0, 44.5]];
  const dacia = [[22.5, 44.0], [24.8, 46.5], [27.6, 46.6], [27.8, 44.5], [25.0, 43.6]];
  const east117 = [[31.0, 40.0], [36.0, 39.0], [43.0, 37.5], [45.0, 33.5], [41.0, 31.5], [36.0, 34.0], [33.0, 36.0]];
  const area = (id, polygon, colour, legend, extra = {}) => Object.assign({ id, type: "area", polygon, colour, opacity: 0.46, clipToLand: true, legend }, extra);
  const city = (id, at, name, labelPos = "e") => ({ id, type: "point", symbol: id === "rome" ? "capital" : "large-city", at, name, labelPos });
  const common = [city("rome", ROME, "Rome", "e")];
  window.PLATES["rome-growth-small-multiples"] = {
    id: "rome-growth-small-multiples",
    title: "Rome's growth from city-state to empire",
    head: "Antiquity / Rome across four maps",
    folio: "13",
    viewer: "ancient/-0050/ch-rome",
    figures: [
      { kind: "small-multiples", caption: "The same Mediterranean frame at four dates", share: 1, extent: EXT, projection: "mercator", columns: 2, panelAspect: 0.9,
        legend: { position: "bottom-left", columns: 2 }, layers: common,
        panels: [
          { caption: "264 BC", layers: [
            area("it-264", italy, CORE, "Roman citizen land and allies", { pattern: "hatch", opacity: 0.55 }),
            area("sicily-264", sicily, ALLY, "War zone and allied cities", { pattern: "dots", opacity: 0.5 }),
            city("carthage-264", CARTHAGE, "Carthage", "w")
          ] },
          { caption: "133 BC", layers: [
            area("it-133", italy, CORE, "Old Roman-Italian core", { opacity: 0.62 }),
            area("sicily-133", sicily, CONQ, "First overseas provinces", { pattern: "hatch" }),
            area("sardinia-133", sardiniaCorsica, CONQ, "First overseas provinces", { pattern: "hatch" }),
            area("spain-133", spainEast, CONQ, "Provinces and client zones", { pattern: "stripe" }),
            area("africa-133", africa, CONQ, "Provinces and client zones", { pattern: "stripe" }),
            area("greece-133", greece, CONQ, "Provinces and client zones", { pattern: "stripe" }),
            area("asia-133", asia, ALLY, "Pergamum bequest, 133 BC", { pattern: "dots" })
          ] },
          { caption: "44 BC", layers: [
            area("italy-44", italy, CORE, "Italy and older provinces", { opacity: 0.62 }),
            area("spain-44", spainAll, CONQ, "Republican provinces", { pattern: "hatch" }),
            area("gaul-44", gaul, R, "Caesar's conquest of Gaul", { pattern: "stripe", opacity: 0.54 }),
            area("illyricum-44", illyricum, CONQ, "Republican provinces", { pattern: "hatch" }),
            area("greece-44", greece, CONQ, "Republican provinces", { pattern: "hatch" }),
            area("asia-44", asia, CONQ, "Republican provinces", { pattern: "hatch" }),
            area("syria-44", syria, CONQ, "Eastern provinces", { pattern: "hatch" }),
            area("africa-44", africa, CONQ, "Republican provinces", { pattern: "hatch" }),
            city("alex-44", ALEX, "Alexandria", "w")
          ] },
          { caption: "AD 117", layers: [
            area("empire-117-west", [...spainAll, ...gaul, ...italy], R, "Empire under Trajan", { opacity: 0.42 }),
            area("britain-117", britain, R, "Empire under Trajan", { opacity: 0.42 }),
            area("africa-117", africa, R, "Empire under Trajan", { opacity: 0.42 }),
            area("danube-117", danube, R, "Empire under Trajan", { opacity: 0.42 }),
            area("dacia-117", dacia, ALLY, "Recent conquests", { pattern: "stripe" }),
            area("east-117", east117, ALLY, "Recent conquests", { pattern: "stripe" }),
            area("egypt-117", egypt, R, "Empire under Trajan", { opacity: 0.42 }),
            { id: "byzantium-117", type: "point", symbol: "large-city", at: BYZ },
            { id: "antioch-117", type: "point", symbol: "large-city", at: ANTIOCH }
          ] }
        ] }
    ],
    text: { intro: "Small multiples keep the coastline and scale steady, so the eye sees change rather than a new map each time. Rome starts as an Italian power, then adds islands, provinces, Gaul, Egypt and the frontier arc of the high empire.", sections: [
      { heading: "Four steps", entries: [
        { date: "264 BC", text: "On the eve of the Punic Wars, Rome controlled Italy through citizen land, colonies and allies, but the sea still belonged to older powers such as Carthage.", refs: ["it-264", "sicily-264", "carthage-264", "rome"] },
        { date: "133 BC", text: "Victories over Carthage and the Hellenistic kingdoms turned Sicily, Sardinia-Corsica, Spain, Africa, Macedonia-Greece and Asia into provincial problems.", refs: ["it-133", "sicily-133", "sardinia-133", "spain-133", "africa-133", "greece-133", "asia-133"] },
        { date: "44 BC", text: "By Caesar's death the Republic held a Mediterranean ring, including Gaul and Syria. The scale of command helped break republican politics.", refs: ["italy-44", "spain-44", "gaul-44", "illyricum-44", "greece-44", "asia-44", "syria-44", "africa-44", "alex-44"] },
        { date: "AD 117", text: "Trajan's reign shows the empire at its widest: Britain, the Rhine-Danube frontier, Dacia, Egypt and the temporary eastern conquests all in one system.", refs: ["empire-117-west", "britain-117", "africa-117", "danube-117", "dacia-117", "east-117", "egypt-117", "byzantium-117", "antioch-117"] }
      ] }
    ] },
    sources: ["Conventional Roman territorial chronology; shapes are atlas-style approximations", "Coastlines and rivers: Natural Earth 1:50m"]
  };
})();
