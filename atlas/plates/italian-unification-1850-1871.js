(function(){
 const SAR="#2f7f86", ITA="#3f8f5b", AUS="#d8a84f", PAP="#8c3b3b", ROAD="#5b4a3f";
 window.PLATES["italian-unification-1850-1871"]={id:"italian-unification-1850-1871",title:"Italian unification in stages, 1850-1871",head:"National states / Italy",folio:"72-75",viewer:"national/1860/ch-italian-unification",figures:[{caption:"Piedmont, Garibaldi and the completion of Italy",share:1,extent:[[5.5,36],[19,47.8]],projection:"conic",layers:[
  {id:"italy-1871",type:"area",hist:{year:1878,names:["Italy"]},colour:ITA,tier:"core",legend:"Kingdom of Italy by 1871"},
  {id:"sardinia-1850",type:"area",hist:{year:1815,names:["Kingdom of Sardinia"]},pattern:"stripe",colour:SAR,tier:"conquest",legend:"Piedmont-Sardinia core"},
  {id:"austria-1850",type:"area",hist:{year:1815,names:["Austrian Empire"]},colour:AUS,tier:"influence",legend:"Austrian Lombardy-Venetia before 1859/66"},
  {id:"papal-1850",type:"area",hist:{year:1815,names:["Papal States"]},colour:PAP,tier:"influence",legend:"Papal States before Rome, 1870"},
  {id:"south",type:"area",hist:{year:1815,names:["Kingdom of the Two Sicilies"]},pattern:"hatch",colour:ITA,tier:"conquest",legend:"Garibaldi and the south, 1860"},
  {id:"garibaldi",type:"route",style:"road",weight:2.4,colour:ROAD,legend:"Garibaldi's Thousand",path:[[7.69,45.07],[13.36,38.12],[14.27,40.85]]},
  {id:"turin",type:"point",symbol:"capital",at:[7.69,45.07],name:"Turin",tag:{text:"1861",colour:"#f1c75b"}},
  {id:"milan",type:"point",symbol:"battle",at:[9.19,45.46],name:"Lombardy",tag:{text:"1859",colour:"#e8806a"}},
  {id:"palermo",type:"point",symbol:"battle",at:[13.36,38.12],name:"Palermo",tag:{text:"1860",colour:"#e8806a"}},
  {id:"venice",type:"point",symbol:"port",at:[12.33,45.44],name:"Venice",labelPos:"e",tag:{text:"1866",colour:"#f1c75b"}},
  {id:"rome",type:"point",symbol:"capital",at:[12.50,41.90],name:"Rome",labelPos:"w",tag:{text:"1870",colour:"#f1c75b"}}
 ],legend:{position:"bottom-left",columns:1}}],text:{intro:"Italian unification was cumulative: Piedmont supplied monarchy and diplomacy, Garibaldi supplied revolutionary force, and wars opened Venetia and Rome.",sections:[{heading:"Stages",entries:[{date:"1859",text:"France and Piedmont defeat Austria in Lombardy.",refs:["milan","austria-1850"]},{date:"1860-1861",text:"Garibaldi's southern campaign is folded into a Piedmontese monarchy.",refs:["south","garibaldi","palermo","turin"]},{date:"1866-1870",text:"Venetia and then Rome complete the kingdom's core map.",refs:["italy-1871","rome","venice","papal-1850"]}]}]},sources:["Penguin Atlas Vol. 2 pp. 72-75"]};
})();
