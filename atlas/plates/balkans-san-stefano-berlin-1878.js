(function(){
 const OTT="#9a6a32", RUS="#6b8c3f", BUL="#3f8f5b", SER="#b36b2e", AUS="#d8a84f", BRIT="#2f5f93";
 const sanBul=[[22.4,44.2],[27.5,44.1],[28.6,43.7],[27.9,42.0],[26.6,41.6],[25.0,40.9],[23.8,40.4],[22.6,40.3],[20.6,40.9],[20.5,41.8],[21.6,42.4],[22.4,43.0],[22.4,44.2]];
 const rumelia=[[24.0,42.0],[27.8,42.0],[27.8,41.2],[25.5,40.6],[23.8,41.0],[24.0,42.0]];
 window.PLATES["balkans-san-stefano-berlin-1878"]={id:"balkans-san-stefano-berlin-1878",title:"The Balkans: San Stefano and Berlin, 1878",head:"National states / Balkans",folio:"80-83",viewer:"national/1878/ch-austria-hungary-balkans",figures:[{caption:"March 1878: San Stefano",share:0.5,extent:[[12,34],[35,49]],projection:"conic",layers:[
  {id:"ottoman-a",type:"area",hist:{year:1878,names:["Ottoman Empire"]},colour:OTT,tier:"influence",legend:"Ottoman Empire"},
  {id:"romania-a",type:"area",hist:{year:1880,names:["Romania"]},colour:SER,tier:"core",legend:"Romania"},
  {id:"serbia-a",type:"area",hist:{year:1880,names:["Serbia"]},colour:"#c78b48",tier:"core",legend:"Serbia"},
  {id:"montenegro-a",type:"area",hist:{year:1880,names:["Montenegro"]},colour:"#a86f3a",tier:"core",legend:"Montenegro"},
  {id:"greece-a",type:"area",hist:{year:1880,names:["Greece"]},colour:"#d0a76b",tier:"core",legend:"Greece"},
  {id:"san-bulgaria",type:"area",around:sanBul,clipToLand:true,pattern:"hatch",colour:BUL,legend:"San Stefano Bulgaria: Danube to Aegean, including Macedonia"},
  {id:"russian",type:"route",style:"road",weight:2.5,colour:RUS,legend:"Russian advance: Svishtov-Plevna-Shipka-Adrianople",path:[[25.35,43.62],[24.61,43.42],[25.32,42.75],[26.55,42.02],[26.56,41.68],[28.98,41.01]]},
  {id:"plevna",type:"point",symbol:"battle",at:[24.61,43.42],name:"Plevna"},
  {id:"shipka",type:"point",symbol:"battle",at:[25.32,42.75],name:"Shipka"},
  {id:"san",type:"point",symbol:"treaty",at:[28.98,41.01],name:"San Stefano",tag:{text:"Mar 1878",colour:"#f1c75b"}}
  ,{id:"romania-label",type:"point",symbol:"capital",at:[26.10,44.43],name:"Romania",labelPos:"e"}
  ,{id:"serbia-label",type:"point",symbol:"capital",at:[20.46,44.82],name:"Serbia",labelPos:"w"}
  ,{id:"montenegro-label",type:"point",symbol:"capital",at:[19.26,42.44],name:"Montenegro",labelPos:"w"}
  ,{id:"greece-label",type:"point",symbol:"capital",at:[23.73,37.98],name:"Greece",labelPos:"e"}
 ],legend:{position:"bottom-left",columns:1}},{caption:"July 1878: Berlin",share:0.5,extent:[[12,34],[35,49]],projection:"conic",layers:[
  {id:"ottoman-b",type:"area",hist:{year:1878,names:["Ottoman Empire"]},colour:OTT,tier:"influence",legend:"Ottoman Empire after Berlin"},
  {id:"austria",type:"area",hist:{year:1878,names:["Austria Hungary"]},colour:AUS,tier:"influence",legend:"Austria-Hungary"},
  {id:"bosnia",type:"area",hist:{year:1880,names:["Bosnia-Herzegovina"]},pattern:"hatch",colour:AUS,legend:"Bosnia-Herzegovina under Austrian occupation"},
  {id:"states",type:"area",hist:{year:1880,names:["Romania","Serbia","Montenegro","Bulgaria","Greece"]},colour:SER,tier:"core",legend:"Recognized or autonomous Balkan states"},
  {id:"rumelia",type:"area",around:rumelia,clipToLand:true,pattern:"crosshatch",colour:BUL,legend:"Eastern Rumelia separate from Bulgaria"},
  {id:"cyprus",type:"point",symbol:"port",at:[33.38,35.18],name:"Cyprus to Britain",labelPos:"w",tag:{text:"1878",colour:"#f1c75b"}},
  {id:"berlin",type:"point",symbol:"treaty",at:[13.40,52.52],name:"Berlin",tag:{text:"Jul 1878",colour:"#f1c75b"}},
  {id:"sofia",type:"point",symbol:"capital",at:[23.32,42.70],name:"Sofia",labelPos:"s"},
  {id:"belgrade",type:"point",symbol:"capital",at:[20.46,44.82],name:"Belgrade",labelPos:"w"},
  {id:"bucharest",type:"point",symbol:"capital",at:[26.10,44.43],name:"Bucharest",labelPos:"e"}
 ],legend:{position:"bottom-left",columns:1}} ],text:{intro:"The Balkan settlement is shown as the book's comparison: a large San Stefano Bulgaria and the smaller Berlin settlement with Bosnia occupied by Austria-Hungary and Eastern Rumelia separate.",sections:[{heading:"Settlement",entries:[{date:"March 1878",text:"Russian victory produces a large Bulgaria reaching toward the Aegean and Macedonia, while Serbia, Montenegro, Romania and Greece keep their own historical shapes inside the Ottoman frame.",refs:["ottoman-a","romania-a","serbia-a","montenegro-a","greece-a","san-bulgaria","russian","plevna","shipka","san","romania-label","serbia-label","montenegro-label","greece-label"]},{date:"July 1878",text:"Berlin recognizes or confirms Balkan states, shrinks Bulgaria, separates Eastern Rumelia, gives Bosnia-Herzegovina to Austrian occupation and Cyprus to Britain.",refs:["ottoman-b","austria","states","rumelia","bosnia","cyprus","berlin","sofia","belgrade","bucharest"]}]}]},sources:["Penguin Atlas Vol. 2 pp. 80-83"]};
})();
