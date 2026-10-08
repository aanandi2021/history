(function(){
 const GER="#8c3b3b", ENT="#4c78a8", CAN="#b22d2d", NFLD="#7a5a8c", ROAD="#5b4a3f", SPR="#d95733", OCC="#9b6a4a";
 const trench=[[2.75,51.13],[2.88,50.85],[2.78,50.37],[2.65,49.95],[3.0,49.58],[3.32,49.38],[4.03,49.25],[4.9,49.2],[5.38,49.16],[5.54,48.9],[6.05,48.9],[7.15,47.5]];
 const occBelgium=[[2.75,51.13],[2.88,50.85],[2.78,50.37],[2.65,49.95],[6.2,49.95],[6.2,51.55],[2.75,51.55],[2.75,51.13]];
 const occFrance=[[2.78,50.37],[2.65,49.95],[3.0,49.58],[3.32,49.38],[4.03,49.25],[4.9,49.2],[5.38,49.16],[5.54,48.9],[6.05,48.9],[7.15,47.5],[8.0,47.5],[8.0,51.1],[2.78,50.37]];
 const spring=[[2.0,50.3],[2.6,50.05],[2.75,49.7],[3.2,49.45],[4.0,49.2]];
 window.PLATES["western-front-1914-1918"]={id:"western-front-1914-1918",title:"The Western Front, 1914-1918",head:"First World War / Western theatre",folio:"124-125",viewer:"ww1/1917/ch-western-front",figures:[{caption:"The Western Front from the Marne to Mons",share:0.72,extent:[[-0.5,47.3],[8,51.6]],projection:"conic",layers:[
  {id:"france-belgium",type:"area",hist:{year:1914,names:["France","Belgium"]},colour:ENT,tier:"influence",legend:"France and Belgium, Entente ground"},
  {id:"occupied-belgium",type:"area",hist:{year:1914,names:["Belgium"]},clipPolygon:occBelgium,pattern:"hatch",colour:OCC,legend:"German-occupied Belgium and north-east France, behind the trench line"},
  {id:"occupied-france",type:"area",hist:{year:1914,names:["France"]},clipPolygon:occFrance,pattern:"hatch",colour:OCC},
  {id:"schlieffen",type:"arrow",colour:GER,width:9,path:[[6.08,50.78],[5.58,50.63],[4.35,50.85],[3.95,50.45],[2.35,48.86],[1.8,48.6]],date:"1914",legend:"German sweep through Belgium toward Paris"},
  {id:"marne-turn",type:"arrow",colour:ENT,width:8,path:[[2.0,48.75],[3.0,49.0],[3.7,49.25]],label:"Marne",date:"Sep 1914",legend:"Marne counter-stroke toward the Aisne"},
  {id:"trench",type:"boundary",style:"solid",colour:ROAD,path:trench,legend:"Main trench line, 1915-17"},
  {id:"spring",type:"boundary",style:"dashed",colour:SPR,path:spring,legend:"German spring offensive limit, 1918"},
  {id:"hundred",type:"arrow",colour:ENT,width:8,path:[[2.30,49.89],[2.78,50.18],[3.16,50.17],[3.95,50.45]],legend:"Allied advance from Amiens to Mons"},
  {id:"liege",type:"point",symbol:"siege",at:[5.58,50.63],name:"Liège",labelPos:"e"},
  {id:"brussels",type:"point",symbol:"capital",at:[4.35,50.85],name:"Brussels",labelPos:"n"},
  {id:"paris",type:"point",symbol:"capital",at:[2.35,48.86],name:"Paris",labelPos:"s"},
  {id:"ypres",type:"point",symbol:"battle",at:[2.88,50.85],name:"2nd Ypres",labelPos:"w",tag:{text:"Can. 1915",colour:CAN}},
  {id:"beaumont",type:"point",symbol:"battle",at:[2.65,50.07],name:"Beaumont-Hamel",labelPos:"w",tag:{text:"Nfld 1916",colour:NFLD}},
  {id:"vimy",type:"point",symbol:"battle",at:[2.78,50.37],name:"Vimy",labelPos:"e",tag:{text:"Can. 1917",colour:CAN}},
  {id:"passch",type:"point",symbol:"battle",at:[3.02,50.90],name:"Passchendaele",labelPos:"e",tag:{text:"Can. 1917",colour:CAN}},
  {id:"verdun",type:"point",symbol:"battle",at:[5.38,49.16],name:"Verdun",labelPos:"e",tag:{text:"1916",colour:"#f1c75b"}},
  {id:"somme",type:"point",symbol:"battle",at:[2.65,49.95],name:"Somme",labelPos:"se",tag:{text:"1916",colour:"#f1c75b"}},
  {id:"amiens",type:"point",symbol:"battle",at:[2.30,49.89],name:"Amiens",labelPos:"s",tag:{text:"Can. 8 Aug",colour:CAN}},
  {id:"canal",type:"point",symbol:"battle",at:[3.16,50.17],name:"Canal du Nord",labelPos:"e",tag:{text:"Can. 1918",colour:CAN}},
  {id:"mons",type:"point",symbol:"battle",at:[3.95,50.45],name:"Mons",labelPos:"e",tag:{text:"Can. 11 Nov",colour:CAN}},
  {id:"compiegne",type:"point",symbol:"treaty",at:[2.90,49.42],name:"Compiègne",labelPos:"s",tag:{text:"armistice",colour:"#f1c75b"}}
 ],legend:{position:"bottom-left",columns:1}},{caption:"Western Front timeline",kind:"diagram",share:0.28,diagram:{height:0.56,nodes:[{id:"d1914",label:"1914: Marne",x:0.16,y:0.35,w:0.18,h:0.15,colour:ENT,strong:true},{id:"d1915",label:"1915: Ypres",x:0.34,y:0.35,w:0.16,h:0.15,colour:CAN},{id:"d1916",label:"1916: Verdun / Somme",x:0.52,y:0.35,w:0.22,h:0.15,colour:ROAD},{id:"d1917",label:"1917: Vimy / Passch.",x:0.72,y:0.35,w:0.22,h:0.15,colour:CAN},{id:"d1918",label:"1918: Amiens-Mons",x:0.88,y:0.35,w:0.22,h:0.15,colour:CAN,strong:true}],arrows:[{id:"t1",from:"d1914",to:"d1915"},{id:"t2",from:"d1915",to:"d1916"},{id:"t3",from:"d1916",to:"d1917"},{id:"t4",from:"d1917",to:"d1918"}]}}],text:{intro:"The Western Front plate now centres the continuous trench line from the Belgian coast to Belfort, with Canadian and Newfoundland actions called out separately.",sections:[{heading:"Front",entries:[{date:"1914",text:"The German right wing sweeps from Aachen through Liège and Brussels toward the west of Paris; the Marne counter-stroke pushes it back toward the Aisne.",refs:["france-belgium","occupied-belgium","occupied-france","schlieffen","marne-turn","liege","brussels","paris"]},{date:"1915-1918",text:"The trench line runs from Nieuport through Ypres, Arras/Vimy, the Somme, Soissons, Reims, Verdun, St-Mihiel and Pont-à-Mousson toward Belfort; the 1918 German offensive bulges west, then the Allied Hundred Days runs from Amiens to Mons.",refs:["trench","spring","hundred","verdun","somme","amiens","mons","compiegne"]}]},{heading:"Canada",entries:[{date:"1915-1918",text:"Canadian tags mark Second Ypres, Vimy, Passchendaele, Amiens, Canal du Nord and Mons; Beaumont-Hamel is tagged separately as Newfoundland.",refs:["ypres","beaumont","vimy","passch","canal","d1914","d1915","d1916","d1917","d1918","t1","t2","t3","t4"]}]}]},sources:["Penguin Atlas Vol. 2 pp. 124-125"]};
})();