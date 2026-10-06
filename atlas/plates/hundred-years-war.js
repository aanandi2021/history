// France, England and the Hundred Years War, round 9.
(function () {
  const FR="#7a5a8c", ENG="#8c3b3b", BUR="#6b8c3f", LINE="#5f4b8b";
  const PAR=[2.35,48.86], CAL=[1.85,50.95], BOR=[-0.58,44.84], CRE=[1.88,50.26], POI=[0.34,46.58], AGI=[2.14,50.46], ORL=[1.91,47.9], REI=[4.03,49.26], ROU=[1.1,49.44], DOM=[5.4,47.1];
  window.PLATES["hundred-years-war"] = { id:"hundred-years-war", title:"France and the Hundred Years War", head:"Late Middle Ages / France and England", folio:"25", viewer:"medieval/1429/ch-hundred-years-war", figures:[
    { caption:"English claims and the treaty map, 1328-1360", share:0.5, extent:[[-6,42],[8,52]], projection:"mercator", layers:[
      {id:"france-north-1328",type:"area",tier:"core",colour:FR,legend:"French crown lands and vassals",polygon:[[-4.4,47.2],[-1.6,49.6],[2.5,51.0],[5.8,49.3],[5.3,46.2],[2.0,45.3],[-0.4,46.2]],smooth:false},
      {id:"france-east-1328",type:"area",tier:"core",colour:FR,polygon:[[1.5,43.4],[4.8,44.0],[5.3,46.2],[2.0,45.3],[-0.4,46.2],[-0.1,44.6]],smooth:false},
      {id:"english-1360",type:"area",tier:"conquest",colour:ENG,legend:"English-held lands after Bretigny",polygon:[[-1.7,43.3],[-1.5,45.2],[-1.6,46.5],[-1.0,47.3],[-0.2,47.9],[0.7,47.8],[1.5,46.7],[1.7,45.3],[1.2,44.2],[-0.2,43.4]],smooth:false},
      {id:"calais",type:"area",tier:"core",colour:ENG,legend:"Calais and Ponthieu",polygon:[[1.45,50.1],[2.2,51.1],[2.45,50.75],[2.0,49.9]],smooth:false},
      {id:"edward-claim",type:"arrow",colour:ENG,width:3.2,legend:"English campaigns",path:[[0.0,51.0],CRE,POI,BOR],label:"Crecy-Poitiers"},
      {id:"paris",type:"point",symbol:"capital",at:PAR,name:"Paris"}, {id:"crecy",type:"point",symbol:"battle",at:CRE,name:"Crecy",tag:{text:"1346",colour:"#e8806a"}},
      {id:"poitiers",type:"point",symbol:"battle",at:POI,name:"Poitiers",tag:{text:"1356",colour:"#e8806a"}}, {id:"bretigny",type:"point",symbol:"treaty",at:[1.55,48.45],name:"Bretigny",tag:{text:"1360",colour:"#f1c75b"}}, {id:"bordeaux",type:"point",symbol:"port",at:BOR,name:"Bordeaux"}
    ], legend:{position:"bottom-left",columns:1}},
    { caption:"Burgundy, Joan of Arc and the French recovery, 1415-1453", share:0.5, extent:[[-6,42],[8,52]], projection:"mercator", layers:[
      {id:"english-1429",type:"area",tier:"core",colour:ENG,legend:"English-held north, c. 1429",polygon:[[-1.5,48.7],[-0.6,49.7],[0.5,50.3],[2.4,50.4],[4.3,49.6],[4.7,48.5],[3.2,48.0],[1.8,48.2],[0.2,48.5]],smooth:false},
      {id:"english-guyenne-1429",type:"area",tier:"core",colour:ENG,legend:"Guyenne coastal strip",polygon:[[-1.7,43.4],[-1.4,44.9],[-1.0,45.3],[-0.4,45.0],[-0.4,43.7],[-1.0,43.3]],smooth:false},
      {id:"burgundy",type:"area",tier:"influence",colour:BUR,legend:"Burgundian duchy",polygon:[[3.5,46.5],[5.3,47.7],[5.1,48.5],[4.1,48.2],[3.5,47.2]],smooth:false},
      {id:"burgundy-low-countries",type:"area",tier:"influence",colour:BUR,legend:"Flanders, Artois and Low Countries",polygon:[[2.2,50.0],[3.0,51.4],[5.7,52.0],[6.9,50.6],[5.2,49.4],[3.0,49.6]],smooth:false},
      {id:"loire",type:"arrow",colour:FR,width:3,legend:"French recovery",path:[DOM,ORL,REI,ROU,[0.6,49.2],BOR],label:"1429-53"},
      {id:"agincourt",type:"point",symbol:"battle",at:AGI,name:"Agincourt",tag:{text:"1415",colour:"#e8806a"}},
      {id:"orleans",type:"point",symbol:"siege",at:ORL,name:"Orleans",tag:{text:"1429",colour:"#f1c75b"}}, {id:"reims",type:"point",symbol:"capital",at:REI,name:"Reims",tag:{text:"1429",colour:"#f1c75b"}},
      {id:"rouen",type:"point",symbol:"large-city",at:ROU,name:"Rouen",tag:{text:"1431",colour:"#e8806a"}}, {id:"castillon",type:"point",symbol:"battle",at:[-0.04,44.85],name:"Castillon",tag:{text:"1453",colour:"#e8806a"}}, {id:"paris2",type:"point",symbol:"capital",at:PAR,name:"Paris"}
    ], legend:{position:"bottom-left",columns:1}}
  ], text:{intro:"The Hundred Years War was a dynastic claim, a war over English lands in France and a test of whether the French crown could survive defeat.", sections:[
    {heading:"Treaty map", entries:[
      {date:"1328-1360", text:"A disputed succession lets English kings press a claim to France. Crecy and Poitiers force the Treaty of Bretigny, which expands English Aquitaine and confirms Calais.", refs:["france-north-1328","france-east-1328","english-1360","calais","edward-claim","crecy","poitiers","bretigny"]},
      {date:"1360", text:"Bordeaux and Guyenne matter because England is still a continental lord, not only an island kingdom.", refs:["bordeaux","english-1360"]}
    ]},
    {heading:"Recovery", entries:[
      {date:"1415-1429", text:"Agincourt and the Burgundian alliance put the French monarchy near collapse before Joan of Arc helps lift Orleans and brings Charles VII to Reims.", refs:["agincourt","burgundy","burgundy-low-countries","english-1429","english-guyenne-1429","orleans","reims"]},
      {date:"1431-1453", text:"Joan is executed at Rouen, but the French recovery continues. Castillon ends English rule in Guyenne, leaving Calais as the last major bridgehead.", refs:["rouen","loire","castillon","paris2"]}
    ]}
  ]}, sources:["Penguin Atlas Vol. 1 pp. 189-192", "Approximate campaign and control fields; coastlines and rivers: Natural Earth 1:50m"] };
})();
