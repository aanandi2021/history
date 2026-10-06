// Charlemagne and the Treaty of Verdun, based on the round 6 Penguin Atlas spreads.
(function () {
  const FR="#7a5a8c", W="#cf8b65", M="#e0b04e", E="#7b93a4", SAX="#8fb36a", IT="#d66a4a", LINE="#5f4b8b";
  const AACH=[6.08,50.78], ROME=[12.5,41.9], VER=[5.38,49.16], TOURS=[0.68,47.39], RON=[-1.3,43.01], PAV=[9.16,45.18];
  const westEdge = [[4.35,52.8],[4.75,51.4],[5.75,50.4],[5.85,49.2],[5.55,48.2],[5.25,47.0],[4.85,45.8],[4.95,44.6],[5.25,43.5]];
  const eastEdge = [[8.55,53.4],[8.2,52.0],[7.8,50.8],[7.7,49.5],[8.0,48.2],[8.45,47.0],[8.85,45.8],[9.45,44.4],[10.1,42.8]];
  window.PLATES["carolingian-partition"] = { id:"carolingian-partition", title:"Charlemagne's empire and the partition of 843", head:"Early Middle Ages / The Franks", folio:"14", viewer:"medieval/0843/ch-franks-carolingians", figures:[
    { caption:"The Empire of Charlemagne", share:0.48, extent:[[-6,40],[18,55]], projection:"mercator", layers:[
      {id:"frankish-core",type:"area",clipToLand:true,tier:"core",colour:FR,legend:"Frankish core",polygon:[[0,46.5],[1.5,49.5],[4.5,51.0],[7.0,50.0],[6.7,47.2],[3.5,45.4]],smooth:false},
      {id:"charlemagne-empire",type:"area",clipToLand:true,tier:"conquest",colour:FR,legend:"Charlemagne's empire",polygon:[[-3.8,43.2],[-1.0,48.5],[2.5,51.5],[5.8,53.1],[9.0,53.4],[13.6,51.6],[14.8,48.5],[13.6,45.2],[12.3,42.2],[9.0,41.2],[5.0,42.5],[1.2,43.6]],smooth:false},
      {id:"saxony",type:"area",clipToLand:true,tier:"conquest",colour:SAX,legend:"Saxony conquered",polygon:[[7.0,50.0],[8.7,52.7],[12.8,52.1],[13.0,49.2],[9.1,48.9]],smooth:false},
      {id:"lombard-italy",type:"area",clipToLand:true,tier:"conquest",colour:IT,legend:"Lombard Italy taken, 774",polygon:[[7.4,45.3],[10.8,46.2],[13.6,44.0],[13.9,41.7],[12.3,40.7],[10.6,42.2],[8.8,43.8]],smooth:false},
      {id:"saxon-war",type:"arrow",colour:FR,width:5,legend:"Saxon wars",path:[AACH,[8.4,51.6],[11.2,51.9]],label:"Saxons"},
      {id:"italy-war",type:"arrow",colour:FR,width:5,legend:"Italian campaign",path:[AACH,[7.6,47.2],PAV,ROME]},
      {id:"spanish-march",type:"arrow",colour:FR,width:4,legend:"Spanish March to the Ebro",path:[AACH,[2.0,47.8],TOURS,RON,[0.5,41.5]]},
      {id:"aachen",type:"point",symbol:"capital",at:AACH,name:"Aachen",tag:{text:"palace",colour:"#f1c75b"}}, {id:"rome",type:"point",symbol:"capital",at:ROME,name:"Rome",tag:{text:"800",colour:"#f1c75b"}}, {id:"tours",type:"point",symbol:"battle",at:TOURS,name:"Tours",tag:{text:"732",colour:"#e8806a"}}, {id:"roncesvalles",type:"point",symbol:"battle",at:RON,name:"Roncesvalles",tag:{text:"778",colour:"#e8806a"}}
    ], legend:{position:"top-left",columns:2} },
    { caption:"The Treaty of Verdun, 843", share:0.52, extent:[[-7,40],[18,55]], projection:"mercator", layers:[
      {id:"west-francia",type:"area",clipToLand:true,edge:false,tier:"core",colour:W,legend:"West Francia: Charles the Bald",polygon:[[-5.8,42.6],[-5.0,48.8],[-1.0,51.0],[2.7,52.0],westEdge[0],...westEdge.slice(1),[3.6,43.0],[-1.2,42.0]],smooth:false},
      {id:"middle-kingdom",type:"area",clipToLand:true,edge:false,tier:"core",colour:M,legend:"Middle kingdom: Lothar",polygon:[westEdge[0],...westEdge.slice(1),[7.7,42.0],[9.0,41.4],[10.8,42.0],...eastEdge.slice().reverse(),[8.55,53.4]],smooth:false},
      {id:"east-francia",type:"area",clipToLand:true,edge:false,tier:"core",colour:E,legend:"East Francia: Louis the German",polygon:[eastEdge[0],...eastEdge.slice(1),[13.7,43.5],[16.0,46.0],[15.2,51.2],[12.0,53.1]],smooth:false},
      {id:"italy-lothar",type:"area",clipToLand:true,tier:"conquest",colour:M,pattern:"stripe",legend:"Lothar's Italy, north and centre",polygon:[[7.7,45.5],[10.8,46.1],[13.2,44.0],[13.8,41.8],[12.8,40.6],[11.4,41.2],[9.6,42.8],[8.2,44.0]],smooth:false},
      {id:"benevento",type:"area",clipToLand:true,tier:"influence",colour:"#8fb36a",legend:"Benevento and Byzantine south outside Lothar",polygon:[[13.0,41.2],[15.5,41.0],[16.2,39.0],[15.0,37.8],[13.5,39.3]],smooth:false},
      {id:"verdun-west",type:"boundary",style:"partition",colour:LINE,width:3,legend:"Partition lines",path:westEdge},
      {id:"verdun-east",type:"boundary",style:"partition",colour:LINE,width:3,path:eastEdge},
      {id:"verdun",type:"point",symbol:"treaty",at:VER,name:"Verdun",tag:{text:"843",colour:"#f1c75b"},legend:"Treaty"}, {id:"paris",type:"point",symbol:"large-city",at:[2.35,48.86],name:"Paris"}, {id:"regensburg",type:"point",symbol:"large-city",at:[12.1,49.02],name:"Regensburg"}, {id:"rome2",type:"point",symbol:"capital",at:ROME,name:"Rome"}
    ], legend:{position:"bottom-left",columns:2} }
  ], text:{ intro:"The Carolingian map is best read twice: first as Charlemagne's working empire, then as the family settlement that split it after Louis the Pious.", sections:[
    {heading:"Empire", entries:[
      {date:"751-800", text:"Pepin and Charlemagne turn Frankish military power into royal and then imperial authority, helped by Rome and the papacy.", refs:["frankish-core","charlemagne-empire","aachen","rome"]},
      {date:"772-804", text:"The Saxon wars pull the northeast into the empire; the Lombard crown and the Spanish March extend it south and southwest.", refs:["saxony","lombard-italy","saxon-war","italy-war","spanish-march","roncesvalles","tours"]}
    ]},
    {heading:"Partition", entries:[
      {date:"843", text:"Verdun divides the empire among Charles the Bald, Lothar and Louis the German. Lothar's middle kingdom runs from Frisia through Burgundy and Provence to Italy, which is why it is powerful on paper but hard to hold together.", refs:["west-francia","middle-kingdom","east-francia","italy-lothar","verdun","verdun-west","verdun-east"]},
      {date:"after 843", text:"The western and eastern kingdoms are more durable; southern Italy remains outside Lothar's direct share in Lombard and Byzantine hands.", refs:["paris","regensburg","rome2","benevento"]}
    ]}
  ]}, sources:["Penguin Atlas Vol. 1 pp. 120-127", "Approximate partition fields; coastlines and rivers: Natural Earth 1:50m"] };
})();
