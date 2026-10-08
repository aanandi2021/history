(function(){
 const AFR="#7a6b42", TRADE="#5b4a3f", EUR="#2f5f93", WAR="#8c3b3b";
 window.PLATES["africa-before-partition-1870"]={id:"africa-before-partition-1870",title:"Africa before partition, c. 1870",head:"National states / Africa",folio:"96-97",viewer:"national/1870/ch-africa-before-partition",figures:[{caption:"African states and trade systems before the scramble",share:1,extent:[[-20,-36],[50,24]],projection:"mercator",layers:[
  {id:"states",type:"area",hist:{year:1878,names:["Sokoto Caliphate","Dahomey","Ethiopia","Sultinate of Zanzibar","Zululand","Transvaal","Orange Free State"]},colour:AFR,tier:"core",legend:"African states and settler republics"},
  {id:"egypt",type:"area",hist:{year:1878,names:["Egypt"]},colour:EUR,tier:"influence",legend:"Egyptian khedival power"},
  {id:"coast",type:"route",style:"dotted",weight:2.2,colour:EUR,legend:"European coastal pressure",path:[[-17,14],[-10.8,6.31],[3.38,6.52],[18.42,-33.92],[39.19,-6.16]]},
  {id:"west-trade",type:"route",style:"road",weight:2.3,colour:TRADE,legend:"Internal and Saharan trade routes",path:[[8.52,12.0],[3.38,6.52],[-1.62,6.67],[-10.8,6.31]]},
  {id:"east-trade",type:"route",style:"road",weight:2.3,colour:TRADE,legend:"Indian Ocean slave and ivory routes",path:[[39.19,-6.16],[36,-3],[34,-8],[31.45,-28.30]]},
  {id:"liberia",type:"point",symbol:"port",at:[-10.80,6.31],name:"Liberia"},
  {id:"sokoto",type:"point",symbol:"capital",at:[8.52,12.00],name:"Sokoto"},
  {id:"dahomey",type:"point",symbol:"capital",at:[1.78,7.18],name:"Dahomey"},
  {id:"asante",type:"point",symbol:"capital",at:[-1.62,6.67],name:"Asante"},
  {id:"ethiopia",type:"point",symbol:"capital",at:[38.76,9.03],name:"Ethiopia"},
  {id:"zanzibar",type:"point",symbol:"port",at:[39.19,-6.16],name:"Zanzibar"},
  {id:"zulu",type:"point",symbol:"battle",at:[31.45,-28.30],name:"Zulu kingdom",tag:{text:"1879",colour:"#e8806a"}}
 ],legend:{position:"bottom-left",columns:1}}],text:{intro:"Africa before partition was not blank space. It contained states, city networks, religious reform polities, settler republics, long-distance commerce and slave-trading systems, including African sellers and raiders as well as foreign buyers.",sections:[{heading:"Before the scramble",entries:[{date:"c. 1870",text:"The map stresses African political agency and trade before partition: Sokoto, Dahomey, Asante, Ethiopia, Zanzibar, Zulu power and Boer republics all shape the field.",refs:["states","sokoto","dahomey","asante","ethiopia","zanzibar","zulu"]},{date:"c. 1870",text:"Coastal European pressure coexists with internal routes and Indian Ocean commerce; the slave trade is internal, regional and Atlantic/Indian Ocean, not a single external line.",refs:["coast","west-trade","east-trade","liberia"]}]}]},sources:["Penguin Atlas Vol. 2 pp. 96-97"]};
})();
