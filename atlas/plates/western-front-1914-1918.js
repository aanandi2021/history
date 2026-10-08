(function(){
 const GER="#8c3b3b", ENT="#4c78a8", CAN="#b22d2d", ROAD="#5b4a3f", SPR="#d95733";
 const trench=[[-1.8,50.8],[2.9,50.9],[3.1,50.5],[2.8,50.0],[3.4,49.5],[4.1,49.1],[5.4,49.2],[5.8,48.8]];
 const spring=[[2.0,50.2],[2.9,49.9],[3.0,49.4],[4.0,49.0]];
 window.PLATES["western-front-1914-1918"]={id:"western-front-1914-1918",title:"The Western Front, 1914-1918",head:"First World War / Western theatre",folio:"124-125",viewer:"ww1/1917/ch-western-front",figures:[{caption:"From movement to trench war and the Hundred Days",share:0.76,extent:[[-2,47],[8,52]],projection:"conic",layers:[
  {id:"france-belgium",type:"area",hist:{year:1914,names:["France","Belgium"]},colour:ENT,tier:"influence",legend:"Entente ground"},
  {id:"germany",type:"area",hist:{year:1914,names:["German Empire"]},colour:GER,tier:"influence",legend:"German Empire edge"},
  {id:"german-1914",type:"arrow",colour:GER,width:10,path:[[6.1,50.8],[4.35,50.85],[2.35,48.86],[3.0,49.0]],label:"Schlieffen",date:"1914",legend:"German advance, 1914"},
  {id:"marne-turn",type:"arrow",colour:ENT,width:8,path:[[2.35,48.86],[3.0,49.0],[4.0,49.2]],label:"Marne"},
  {id:"trench",type:"boundary",style:"solid",colour:ROAD,path:trench,legend:"Main trench line, 1915-17"},
  {id:"spring",type:"boundary",style:"dashed",colour:SPR,path:spring,legend:"German spring offensive limit, 1918"},
  {id:"hundred",type:"arrow",colour:ENT,width:8,path:[[2.30,49.89],[3.1,50.0],[4.0,49.7],[5.0,49.5]]},
  {id:"ypres",type:"point",symbol:"battle",at:[2.89,50.85],name:"Ypres",labelPos:"nw",tag:{text:"1915 gas",colour:CAN}},
  {id:"beaumont",type:"point",symbol:"battle",at:[2.65,50.07],name:"Beaumont-Hamel",labelPos:"sw",tag:{text:"1 Jul 1916",colour:CAN}},
  {id:"vimy",type:"point",symbol:"battle",at:[2.77,50.38],name:"Vimy",labelPos:"e",tag:{text:"Can.",colour:CAN}},
  {id:"passch",type:"point",symbol:"battle",at:[3.02,50.90],name:"Passchendaele",labelPos:"e",tag:{text:"1917",colour:CAN}},
  {id:"verdun",type:"point",symbol:"battle",at:[5.39,49.16],name:"Verdun",labelPos:"e",tag:{text:"1916",colour:"#f1c75b"}},
  {id:"somme",type:"point",symbol:"battle",at:[2.75,50.0],name:"Somme",labelPos:"e",tag:{text:"1916",colour:"#f1c75b"}},
  {id:"amiens",type:"point",symbol:"battle",at:[2.30,49.89],name:"Amiens",labelPos:"s",tag:{text:"8 Aug",colour:CAN}},
  {id:"compiegne",type:"point",symbol:"treaty",at:[2.90,49.42],name:"Compiègne",labelPos:"s",tag:{text:"11 Nov",colour:"#f1c75b"}}
 ],legend:{position:"bottom-left",columns:1}},{caption:"Canadian sequence on the Western Front",kind:"diagram",share:0.24,diagram:{height:0.56,nodes:[{id:"cy",label:"Ypres\n1915",x:0.12,y:0.34,w:0.15,h:0.15,colour:CAN,strong:true},{id:"cs",label:"Somme /\nBeaumont-Hamel\n1916",x:0.32,y:0.34,w:0.20,h:0.17,colour:CAN},{id:"cv",label:"Vimy\nApr. 1917",x:0.53,y:0.34,w:0.17,h:0.15,colour:CAN,strong:true},{id:"cp",label:"Passchendaele\n1917",x:0.72,y:0.34,w:0.19,h:0.15,colour:CAN},{id:"ca",label:"Amiens and\nHundred Days\n1918",x:0.90,y:0.34,w:0.18,h:0.17,colour:CAN,strong:true}],arrows:[{id:"ca1",from:"cy",to:"cs"},{id:"ca2",from:"cs",to:"cv"},{id:"ca3",from:"cv",to:"cp"},{id:"ca4",from:"cp",to:"ca"}]}}],text:{intro:"A tight Western Front frame shows what the book's theatre map compresses: movement in 1914, a trench line, attrition and the Allied break-through in 1918.",sections:[{heading:"Front",entries:[{date:"1914",text:"The German right wing advances through Belgium, is stopped at the Marne and settles into a trench line that runs from Flanders to Lorraine.",refs:["france-belgium","germany","german-1914","marne-turn","trench"]},{date:"1916-1918",text:"Verdun and the Somme mark attrition; the German spring offensives fail to decide the war, and the Hundred Days pushes east to the armistice at Compiègne.",refs:["verdun","somme","spring","hundred","amiens","compiegne"]}]},{heading:"Canada",entries:[{date:"1915-1918",text:"Canadian markers pick out Second Ypres, Beaumont-Hamel for Newfoundland, Vimy, Passchendaele and Amiens.",refs:["ypres","beaumont","vimy","passch","cy","cs","cv","cp","ca","ca1","ca2","ca3","ca4"]}]}]},sources:["Penguin Atlas Vol. 2 pp. 124-125"]};
})();