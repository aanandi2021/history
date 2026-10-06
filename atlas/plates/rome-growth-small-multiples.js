// Rome's growth as small multiples: one Mediterranean projection, four dated panels.
(function () {
  const HELD = "#d98f75", NEW = "#c85038", CLIENT = "#f0bd6b", RIVAL = "#4f7f9f";
  const EXT = [[-10.5, 29.0], [42.5, 46.6]];
  const ROME = [12.496, 41.902], CARTHAGE = [10.31, 36.85], ALEX = [29.92, 31.20];
  const city = (id, at, name, labelPos = "e") => ({ id, type: "point", symbol: id === "rome" ? "capital" : "large-city", at, name, labelPos });
  const A = (id, acquired, polygon, name) => ({ id, acquired, polygon, name });

  const regions = [
    A("italy", -264, [[9.2,44.0],[11.8,44.2],[13.6,43.4],[14.4,42.0],[15.6,41.1],[17.2,40.2],[16.4,39.0],[15.5,38.0],[13.2,40.1],[12.0,41.2],[10.7,42.3]], "Italy south of the Arno-Rubicon"),
    A("sicily", -241, [[12.2,38.4],[13.7,38.4],[15.5,37.4],[14.0,36.6],[12.4,37.1]], "Sicily"),
    A("sardinia", -238, [[8.1,41.4],[9.7,41.3],[9.9,39.0],[8.3,38.7]], "Sardinia"),
    A("corsica", -238, [[8.5,43.1],[9.7,43.1],[9.6,41.6],[8.6,41.5]], "Corsica"),
    A("citerior", -197, [[-1.8,42.7],[1.5,41.1],[0.2,38.5],[-1.2,37.3],[-4.0,37.1],[-5.1,39.1],[-3.6,41.0]], "Hispania Citerior"),
    A("ulterior", -197, [[-7.8,38.4],[-4.0,38.7],[-1.2,37.3],[-2.8,36.3],[-6.4,36.0],[-8.5,36.8]], "Hispania Ulterior"),
    A("africa", -146, [[8.0,35.6],[11.5,35.4],[12.3,34.5],[10.0,33.8],[8.2,34.4]], "Africa province"),
    A("cisalpine", -191, [[7.5,45.2],[10.5,45.5],[13.5,45.0],[13.6,43.8],[10.0,43.8],[7.8,44.3]], "Cisalpine Gaul"),
    A("macedonia-achaea", -146, [[19.0,41.8],[22.5,41.4],[24.5,39.7],[24.1,37.4],[21.5,36.7],[19.2,38.5]], "Macedonia and Achaea"),
    A("asia", -133, [[25.7,40.7],[29.5,40.5],[31.4,38.8],[30.5,36.6],[27.0,36.5],[25.2,38.6]], "Asia province"),
    A("narbonensis", -118, [[1.8,44.6],[6.9,44.6],[7.6,43.4],[5.0,42.6],[2.4,43.0]], "Narbonensis"),
    A("gaul", -50, [[-2.2,46.0],[-1.0,49.0],[1.5,50.6],[7.0,49.0],[7.2,44.5],[4.5,43.1],[-1.0,43.7]], "Gaul"),
    A("illyricum", -59, [[13.2,45.6],[18.2,45.2],[20.4,43.0],[19.2,41.0],[15.3,42.0],[13.4,44.0]], "Illyricum"),
    A("bithynia", -74, [[29.2,41.5],[32.4,41.3],[32.4,39.8],[29.0,39.5]], "Bithynia"),
    A("cilicia", -67, [[31.0,37.2],[35.2,37.0],[36.5,35.5],[33.0,35.2]], "Cilicia"),
    A("syria", -64, [[34.5,36.8],[38.9,36.2],[39.4,32.2],[35.2,31.3],[34.2,33.6]], "Syria"),
    A("cyrenaica", -74, [[19.0,33.0],[24.3,32.5],[24.5,30.0],[20.0,29.5],[18.5,31.0]], "Cyrenaica"),
    A("egypt", -30, [[28.8,31.7],[32.8,31.5],[33.4,29.2],[31.2,27.8],[29.0,29.0]], "Egypt"),
    A("mauretania", 40, [[-6.5,34.4],[-2.5,34.8],[2.0,34.9],[1.0,33.7],[-5.5,33.7]], "Mauretania"),
    A("africa-coast", 46, [[10.0,33.5],[14.5,33.8],[20.5,32.0],[25.5,31.2],[31.8,30.8],[33.0,29.7],[29.5,28.8],[20.0,29.8],[10.0,31.6]], "Africa to Egypt"),
    A("balkans-danube", 46, [[13.0,46.4],[20.0,46.2],[28.6,44.9],[29.2,42.8],[22.2,41.3],[17.0,42.2],[13.4,44.0]], "Balkans and Danube provinces"),
    A("anatolia", 74, [[25.5,41.3],[32.0,41.2],[36.5,39.6],[36.6,36.4],[31.6,35.9],[26.4,36.7],[24.8,39.0]], "Anatolia"),
    A("judaea-arabia", 106, [[34.4,32.5],[37.8,32.0],[39.8,29.5],[37.5,27.6],[34.6,29.5]], "Judaea and Arabia"),
    A("britain", 43, [[-5.2,55.1],[-0.6,54.9],[1.2,52.0],[-1.0,50.5],[-4.8,51.2]], "Britain"),
    A("dacia", 106, [[22.2,44.1],[24.7,46.6],[27.8,46.7],[28.2,44.6],[25.4,43.5]], "Dacia"),
    A("mesopotamia", 116, [[36.0,38.0],[42.8,37.5],[43.0,33.4],[39.2,31.4],[36.0,34.0]], "Mesopotamia")
  ];
  const punic = [
    { id: "punic-africa", polygon: [[-2.0,34.5],[3.5,34.9],[10.8,35.0],[12.4,34.5],[10.0,33.6],[4.0,33.8],[-1.8,34.2]] },
    { id: "punic-sardinia", polygon: regions.find((r) => r.id === "sardinia").polygon },
    { id: "punic-corsica", polygon: regions.find((r) => r.id === "corsica").polygon },
    { id: "punic-sicily", polygon: [[12.0,38.3],[13.4,38.2],[13.3,37.0],[12.2,37.0]] },
    { id: "punic-spain", polygon: [[-6.8,37.4],[-1.2,37.7],[-0.2,36.9],[-3.5,36.0],[-6.8,36.2]] }
  ];
  const panelLayer = (r, panelYear, previousYear) => ({ id: `${r.id}-${panelYear < 0 ? Math.abs(panelYear) + "bc" : panelYear}`, type: "area", polygon: r.polygon, colour: r.acquired > previousYear ? NEW : HELD, opacity: r.acquired > previousYear ? 0.62 : 0.48, clipToLand: true, smooth: false, legend: r.acquired > previousYear ? "Added since previous panel" : "Already Roman" });
  const layersFor = (panelYear, previousYear) => regions.filter((r) => r.acquired <= panelYear).map((r) => panelLayer(r, panelYear, previousYear));
  const rival = (r) => ({ id: `${r.id}-264bc`, type: "area", polygon: r.polygon, colour: RIVAL, pattern: "hatch", opacity: 0.60, clipToLand: true, smooth: false, legend: "Carthaginian power, 264 BC" });
  const clientEgypt = { id: "egypt-client-44bc", type: "area", polygon: regions.find((r) => r.id === "egypt").polygon, colour: CLIENT, pattern: "hatch", opacity: 0.78, clipToLand: true, smooth: false, legend: "Client or dependent realm" };

  window.PLATES["rome-growth-small-multiples"] = {
    id: "rome-growth-small-multiples",
    title: "Rome's growth from city-state to empire",
    head: "Antiquity / Rome across four maps",
    folio: "13",
    viewer: "ancient/-0050/ch-rome",
    figures: [
      { kind: "small-multiples", caption: "A Mediterranean empire, panel by panel", share: 1, extent: EXT, projection: "mercator", columns: 2, panelAspect: 0.96,
        legend: { columns: 2 }, layers: [city("rome", ROME, "Rome", "e")],
        panels: [
          { caption: "264 BC", layers: [panelLayer(regions[0], -264, -999), ...punic.map(rival), city("carthage-264", CARTHAGE, "Carthage", "w")] },
          { caption: "133 BC", layers: layersFor(-133, -264) },
          { caption: "44 BC", layers: [...layersFor(-44, -133).filter((L) => !L.id.startsWith("egypt-")), clientEgypt, city("alexandria-44", ALEX, "Alexandria", "w")] },
          { caption: "AD 117", layers: layersFor(117, 98) }
        ] }
    ],
    text: { intro: "Small multiples keep the coastline and scale steady, so the eye sees change rather than a new map each time. Pale red is what Rome already held; dark red is what is new since the previous panel.", sections: [
      { heading: "Four steps", entries: [
        { date: "264 BC", text: "Rome controls peninsular Italy south of the Arno-Rubicon line. Carthage is the rival sea power, with territory on the North African coast, western Sicily, Sardinia-Corsica and the southern Spanish coast.", refs: ["italy-264bc", "punic-africa-264bc", "punic-sardinia-264bc", "punic-corsica-264bc", "punic-sicily-264bc", "punic-spain-264bc", "rome", "carthage-264"] },
        { date: "133 BC", text: "After the Punic and Macedonian wars, Rome has Sicily, Sardinia-Corsica, Hispania Citerior and Ulterior, Africa, Cisalpine Gaul, Macedonia-Achaea and Asia from Pergamum.", refs: ["italy-133bc", "sicily-133bc", "sardinia-133bc", "corsica-133bc", "citerior-133bc", "ulterior-133bc", "africa-133bc", "cisalpine-133bc", "macedonia-achaea-133bc", "asia-133bc"] },
        { date: "44 BC", text: "By Caesar's death, older provinces surround the western and central Mediterranean. Newer republican gains add Narbonensis, all Gaul, Illyricum, Bithynia, Cilicia, Syria and Cyrenaica, while Egypt remains a dependent kingdom.", refs: ["italy-44bc", "sicily-44bc", "sardinia-44bc", "corsica-44bc", "citerior-44bc", "ulterior-44bc", "africa-44bc", "cisalpine-44bc", "macedonia-achaea-44bc", "asia-44bc", "narbonensis-44bc", "gaul-44bc", "illyricum-44bc", "bithynia-44bc", "cilicia-44bc", "syria-44bc", "cyrenaica-44bc", "egypt-client-44bc", "alexandria-44"] },
        { date: "AD 117", text: "At Trajan's peak, the empire rings the Mediterranean: Spain, Gaul, Italy, the islands, North Africa from Morocco to Egypt, Greece, the Balkans, Anatolia, Syria and Judaea. Britain, Dacia and Mesopotamia mark the outer push.", refs: ["all", "spain", "gaul", "italy", "africa", "balkans", "anatolia", "egypt", "britain", "dacia", "mesopotamia"].flatMap((x) => x === "all" ? [] : regions.filter((r) => r.id.includes(x) || (x === "spain" && ["citerior","ulterior"].includes(r.id)) || (x === "italy" && ["italy","sicily","sardinia","corsica"].includes(r.id)) || (x === "africa" && ["africa","mauretania","africa-coast"].includes(r.id))).map((r) => `${r.id}-117`)) }
      ] }
    ] },
    sources: ["Conventional Roman territorial chronology; shapes are atlas-style approximations", "Coastlines and rivers: Natural Earth 1:50m"]
  };
})();
