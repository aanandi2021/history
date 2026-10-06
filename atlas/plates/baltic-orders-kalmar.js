// Baltic unions and Teutonic frontier, round 10.
(function () {
  const NOR="#8b8450", SWE="#b36b2e", DEN="#c58b32", TEU="#b8b650", POL="#7a5a8c", LIT="#6b8c3f", HAN="#5b78a8", LINE="#4f3b2a";
  const KAL=[16.36,56.66], MAR=[19.03,54.04], TAN=[18.60,54.36], VIS=[18.65,54.35], RIG=[24.11,56.95], REV=[24.75,59.44], NOV=[31.28,58.52], GRU=[18.75,53.49];
  window.PLATES["baltic-orders-kalmar"] = { id:"baltic-orders-kalmar", title:"Baltic unions and the Teutonic frontier", head:"Late Middle Ages / Baltic and Scandinavia", folio:"26", viewer:"medieval/1410/ch-baltic-orders-kalmar", figures:[
    {caption:"The Baltic states around the Kalmar Union, c. 1400", share:0.5, extent:[[4,52],[32,62]], projection:"conic", layers:[
      {id:"denmark",type:"area",tier:"core",colour:DEN,legend:"Denmark",polygon:[[8.0,54.4],[10.2,55.8],[12.9,56.1],[13.1,54.8],[11.2,54.4]],smooth:false},
      {id:"norway",type:"area",tier:"influence",colour:NOR,legend:"Norway",polygon:[[5.0,57.6],[8.5,61.3],[12.0,61.2],[10.8,58.0],[8.0,56.7]],smooth:false},
      {id:"sweden",type:"area",tier:"core",colour:SWE,legend:"Sweden",polygon:[[11.2,55.2],[14.0,58.5],[18.8,61.0],[23.2,60.6],[21.8,56.4],[17.0,55.0]],smooth:false},
      {id:"teutonic-prussia",type:"area",tier:"core",colour:TEU,legend:"Teutonic Order and Livonia",polygon:[[14.0,53.0],[16.7,54.4],[19.2,54.7],[21.0,54.3],[20.5,53.4],[17.8,53.1]],smooth:false},
      {id:"livonia",type:"area",tier:"core",colour:TEU,polygon:[[21.0,56.0],[24.1,58.2],[28.3,58.9],[28.0,56.5],[25.2,55.6]],smooth:false},
      {id:"hansa",type:"route",style:"dotted",weight:3,colour:HAN,legend:"Hanseatic sea road",path:[[10.7,53.9],VIS,TAN,RIG,REV,NOV]},
      {id:"union",type:"arrow",colour:LINE,width:3.2,legend:"Kalmar Union, 1397",path:[[10.75,59.9],KAL,[12.6,55.7]],label:"1397"},
      {id:"kalmar",type:"point",symbol:"treaty",at:KAL,name:"Kalmar",tag:{text:"1397",colour:"#f1c75b"}}, {id:"marienburg",type:"point",symbol:"castle",at:MAR,name:"Marienburg"}, {id:"danzig",type:"point",symbol:"port",at:TAN,name:"Danzig"}, {id:"riga",type:"point",symbol:"port",at:RIG,name:"Riga"}, {id:"reval",type:"point",symbol:"port",at:REV,name:"Reval"},
      {id:"scania",type:"point",symbol:"port",at:[12.85,55.99],name:"Scania fairs",labelPos:"s"}
    ], legend:{position:"bottom-left",columns:1}},
    {caption:"The Teutonic Knights, Lithuania and Poland, 1226-1410", share:0.5, extent:[[13,49.4],[32,58.8]], projection:"conic", layers:[
      {id:"poland",type:"area",tier:"core",colour:POL,legend:"Kingdom of Poland",polygon:[[14.3,50.7],[16.4,52.3],[18.7,53.1],[21.0,52.2],[21.0,50.4],[18.1,49.8]],smooth:false},
      {id:"lithuania",type:"area",tier:"influence",colour:LIT,legend:"Lithuania",polygon:[[20.0,52.5],[23.8,55.5],[29.0,56.4],[31.0,54.2],[27.0,51.0],[22.0,51.1]],smooth:false},
      {id:"order",type:"area",tier:"conquest",colour:TEU,legend:"Teutonic and Livonian orders",polygon:[[15.4,53.0],[18.0,54.5],[21.2,55.0],[25.0,57.8],[28.2,58.0],[28.0,56.2],[24.0,55.0],[21.0,54.2],[18.0,53.0]],smooth:false},
      {id:"order-march",type:"arrow",colour:LINE,width:3,legend:"Order expansion",path:[[18.6,53.4],MAR,[21.1,55.0],RIG],label:"1226-1309"},
      {id:"pol-lit",type:"arrow",colour:LIT,width:3,legend:"Polish-Lithuanian union",path:[[25.3,54.7],[24.9,54.9],[21.0,52.2]],label:"1386"},
      {id:"grunwald",type:"point",symbol:"battle",at:GRU,name:"Grunwald",tag:{text:"1410",colour:"#e8806a"}}, {id:"krewo",type:"point",symbol:"treaty",at:[25.28,54.31],name:"Krewo",tag:{text:"1385",colour:"#f1c75b"}}, {id:"vilnius",type:"point",symbol:"capital",at:[25.28,54.69],name:"Vilnius"}, {id:"krakow",type:"point",symbol:"capital",at:[19.94,50.06],name:"Krakow",labelPos:"n"}, {id:"marienburg2",type:"point",symbol:"castle",at:MAR,name:"Marienburg"}
    ], legend:{position:"bottom-left",columns:1}}
  ], text:{intro:"The Baltic is a political sea: Scandinavian crowns, German merchants, crusading orders, Poland, Lithuania and Novgorod all meet there.", sections:[
    {heading:"Union and trade", entries:[{date:"1397", text:"The Kalmar Union links Denmark, Norway and Sweden under one crown, but merchants and nobles keep pulling the Baltic apart.", refs:["denmark","norway","sweden","union","kalmar"]},{date:"1200s-1400s", text:"Hanseatic ports make the Baltic a commercial system from Lubeck and Danzig to Riga, Reval and Novgorod.", refs:["hansa","danzig","riga","reval"]}]},
    {heading:"Crusading frontier", entries:[{date:"1226-1309", text:"The Teutonic Order builds a state in Prussia and Livonia, using crusading language on a Baltic frontier.", refs:["order","order-march","marienburg2"]},{date:"1385-1410", text:"Poland and Lithuania join dynastically, then defeat the Order at Grunwald/Tannenberg. That changes the balance near Rus and future Muscovy.", refs:["poland","lithuania","pol-lit","krewo","grunwald"]}]}
  ]}, sources:["Penguin Atlas Vol. 1 pp. 194-195", "Approximate Baltic political fields; coastlines and rivers: Natural Earth 1:50m"] };
})();
