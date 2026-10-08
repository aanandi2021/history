(function(){
 const AUS="#d8a84f", SER="#b36b2e", BUL="#3f8f5b", GRE="#4c78a8", OTT="#9a6a32", ALB="#8cae7a", WAR="#8c3b3b", ROAD="#5b4a3f";
 const ottEurope1908=[[19.0,42.6],[20.6,42.5],[22.5,42.3],[24.5,42.35],[28.9,42.2],[28.9,40.7],[26.3,40.4],[24.3,40.1],[22.4,39.7],[20.0,39.2],[19.0,40.4],[19.0,42.6]];
 const greece1908=[[19.5,39.95],[21.4,39.95],[23.6,40.1],[23.8,36.0],[19.5,36.0],[19.5,39.95]];
 const macedonia=[[20.7,42.4],[22.0,42.3],[23.4,42.0],[24.2,41.6],[23.8,40.8],[22.7,40.3],[21.5,40.5],[20.6,41.2],[20.7,42.4]];
 const southDobruja=[[27.4,44.2],[28.7,44.1],[28.7,43.6],[27.5,43.5],[27.4,44.2]];
 window.PLATES["balkan-crises-1908-1913"]={id:"balkan-crises-1908-1913",title:"The Balkan crises, 1908-1913",head:"Imperialism / Balkans",folio:"120-121",viewer:"imperial/1913/ch-balkan-crises",figures:[{caption:"1908: annexation crisis and Ottoman Europe",share:0.50,extent:[[12,35],[31,48]],projection:"conic",layers:[
  {id:"austria",type:"area",hist:{year:1900,names:["Austria Hungary"]},colour:AUS,tier:"influence",legend:"Austria-Hungary"},
  {id:"bosnia",type:"area",hist:{year:1900,names:["Bosnia-Herzegovina"]},pattern:"hatch",colour:AUS,legend:"Bosnia-Herzegovina annexed, 1908"},
  {id:"ottoman-1908",type:"area",hist:{year:1900,names:["Ottoman Empire"]},clipPolygon:ottEurope1908,colour:OTT,tier:"core",legend:"Ottoman Europe: Albania, Kosovo, Macedonia, Epirus and Thrace"},
  {id:"serbia-1908",type:"area",hist:{year:1900,names:["Serbia","Montenegro","Romania"]},colour:SER,tier:"core",legend:"Serbia, Montenegro, Romania before the Balkan Wars"},
  {id:"bulgaria-1908",type:"area",hist:{year:1900,names:["Bulgaria"]},colour:BUL,tier:"core",legend:"Bulgaria before the Balkan Wars"},
  {id:"greece-1908",type:"area",hist:{year:1900,names:["Greece"]},clipPolygon:greece1908,colour:GRE,tier:"core",legend:"Greece before Epirus and Macedonia"},
  {id:"sarajevo",type:"point",symbol:"treaty",at:[18.41,43.86],name:"Bosnia annexed",labelPos:"n",tag:{text:"1908",colour:"#f1c75b"}},
  {id:"belgrade",type:"point",symbol:"capital",at:[20.46,44.82],name:"Belgrade",labelPos:"e"},
  {id:"sofia-1908",type:"point",symbol:"capital",at:[23.32,42.70],name:"Sofia",labelPos:"s"},
  {id:"athens-1908",type:"point",symbol:"capital",at:[23.73,37.98],name:"Athens",labelPos:"e"},
  {id:"istanbul",type:"point",symbol:"capital",at:[28.98,41.01],name:"Constantinople",labelPos:"w"}
 ],legend:{position:"bottom-left",columns:1}},{caption:"1912-13: Balkan Wars and the new settlement",share:0.50,extent:[[12,35],[31,48]],projection:"conic",layers:[
  {id:"ottoman",type:"area",hist:{year:1914,names:["Ottoman Empire"]},colour:OTT,tier:"influence",legend:"Ottoman remnant in Europe"},
  {id:"serbia",type:"area",hist:{year:1914,names:["Serbia","Montenegro","Romania"]},colour:SER,tier:"core",legend:"Serbia, Montenegro and Romania, 1914"},
  {id:"bulgaria",type:"area",hist:{year:1914,names:["Bulgaria"]},colour:BUL,tier:"core",legend:"Bulgaria, 1914"},
  {id:"greece",type:"area",hist:{year:1914,names:["Greece"]},colour:GRE,tier:"core",legend:"Greece, 1914"},
  {id:"albania",type:"area",hist:{year:1914,names:["Albania"]},colour:ALB,tier:"core",legend:"Albania independent, 1912"},
  {id:"macedonia-loss",type:"area",polygon:macedonia,smooth:false,clipToLand:true,pattern:"hatch",colour:WAR,legend:"Bulgarian losses in Macedonia, 1913"},
  {id:"dobruja-loss",type:"area",polygon:southDobruja,smooth:false,clipToLand:true,pattern:"hatch",colour:WAR,legend:"Southern Dobruja to Romania, 1913"},
  {id:"serb-advance",type:"route",style:"road",weight:2.2,colour:ROAD,legend:"Balkan League advances on Ottoman Europe",path:[[20.46,44.82],[21.43,41.99],[22.94,40.64]]},
  {id:"bulgar-advance",type:"route",style:"road",weight:2.2,colour:ROAD,path:[[23.32,42.70],[26.56,41.68],[28.98,41.01]]},
  {id:"greek-advance",type:"route",style:"road",weight:2.2,colour:ROAD,path:[[23.73,37.98],[22.94,40.64]]},
  {id:"sofia",type:"point",symbol:"capital",at:[23.32,42.70],name:"Sofia",labelPos:"n"},
  {id:"adrianople",type:"point",symbol:"battle",at:[26.56,41.68],name:"Adrianople",labelPos:"e",tag:{text:"1913",colour:"#e8806a"}},
  {id:"skopje",type:"point",symbol:"battle",at:[21.43,41.99],name:"Skopje",labelPos:"w"},
  {id:"salonika",type:"point",symbol:"port",at:[22.94,40.64],name:"Salonika",labelPos:"e",tag:{text:"1912",colour:"#f1c75b"}}
 ],legend:{position:"bottom-left",columns:1}}],text:{intro:"The Balkan crises begin with the Bosnian annexation and end with Ottoman Europe reduced and the Balkan victors fighting over Macedonia.",sections:[{heading:"Crises",entries:[{date:"1908",text:"In 1908 the Ottomans still held Albania, Kosovo, Macedonia, Epirus and Thrace; Austria-Hungary annexed Bosnia-Herzegovina while Serbia, Bulgaria and Greece remained within their pre-war borders.",refs:["austria","bosnia","ottoman-1908","serbia-1908","bulgaria-1908","greece-1908","sarajevo","belgrade","sofia-1908","athens-1908","istanbul"]},{date:"1912-1913",text:"The Balkan League advances from Serbia, Bulgaria and Greece into Ottoman Europe. Albania becomes independent, while Bulgaria loses Macedonia to Serbia and Greece and Southern Dobruja to Romania.",refs:["ottoman","serbia","bulgaria","greece","albania","macedonia-loss","dobruja-loss","serb-advance","bulgar-advance","greek-advance","sofia","adrianople","skopje","salonika"]}]}]},sources:["Penguin Atlas Vol. 2 pp. 120-121; historical-basemaps world_1900 and world_1914"]};
})();
