// First three crusades and the crusader states, round 7.
(function () {
  const CR="#c58b32", BYZ="#d66a4a", SEL="#6b8c3f", FAT="#8c5fb3", SEA="#5b78a8";
  const CLER=[3.08,45.78], VEZ=[18.42,43.86], CON=[28.98,41.01], NIC=[29.72,40.43], DOR=[30.52,39.78], ANT=[36.16,36.20], JER=[35.21,31.77], EDE=[38.79,37.16], TRI=[35.84,34.43], ACR=[35.08,32.92], HAT=[35.46,32.8], DAM=[36.31,33.51], TYE=[35.19,33.27], JAF=[34.75,32.05], SAL=[33.45,36.5];
  window.PLATES["first-crusades"] = { id:"first-crusades", title:"The First, Second and Third Crusades", head:"High Middle Ages / The Crusades", folio:"19", viewer:"medieval/1099/ch-crusades", figures:[
    { caption:"Routes of the First Crusade, 1096-99", share:0.5, extent:[[-6,28],[42,50]], projection:"conic", layers:[
      {id:"byzantium",type:"area",clipToLand:true,tier:"core",colour:BYZ,legend:"Byzantium",polygon:[[19,39],[28,44],[35,41],[34,36],[26,35]],smooth:false},
      {id:"seljuk",type:"area",clipToLand:true,tier:"core",colour:SEL,legend:"Seljuk and Muslim powers",polygon:[[29,37],[36,42],[42,38],[41,31],[34,30],[30,34]],smooth:false},
      {id:"french-route",type:"arrow",colour:CR,width:3.2,legend:"Crusader routes",path:[CLER,[7,45],[13,44],VEZ,CON,NIC,DOR,ANT,JER],label:"First Crusade"},
      {id:"italy-sea",type:"arrow",colour:SEA,width:2.8,legend:"Sea crossing",path:[[12.5,41.9],[18,39],[25,38],CON],label:"to Constantinople"},
      {id:"nicaea",type:"point",symbol:"siege",at:NIC,name:"Nicaea",labelPos:"n",tag:{text:"1097",colour:"#f1c75b"}}, {id:"dorylaeum",type:"point",symbol:"battle",at:DOR,name:"Dorylaeum",labelPos:"s",tag:{text:"1097",colour:"#e8806a"}}, {id:"antioch",type:"point",symbol:"siege",at:ANT,name:"Antioch",tag:{text:"1098",colour:"#f1c75b"}}, {id:"jerusalem",type:"point",symbol:"siege",at:JER,name:"Jerusalem",tag:{text:"1099",colour:"#f1c75b"}}, {id:"constantinople",type:"point",symbol:"capital",at:CON,name:"Constantinople",labelPos:"w"}
    ], legend:{position:"bottom-left",columns:2} },
    { caption:"Crusader states, Saladin and the Third Crusade", share:0.5, extent:[[28,29],[40,38.5]], projection:"mercator", layers:[
      {id:"jerusalem-kingdom",type:"area",clipToLand:true,tier:"core",colour:CR,legend:"Kingdom of Jerusalem",polygon:[[34.5,31.0],[35.2,33.5],[36.2,33.2],[35.8,31.3],[35.1,30.7]],smooth:false},
      {id:"antioch-principality",type:"area",clipToLand:true,tier:"core",colour:CR,legend:"Northern crusader states",polygon:[[35.5,35.4],[36.8,37.2],[38.4,37.0],[37.5,35.6]],smooth:false},
      {id:"edessa",type:"area",clipToLand:true,tier:"core",colour:CR,pattern:"hatch",legend:"Edessa and Tripoli",polygon:[[37.2,36.5],[39.2,37.6],[39.8,36.2],[38.2,35.8]],smooth:false},
      {id:"tripoli",type:"area",clipToLand:true,tier:"core",colour:CR,pattern:"hatch",polygon:[[35.2,33.9],[36.1,34.8],[36.4,34.0],[35.6,33.5]],smooth:false},
      {id:"saladin",type:"area",clipToLand:true,tier:"conquest",colour:SEL,legend:"Saladin's Ayyubid power",polygon:[[30.0,31.0],[32.0,33.5],[36.5,34.2],[39.2,32.8],[37.0,29.8],[33.0,29.6]],smooth:false},
      {id:"hattin",type:"point",symbol:"battle",at:HAT,name:"Hattin",tag:{text:"1187",colour:"#e8806a"}},
      {id:"third-crusade",type:"arrow",colour:SEA,width:3,legend:"Third Crusade coast",path:[[32,36],ACR,TYE,JAF],label:"1191-92"},
      {id:"acre",type:"point",symbol:"siege",at:ACR,name:"Acre",tag:{text:"1191",colour:"#f1c75b"}}, {id:"jerusalem2",type:"point",symbol:"capital",at:JER,name:"Jerusalem"}, {id:"edessa2",type:"point",symbol:"fortress",at:EDE,name:"Edessa",tag:{text:"1144",colour:"#f1c75b"}}, {id:"antioch2",type:"point",symbol:"capital",at:ANT,name:"Antioch"}, {id:"damascus",type:"point",symbol:"large-city",at:DAM,name:"Damascus"}
    ], legend:{position:"bottom-left",columns:1} }
  ], text:{ intro:"The crusades began as armed pilgrimage and became a chain of small Latin states on an exposed Levantine coast.", sections:[
    {heading:"Taking Jerusalem", entries:[
      {date:"1095-99", text:"Urban II's call at Clermont sends western armies through Byzantium and Anatolia. Nicaea, Dorylaeum and Antioch mark the hard road to Jerusalem.", refs:["french-route","italy-sea","constantinople","nicaea","dorylaeum","antioch","jerusalem"]},
      {date:"1099", text:"Jerusalem falls and the crusaders build states at Jerusalem, Antioch, Edessa and Tripoli, using castles and ports more than deep inland control.", refs:["jerusalem-kingdom","antioch-principality","edessa","tripoli"]}
    ]},
    {heading:"Holding the coast", entries:[
      {date:"1144-49", text:"The fall of Edessa triggers the Second Crusade, but the expedition fails around Damascus.", refs:["edessa2","damascus"]},
      {date:"1187-92", text:"Saladin defeats the kingdom at Hattin and takes Jerusalem. The Third Crusade retakes Acre and a coastal strip but not the city.", refs:["saladin","hattin","third-crusade","acre","jerusalem2"]}
    ]}
  ]}, sources:["Penguin Atlas Vol. 1 pp. 150-153", "Approximate campaign routes and crusader-state fields; coastlines and rivers: Natural Earth 1:50m"] };
})();
