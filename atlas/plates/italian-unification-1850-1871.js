(function(){
 const S59="#3f8f5b", S60="#2f7f86", S66="#d8a84f", S70="#8c3b3b", AUS="#b8b1a1", ROAD="#5b4a3f";
 const lombardy=[[8.6,46.3],[9.3,46.5],[10.5,46.4],[10.6,45.4],[10.3,45.0],[9.5,45.0],[8.6,45.3],[8.6,46.3]];
 const venetia=[[12.4,46.6],[13.7,46.5],[13.4,45.7],[12.3,45.2],[12.2,44.9],[11.4,45.0],[10.6,45.4],[10.5,46.0],[11.0,46.5],[12.4,46.6]];
 window.PLATES["italian-unification-1850-1871"]={id:"italian-unification-1850-1871",title:"Italian unification in stages, 1850-1871",head:"National states / Italy",folio:"72-75",viewer:"national/1860/ch-italian-unification",figures:[{caption:"The stages of Italian unification",share:1,extent:[[5.5,36],[19,47.8]],projection:"conic",layers:[
  {id:"sardinia",type:"area",hist:{year:1815,names:["Kingdom of Sardinia"]},colour:S59,tier:"core",legend:"Piedmont-Sardinia, leading state"},
  {id:"lombardy",type:"area",hist:{year:1815,names:["Lombardy"]},clipPolygon:lombardy,colour:S59,tier:"core",legend:"1859: Lombardy"},
  {id:"tuscany",type:"area",hist:{year:1815,names:["Tuscany","Modena","Parma"]},colour:S60,tier:"conquest",legend:"1860: central duchies"},
  {id:"south",type:"area",hist:{year:1815,names:["Kingdom of the Two Sicilies"]},colour:S60,tier:"conquest",legend:"1860: Two Sicilies"},
  {id:"venetia",type:"area",hist:{year:1815,names:["Austrian Empire"]},clipPolygon:venetia,colour:S66,tier:"conquest",legend:"1866: Venetia"},
  {id:"rome-papal",type:"area",hist:{year:1815,names:["Papal States"]},colour:S70,tier:"conquest",legend:"1870: Rome and remaining Papal State"},
  {id:"garibaldi",type:"route",style:"road",weight:2.4,colour:ROAD,legend:"Garibaldi: Quarto-Marsala-Naples-Volturno",path:[[8.95,44.40],[12.43,37.80],[13.36,38.12],[15.65,38.11],[14.27,40.85],[14.08,41.16]]},
  {id:"magenta",type:"point",symbol:"battle",at:[8.88,45.47],name:"Magenta",labelPos:"w",tag:{text:"1859",colour:"#e8806a"}},
  {id:"solferino",type:"point",symbol:"battle",at:[10.57,45.37],name:"Solferino 1859",labelPos:"n"},
  {id:"marsala",type:"point",symbol:"port",at:[12.43,37.80],name:"Marsala",labelPos:"w",tag:{text:"May 1860",colour:"#f1c75b"}},
  {id:"naples",type:"point",symbol:"capital",at:[14.27,40.85],name:"Naples",labelPos:"e"},
  {id:"custoza",type:"point",symbol:"battle",at:[10.79,45.38],name:"Custoza 1866",labelPos:"s"},
  {id:"lissa",type:"point",symbol:"battle",at:[16.20,43.05],name:"Lissa",labelPos:"e",tag:{text:"1866",colour:"#e8806a"}},
  {id:"venice",type:"point",symbol:"city",at:[12.33,45.44],name:"Venice",labelPos:"e"},
  {id:"rome",type:"point",symbol:"capital",at:[12.50,41.90],name:"Rome",labelPos:"w",tag:{text:"1870",colour:"#f1c75b"}}
 ],legend:{position:"bottom-left",columns:1}}],text:{intro:"Italian unification is shown from historical 1815 states rather than modern blobs: Piedmont-Sardinia, Lombardy, the central duchies, the Two Sicilies, Venetia and Rome.",sections:[{heading:"Stages",entries:[{date:"1859",text:"Magenta and Solferino transfer Lombardy to the Piedmontese project.",refs:["sardinia","lombardy","magenta","solferino"]},{date:"1860",text:"Central duchies join, while Garibaldi sails from Quarto to Marsala and carries the southern kingdom to Naples and the Volturno.",refs:["tuscany","south","garibaldi","marsala","naples"]},{date:"1866-1870",text:"Venetia follows the Austro-Prussian War; Rome follows the collapse of French protection in 1870.",refs:["venetia","custoza","lissa","venice","rome-papal","rome"]}]}]},sources:["Penguin Atlas Vol. 2 pp. 72-75"]};
})();
