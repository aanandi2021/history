// Poland, Hungary, Kievan Rus and the Mongol shock, round 8.
(function () {
  const POL="#8fb36a", HUN="#d8a84f", RUS="#9a6a38", MON="#6b6b6b", GER="#7b93a4", LINE="#5f4b8b";
  const KIEV=[30.52,50.45], NOV=[31.28,58.52], KRA=[19.94,50.06], GNI=[17.03,52.54], ESZ=[18.74,47.79], BUDA=[19.04,47.5], LEGN=[16.16,51.21], SAJO=[20.8,48.1], PRAG=[14.42,50.08], MOS=[37.62,55.75];
  window.PLATES["eastern-kingdoms-mongols"] = { id:"eastern-kingdoms-mongols", title:"Poland, Hungary, Rus and the Mongol shock", head:"High Middle Ages / Eastern Europe", folio:"22", viewer:"medieval/1241/ch-eastern-kingdoms", figures:[
    { caption:"New Christian kingdoms and Rus before 1200", share:0.5, extent:[[10,44],[42,60]], projection:"conic", layers:[
      {id:"poland",type:"area",tier:"core",colour:POL,legend:"Piast Poland",polygon:[[16.7,50.2],[17.2,52.0],[18.0,54.0],[20.0,54.6],[22.8,54.0],[24.0,52.0],[23.0,50.2],[21.0,49.1],[19.2,49.0],[17.4,49.5]],smooth:true},
      {id:"hungary",type:"area",tier:"core",colour:HUN,legend:"Arpad Hungary and Croatia",polygon:[[14.0,44.2],[15.4,46.0],[17.6,48.0],[20.5,49.1],[23.5,48.7],[25.8,47.1],[24.2,45.3],[20.8,45.0],[18.0,44.5],[16.0,43.5]],smooth:true},
      {id:"bohemia",type:"area",tier:"influence",colour:GER,legend:"Bohemia within the Empire",polygon:[[12.4,48.5],[14.2,50.4],[16.8,50.8],[18.2,49.5],[16.5,48.4],[14.2,48.0]],smooth:true},
      {id:"kievan-rus",type:"area",tier:"core",colour:RUS,legend:"Kievan Rus principalities",polygon:[[27.0,49.0],[28.0,53.0],[30.8,58.8],[34.8,58.4],[38.8,56.5],[41.0,53.0],[40.0,49.2],[36.5,47.2],[32.0,48.0]],smooth:true},
      {id:"german-east",type:"arrow",colour:GER,width:2.8,legend:"German eastward settlement",path:[[10,51],[15,52],[20,53]],label:"eastward settlement"},
      {id:"kiev",type:"point",symbol:"capital",at:KIEV,name:"Kiev"}, {id:"novgorod",type:"point",symbol:"large-city",at:NOV,name:"Novgorod"}, {id:"krakow",type:"point",symbol:"capital",at:KRA,name:"Krakow"}, {id:"esztergom",type:"point",symbol:"capital",at:ESZ,name:"Esztergom"}, {id:"prague",type:"point",symbol:"capital",at:PRAG,name:"Prague"}
    ], legend:{position:"bottom-left",columns:1} },
    { caption:"The Mongol arrival, 1223-1241", share:0.5, extent:[[10,42],[55,58]], projection:"conic", layers:[
      {id:"golden-road",type:"route",style:"dotted",colour:LINE,legend:"Steppe and river routes",path:[[45,48],[37,50],[30.52,50.45],[24,50],[20,48]]},
      {id:"mongol-rus",type:"arrow",colour:MON,width:4,legend:"Mongol campaigns",path:[[50,48],[42,49],[37,50],[30.52,50.45]],label:"to Kiev"},
      {id:"mongol-poland",type:"arrow",colour:MON,width:3.5,path:[[37,50],[29,51],[22,51],LEGN],label:"to Legnica"},
      {id:"mongol-hungary",type:"arrow",colour:MON,width:3.5,path:[[37,50],[30,48],[25,47],SAJO],label:"to Sajo"},
      {id:"rus-fragment",type:"area",tier:"influence",colour:RUS,legend:"Fragmented Rus",polygon:[[27.8,49.2],[29.4,53.8],[33.0,57.0],[38.8,56.0],[42.2,52.0],[41.5,49.0],[36.2,47.3],[31.0,48.0]],smooth:true},
      {id:"kalka",type:"point",symbol:"battle",at:[38.5,47.1],name:"Kalka",tag:{text:"1223",colour:"#e8806a"}}, {id:"kiev-fall",type:"point",symbol:"destroyed",at:KIEV,name:"Kiev",tag:{text:"1240",colour:"#e8806a"}}, {id:"legnica",type:"point",symbol:"battle",at:LEGN,name:"Legnica",tag:{text:"1241",colour:"#e8806a"}}, {id:"sajo",type:"point",symbol:"battle",at:SAJO,name:"Sajo",tag:{text:"1241",colour:"#e8806a"}}, {id:"moscow",type:"point",symbol:"large-city",at:MOS,name:"Moscow",tag:{text:"future",colour:"#f1c75b"}}
    ], legend:{position:"bottom-left",columns:1} }
  ], text:{ intro:"Eastern Europe is not a blank edge of the medieval map: Poland, Hungary and Rus connect Latin, Orthodox and steppe worlds.", sections:[
    {heading:"Kingdoms", entries:[
      {date:"966-1001", text:"Poland and Hungary enter Latin Christianity with their own dynasties and church centres.", refs:["poland","hungary","bohemia","krakow","esztergom","german-east"]},
      {date:"1000s-1100s", text:"Kievan Rus remains an Orthodox river-route world between Novgorod, Kiev and Byzantium, but the principalities are increasingly divided.", refs:["kievan-rus","kiev","novgorod"]}
    ]},
    {heading:"Mongol shock", entries:[
      {date:"1223-40", text:"The Mongols first appear at Kalka, then take Kiev. This is the hinge into the later Russia period and the Golden Horde story.", refs:["mongol-rus","kalka","kiev-fall","rus-fragment"]},
      {date:"1241", text:"Mongol armies hit Poland at Legnica and Hungary at the Sajo River, tying Central Europe to the same shock that reshaped Rus.", refs:["mongol-poland","mongol-hungary","legnica","sajo"]},
      {date:"after 1240", text:"Moscow is still small here, but Mongol tribute and princely politics become the background for Muscovy's later rise.", refs:["moscow","golden-road"]}
    ]}
  ]}, sources:["Penguin Atlas Vol. 1 pp. 166-170", "Approximate kingdom fields and campaign routes; coastlines and rivers: Natural Earth 1:50m"] };
})();
