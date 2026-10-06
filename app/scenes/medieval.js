// Chapter scenes for the medieval period. Borders are approximate story fields, not surveyed lines.
window.SCENES = window.SCENES || {};
(function () {
  const FR="#7a5a8c", BYZ="#d66a4a", IS="#6b8c3f", STEP="#6b6b6b", RUS="#9a6a38", ENG="#8c3b3b", VAND="#2f7f86", GOTH="#5b78a8", NORM="#c58b32", ASIA="#b36b2e", ROAD="#7b6848";
  (window.SCENE_ACTORS = window.SCENE_ACTORS || {}).medieval = { [FR]:"Franks and Carolingians", [BYZ]:"Byzantium", [IS]:"Islamic caliphates", [STEP]:"Steppe peoples", [RUS]:"Kievan Rus", [ENG]:"England and Wessex", [VAND]:"Vandals", [GOTH]:"Goths and successor kingdoms", [NORM]:"Normans and Vikings", [ASIA]:"Sui, Tang and Japan", [ROAD]:"Trade and river routes" };
  window.SCENES.medieval = {
    "ch-western-europe": { caption:"Western Europe after Rome: successor kingdoms, Frankish expansion, Viking routes and England. Borders are approximate.", bbox:[[-10,35],[25,57]], layers:[
      {type:"area",name:"Frankish core",tier:"core",colour:FR,around:[[1,49],[4,50.5],[7,49],[7,46],[3,45],[-1,47]],labelAt:[4,48.5]},
      {type:"area",name:"Carolingian reach",tier:"conquest",from:"0751",colour:FR,around:[[-4,43],[2,50],[9,53],[15,49],[14,43],[8,41],[2,43]],labelAt:[7,47]},
      {type:"area",name:"Anglo-Saxon England",tier:"influence",colour:ENG,around:[[-5,50],[-1,55],[1,54],[0,51],[-3,50]],labelAt:[-2,52]},
      {type:"arrow",name:"Viking and Norman routes",colour:NORM,path:[[10,59],[2,52],[1.1,49.4],[-1.3,51.1],[0.49,50.9]],labelAt:[3,53]},
      {type:"point",symbol:"capital",name:"Paris",at:[2.35,48.86]}, {type:"point",symbol:"capital",name:"Rome",at:[12.5,41.9]}, {type:"point",symbol:"battle",name:"Hastings",year:"1066",at:[0.49,50.91]},
      {type:"label",style:"water",text:"North Sea",at:[3,55.5]}
    ], terms:[{t:"Rome",wiki:"Ancient Rome"},{t:"Franks",wiki:"Franks"},{t:"Charlemagne",wiki:"Charlemagne"},{t:"England",wiki:"England in the Middle Ages"},{t:"Norman",wiki:"Norman Conquest"}]},
    "ch-barbarian-kingdoms": { caption:"The western empire becomes successor kingdoms around AD 500. Borders are approximate.", bbox:[[-10,30],[35,57]], layers:[
      {type:"area",name:"Franks",tier:"core",colour:FR,around:[[0,48],[4,51],[7,50],[6,47],[2,46]],labelAt:[4,49]},
      {type:"area",name:"Visigoths",tier:"core",colour:GOTH,around:[[-8,38],[-2,43],[4,43],[3,39],[-2,37]],labelAt:[-2,40]},
      {type:"area",name:"Ostrogothic Italy",tier:"core",colour:GOTH,pattern:"hatch",around:[[8,45],[12,46],[16,43],[17,40],[15,37],[12,40],[10,43]],labelAt:[13,42]},
      {type:"area",name:"Vandals",tier:"core",colour:VAND,around:[[8,34],[12,37],[17,36],[15,32],[9,32]],labelAt:[12,35]},
      {type:"area",name:"Byzantium",tier:"influence",colour:BYZ,around:[[20,40],[28,44],[34,40],[32,34],[23,35]],labelAt:[29,38]},
      {type:"arrow",name:"Gothic route",colour:GOTH,path:[[24,45],[18,44],[13,42],[4,43],[-1,43]],labelAt:[12,45]},
      {type:"point",symbol:"battle",name:"Soissons",year:"486",at:[3.32,49.38]}, {type:"point",symbol:"capital",name:"Ravenna",at:[12.2,44.42]}, {type:"point",symbol:"capital",name:"Carthage",at:[10.31,36.85]}, {type:"point",symbol:"large-city",name:"Toulouse",at:[1.44,43.6]}
    ], terms:[{t:"successor kingdoms",wiki:"Barbarian kingdoms"},{t:"Franks",wiki:"Franks"},{t:"Visigoths",wiki:"Visigoths"},{t:"Ostrogoths",wiki:"Ostrogoths"},{t:"Vandals",wiki:"Vandals"},{t:"bishops",wiki:"Bishop"}]},
    "ch-franks-carolingians": { caption:"Frankish power grows, then Charlemagne's empire is partitioned. Verdun is drawn as a partition boundary, not a modern border.", bbox:[[-6,36],[18,55]], layers:[
      {type:"area",name:"Clovis's Franks",tier:"core",colour:FR,around:[[0,48],[4,51],[7,50],[5,46],[1,46]],labelAt:[4,48]},
      {type:"area",name:"Charlemagne's empire",tier:"conquest",from:"0774",colour:FR,around:[[-4,43],[2,50],[8,53],[15,50],[14,44],[9,41],[2,43]],labelAt:[6,47]},
      {type:"boundary",style:"partition",colour:"#5f4b8b",width:3,from:"0843",name:"Verdun western line",path:[[4.7,52],[4.8,49],[4.5,47],[4.9,45],[5.4,43]]},
      {type:"boundary",style:"partition",colour:"#5f4b8b",width:3,from:"0843",name:"Verdun eastern line",path:[[8.4,53],[8.0,50],[8.3,47],[9.2,44],[10.2,42]]},
      {type:"point",symbol:"capital",name:"Aachen",year:"Palace",at:[6.08,50.78]}, {type:"point",symbol:"battle",name:"Tours",year:"732",at:[0.68,47.39]}, {type:"point",symbol:"treaty",name:"Verdun",year:"843",at:[5.38,49.16]}, {type:"point",symbol:"capital",name:"Rome",at:[12.5,41.9]}
    ], terms:[{t:"Franks",wiki:"Franks"},{t:"Clovis",wiki:"Clovis I"},{t:"Carolingians",wiki:"Carolingian dynasty"},{t:"Charlemagne",wiki:"Charlemagne"},{t:"Treaty of Verdun",wiki:"Treaty of Verdun"}]},
    "ch-england-to-1066": { caption:"England moves from Anglo-Saxon kingdoms through Viking pressure to Norman conquest. Borders are approximate.", bbox:[[-8,49],[3,59]], layers:[
      {type:"area",name:"Wessex",tier:"core",colour:ENG,around:[[-3,50],[-1,51.5],[-1.4,52.3],[-3.5,51.8],[-4,50.6]],labelAt:[-2.5,51.2]},
      {type:"area",name:"Danelaw",tier:"influence",colour:NORM,around:[[-1,52],[1,54.5],[-1,55.5],[-3,54],[-2.5,52.5]],labelAt:[-1.2,54]},
      {type:"arrow",name:"Norman invasion",colour:NORM,path:[[1.1,49.4],[0.2,50.5],[0.49,50.91]],labelAt:[0.6,50.2]},
      {type:"point",symbol:"capital",name:"Winchester",at:[-1.32,51.06]}, {type:"point",symbol:"battle",name:"Stamford Bridge",year:"1066",at:[-0.92,53.99]}, {type:"point",symbol:"battle",name:"Hastings",year:"1066",at:[0.49,50.91]}
    ], terms:[{t:"Anglo-Saxon",wiki:"Anglo-Saxons"},{t:"Viking",wiki:"Viking Age"},{t:"Wessex",wiki:"Wessex"},{t:"Hastings",wiki:"Battle of Hastings"}]},
    "ch-normans-vikings": { caption:"Viking movement becomes settlement and state-building from the Atlantic to the Black Sea.", bbox:[[-25,35],[35,65]], layers:[
      {type:"arrow",name:"North Atlantic",colour:NORM,path:[[10,59],[-8,56],[-19,64],[-45,61]],labelAt:[-12,59]}, {type:"arrow",name:"Seine and Normandy",colour:NORM,path:[[10,59],[3,52],[1.1,49.44]],labelAt:[4,53]},
      {type:"arrow",name:"Volga-Dnieper routes",colour:NORM,path:[[18,59],[25,55],[30.52,50.45],[28.98,41.01]],labelAt:[25,53]},
      {type:"point",symbol:"port",name:"Novgorod",at:[31.28,58.52]}, {type:"point",symbol:"capital",name:"Kiev",at:[30.52,50.45]}, {type:"point",symbol:"capital",name:"Constantinople",at:[28.98,41.01]}, {type:"point",symbol:"large-city",name:"Rouen",at:[1.1,49.44]}
    ], terms:[{t:"Viking",wiki:"Viking Age"},{t:"Scandinavians",wiki:"Norsemen"},{t:"Normandy",wiki:"Normandy"},{t:"Volga",wiki:"Volga trade route"}]},
    "ch-byzantium": { caption:"Byzantium holds the eastern Roman centre while losing and recovering ground around the Mediterranean.", bbox:[[10,28],[45,47]], layers:[
      {type:"area",name:"Byzantine core",tier:"core",colour:BYZ,around:[[20,40],[26,44],[34,41],[34,36],[25,35]],labelAt:[29,39]},
      {type:"area",name:"Justinian's west",tier:"conquest",from:"0533",until:"0600",colour:BYZ,around:[[8,34],[13,44],[18,42],[17,36],[12,35]],labelAt:[13,39]},
      {type:"arrow",name:"Arab conquests",colour:IS,from:"0636",path:[[39,25],[36,33],[35.95,32.8],[31.23,30.04]],labelAt:[35,31]},
      {type:"point",symbol:"capital",name:"Constantinople",at:[28.98,41.01]}, {type:"point",symbol:"battle",name:"Yarmuk",year:"636",at:[35.95,32.8]}, {type:"point",symbol:"fortress",name:"Constantinople siege",year:"717",at:[28.98,41.01],dy:22}
    ], terms:[{t:"eastern empire",wiki:"Byzantine Empire"},{t:"Constantinople",wiki:"Constantinople"},{t:"Justinian",wiki:"Justinian I"},{t:"Kievan Rus",wiki:"Kievan Rus'"}]},
    "ch-justinian-reconquest": { caption:"Justinian's armies retake Africa and Italy, but the reconquest leaves a thin imperial map.", bbox:[[-8,28],[35,47]], layers:[
      {type:"area",name:"Eastern Roman Empire",tier:"core",colour:BYZ,around:[[20,40],[27,44],[35,39],[31,34],[23,35]],labelAt:[29,39]},
      {type:"area",name:"Africa restored",tier:"conquest",from:"0533",colour:BYZ,around:[[8,34],[13,37],[17,36],[15,32],[9,32]],labelAt:[12,35]},
      {type:"area",name:"Italy restored",tier:"conquest",from:"0540",colour:BYZ,around:[[10,45],[13,45],[16,42],[16,38],[13,40],[11,43]],labelAt:[13,42]},
      {type:"arrow",name:"Belisarius to Carthage",colour:BYZ,path:[[28.98,41.01],[20,37],[10.31,36.85]],labelAt:[19,38]}, {type:"arrow",name:"Gothic War",colour:BYZ,path:[[10.31,36.85],[15.08,37.51],[12.5,41.9],[12.2,44.42]],labelAt:[13,39]},
      {type:"point",symbol:"capital",name:"Constantinople",at:[28.98,41.01]}, {type:"point",symbol:"capital",name:"Carthage",year:"533",at:[10.31,36.85]}, {type:"point",symbol:"capital",name:"Ravenna",year:"540",at:[12.2,44.42]}, {type:"point",symbol:"battle",name:"Taginae",year:"552",at:[12.77,43.35]}
    ], terms:[{t:"Justinian",wiki:"Justinian I"},{t:"Belisarius",wiki:"Belisarius"},{t:"Vandal",wiki:"Vandalic War"},{t:"Ostrogothic",wiki:"Ostrogothic Kingdom"},{t:"Lombards",wiki:"Lombards"}]},
    "ch-early-islam": { caption:"The caliphate expands from Arabia to Syria, Egypt, Iran, North Africa and Spain.", bbox:[[-10,15],[75,45]], layers:[
      {type:"area",name:"Arabia",tier:"core",colour:IS,around:[[35,18],[45,30],[55,25],[50,16],[40,16]],labelAt:[45,23]},
      {type:"area",name:"Umayyad Caliphate",tier:"conquest",from:"0661",colour:IS,around:[[-8,31],[10,36],[31,30],[42,36],[58,35],[70,32],[64,24],[38,20],[20,27]],labelAt:[35,31]},
      {type:"arrow",name:"to Syria and Egypt",colour:IS,path:[[39.83,21.42],[35.95,32.8],[31.23,30.04]],labelAt:[35,29]}, {type:"arrow",name:"to Spain",colour:IS,path:[[31.23,30.04],[10,33],[-5.35,36.14],[-4.78,37.88]],labelAt:[11,34]},
      {type:"point",symbol:"large-city",name:"Mecca",at:[39.83,21.42]}, {type:"point",symbol:"capital",name:"Damascus",at:[36.31,33.51]}, {type:"point",symbol:"capital",name:"Baghdad",year:"762",at:[44.37,33.31]}, {type:"point",symbol:"capital",name:"Cordoba",at:[-4.78,37.88]}
    ], terms:[{t:"Islam",wiki:"Islam"},{t:"Arabia",wiki:"Arabian Peninsula"},{t:"Umayyads",wiki:"Umayyad Caliphate"},{t:"Abbasids",wiki:"Abbasid Caliphate"},{t:"Baghdad",wiki:"Baghdad"},{t:"Maritime Asia",wiki:"Maritime Silk Road"}]},
    "ch-steppe-rus": { caption:"Steppe powers press Europe and Byzantium while Rus grows along north-south river routes.", bbox:[[5,38],[65,58]], layers:[
      {type:"area",name:"Steppe zone",tier:"influence",colour:STEP,around:[[20,48],[35,51],[55,50],[60,45],[42,43],[26,44]],labelAt:[42,47]},
      {type:"route",style:"dotted",colour:ROAD,name:"Baltic-Black Sea route",path:[[31.3,58.5],[30.52,50.45],[32,46],[28.98,41.01]]},
      {type:"arrow",name:"Magyars",colour:STEP,path:[[45,47],[30,47],[19,47]],labelAt:[31,48]},
      {type:"point",symbol:"capital",name:"Kiev",at:[30.52,50.45]}, {type:"point",symbol:"capital",name:"Constantinople",at:[28.98,41.01]}, {type:"point",symbol:"large-city",name:"Novgorod",at:[31.28,58.52]}
    ], terms:[{t:"steppe",wiki:"Eurasian Steppe"},{t:"Huns",wiki:"Huns"},{t:"Khazars",wiki:"Khazars"},{t:"Kievan Rus",wiki:"Kievan Rus'"},{t:"Russia",wiki:"History of Russia"}]},
    "ch-kievan-rus": { caption:"Kievan Rus sits on the Dnieper route between Scandinavia and Byzantium.", bbox:[[20,43],[45,57]], layers:[
      {type:"area",name:"Kievan Rus",tier:"core",colour:RUS,around:[[25,51],[30,55],[36,54],[36,49],[31,48],[27,49]],labelAt:[31,51]},
      {type:"route",style:"dotted",colour:ROAD,name:"Dnieper route",path:[[31.28,58.52],[30.52,50.45],[32,46],[28.98,41.01]]},
      {type:"arrow",name:"Conversion from Byzantium",colour:BYZ,path:[[28.98,41.01],[31,46],[30.52,50.45]],labelAt:[31,46.5]},
      {type:"point",symbol:"capital",name:"Kiev",year:"882",at:[30.52,50.45]}, {type:"point",symbol:"large-city",name:"Novgorod",at:[31.28,58.52]}, {type:"point",symbol:"capital",name:"Constantinople",at:[28.98,41.01]}
    ], terms:[{t:"Kievan Rus",wiki:"Kievan Rus'"},{t:"Kiev",wiki:"Kyiv"},{t:"Dnieper",wiki:"Dnieper"},{t:"Byzantium",wiki:"Byzantine Empire"},{t:"Muscovy",wiki:"Grand Duchy of Moscow"}]},
    "ch-medieval-asia": { caption:"Sui-Tang China, Japan and Central Asia belong on the same medieval map as Europe and Islam.", bbox:[[65,5],[145,55]], layers:[
      {type:"area",name:"Tang China",tier:"core",colour:ASIA,around:[[95,25],[105,35],[116,40],[123,34],[118,25],[105,22]],labelAt:[111,32]},
      {type:"area",name:"Japan",tier:"influence",colour:ASIA,around:[[130,31],[139,39],[143,35],[136,31]],labelAt:[137,35]},
      {type:"route",style:"dotted",colour:ROAD,name:"Central Asian routes",path:[[108.94,34.26],[96,40],[82,42],[71.9,42.52],[44.37,33.31]]},
      {type:"point",symbol:"capital",name:"Chang'an",at:[108.94,34.26]}, {type:"point",symbol:"battle",name:"Talas",year:"751",at:[71.9,42.52]}, {type:"point",symbol:"capital",name:"Nara",at:[135.8,34.68]}, {type:"point",symbol:"capital",name:"Heian-kyo",at:[135.76,35.01]}
    ], terms:[{t:"China",wiki:"History of China"},{t:"Sui",wiki:"Sui dynasty"},{t:"Tang",wiki:"Tang dynasty"},{t:"Japan",wiki:"History of Japan"},{t:"Central Asia",wiki:"History of Central Asia"},{t:"Mongols",wiki:"Mongol Empire"}]}
  };
})();
