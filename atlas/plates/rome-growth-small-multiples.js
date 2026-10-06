// Rome's growth as small multiples: one Mediterranean projection, four dated panels.
(function () {
  const HELD = "#e7a98f", NEW = "#c85038", CLIENT = "#f0bd6b", RIVAL = "#4f7f9f";
  const EXT = [[-11.5, 27.5], [43.5, 47.5]];
  const ROME = [12.496, 41.902], CARTHAGE = [10.31, 36.85], ALEX = [29.92, 31.20];
  const area = (id, polygon, colour, legend, extra = {}) => Object.assign({ id, type: "area", polygon, colour, opacity: 0.52, clipToLand: true, legend }, extra);
  const held = (id, polygon) => area(id, polygon, HELD, "Already Roman", { opacity: 0.36 });
  const added = (id, polygon) => area(id, polygon, NEW, "Added since previous panel", { opacity: 0.62 });
  const client = (id, polygon) => area(id, polygon, CLIENT, "Client or dependent realm", { pattern: "hatch", opacity: 0.78 });
  const rival = (id, polygon) => area(id, polygon, RIVAL, "Carthaginian power, 264 BC", { pattern: "hatch", opacity: 0.60 });
  const city = (id, at, name, labelPos = "e") => ({ id, type: "point", symbol: id === "rome" ? "capital" : "large-city", at, name, labelPos });

  const italy = [[9.2,44.0],[11.8,44.2],[13.6,43.4],[14.4,42.0],[15.6,41.1],[17.2,40.2],[16.4,39.0],[15.5,38.0],[13.2,40.1],[12.0,41.2],[10.7,42.3]];
  const sicily = [[12.2,38.4],[13.7,38.4],[15.5,37.4],[14.0,36.6],[12.4,37.1]];
  const sardinia = [[8.1,41.4],[9.7,41.3],[9.9,39.0],[8.3,38.7]];
  const corsica = [[8.5,43.1],[9.7,43.1],[9.6,41.6],[8.6,41.5]];
  const africaProv = [[8.0,37.2],[11.5,37.0],[12.3,35.7],[10.0,34.4],[8.2,35.2]];
  const africaCoast = [[-6.5,35.8],[-2.5,36.2],[2.0,36.8],[8.0,37.2],[14.5,36.3],[20.5,33.8],[25.5,32.2],[31.8,31.7],[33.5,29.8],[29.5,28.6],[20.0,30.0],[10.0,32.6],[2.0,34.1],[-5.5,34.5]];
  const eastSpain = [[-1.8,42.7],[1.5,41.1],[0.2,38.5],[-1.2,37.3],[-4.0,37.1],[-5.1,39.1],[-3.6,41.0]];
  const southSpain = [[-7.8,38.4],[-4.0,38.7],[-1.2,37.3],[-2.8,36.3],[-6.4,36.0],[-8.5,36.8]];
  const allSpain = [[-9.5,43.3],[-1.4,42.9],[2.4,41.0],[0.0,38.3],[-3.8,36.1],[-8.8,36.3],[-9.8,39.5]];
  const cisalpine = [[7.5,45.2],[10.5,45.5],[13.5,45.0],[13.6,43.8],[10.0,43.8],[7.8,44.3]];
  const macedonAchaea = [[19.0,41.8],[22.5,41.4],[24.5,39.7],[24.1,37.4],[21.5,36.7],[19.2,38.5]];
  const asiaPergamum = [[25.7,40.7],[29.5,40.5],[31.4,38.8],[30.5,36.6],[27.0,36.5],[25.2,38.6]];
  const narbonensis = [[1.8,44.6],[6.9,44.6],[7.6,43.4],[5.0,42.6],[2.4,43.0]];
  const gaul = [[-4.8,50.6],[1.5,51.1],[7.6,49.2],[7.7,44.1],[4.5,43.0],[-1.5,43.6],[-4.7,46.7]];
  const illyricum = [[13.2,45.6],[18.2,45.2],[20.4,43.0],[19.2,41.0],[15.3,42.0],[13.4,44.0]];
  const bithynia = [[29.2,41.5],[32.4,41.3],[32.4,39.8],[29.0,39.5]];
  const cilicia = [[31.0,37.2],[35.2,37.0],[36.5,35.5],[33.0,35.2]];
  const syria = [[34.5,36.8],[38.9,36.2],[39.4,32.2],[35.2,31.3],[34.2,33.6]];
  const cyrenaica = [[19.0,33.0],[24.3,32.5],[24.5,30.0],[20.0,29.5],[18.5,31.0]];
  const egypt = [[28.8,31.7],[32.8,31.5],[33.4,29.2],[31.2,27.8],[29.0,29.0]];
  const balkansDanube = [[13.0,46.4],[20.0,46.2],[28.6,44.9],[29.2,42.8],[22.2,41.3],[17.0,42.2],[13.4,44.0]];
  const anatolia = [[25.5,41.3],[32.0,41.2],[36.5,39.6],[36.6,36.4],[31.6,35.9],[26.4,36.7],[24.8,39.0]];
  const judaeaArabia = [[34.4,32.5],[37.8,32.0],[39.8,29.5],[37.5,27.6],[34.6,29.5]];
  const britain = [[-5.2,55.1],[-0.6,54.9],[1.2,52.0],[-1.0,50.5],[-4.8,51.2]];
  const dacia = [[22.2,44.1],[24.7,46.6],[27.8,46.7],[28.2,44.6],[25.4,43.5]];
  const mesopotamia = [[36.0,38.0],[42.8,37.5],[43.0,33.4],[39.2,31.4],[36.0,34.0]];
  const punicAfrica = [[-2.0,36.0],[3.5,36.7],[10.8,37.1],[13.0,35.7],[10.0,33.9],[4.0,34.2],[-1.8,34.8]];
  const punicIberia = [[-6.8,38.2],[-1.0,38.5],[0.0,37.0],[-3.5,36.0],[-6.8,36.2]];
  const westSicily = [[12.0,38.3],[13.4,38.2],[13.3,37.0],[12.2,37.0]];

  window.PLATES["rome-growth-small-multiples"] = {
    id: "rome-growth-small-multiples",
    title: "Rome's growth from city-state to empire",
    head: "Antiquity / Rome across four maps",
    folio: "13",
    viewer: "ancient/-0050/ch-rome",
    figures: [
      { kind: "small-multiples", caption: "A Mediterranean empire, panel by panel", share: 1, extent: EXT, projection: "mercator", columns: 2, panelAspect: 1.25,
        legend: { position: "bottom-left", columns: 2 }, layers: [city("rome", ROME, "Rome", "e")],
        panels: [
          { caption: "264 BC", layers: [
            added("it-264", italy),
            rival("punic-africa-264", punicAfrica), rival("punic-sardinia-264", sardinia), rival("punic-corsica-264", corsica), rival("punic-sicily-264", westSicily), rival("punic-spain-264", punicIberia),
            city("carthage-264", CARTHAGE, "Carthage", "w")
          ] },
          { caption: "133 BC", layers: [
            held("it-133", italy),
            added("sicily-133", sicily), added("sardinia-133", sardinia), added("corsica-133", corsica), added("citerior-133", eastSpain), added("ulterior-133", southSpain), added("africa-133", africaProv), added("cisalpine-133", cisalpine), added("macedonia-achaea-133", macedonAchaea), added("asia-133", asiaPergamum)
          ] },
          { caption: "44 BC", layers: [
            held("it-44", italy), held("islands-44a", sicily), held("islands-44b", sardinia), held("islands-44c", corsica), held("spain-old-44a", eastSpain), held("spain-old-44b", southSpain), held("africa-old-44", africaProv), held("cisalpine-44", cisalpine), held("greece-old-44", macedonAchaea), held("asia-old-44", asiaPergamum),
            added("narbonensis-44", narbonensis), added("gaul-44", gaul), added("illyricum-44", illyricum), added("bithynia-44", bithynia), added("cilicia-44", cilicia), added("syria-44", syria), added("cyrenaica-44", cyrenaica),
            client("egypt-client-44", egypt), city("alexandria-44", ALEX, "Alexandria", "w")
          ] },
          { caption: "AD 117", layers: [
            held("spain-117", allSpain), held("gaul-117", gaul), held("narbonensis-117", narbonensis), held("italy-117", italy), held("sicily-117", sicily), held("sardinia-117", sardinia), held("corsica-117", corsica), held("africa-117", africaCoast), held("balkans-117", balkansDanube), held("greece-117", macedonAchaea), held("anatolia-117", anatolia), held("syria-117", syria), held("judaea-arabia-117", judaeaArabia), held("egypt-117", egypt),
            added("britain-117", britain), added("dacia-117", dacia), added("mesopotamia-117", mesopotamia)
          ] }
        ] }
    ],
    text: { intro: "Small multiples keep the coastline and scale steady, so the eye sees change rather than a new map each time. Pale red is what Rome already held; dark red is what is new since the previous panel.", sections: [
      { heading: "Four steps", entries: [
        { date: "264 BC", text: "Rome controls peninsular Italy south of the Arno-Rubicon line. Carthage is the rival sea power, with territory on the North African coast, western Sicily, Sardinia-Corsica and the southern Spanish coast.", refs: ["it-264", "punic-africa-264", "punic-sardinia-264", "punic-corsica-264", "punic-sicily-264", "punic-spain-264", "rome", "carthage-264"] },
        { date: "133 BC", text: "After the Punic and Macedonian wars, Rome has Sicily, Sardinia-Corsica, Hispania Citerior and Ulterior, Africa, Cisalpine Gaul, Macedonia-Achaea and Asia from Pergamum.", refs: ["it-133", "sicily-133", "sardinia-133", "corsica-133", "citerior-133", "ulterior-133", "africa-133", "cisalpine-133", "macedonia-achaea-133", "asia-133"] },
        { date: "44 BC", text: "By Caesar's death, older provinces surround the western and central Mediterranean. Newer republican gains add Narbonensis, all Gaul, Illyricum, Bithynia, Cilicia, Syria and Cyrenaica, while Egypt remains a dependent kingdom.", refs: ["it-44", "islands-44a", "islands-44b", "islands-44c", "spain-old-44a", "spain-old-44b", "africa-old-44", "cisalpine-44", "greece-old-44", "asia-old-44", "narbonensis-44", "gaul-44", "illyricum-44", "bithynia-44", "cilicia-44", "syria-44", "cyrenaica-44", "egypt-client-44", "alexandria-44"] },
        { date: "AD 117", text: "At Trajan's peak, the empire rings the Mediterranean: Spain, Gaul, Italy, the islands, North Africa from Morocco to Egypt, Greece, the Balkans, Anatolia, Syria and Judaea. Britain, Dacia and Mesopotamia mark the outer push.", refs: ["spain-117", "gaul-117", "narbonensis-117", "italy-117", "sicily-117", "sardinia-117", "corsica-117", "africa-117", "balkans-117", "greece-117", "anatolia-117", "syria-117", "judaea-arabia-117", "egypt-117", "britain-117", "dacia-117", "mesopotamia-117"] }
      ] }
    ] },
    sources: ["Conventional Roman territorial chronology; shapes are atlas-style approximations", "Coastlines and rivers: Natural Earth 1:50m"]
  };
})();
