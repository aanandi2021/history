// Muscovy, Lithuania and the end of steppe tribute, round 10.
(function () {
  const MOS="#6b8c3f", LIT="#8b8450", HORDE="#d6b44a", POL="#7a5a8c", OTT="#b36b2e", LINE="#5f4b8b";
  const MOSCOW=[37.62,55.75], NOV=[31.28,58.52], TVE=[35.91,56.86], KAZ=[49.12,55.79], SAR=[46.03,51.53], KUL=[38.7,53.65], UGRA=[35.0,54.8], KIEV=[30.52,50.45], VIL=[25.28,54.69], CRI=[34.1,44.95];
  window.PLATES["muscovy-lithuania-steppe"] = { id:"muscovy-lithuania-steppe", title:"Muscovy, Lithuania and the steppe", head:"Late Middle Ages / Rus to Russia", folio:"27", viewer:"medieval/1480/ch-muscovy-lithuania-steppe", figures:[
    {caption:"Moscow among Rus, Lithuania and the Horde, c. 1380", share:0.5, extent:[[20,43],[56,61]], projection:"conic", layers:[
      {id:"lithuania-1380",type:"area",tier:"core",colour:LIT,legend:"Lithuania and Rus lands",polygon:[[22,54],[27,56.5],[32,55.7],[36,52.5],[34,49.0],[29,48.2],[25,51.0]],smooth:false},
      {id:"moscow-1380",type:"area",tier:"core",colour:MOS,legend:"Grand Duchy of Moscow",polygon:[[35.0,54.0],[38.5,56.5],[41.5,56.0],[41.0,54.0],[38.0,53.0]],smooth:false},
      {id:"horde",type:"area",tier:"influence",colour:HORDE,legend:"Golden Horde tribute world",polygon:[[33,47],[42,51],[55,53],[55,46],[46,44],[38,44]],smooth:false},
      {id:"tribute",type:"route",style:"dashed",weight:2,colour:HORDE,legend:"Tribute and diplomacy",path:[MOSCOW,[42,53],SAR]},
      {id:"kulikovo-route",type:"arrow",colour:LINE,width:3,legend:"Kulikovo campaign",path:[MOSCOW,[38.2,54.0],KUL],label:"1380"},
      {id:"moscow",type:"point",symbol:"capital",at:MOSCOW,name:"Moscow"}, {id:"novgorod",type:"point",symbol:"large-city",at:NOV,name:"Novgorod"}, {id:"tver",type:"point",symbol:"large-city",at:TVE,name:"Tver"}, {id:"vilnius",type:"point",symbol:"capital",at:VIL,name:"Vilnius"}, {id:"kulikovo",type:"point",symbol:"battle",at:KUL,name:"Kulikovo",tag:{text:"1380",colour:"#e8806a"}}
    ], legend:{position:"bottom-left",columns:1}},
    {caption:"Ivan III and the end of the Tatar yoke, 1462-1505", share:0.5, extent:[[20,43],[56,61]], projection:"conic", layers:[
      {id:"muscovy-1462",type:"area",tier:"core",colour:MOS,legend:"Muscovy by 1462",polygon:[[35,54],[38,58],[43,58],[44,54],[40,52.5],[36,53]],smooth:false,phaseLabel:"1462",phaseAt:[39.1,54.8]},
      {id:"muscovy-1505",type:"area",tier:"conquest",colour:MOS,legend:"Added under Ivan III",polygon:[[28.5,56.8],[31.3,58.7],[38,59.5],[46,58.5],[49,55.8],[45,52.2],[38,52.5],[34,54.2]],smooth:false,phaseLabel:"1505",phaseAt:[43.5,56.7]},
      {id:"lithuania-1500",type:"area",tier:"influence",colour:LIT,legend:"Lithuania-Poland",polygon:[[22,54],[27,56.5],[33,55.2],[35,52.0],[32,49.0],[27,48.2],[23,51.0]],smooth:false},
      {id:"kazan-crimea",type:"area",tier:"influence",colour:HORDE,legend:"Successor khanates",polygon:[[44,53],[50,56],[54,55],[52,51],[46,50]],smooth:false},
      {id:"crimea",type:"area",tier:"influence",colour:OTT,legend:"Crimea and Ottoman steppe pressure",polygon:[[31,44.3],[35,45.6],[38,44.6],[36,43.3],[33,43.1]],smooth:false},
      {id:"ugra",type:"arrow",colour:LINE,width:3.2,legend:"Stand on the Ugra",path:[[48,55],UGRA,MOSCOW],label:"1480"},
      {id:"novgorod2",type:"point",symbol:"large-city",at:NOV,name:"Novgorod",tag:{text:"1478",colour:"#f1c75b"}}, {id:"moscow2",type:"point",symbol:"capital",at:MOSCOW,name:"Moscow",labelPos:"se"}, {id:"ugra-pt",type:"point",symbol:"battle",at:UGRA,name:"Ugra",tag:{text:"1480",colour:"#e8806a"}}, {id:"kazan",type:"point",symbol:"capital",at:KAZ,name:"Kazan"}, {id:"kiev",type:"point",symbol:"capital",at:KIEV,name:"Kiev"}, {id:"crimea-pt",type:"point",symbol:"capital",at:CRI,name:"Crimea"}
    ], legend:{position:"bottom-left",columns:1}}
  ], text:{intro:"The medieval Rus story closes by turning toward the Russia dataset: Moscow grows from one tribute-paying principality into the power that absorbs Novgorod and faces down the Horde.", sections:[
    {heading:"Before Moscow wins", entries:[{date:"1300s", text:"Lithuania holds many western Rus lands, while Moscow, Tver and Novgorod bargain under the Golden Horde's tribute system.", refs:["lithuania-1380","moscow-1380","horde","tribute","moscow","novgorod","tver","vilnius"]},{date:"1380", text:"Kulikovo gives Moscow a victory story, but it does not yet end Horde authority.", refs:["kulikovo-route","kulikovo"]}]},
    {heading:"Ivan III", entries:[{date:"1478", text:"Ivan III absorbs Novgorod, taking a rich northern republic into Muscovy.", refs:["muscovy-1462","muscovy-1505","novgorod2","moscow2","kiev"]},{date:"1480", text:"The stand on the Ugra is remembered as the end of the Tatar yoke: a hinge from medieval Rus into early modern Russia.", refs:["ugra","ugra-pt","kazan-crimea","kazan","crimea","crimea-pt"]}]}
  ]}, sources:["Penguin Atlas Vol. 1 pp. 196-201", "Approximate Rus, Lithuanian and steppe fields; coastlines and rivers: Natural Earth 1:50m"] };
})();
