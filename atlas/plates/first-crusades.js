// First three crusades and the crusader states, round 7.
(function () {
  const CR="#c58b32", BYZ="#d66a4a", SEL="#6b8c3f", FAT="#8c5fb3", SEA="#5b78a8";
  const CLER=[3.08,45.78], VEZ=[18.42,43.86], CON=[28.98,41.01], NIC=[29.72,40.43], DOR=[30.52,39.78], ANT=[36.16,36.20], JER=[35.21,31.77], EDE=[38.79,37.16], TRI=[35.84,34.43], ACR=[35.08,32.92], HAT=[35.46,32.8], DAM=[36.31,33.51], TYE=[35.19,33.27], JAF=[34.75,32.05], SAL=[33.45,36.5];
  window.PLATES["first-crusades"] = { id:"first-crusades", title:"The First, Second and Third Crusades", head:"High Middle Ages / The Crusades", folio:"19", viewer:"medieval/1099/ch-crusades", figures:[
    { caption:"Routes of the First Crusade, 1096-99", share:0.5, extent:[[-6,28],[42,50]], projection:"conic", layers:[
      {id:"byzantium",type:"area",tier:"core",colour:BYZ,legend:"Byzantium",polygon:[[18.2,39.0],[19.4,40.8],[20.8,42.2],[23.0,42.8],[25.8,42.4],[28.8,41.9],[30.3,40.7],[30.2,38.7],[28.4,37.3],[25.5,37.1],[23.6,36.6],[22.2,37.4],[21.0,39.0]],smooth:false},
      {id:"seljuk",type:"area",tier:"core",colour:SEL,legend:"Seljuk Turks in Anatolia and Syria",polygon:[[29.2,38.0],[31.5,40.7],[35.6,40.5],[39.4,38.4],[40.8,36.3],[39.0,35.0],[36.6,34.2],[35.4,35.8],[33.4,36.7],[30.8,36.3]],smooth:true},
      {id:"fatimid",type:"area",tier:"core",colour:FAT,legend:"Fatimid Palestine and Egypt",polygon:[[29.2,30.4],[31.5,31.8],[34.9,32.2],[36.1,31.3],[35.0,29.4],[32.2,28.8],[29.7,29.2]],smooth:true},
      {id:"danube-route",type:"arrow",colour:CR,width:3.2,legend:"Overland route via Rhine-Danube",path:[CLER,[7.5,49.8],[11.5,48.8],[16.4,48.2],[20.5,44.8],[23.3,42.7],[26,42.3],CON,NIC,DOR,ANT,JER]},
      {id:"italy-sea",type:"arrow",colour:SEA,width:2.8,legend:"Italy-Durazzo and Via Egnatia",path:[[12.5,41.9],[16.87,41.12],[19.45,41.32],[22,41.0],[25,40.8],CON]},
      {id:"first-label",type:"label",text:"FIRST CRUSADE",at:[17,46.2],size:10,colour:CR},
      {id:"nicaea",type:"point",symbol:"siege",at:NIC,name:"Nicaea",labelPos:"ne",tag:{text:"1097",colour:"#f1c75b"}}, {id:"dorylaeum",type:"point",symbol:"battle",at:DOR,name:"Dorylaeum",labelPos:"s",tag:{text:"1097",colour:"#e8806a"}}, {id:"antioch",type:"point",symbol:"siege",at:ANT,name:"Antioch",tag:{text:"1098",colour:"#f1c75b"}}, {id:"jerusalem",type:"point",symbol:"siege",at:JER,name:"Jerusalem",tag:{text:"1099",colour:"#f1c75b"}}, {id:"constantinople",type:"point",symbol:"capital",at:CON,name:"Constantinople",labelPos:"sw"}
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
      {date:"1095-99", text:"Urban II's call at Clermont sends western armies overland by the Rhine-Danube route and by southern Italy to Durazzo, then through Byzantium and Anatolia. Jerusalem is taken from Fatimid control in 1099. Nicaea, Dorylaeum and Antioch mark the hard road to Jerusalem.", refs:["danube-route","italy-sea","constantinople","nicaea","dorylaeum","antioch","jerusalem","fatimid"]},
      {date:"1099", text:"Jerusalem falls and the crusaders build states at Jerusalem, Antioch, Edessa and Tripoli, using castles and ports more than deep inland control.", refs:["jerusalem-kingdom","antioch-principality","edessa","tripoli"]}
    ]},
    {heading:"Holding the coast", entries:[
      {date:"1144-49", text:"The fall of Edessa triggers the Second Crusade, but the expedition fails around Damascus.", refs:["edessa2","damascus"]},
      {date:"1187-92", text:"Saladin defeats the kingdom at Hattin and takes Jerusalem. The Third Crusade retakes Acre and a coastal strip but not the city.", refs:["saladin","hattin","third-crusade","acre","jerusalem2"]}
    ]}
  ]}, sources:["Penguin Atlas Vol. 1 pp. 150-153", "Approximate campaign routes and crusader-state fields; coastlines and rivers: Natural Earth 1:50m"] };
})();
