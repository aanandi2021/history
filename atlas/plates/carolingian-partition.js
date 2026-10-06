// Charlemagne and the Treaty of Verdun, based on the round 6 Penguin Atlas spreads.
(function () {
  const FR="#7a5a8c", W="#c7836b", M="#c58b32", E="#7d8790", SAX="#9fb879", IT="#d66a4a";
  const AACH=[6.08,50.78], ROME=[12.5,41.9], VER=[5.38,49.16], TOURS=[0.68,47.39], RON=[-1.3,43.01], PAV=[9.16,45.18];
  window.PLATES["carolingian-partition"] = { id:"carolingian-partition", title:"Charlemagne's empire and the partition of 843", head:"Early Middle Ages / The Franks", folio:"14", viewer:"medieval/0843/ch-franks-carolingians", figures:[
    { caption:"The Empire of Charlemagne", share:0.48, extent:[[-7,40],[18,55]], projection:"mercator", layers:[
      {id:"frankish-core",type:"area",tier:"core",colour:FR,legend:"Frankish core",around:[[0,48],[4,51],[7,50],[7,46],[2,45],[-1,47]],labelAt:[4,48]},
      {id:"charlemagne-empire",type:"area",tier:"conquest",colour:FR,legend:"Charlemagne's empire",around:[[-4,43],[2,50],[8,53],[15,50],[14,44],[9,41],[2,43]],labelAt:[6,47]},
      {id:"saxony",type:"area",tier:"conquest",colour:SAX,legend:"Saxony conquered",around:[[7,51],[10,53],[13,52],[12,49],[8,49]],labelAt:[10,51]},
      {id:"lombard-italy",type:"area",tier:"conquest",colour:IT,legend:"Lombard Italy taken, 774",around:[[8,45],[12,46],[14,44],[14,41],[10,42]],labelAt:[11,44]},
      {id:"saxon-war",type:"arrow",colour:FR,width:5,legend:"Saxon wars",path:[AACH,[8.5,51.5],[11,52]],label:"Saxons"},
      {id:"italy-war",type:"arrow",colour:FR,width:5,legend:"Italian campaign",path:[AACH,PAV,ROME]},
      {id:"spanish-march",type:"arrow",colour:FR,width:4,legend:"Spanish March",path:[AACH,TOURS,RON]},
      {id:"aachen",type:"point",symbol:"capital",at:AACH,name:"Aachen",tag:{text:"palace",colour:"#f1c75b"}}, {id:"rome",type:"point",symbol:"capital",at:ROME,name:"Rome",tag:{text:"800",colour:"#f1c75b"}}, {id:"tours",type:"point",symbol:"battle",at:TOURS,name:"Tours",tag:{text:"732",colour:"#e8806a"}}, {id:"roncesvalles",type:"point",symbol:"battle",at:RON,name:"Roncesvalles",tag:{text:"778",colour:"#e8806a"}}
    ], legend:{position:"top-left",columns:2} },
    { caption:"The Treaty of Verdun, 843", share:0.52, extent:[[-7,40],[18,55]], projection:"mercator", layers:[
      {id:"west-francia",type:"area",tier:"core",colour:W,legend:"West Francia: Charles the Bald",around:[[-5,43],[1,49],[4,50],[4,45],[0,43]],labelAt:[0,47]},
      {id:"middle-kingdom",type:"area",tier:"core",colour:M,legend:"Middle kingdom: Lothar",around:[[4,42],[5,50],[7,53],[9,50],[8,45],[11,42],[7,41]],labelAt:[6.8,47]},
      {id:"east-francia",type:"area",tier:"core",colour:E,legend:"East Francia: Louis the German",around:[[8,47],[9,53],[15,51],[16,46],[12,44],[9,45]],labelAt:[12,49]},
      {id:"italy-843",type:"area",tier:"core",colour:IT,legend:"Imperial Italy",around:[[8,45],[12,45],[14,43],[14,41],[10,42]],labelAt:[11,43]},
      {id:"verdun-west",type:"boundary",style:"partition",colour:"#5f4b8b",width:3,legend:"Partition lines",path:[[4.4,52],[4.6,49],[4.4,47],[4.9,44],[5.5,42]]},
      {id:"verdun-east",type:"boundary",style:"partition",colour:"#5f4b8b",width:3,path:[[8.2,53],[8.0,50],[8.4,47],[9.2,44],[10.4,42]]},
      {id:"verdun",type:"point",symbol:"treaty",at:VER,name:"Verdun",tag:{text:"843",colour:"#f1c75b"},legend:"Treaty"}, {id:"paris",type:"point",symbol:"large-city",at:[2.35,48.86],name:"Paris"}, {id:"regensburg",type:"point",symbol:"large-city",at:[12.1,49.02],name:"Regensburg"}, {id:"rome2",type:"point",symbol:"capital",at:ROME,name:"Rome"},
      {type:"label",style:"note",text:"Partition, not modern borders",at:[1.5,42.2],size:8.5}
    ], legend:{position:"bottom-left",columns:2} }
  ], text:{ intro:"The Carolingian map is best read twice: first as Charlemagne's working empire, then as the family settlement that split it after Louis the Pious.", sections:[
    {heading:"Empire", entries:[
      {date:"751-800", text:"Pepin and Charlemagne turn Frankish military power into royal and then imperial authority, helped by Rome and the papacy.", refs:["frankish-core","charlemagne-empire","aachen","rome"]},
      {date:"772-804", text:"The Saxon wars pull the northeast into the empire; the Lombard crown and the Spanish March extend it south and southwest.", refs:["saxony","lombard-italy","saxon-war","italy-war","spanish-march","roncesvalles","tours"]}
    ]},
    {heading:"Partition", entries:[
      {date:"843", text:"Verdun divides the empire among Charles the Bald, Lothar and Louis the German. The middle kingdom is powerful on paper but hard to hold together.", refs:["west-francia","middle-kingdom","east-francia","italy-843","verdun","verdun-west","verdun-east"]},
      {date:"after 843", text:"The western and eastern kingdoms are more durable; the lands between them become the contested corridor of medieval Europe.", refs:["paris","regensburg","rome2"]}
    ]}
  ]}, sources:["Penguin Atlas Vol. 1 pp. 120-127", "Approximate partition fields; coastlines and rivers: Natural Earth 1:50m"] };
})();
