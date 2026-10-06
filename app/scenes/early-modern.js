// Chapter scenes for the Age of Reason / early modern period.
window.SCENES = window.SCENES || {};
(function () {
  const CAN="#b22d2d", EUR="#7a5a8c", IDEAS="#6b6b6b", FRA="#d8a84f", EMP="#6b8c3f", OTT="#8c6d3f", BRIT="#2f7f86", NORTH="#b36b2e", ROAD="#7b6848";
  (window.SCENE_ACTORS = window.SCENE_ACTORS || {})["early-modern"] = { [CAN]:"Canada and Atlantic North America", [EUR]:"Central Europe", [IDEAS]:"Ideas and science", [FRA]:"France", [EMP]:"German princes", [OTT]:"Austria and Ottomans", [BRIT]:"Britain and maritime powers", [NORTH]:"Sweden, Russia and Baltic", [ROAD]:"Routes and campaigns" };
  window.SCENES["early-modern"] = {
    "ch-early-canada-atlantic": { caption:"New France and Hudson Bay sit inside Indigenous diplomacy and Atlantic rivalry.", bbox:[[-96,29],[-52,58]], layers:[
      {type:"route",style:"dotted",colour:ROAD,name:"St Lawrence corridor",path:[[-65.52,44.71],[-71.21,46.81],[-72.54,46.34],[-73.56,45.50]]},
      {type:"area",name:"Great Lakes diplomacy",tier:"influence",colour:CAN,around:[[-84,42],[-80,46],[-75,45],[-73,42.5],[-79,41.8]],labelAt:[-78,44]},
      {type:"point",symbol:"port",name:"Port-Royal",at:[-65.52,44.71]}, {type:"point",symbol:"port",name:"Quebec",at:[-71.21,46.81]}, {type:"point",symbol:"port",name:"Montreal",at:[-73.56,45.50]}, {type:"point",symbol:"port",name:"Hudson Bay",at:[-92.46,57.00]}
    ], terms:[{t:"Port-Royal",wiki:"Port-Royal (Acadia)"},{t:"Quebec",wiki:"Quebec City"},{t:"Montreal",wiki:"Montreal"},{t:"Hudson Bay",wiki:"Hudson Bay"},{t:"Great Peace of Montreal",wiki:"Great Peace of Montreal"}]},
    "ch-thirty-years-war-westphalia": { caption:"Bohemia, Sweden and France turn the Empire into Europe's central battlefield.", bbox:[[2,46],[21,55]], layers:[
      {type:"area",name:"Imperial Catholic base",tier:"core",colour:EUR,around:[[6,47],[9,50],[13,50],[17,49],[17,46],[11,46]],labelAt:[12,48]},
      {type:"route",style:"dashed",colour:NORTH,name:"Swedish advance",path:[[13.92,54.05],[11.63,52.13],[12.45,51.45],[8.27,49.99],[12.14,51.25]]},
      {type:"route",style:"dashed",colour:FRA,name:"French-Swedish pressure",path:[[2.35,48.86],[7.75,48.58],[7.58,48.03],[10.49,48.85]]},
      {type:"point",symbol:"insurrection",name:"Prague",at:[14.42,50.08]}, {type:"point",symbol:"battle",name:"White Mountain",at:[14.32,50.08]}, {type:"point",symbol:"battle",name:"Breitenfeld",at:[12.45,51.45]}, {type:"point",symbol:"treaty",name:"Westphalia",at:[7.63,51.96]}
    ], terms:[{t:"Defenestration of Prague",wiki:"Defenestrations of Prague"},{t:"White Mountain",wiki:"Battle of White Mountain"},{t:"Breitenfeld",wiki:"Battle of Breitenfeld (1631)"},{t:"Peace of Westphalia",wiki:"Peace of Westphalia"}]},
    "ch-baroque-enlightenment": { caption:"Courts, churches, academies and print carry the Baroque and Enlightenment across western Europe.", bbox:[[-5,40],[16,53]], layers:[
      {type:"route",style:"dotted",colour:IDEAS,name:"print and academy corridor",path:[[12.5,41.9],[2.35,48.86],[-0.13,51.51],[0.12,52.20],[13.4,52.5]]},
      {type:"point",symbol:"university",name:"Galileo",at:[11.25,43.77]}, {type:"point",symbol:"university",name:"Newton",at:[0.12,52.20]}, {type:"point",symbol:"large-city",name:"Paris",at:[2.35,48.86]}, {type:"point",symbol:"large-city",name:"London",at:[-0.13,51.51]}
    ], terms:[{t:"Baroque",wiki:"Baroque"},{t:"Galileo",wiki:"Galileo Galilei"},{t:"Newton",wiki:"Isaac Newton"},{t:"Voltaire",wiki:"Voltaire"},{t:"Encyclopedie",wiki:"Encyclopédie"}]},
    "ch-louis-xiv-france": { caption:"Richelieu and Louis XIV turn France toward state power and the Rhine frontier.", bbox:[[-5.5,41.5],[9.2,52.6]], layers:[
      {type:"area",name:"France",tier:"core",colour:FRA,around:[[-5,43],[-2,49],[3,51],[6,48],[4,44],[0,42.5]],labelAt:[2,47]},
      {type:"boundary",style:"dashdot",colour:ROAD,name:"Vauban fortress belt",path:[[3,50.6],[6.13,49.61],[6.18,49.12],[7.75,48.58],[6.03,47.24]]},
      {type:"route",style:"dashed",colour:FRA,name:"Rhine pressure",path:[[2.35,48.86],[6.18,49.12],[7.75,48.58],[8.67,49.40]]},
      {type:"point",symbol:"fortress",name:"La Rochelle",at:[-1.15,46.16]}, {type:"point",symbol:"capital",name:"Versailles",at:[2.12,48.80]}, {type:"point",symbol:"fortress",name:"Strasbourg",at:[7.75,48.58]}, {type:"point",symbol:"treaty",name:"Rijswijk",at:[4.33,52.04]}
    ], terms:[{t:"Richelieu",wiki:"Cardinal Richelieu"},{t:"Louis XIV",wiki:"Louis XIV"},{t:"Versailles",wiki:"Palace of Versailles"},{t:"Colbert",wiki:"Jean-Baptiste Colbert"},{t:"Vauban",wiki:"Sébastien Le Prestre de Vauban"}]},
    "ch-german-princes-after-westphalia": { caption:"After Westphalia, German power works through estates, princely courts and Brandenburg-Prussia's army.", bbox:[[5,47],[23,55]], layers:[
      {type:"area",name:"Brandenburg-Prussia",tier:"core",colour:EMP,around:[[6.5,50.5],[9,52.7],[13,53.5],[21,54.8],[22,53.6],[14,52.2],[10,51]],labelAt:[14,52.8]},
      {type:"area",name:"Bavaria",tier:"influence",colour:FRA,around:[[10,47.5],[11.5,49.2],[13.2,49.2],[13.5,47.8]],labelAt:[12,48.3]},
      {type:"point",symbol:"treaty",name:"Regensburg",at:[12.10,49.02]}, {type:"point",symbol:"battle",name:"Fehrbellin",at:[12.77,52.81]}, {type:"point",symbol:"capital",name:"Berlin",at:[13.40,52.52]}, {type:"point",symbol:"capital",name:"Konigsberg",at:[20.51,54.71]}
    ], terms:[{t:"Permanent Diet",wiki:"Perpetual Diet of Regensburg"},{t:"Bavaria",wiki:"Electorate of Bavaria"},{t:"Saxony",wiki:"Electorate of Saxony"},{t:"Hanover",wiki:"Electorate of Hanover"},{t:"Brandenburg-Prussia",wiki:"Brandenburg-Prussia"}]},
    "ch-austria-ottoman-danube": { caption:"The Danube frontier moves from Ottoman Vienna to Habsburg Hungary and Passarowitz.", bbox:[[12,36],[31,50]], layers:[
      {type:"area",name:"Ottoman Balkans",tier:"core",colour:OTT,around:[[18,41],[20,45],[23,47],[28,45],[29,42],[24,41]],labelAt:[23,43.5]},
      {type:"area",name:"Habsburg Hungary",tier:"core",colour:FRA,around:[[15,46],[18,49],[23,48],[25,46],[23,45],[19,45]],labelAt:[20,47]},
      {type:"route",style:"dashed",colour:ROAD,name:"Holy League counteroffensive",path:[[16.37,48.21],[19.04,47.50],[20.46,44.81],[20.08,45.42]]},
      {type:"point",symbol:"fortress",name:"Vienna",at:[16.37,48.21]}, {type:"point",symbol:"fortress",name:"Buda",at:[19.04,47.50]}, {type:"point",symbol:"battle",name:"Zenta",at:[20.08,45.42]}, {type:"point",symbol:"treaty",name:"Passarowitz",at:[21.08,44.93]}
    ], terms:[{t:"Vienna",wiki:"Battle of Vienna"},{t:"Karlowitz",wiki:"Treaty of Karlowitz"},{t:"Prince Eugene",wiki:"Prince Eugene of Savoy"},{t:"Passarowitz",wiki:"Treaty of Passarowitz"},{t:"Belgrade",wiki:"Belgrade"}]},
    "ch-stuart-britain-revolution": { caption:"England's constitutional crisis becomes a maritime-fiscal state after revolution and union.", bbox:[[-11,49],[4,59]], layers:[
      {type:"area",name:"Royalist west and north",tier:"influence",colour:FRA,around:[[-6,50],[-4,55],[-1,56],[0,53],[-2,50]],labelAt:[-3,53]},
      {type:"area",name:"Parliamentary south-east",tier:"core",colour:BRIT,around:[[-1,50],[1,51],[1,53],[-1,54],[-3,52]],labelAt:[0,52]},
      {type:"route",style:"dashed",colour:ROAD,name:"William of Orange",path:[[4.90,52.37],[2,51],[-3.5,50.7],[-0.13,51.51]]},
      {type:"point",symbol:"capital",name:"London",at:[-0.13,51.51]}, {type:"point",symbol:"battle",name:"Naseby",at:[-1.0,52.4]}, {type:"point",symbol:"battle",name:"Boyne",at:[-6.42,53.72]}, {type:"point",symbol:"capital",name:"Westminster",at:[-0.13,51.50]}
    ], terms:[{t:"Charles I",wiki:"Charles I of England"},{t:"Cromwell",wiki:"Oliver Cromwell"},{t:"Glorious Revolution",wiki:"Glorious Revolution"},{t:"Bank of England",wiki:"Bank of England"},{t:"Union",wiki:"Acts of Union 1707"}]},
    "ch-spanish-succession-balance": { caption:"The Spanish Succession war makes balance of power a European and Atlantic principle.", bbox:[[-10,36],[18,54]], layers:[
      {type:"area",name:"Bourbon France and Spain",tier:"core",colour:FRA,around:[[-9,36],[-7,43],[-3,49],[3,51],[6,48],[3,42]],labelAt:[0,44]},
      {type:"route",style:"dashed",colour:BRIT,name:"Grand Alliance theatres",path:[[-0.13,51.51],[5.47,50.88],[10.59,48.63],[7.68,45.07],[-5.35,36.14]]},
      {type:"point",symbol:"battle",name:"Blenheim",at:[10.59,48.63]}, {type:"point",symbol:"battle",name:"Ramillies",at:[4.91,50.63]}, {type:"point",symbol:"fortress",name:"Gibraltar",at:[-5.35,36.14]}, {type:"point",symbol:"treaty",name:"Utrecht",at:[5.12,52.09]}
    ], terms:[{t:"War of the Spanish Succession",wiki:"War of the Spanish Succession"},{t:"Marlborough",wiki:"John Churchill, 1st Duke of Marlborough"},{t:"Prince Eugene",wiki:"Prince Eugene of Savoy"},{t:"Gibraltar",wiki:"Gibraltar"},{t:"Utrecht",wiki:"Treaty of Utrecht"}]},
    "ch-baltic-russia-sweden": { caption:"Swedish Baltic power gives way to Peter's Russian Baltic state.", bbox:[[5,46],[45,66]], layers:[
      {type:"area",name:"Swedish Baltic",tier:"core",colour:NORTH,around:[[13,55],[18,60],[26,60],[28,56],[22,54],[16,54]],labelAt:[21,57]},
      {type:"area",name:"Russia",tier:"influence",colour:EMP,around:[[28,55],[32,59],[41,60],[42,56],[36,52],[30,52]],labelAt:[36,56]},
      {type:"route",style:"dashed",colour:ROAD,name:"Charles XII campaign",path:[[28.19,59.38],[21.01,52.23],[30.52,50.45],[34.55,49.59],[29.48,46.83]]},
      {type:"point",symbol:"battle",name:"Narva",at:[28.19,59.38]}, {type:"point",symbol:"capital",name:"St Petersburg",at:[30.31,59.94]}, {type:"point",symbol:"battle",name:"Poltava",at:[34.55,49.59]}, {type:"point",symbol:"treaty",name:"Nystad",at:[23.42,60.80]}
    ], terms:[{t:"Sweden",wiki:"Swedish Empire"},{t:"Peter the Great",wiki:"Peter the Great"},{t:"Narva",wiki:"Battle of Narva (1700)"},{t:"Poltava",wiki:"Battle of Poltava"},{t:"Nystad",wiki:"Treaty of Nystad"}]}
  };
})();
