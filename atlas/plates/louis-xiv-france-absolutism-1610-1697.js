// France under Richelieu, Mazarin and Louis XIV, round 13.
(function () {
  const FRA="#d8a84f", GAIN="#b36b2e", DUT="#2f7f86", HAB="#7a5a8c", WAR="#8c3b3b", ADM="#6b8c3f";
  const PAR=[2.35,48.86], ROC=[-1.15,46.16], VER=[2.12,48.80], METZ=[6.18,49.12], STR=[7.75,48.58], BES=[6.03,47.24], LUX=[6.13,49.61], LILLE=[3.06,50.63], BRU=[4.35,50.85], AM=[4.90,52.37], HEID=[8.67,49.40], WOR=[8.36,49.63], NYM=[5.86,51.85], AIX=[6.08,50.78], ROUS=[2.90,42.50];
  const franceCore=[[-5.2,43.4],[-4.5,47.0],[-2.2,49.5],[0.0,50.6],[2.8,50.8],[4.6,49.8],[5.7,48.2],[5.4,46.3],[4.0,44.5],[2.2,43.1],[0.6,42.6],[-1.4,43.0],[-3.2,43.4]];
  const roussillon=[[1.7,42.2],[2.4,42.7],[3.2,42.5],[3.0,41.9],[2.0,41.8]];
  const artoisFlanders=[[2.1,49.9],[2.8,50.8],[3.6,51.0],[4.2,50.6],[3.8,50.0],[2.8,49.7]];
  const francheComte=[[5.5,46.1],[5.9,47.0],[6.5,47.7],[7.1,47.3],[7.2,46.5],[6.4,45.9]];
  const alsaceLorraine=[[5.7,48.4],[6.2,49.3],[7.0,49.5],[8.0,49.1],[8.2,48.1],[7.4,47.6],[6.3,47.8]];
  const luxClaim=[[5.6,49.3],[5.9,50.0],[6.5,50.2],[6.7,49.6],[6.3,49.2]];
  window.PLATES["louis-xiv-france-absolutism-1610-1697"] = { id:"louis-xiv-france-absolutism-1610-1697", title:"Louis XIV, absolutism and France's eastern frontier", head:"Age of Reason / France", folio:"36", viewer:"early-modern/1661/ch-louis-xiv-france", figures:[
    {caption:"The advance of France in the east, 1648-1697", share:0.62, extent:[[-5.5,41.5],[9.2,52.6]], projection:"conic", layers:[
      {id:"france-core",type:"area",tier:"core",colour:FRA,legend:"France under Bourbon rule c.1648",regions:["FRA"],minus:["FR-66","FR-59","FR-62","FR-25","FR-39","FR-90","FR-67","FR-68","FR-57","FR-54","FR-55"]},
      {id:"roussillon",type:"area",tier:"core",colour:GAIN,legend:"Roussillon, Artois and Franche-Comte",regions:["FR-66"]}, {id:"artois-flanders",type:"area",tier:"core",colour:GAIN,regions:["FR-59","FR-62"]}, {id:"franche-comte-gain",type:"area",tier:"core",colour:GAIN,regions:["FR-25","FR-39","FR-90"]},
      {id:"alsace-reunions",type:"area",pattern:"hatch",colour:GAIN,legend:"Alsace and Reunion pressure",regions:["FR-67","FR-68","FR-57","FR-54","FR-55"]},
      {id:"luxembourg-1684",type:"area",pattern:"hatch",colour:WAR,legend:"Luxembourg occupied 1684",regions:["LUX","BE-WLX"]},
      {id:"holland-war",type:"route",style:"dashed",weight:2.4,colour:WAR,legend:"War against Holland",path:[PAR,[3.6,50.0],BRU,NYM,AM],label:"1672-78"},
      {id:"palatinate-war",type:"route",style:"dashed",weight:2.2,colour:WAR,legend:"War of the League of Augsburg",path:[PAR,METZ,STR,WOR,HEID]},
      {id:"vauban-line",type:"boundary",style:"dashdot",colour:ADM,width:2.2,legend:"Vauban fortress belt",path:[[2.9,50.6],[4.0,50.4],LUX,METZ,STR,BES,ROUS]},
      {id:"paris",type:"point",symbol:"capital",at:PAR,name:"Paris"}, {id:"versailles",type:"point",symbol:"castle",at:VER,name:"Versailles",labelPos:"sw",tag:{text:"court",colour:"#f1c75b"}}, {id:"la-rochelle",type:"point",symbol:"siege",at:ROC,name:"La Rochelle",labelPos:"w",tag:{text:"1628",colour:"#e8806a"}}, {id:"aix",type:"point",symbol:"treaty",at:AIX,name:"Aix-la-Chapelle",labelPos:"e",tag:{text:"1668",colour:"#f1c75b"}}, {id:"nijmegen",type:"point",symbol:"treaty",at:NYM,name:"Nijmegen",labelPos:"ne",tag:{text:"1678",colour:"#f1c75b"}}, {id:"strasbourg",type:"point",symbol:"fortress",at:STR,name:"Strasbourg",labelPos:"e",tag:{text:"1681",colour:"#e8806a"}}, {id:"luxembourg",type:"point",symbol:"fortress",at:LUX,name:"Luxembourg",labelPos:"w",tag:{text:"1684",colour:"#e8806a"}}, {id:"rijswijk",type:"point",symbol:"treaty",at:[4.33,52.04],name:"Rijswijk",labelPos:"nw",tag:{text:"1697",colour:"#f1c75b"}}
    ], legend:{x:8,y:8,columns:1}},
    {kind:"diagram",caption:"The absolutist machine: court, army, finance and faith", share:0.38, diagram:{height:0.54, compartments:[
      {id:"state-frame",label:"One king, one faith, one law",x:0.04,y:0.04,w:0.92,h:0.47,colour:FRA,fill:"#f3e4be"},
      {id:"economy-frame",label:"Mercantilist state economy",x:0.04,y:0.57,w:0.92,h:0.37,colour:ADM,fill:"#dce8cf"}
    ], nodes:[
      {id:"king",label:"Louis XIV\n1661-1715",x:0.50,y:0.16,w:0.18,h:0.12,colour:FRA,strong:true},
      {id:"council",label:"Council\nand ministers",x:0.18,y:0.39,w:0.20,h:0.12,colour:FRA},
      {id:"intendants",label:"Intendants\nprovinces",x:0.82,y:0.39,w:0.20,h:0.12,colour:FRA},
      {id:"army",label:"Louvois\nstanding army",x:0.18,y:0.78,w:0.20,h:0.12,colour:WAR},
      {id:"colbert",label:"Colbert\nfinance",x:0.50,y:0.78,w:0.20,h:0.12,colour:ADM,strong:true},
      {id:"revocation",label:"Nantes revoked\n1685",x:0.82,y:0.78,w:0.20,h:0.12,colour:WAR}
    ], arrows:[
      {id:"king-council",from:"king",to:"council",label:"decrees",colour:FRA}, {id:"king-intendants",from:"king",to:"intendants",label:"appoints",colour:FRA}, {id:"council-colbert",from:"council",to:"colbert",label:"budget",colour:ADM}, {id:"colbert-army",from:"colbert",to:"army",label:"taxes",colour:WAR}, {id:"intendants-revocation",from:"intendants",to:"revocation",label:"enforce",colour:WAR}, {id:"colbert-revocation",from:"colbert",to:"revocation",label:"cost",colour:WAR}
    ]}}
  ], text:{intro:"French absolutism was not just theatre at Versailles. It was a state machine: ministers, intendants, taxes, manufactures, a fortress frontier and a king whose wars pushed France toward the Rhine.", sections:[
    {heading:"Building the state", entries:[{date:"1624-1642",text:"Richelieu breaks the political privileges of the Huguenot strongholds at La Rochelle and builds royal administration against noble and provincial resistance.",refs:["la-rochelle","france-core"]},{date:"1661-1685",text:"Louis XIV rules through council, intendants, Louvois's army, Colbert's finance and the discipline of one faith, culminating in the revocation of Nantes.",refs:["king","council","intendants","army","colbert","revocation","versailles"]}]},
    {heading:"Pushing to the Rhine", entries:[{date:"1648-1678",text:"Westphalia and the Pyrenees open the French age; Aix-la-Chapelle and Nijmegen add border pieces from Flanders to Franche-Comte.",refs:["roussillon","artois-flanders","franche-comte-gain","aix","nijmegen"]},{date:"1681-1697",text:"The Reunions, Strasbourg, Luxembourg and the Palatinate war show the frontier policy at its hardest, checked at Rijswijk but not reversed in Alsace.",refs:["alsace-reunions","luxembourg-1684","vauban-line","strasbourg","luxembourg","palatinate-war","rijswijk"]}]}
  ]}, sources:["Penguin Atlas Vol. 1 pp. 258-261", "Approximate eastern frontier changes and institutions after the Penguin maps; coastlines and rivers: Natural Earth 1:50m"] };
})();
