// The high Roman empire and its frontiers, written from general historical knowledge for the atlas renderer.
(function () {
  const R="#d66a4a", T="#ef9a35", F="#6d5a45", B="#6f8f5f", P="#78a85a", D="#8c5a3c", G="#7a7a7a";
  const ROME=[12.496,41.902], DAC=[25.0,45.8], PETRA=[35.44,30.33], ANT=[36.2,36.2], NIS=[41.21,37.07], CTES=[44.58,33.1], YORK=[-1.08,53.96], MAINZ=[8.27,50.0], REGEN=[12.1,49.0], PAL=[38.27,34.56], CAR=[10.31,36.85], DURA=[40.73,34.75];
  window.PLATES["roman-frontiers"] = {
    id:"roman-frontiers", title:"The Roman empire and its frontiers, A.D. 96-235", head:"Antiquity / The high empire and the Severi", folio:"10", viewer:"ancient/0117/ch-high-empire-frontiers",
    figures:[
      { caption:"The empire at its widest extent", share:0.58, extent:[[-12,24],[47,56]], projection:"mercator", layers:[
        { id:"empire-100", type:"area", clipToLand:true, colour:R, opacity:0.36, pad:1.3, legend:"Roman Empire about AD 100", around:[[-5,37],[1,43],[7,49],[12,45],[18,46],[25,45],[31,40],[36,36],[35,30],[25,31],[16,33],[10,36],[0,35]] },
        { id:"trajan-east", type:"area", clipToLand:true, colour:T, pattern:"stripe", pad:1.0, legend:"Trajan's eastern conquests, 114-117", around:[[32,39],[37,39.5],[42,37.5],[45,33.5],[42,31.5],[36,34]] },
        { id:"dacia", type:"area", clipToLand:true, colour:T, pattern:"stripe", pad:0.85, legend:"Dacia after 106", around:[[22.5,44],[24.8,46.5],[27.5,47],[28.0,44.5],[25.2,43.7]] },
        { id:"arabia", type:"area", clipToLand:true, colour:T, pattern:"stripe", pad:0.85, legend:"Arabia after 106", around:[[34,30],[36,31],[38,29],[38,26.5],[35,26.5]] },
        { id:"parthia", type:"area", tier:"influence", colour:P, pad:1.4, legend:"Parthian kingdom", around:[[43,35],[47,37],[50,34],[48,31],[43,31]] },
        { id:"britain-front", type:"boundary", style:"wall", colour:F, side:"right", legend:"Northern British walls", path:[[-4.6,55.9],[-3.1,55.9],[-1.7,55.2],[-0.8,54.9]] },
        { id:"rhine-danube", type:"boundary", style:"wall", colour:F, side:"right", legend:"Rhine-Danube frontier", path:[[6,50.8],MAINZ,[10.5,49.4],REGEN,[16.4,48.2],[20.3,46.2],[25.5,45.0],[28.9,44.2]] },
        { id:"euphrates", type:"boundary", style:"wall", colour:F, side:"left", legend:"Euphrates frontier", path:[[36.7,37.2],[38.8,36.0],DURA,[42.2,33.8]] },
        { id:"trajan-campaign", type:"arrow", colour:"#111111", width:6, label:"Trajan", date:"114-117", legend:"Trajan in the east", path:[ANT,NIS,CTES,[41.0,31.8]] },
        { id:"severus-britain", type:"arrow", colour:D, width:5, label:"Severus", date:"208-211", legend:"Severus in Britain", path:[ROME,[4,48],YORK,[-3.2,56.2]] },
        { id:"rome", type:"point", symbol:"capital", at:ROME, name:"Rome", labelPos:"e" },
        { id:"constantinople-pre", type:"point", symbol:"large-city", at:[28.98,41.01], name:"Byzantium", labelPos:"e" },
        { id:"dacia-pt", type:"point", symbol:"fortress", at:DAC, name:"Dacia", labelPos:"n", tag:{text:"106", colour:"#f1c75b"} },
        { id:"arabia-pt", type:"point", symbol:"fortress", at:PETRA, name:"Arabia", labelPos:"s", tag:{text:"106", colour:"#f1c75b"} },
        { id:"armenia", type:"point", symbol:"fortress", at:[44.5,40.2], name:"Armenia", labelPos:"w", tag:{text:"114", colour:"#f1c75b"} },
        { id:"ctesiphon", type:"point", symbol:"battle", at:CTES, name:"Ctesiphon", labelPos:"e", tag:{text:"116", colour:"#e8806a"} },
        { id:"york", type:"point", symbol:"fortress", at:YORK, name:"Eboracum", labelPos:"e", tag:{text:"211", colour:"#f1c75b"} },
        { id:"carthage-front", type:"point", symbol:"large-city", at:CAR, name:"Carthage", labelPos:"e" },
        { type:"label", style:"realm", colour:R, text:"Roman Empire", at:[13,39], size:14 },
        { type:"label", style:"region", text:"Parthia", at:[45,34], size:10 },
        { type:"label", style:"water", text:"Mediterranean", at:[13,33.6], size:9 }
      ], legend:{position:"bottom-left", columns:2} },
      { caption:"Frontier systems: walls, camps and mobile war", share:0.42, extent:[[-6,30],[43,56]], projection:"mercator", layers:[
        { id:"fort-zone", type:"area", tier:"influence", colour:G, pad:1.0, legend:"Fort and road zones", around:[[6,50],[8.5,49.6],[11,49.5],[12.1,49],[16,48.2],[20,46.4],[28,44],[36,36],[40,34.7]] },
        { id:"german-limes", type:"boundary", style:"wall", colour:"#111111", side:"right", legend:"German-Raetian limes", path:[[7.7,50.1],[9.0,49.8],[10.5,49.4],[10.2,48.9],[11.5,48.9],REGEN] },
        { id:"hadrian", type:"boundary", style:"wall", colour:"#111111", side:"left", legend:"Hadrian's Wall", path:[[-3.1,54.98],[-2.3,55.0],[-1.5,55.05],[-0.7,54.98]] },
        { id:"fort-mainz", type:"point", symbol:"fortress", at:MAINZ, name:"Mogontiacum", labelPos:"w", halo:"#f1c75b", legend:"Fort or legion camp" },
        { id:"fort-regensburg", type:"point", symbol:"fortress", at:REGEN, name:"Castra Regina", labelPos:"e", halo:"#85b86f" },
        { id:"fort-york", type:"point", symbol:"fortress", at:YORK, name:"Eboracum", labelPos:"e", halo:"#9bb6e8" },
        { id:"fort-dura", type:"point", symbol:"fortress", at:DURA, name:"Dura-Europos", labelPos:"e", halo:"#e58a56" },
        { id:"marcomanni", type:"arrow", colour:B, width:6, legend:"Danube wars, 167-180", path:[[15.5,49.5],[16.4,48.2],[14.5,45.3]] },
        { id:"parthian-war", type:"arrow", colour:P, width:6, legend:"Eastern war, 162-165", path:[[42.0,36.2],[39.6,35.2],DURA,ANT] },
        { id:"citizenship", type:"point", symbol:"treaty", at:ROME, name:"citizenship for free inhabitants", labelPos:"e", tag:{text:"212", colour:"#f1c75b"} },
        { id:"palmyra", type:"point", symbol:"port", at:PAL, name:"Palmyra", labelPos:"e" },
        { type:"label", style:"region", text:"frontier army", at:[13.0,49.7], size:8 },
        { type:"label", style:"region", text:"eastern caravan cities", at:[37,34], size:8 }
      ], legend:{position:"bottom-left", columns:2} }
    ], text:{ intro:"The high empire was not a motionless blob. It was a set of frontiers, roads, fort systems and provincial bargains that held together for two centuries and then began to strain under simultaneous wars.", sections:[
      { heading:"Expansion and limits", entries:[
        { date:"98-117", text:"Trajan added Dacia, Arabia and for a short time Armenia, Assyria and Mesopotamia. The empire reached its widest map, but the eastern conquests were hard to hold.", refs:["trajan-east","dacia","arabia","trajan-campaign","ctesiphon"] },
        { date:"117-138", text:"Hadrian gave up the far eastern conquests and made frontiers visible with walls, inspections and permanent garrisons.", refs:["hadrian","rhine-danube","euphrates"] },
        { date:"167-180", text:"Marcus Aurelius spent much of his reign on the Danube. The frontier was a zone of war, forts and negotiated movement.", refs:["marcomanni","fort-zone"] }
      ] },
      { heading:"A wider Roman world", entries:[
        { date:"208-211", text:"Septimius Severus campaigned in Britain and died at York, a reminder that emperors still had to appear at the edges of the system.", refs:["severus-britain","york","fort-york"] },
        { date:"212", text:"Caracalla extended citizenship to the empire's free inhabitants. The political map and the tax map moved closer together.", refs:["citizenship","empire-100"] },
        { text:"The limes were not only walls. They were road corridors, fort lattices and market edges from Britain to Syria.", refs:["german-limes","fort-mainz","fort-regensburg","fort-dura","palmyra"] }
      ] }
    ] }, sources:["General Roman imperial chronology; approximate areas", "Coastlines and rivers: Natural Earth 1:50m"] };
})();
