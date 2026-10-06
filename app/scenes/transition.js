// Chapter scenes for the Age of Transition. Areas are story fields, not surveyed borders.
window.SCENES = window.SCENES || {};
(function () {
  const EUR="#7a5a8c", OTT="#6b8c3f", ATL="#2f7f86", ASIA="#b36b2e", RUS="#6b6b6b", AM="#b22d2d", ROAD="#7b6848";
  (window.SCENE_ACTORS = window.SCENE_ACTORS || {}).transition = { [EUR]:"European powers", [OTT]:"Ottoman Empire", [ATL]:"Atlantic routes", [ASIA]:"Asian empires and ports", [RUS]:"Russia", [AM]:"American civilizations and Canada", [ROAD]:"Trade routes" };
  window.SCENES.transition = {
    "ch-transition-economy": { caption:"Around 1500, bankers, mines, ports and princes form a tighter European money web.", bbox:[[-12,33],[32,56]], layers:[
      {type:"area",name:"Habsburg-Burgundian money zone",tier:"influence",colour:EUR,around:[[2,50],[6,52],[11,50],[12,47],[7,46],[3,48]],labelAt:[7,49]},
      {type:"route",style:"dotted",colour:ROAD,name:"cloth, silver and credit routes",path:[[-9.14,38.72],[-5.99,37.39],[4.40,51.22],[10.90,48.37],[12.33,45.44]]},
      {type:"point",symbol:"port",name:"Lisbon",at:[-9.14,38.72]},{type:"point",symbol:"port",name:"Antwerp",at:[4.40,51.22]},{type:"point",symbol:"large-city",name:"Augsburg",at:[10.90,48.37]},{type:"point",symbol:"large-city",name:"Venice",at:[12.33,45.44]},{type:"point",symbol:"large-city",name:"Florence",at:[11.25,43.77]}
    ], terms:[{t:"Fuggers",wiki:"Fugger family"},{t:"Medici",wiki:"House of Medici"},{t:"Venice",wiki:"Republic of Venice"},{t:"Antwerp",wiki:"Antwerp"},{t:"Lisbon",wiki:"Lisbon"}]},
    "ch-voyages-discovery": { caption:"Portuguese and Spanish voyages make oceans into claimed imperial routes.", bbox:[[-95,-38],[125,55]], layers:[
      {type:"route",style:"dashed",colour:ATL,name:"Portuguese pilots",path:[[-9.14,38.72],[-23.6,15.1],[-1.35,5.08],[18.47,-34.36],[39.67,-4.05],[75.78,11.26]]},
      {type:"route",style:"dashed",colour:EUR,name:"Spanish expeditions",path:[[-5.99,37.39],[-74.47,24.05],[-99.13,19.43],[-79.9,-2.2],[-110,-15]]},
      {type:"boundary",style:"meridian",colour:"#5f4b8b",name:"Treaty of Tordesillas meridian",path:[[-46.6,-35],[-46.6,45]]},
      {type:"point",symbol:"port",name:"Lisbon",at:[-9.14,38.72]},{type:"point",symbol:"port",name:"Calicut",at:[75.78,11.26]},{type:"point",symbol:"treaty",name:"Tordesillas",at:[-5.0,41.5]},{type:"point",symbol:"large-city",name:"Tenochtitlan",at:[-99.13,19.43]},{type:"point",symbol:"port",name:"Quebec",at:[-71.21,46.81]}
    ], terms:[{t:"Portuguese",wiki:"Portuguese discoveries"},{t:"Spanish",wiki:"Spanish colonization of the Americas"},{t:"Treaty of Tordesillas",wiki:"Treaty of Tordesillas"},{t:"meridian",wiki:"Meridian (geography)"},{t:"local peoples",wiki:"Indigenous peoples of the Americas"}]},
    "ch-american-civilizations": { caption:"American civilizations before conquest: tribute, roads, city traditions and northern contact zones.", bbox:[[-118,-25],[-55,25]], layers:[
      {type:"area",name:"Aztec",tier:"core",colour:AM,around:[[-103,16],[-99,21],[-96,20],[-97,17],[-101,15]],labelAt:[-99,18.5]},
      {type:"area",name:"Maya",tier:"influence",colour:ASIA,around:[[-92,14],[-88,21],[-84,20],[-86,15]],labelAt:[-88,18]},
      {type:"area",name:"Inca",tier:"core",colour:EUR,around:[[-80,-4],[-76,1],[-72,-8],[-70,-18],[-73,-23],[-77,-14]],labelAt:[-74,-12]},
      {type:"area",name:"Chibcha",tier:"influence",colour:OTT,around:[[-75,4],[-73,7],[-71,5],[-73,3]],labelAt:[-73.5,5]},
      {type:"point",symbol:"capital",name:"Tenochtitlan",at:[-99.13,19.43]},{type:"point",symbol:"capital",name:"Cusco",at:[-71.97,-13.53]},{type:"point",symbol:"large-city",name:"Mayapan",at:[-89.46,20.63]},{type:"point",symbol:"large-city",name:"Bacata",at:[-74.08,4.71]}
    ], terms:[{t:"Aztec",wiki:"Aztec Empire"},{t:"Maya",wiki:"Maya civilization"},{t:"Chibcha",wiki:"Muisca Confederation"},{t:"Inca",wiki:"Inca Empire"}]},
    "ch-canada-contact": { caption:"Early Canada is a contact zone layered onto existing towns, fisheries and alliances.", bbox:[[-95,42],[-50,58]], layers:[
      {type:"area",name:"Wendat and Haudenosaunee country",tier:"influence",colour:AM,around:[[-80,43],[-77,45],[-75,44],[-76,42.5],[-79,42.7]],labelAt:[-77.5,44]},
      {type:"route",style:"dotted",colour:ROAD,name:"St Lawrence route",path:[[-64.48,48.83],[-71.21,46.81],[-73.56,45.50]]},
      {type:"point",symbol:"port",name:"Red Bay",at:[-56.43,51.73]},{type:"point",symbol:"large-city",name:"Stadacona",at:[-71.21,46.81]},{type:"point",symbol:"large-city",name:"Hochelaga",at:[-73.56,45.50]},{type:"point",symbol:"port",name:"Quebec",at:[-71.21,46.81]}
    ], terms:[{t:"Cabot",wiki:"John Cabot"},{t:"Cartier",wiki:"Jacques Cartier"},{t:"Basque whalers",wiki:"History of Basque whaling"},{t:"Champlain",wiki:"Samuel de Champlain"},{t:"Stadacona",wiki:"Stadacona"},{t:"Hochelaga",wiki:"Hochelaga"},{t:"Wendat",wiki:"Huron-Wendat Nation"},{t:"Haudenosaunee",wiki:"Iroquois"}]}
  };
})();
