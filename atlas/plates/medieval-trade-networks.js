// Hanseatic, Venetian and Genoese trade networks, round 9.
(function () {
  const HAN="#6f8f5f", VEN="#c58b32", GEN="#5b78a8", GOODS="#8c5fb3", STEP="#9a6a38";
  const LUB=[10.69,53.87], HAM=[9.99,53.55], BRU=[3.22,51.21], LON=[-0.13,51.51], BER=[5.32,60.39], NOV=[31.28,58.52], VIS=[18.65,54.35], RIG=[24.11,56.95];
  const VENICE=[12.33,45.44], GENOA=[8.93,44.41], ALEX=[29.92,31.2], CON=[28.98,41.01], CAFFA=[34.1,45.03], TRE=[39.72,41.0], TANA=[39.7,47.2], BEIR=[35.5,33.89];
  window.PLATES["medieval-trade-networks"] = { id:"medieval-trade-networks", title:"Hanseatic and Italian trade networks", head:"Late Middle Ages / Trade and towns", folio:"24", viewer:"medieval/1350/ch-medieval-trade-networks", figures:[
    { caption:"The Hanseatic League and the Baltic-North Sea system", share:0.5, extent:[[-6,50],[34,61]], projection:"conic", layers:[
      {id:"hansa-core",type:"area",tier:"influence",colour:HAN,legend:"Hanseatic trading zone",polygon:[[7,53],[10.7,53.9],[14,54.5],[18.7,54.4],[24.1,56.9],[31.3,58.5],[27,55],[18,53],[10,52.5]],smooth:false},
      {id:"lubeck-bruges",type:"route",style:"dotted",weight:4,colour:HAN,legend:"Major Hansa sea routes",path:[NOV,RIG,VIS,LUB,HAM,BRU,LON]},
      {id:"bergen",type:"route",style:"dotted",weight:3,colour:HAN,path:[LUB,[8,56],BER]},
      {id:"novgorod-road",type:"route",style:"dashed",weight:2,colour:STEP,legend:"Furs, wax and eastern goods",path:[NOV,[27,57],[24.1,56.95],VIS,LUB]},
      {id:"lubeck",type:"point",symbol:"port",hub:5,hubColour:HAN,at:LUB,name:"Lubeck"}, {id:"bruges",type:"point",symbol:"port",hub:4,hubColour:HAN,at:BRU,name:"Bruges"},
      {id:"london",type:"point",symbol:"port",hub:3,hubColour:HAN,at:LON,name:"London"}, {id:"bergen-pt",type:"point",symbol:"port",hub:3,hubColour:HAN,at:BER,name:"Bergen"},
      {id:"novgorod",type:"point",symbol:"large-city",hub:4,hubColour:STEP,at:NOV,name:"Novgorod"}, {id:"riga",type:"point",symbol:"port",at:RIG,name:"Riga"}, {id:"danzig",type:"point",symbol:"port",at:VIS,name:"Danzig"}
    ], legend:{position:"bottom-left",columns:1}},
    { caption:"Venice, Genoa and the eastern Mediterranean", share:0.5, extent:[[-2,29],[43,48]], projection:"conic", layers:[
      {id:"venice-route",type:"route",style:"dotted",weight:4,colour:VEN,legend:"Venetian spice and luxury routes",path:[VENICE,CON,TRE,[41,42],TANA]},
      {id:"venice-egypt",type:"route",style:"dotted",weight:3,colour:VEN,path:[VENICE,[18,39],ALEX]},
      {id:"genoa-black-sea",type:"route",style:"dotted",weight:4,colour:GEN,legend:"Genoese Black Sea routes",path:[GENOA,[16,39],CON,CAFFA,TANA]},
      {id:"levant",type:"route",style:"dotted",weight:2,colour:GOODS,legend:"Levantine ports",path:[VENICE,[22,38],BEIR,ALEX]},
      {id:"venice",type:"point",symbol:"port",hub:5,hubColour:VEN,at:VENICE,name:"Venice"}, {id:"genoa",type:"point",symbol:"port",hub:5,hubColour:GEN,at:GENOA,name:"Genoa"},
      {id:"constantinople",type:"point",symbol:"capital",hub:4,hubColour:GOODS,at:CON,name:"Constantinople"}, {id:"caffa",type:"point",symbol:"port",hub:3,hubColour:GEN,at:CAFFA,name:"Caffa"},
      {id:"alexandria",type:"point",symbol:"port",hub:4,hubColour:VEN,at:ALEX,name:"Alexandria"}, {id:"beirut",type:"point",symbol:"port",at:BEIR,name:"Beirut"}, {id:"tana",type:"point",symbol:"port",at:TANA,name:"Tana"}
    ], legend:{position:"bottom-left",columns:1}}
  ], text:{intro:"Late medieval trade was a network of towns, ships, warehouses and privileges, not one road. Northern and Mediterranean systems met through fairs, credit and demand for eastern goods.", sections:[
    {heading:"Northern towns", entries:[
      {date:"1159-1358", text:"Lubeck becomes the leading Baltic town and the Hansa turns scattered privileges into a league of merchants and cities.", refs:["hansa-core","lubeck","lubeck-bruges"]},
      {date:"1200s-1400s", text:"Kontors at Novgorod, Bergen, Bruges and London connect furs, wax, fish, cloth and silver. Novgorod links this plate to the Rus and Russia story.", refs:["novgorod","bergen-pt","bruges","london","novgorod-road"]}
    ]},
    {heading:"Mediterranean rivals", entries:[
      {date:"1204-1453", text:"Venice and Genoa compete for islands, colonies and Black Sea access after the Fourth Crusade weakens Byzantium.", refs:["venice","genoa","constantinople","genoa-black-sea"]},
      {date:"1300s-1400s", text:"Alexandria and the Levant remain the western end of the spice trade before the Portuguese Atlantic turn.", refs:["alexandria","beirut","levant","venice-egypt"]}
    ]}
  ]}, sources:["Penguin Atlas Vol. 1 pp. 181-184", "Approximate sea routes and kontors; coastlines and rivers: Natural Earth 1:50m"] };
})();
