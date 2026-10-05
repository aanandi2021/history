// Augustus and the Principate, written from general historical knowledge for the atlas renderer.
(function () {
  const R = "#d66a4a", S = "#f0c75a", C = "#7a9b50", P = "#7a5ca8", G = "#6f8f5f", ROAD = "#8a6842";
  const ROME=[12.496,41.902], ACT=[20.72,38.95], ALEX=[29.92,31.20], PHIL=[24.29,41.0], BRUN=[17.94,40.64], TARR=[1.25,41.12], LUG=[4.83,45.76], ANK=[32.85,39.93], SIRM=[19.72,44.98], EUPH=[39.0,36.7], VIND=[16.37,48.21], TEUT=[8.9,52.1];
  window.PLATES["augustus-principate"] = {
    id: "augustus-principate",
    title: "Augustus and the Principate, 31 B.C.-A.D. 14",
    head: "Antiquity / Rome after the civil wars",
    folio: "9",
    viewer: "ancient/-0027/ch-augustus-principate",
    figures: [
      { caption: "The settlement of the Roman world after Actium", share: 0.54, extent: [[-11,26],[43,52]], projection: "mercator", layers: [
        { id:"imperial-provinces", type:"area", tier:"core", colour:R, pad:1.25, legend:"Imperial provinces and army frontiers", around:[[1,41],[4.8,45.8],[7.5,47],[11,46],[16,45],[20,42],[24,39],[30,37],[36,36],[37,32],[25,31],[14,33],[3,36],[-3,38]] },
        { id:"senatorial-provinces", type:"area", colour:S, opacity:0.46, pad:0.95, legend:"Senatorial provinces", around:[[13,41.8],[14,37.6],[23.7,37.9],[29.9,31.2],[10.3,36.85],[-5,37.5]] },
        { id:"client-states", type:"area", tier:"influence", colour:C, pad:1.0, legend:"Client kingdoms and buffer states", around:[[32,39.9],[35,39],[39,40],[38,35],[31,31.5],[17,25.5],[-6,34]] },
        { id:"actium-route", type:"arrow", colour:"#111111", width:6, legend:"Octavian's decisive campaign, 31-30 BC", path:[ROME, BRUN, ACT, ALEX] },
        { id:"antony-east", type:"route", style:"dashed", colour:P, label:"Antony", legend:"Antony's eastern base", path:[PHIL, [28,38.5], ANK, [34,38], EUPH], head:true },
        { id:"augustan-roads", type:"route", style:"road", colour:ROAD, legend:"Roads and military communications", path:[ROME, [11,44], LUG, TARR] },
        { id:"danube-front", type:"boundary", style:"wall", colour:R, side:"right", legend:"Danube frontier secured", path:[[10.5,47],[14.5,47.5],VIND,SIRM,[22.0,44.8]] },
        { id:"rhine-front", type:"boundary", style:"wall", colour:R, side:"left", legend:"Rhine frontier after AD 9", path:[[6.0,46.5],[7.4,49.0],[6.7,51.4]] },
        { id:"rome", type:"point", symbol:"capital", at:ROME, name:"Rome", labelPos:"e" },
        { id:"actium", type:"point", symbol:"battle", at:ACT, name:"Actium", labelPos:"s", legend:"Battle" },
        { id:"alexandria", type:"point", symbol:"large-city", at:ALEX, name:"Alexandria", labelPos:"e", tag:{text:"30 BC", colour:"#f1c75b"} },
        { id:"lugdunum", type:"point", symbol:"large-city", at:LUG, name:"Lugdunum", labelPos:"n" },
        { id:"teutoburg", type:"point", symbol:"battle", at:TEUT, name:"Teutoburg", labelPos:"e", tag:{text:"AD 9", colour:"#e8806a"} },
        { id:"parthian-standards", type:"point", symbol:"treaty", at:[41.0,35.5], name:"Parthian standards", labelPos:"w", tag:{text:"20 BC", colour:"#f1c75b"} },
        { type:"label", style:"realm", colour:R, text:"Roman Empire", at:[7,42.5], size:13 },
        { type:"label", style:"realm", colour:C, text:"Client kingdoms", at:[33,36], size:9 },
        { type:"label", style:"water", text:"Mediterranean", at:[9,34.6], size:9 }
      ], legend:{position:"bottom-left", columns:2} },
      { caption: "The Principate as a working compromise", share: 0.46, extent: [[-10,31],[35,47]], projection: "mercator", layers: [
        { id:"senate-field", type:"area", colour:S, opacity:0.38, pad:1.5, legend:"Senate and old republican forms", around:[[8,36],[11,44],[14,45],[17,42],[18,36],[13,33]] },
        { id:"princeps-field", type:"area", colour:R, opacity:0.38, pad:1.6, legend:"Princeps: army, treasury and imperial provinces", around:[[12,41.9],[16,45],[21,43],[27,39],[30,35],[18,33],[12,36]] },
        { id:"imperial-provinces-2", type:"area", colour:R, pattern:"stripe", pad:1.0, legend:"Proconsular command where legions stood", around:[[3,43],[8,47],[17,46],[22,44],[26,40],[30,36],[34,35]] },
        { id:"senatorial-ring", type:"boundary", style:"dashdot", colour:S, legend:"Pacified senatorial provinces", path:[[3,36],[7,38],[12,39],[17,38],[22,37],[27,35]] },
        { id:"grain", type:"arrow", colour:"#c58b32", width:5, label:"grain", legend:"Cura annonae: grain supply to Rome", path:[[29.92,31.2],[22,34],[15,38],ROME] },
        { id:"praetorian", type:"point", symbol:"fortress", at:ROME, name:"Praetorian Guard", labelPos:"w", halo:R },
        { id:"aerarium", type:"point", symbol:"treaty", at:[12.9,41.4], name:"treasury", labelPos:"s" },
        { id:"senate", type:"point", symbol:"legislature", at:[12.1,42.2], name:"Senate", labelPos:"n", halo:S },
        { id:"augustus", type:"point", symbol:"monarch", at:ROME, name:"Augustus", labelPos:"e", tag:{text:"27 BC-AD 14", colour:"#f1c75b"} },
        { type:"label", style:"region", text:"authority through republican offices", at:[8.5,44.8], size:8 },
        { type:"label", style:"region", text:"army and frontiers", at:[25,42], size:8 },
        { type:"label", style:"water", text:"The old city governs a Mediterranean machine", at:[9,33.6], size:8 }
      ], legend:{position:"bottom-left", columns:2} }
    ],
    text:{ intro:"Augustus made monarchy work by refusing to call it monarchy. The map shows a single Mediterranean empire, but the settlement divided authority between old republican language and the princeps' control of armies, provinces and patronage.", sections:[
      { heading:"From Actium to settlement", entries:[
        { date:"31-30 BC", text:"Actium and Alexandria ended the last civil-war coalition. Egypt became Octavian's personal strategic province, and the eastern client system was reworked around Roman command.", refs:["actium-route","actium","alexandria","client-states"] },
        { date:"27 BC", text:"Octavian returned formal powers to the Senate and received the name Augustus. The provinces with legions stayed under his command.", refs:["imperial-provinces","senatorial-provinces","augustus"] },
        { date:"20 BC", text:"A Parthian settlement returned the standards lost by Crassus and Antony. The Euphrates became a diplomatic frontier as much as a military one.", refs:["parthian-standards","antony-east"] }
      ] },
      { heading:"The machine", entries:[
        { date:"16-9 BC", text:"Gaul, Spain and the Danube were reorganized while roads and military districts tied western provinces to Italy.", refs:["augustan-roads","danube-front","lugdunum"] },
        { date:"AD 9", text:"The Varus disaster ended the attempt to make Germany a province beyond the Rhine. The Rhine line held instead.", refs:["rhine-front","teutoburg"] },
        { text:"The Principate rested on a double language: Senate, magistracies and treasury on one side; imperial provinces, army and grain supply on the other.", refs:["senate-field","princeps-field","imperial-provinces-2","grain","senate","praetorian"] }
      ] }
    ] }, sources:["General historical chronology; approximate areas", "Coastlines and rivers: Natural Earth 1:50m"]
  };
})();
