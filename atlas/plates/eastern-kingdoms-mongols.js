// Poland, Hungary, Kievan Rus and the Mongol shock, round 8.
(function () {
  const POL="#8fb36a", HUN="#d8a84f", RUS="#9a6a38", MON="#6b6b6b", GER="#7b93a4", LINE="#5f4b8b";
  const KIEV=[30.52,50.45], NOV=[31.28,58.52], KRA=[19.94,50.06], GNI=[17.03,52.54], ESZ=[18.74,47.79], BUDA=[19.04,47.5], LEGN=[16.16,51.21], SAJO=[20.8,48.1], PRAG=[14.42,50.08], MOS=[37.62,55.75];
  window.PLATES["eastern-kingdoms-mongols"] = { id:"eastern-kingdoms-mongols", title:"Poland, Hungary, Rus and the Mongol shock", head:"High Middle Ages / Eastern Europe", folio:"22", viewer:"medieval/1241/ch-eastern-kingdoms", figures:[
    { caption:"New Christian kingdoms and Rus before 1200", share:0.5, extent:[[10,44],[42,60]], projection:"conic", layers:[
      {id:"poland",type:"area",tier:"core",colour:POL,legend:"Piast Poland",polygon:[[14.8,51.0],[15.4,52.2],[15.1,53.3],[16.3,54.4],[18.2,54.8],[19.5,54.4],[20.7,54.2],[22.1,53.5],[23.4,52.4],[22.8,51.3],[21.4,50.5],[19.6,49.8],[18.2,49.8],[16.9,50.4]],smooth:false},
      {id:"hungary",type:"area",tier:"core",colour:HUN,legend:"Arpad Hungary and Croatia",polygon:[[14.1,45.0],[15.5,46.2],[16.7,47.4],[18.7,48.4],[21.0,48.9],[23.2,48.4],[25.2,47.2],[24.6,45.8],[22.5,45.1],[20.2,45.0],[18.0,44.6],[16.0,44.0]],smooth:false},
      {id:"bohemia",type:"area",tier:"influence",colour:GER,legend:"Bohemia within the Empire",polygon:[[12.3,48.8],[13.4,49.8],[14.8,50.3],[16.3,50.2],[17.2,49.5],[16.4,48.8],[14.8,48.5],[13.3,48.5]],smooth:false},
      {id:"kievan-rus",type:"area",tier:"core",colour:RUS,legend:"Kievan Rus principalities",polygon:[[26.6,49.3],[27.5,51.8],[28.9,54.4],[30.8,58.3],[33.8,58.9],[36.8,57.5],[39.0,55.6],[40.5,52.8],[39.7,50.3],[37.4,48.7],[34.6,47.8],[31.5,48.2],[29.0,48.7]],smooth:false},
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
