// England, Normandy and the Angevin world, round 8.
(function () {
  const ENG="#8c3b3b", ANJ="#c58b32", FR="#4f78a8", IR="#6b8c3f", LINE="#5f4b8b";
  const HAS=[0.49,50.91], LON=[-0.13,51.51], WIN=[-1.32,51.06], RUN=[-0.57,51.44], ROU=[1.1,49.44], ANG=[-0.55,47.47], POI=[0.34,46.58], BOR=[-0.58,44.84], CHI=[0.24,47.17], DUB=[-6.26,53.35], BOU=[2.34,50.58];
  window.PLATES["angevin-empire"] = { id:"angevin-empire", title:"England, Normandy and the Angevin empire", head:"High Middle Ages / England and France", folio:"21", viewer:"medieval/1215/ch-angevin-england", figures:[
    { caption:"Norman England after 1066", share:0.48, extent:[[-8,43],[5,57]], projection:"mercator", layers:[
      {id:"england",type:"area",tier:"core",colour:ENG,legend:"Kingdom of England (Wales separate)",polygon:[[-5.7,50.0],[-4.4,50.3],[-2.6,50.5],[-0.5,50.7],[1.4,51.0],[1.3,52.3],[0.4,53.3],[-1.1,54.3],[-2.1,55.0],[-2.9,55.5],[-3.3,54.9],[-2.8,54.1],[-3.0,53.1],[-2.7,52.3],[-3.3,51.9],[-4.4,51.8],[-5.2,51.2]],smooth:false},
      {id:"normandy",type:"area",tier:"core",colour:ANJ,legend:"Duchy of Normandy",polygon:[[-2.2,48.5],[-1.2,49.7],[0.2,50.1],[1.6,49.8],[1.7,49.0],[0.4,48.5],[-1.2,48.3]],smooth:true},
      {id:"conquest",type:"arrow",colour:ANJ,width:3.5,legend:"Norman invasion",path:[ROU,[0.8,50.2],HAS]},
      {id:"hastings",type:"point",symbol:"battle",at:HAS,name:"Hastings",labelPos:"se",tag:{text:"1066",colour:"#e8806a"}}, {id:"london",type:"point",symbol:"capital",at:LON,name:"London"}, {id:"winchester",type:"point",symbol:"large-city",at:WIN,name:"Winchester",labelPos:"w"}
    ], legend:{position:"bottom-left",columns:1} },
    { caption:"The Angevin realm and its crisis", share:0.52, extent:[[-9,42],[5,57]], projection:"mercator", layers:[
      {id:"england2",type:"area",tier:"core",colour:ENG,legend:"England (not Wales)",polygon:[[-5.7,50.0],[-4.4,50.3],[-2.6,50.5],[-0.5,50.7],[1.4,51.0],[1.3,52.3],[0.4,53.3],[-1.1,54.3],[-2.1,55.0],[-2.9,55.5],[-3.3,54.9],[-2.8,54.1],[-3.0,53.1],[-2.7,52.3],[-3.3,51.9],[-4.4,51.8],[-5.2,51.2]],smooth:false},
      {id:"angevin",type:"area",tier:"conquest",colour:ANJ,legend:"Angevin lands in France",polygon:[[-2.2,43.0],[-1.7,44.2],[-1.2,45.4],[-1.3,46.5],[-2.2,47.3],[-2.0,48.3],[-1.2,49.5],[0.2,50.2],[1.8,50.1],[3.2,49.2],[3.0,47.8],[2.5,46.5],[2.4,45.2],[1.8,44.1],[0.6,43.4],[-0.8,42.9]],smooth:true},
      {id:"brittany",type:"area",opacity:0.5,colour:ANJ,legend:"Brittany dependent",polygon:[[-4.9,47.6],[-4.2,48.5],[-3.1,48.9],[-1.6,49.5],[-1.9,48.3],[-2.7,47.8],[-3.9,47.4]],smooth:true},
      {id:"ireland",type:"area",tier:"influence",colour:IR,legend:"English foothold in Ireland",polygon:[[-8,51.5],[-6.5,54.2],[-5.5,53.0],[-5.8,51.8]],smooth:true},
      {id:"capetian",type:"area",tier:"influence",colour:FR,legend:"Capetian pressure",polygon:[[0.8,47.5],[2.3,49.7],[4.2,49.2],[4.0,47.2],[2.1,46.8]],smooth:"basis"},
      {id:"loss",type:"boundary",style:"partition",colour:LINE,width:2.6,legend:"Losses to Philip II",path:[[0.0,50.0],[0.0,48.8],[0.6,47.5],[0.3,46.5]]},
      {id:"bouvines",type:"point",symbol:"battle",at:BOU,name:"Bouvines",tag:{text:"1214",colour:"#e8806a"}}, {id:"runnymede",type:"point",symbol:"treaty",at:RUN,name:"Runnymede",tag:{text:"1215",colour:"#f1c75b"}}, {id:"rouen",type:"point",symbol:"large-city",at:ROU,name:"Rouen",tag:{text:"1204",colour:"#f1c75b"}}, {id:"angers",type:"point",symbol:"large-city",at:ANG,name:"Angers"}, {id:"bordeaux",type:"point",symbol:"large-city",at:BOR,name:"Bordeaux"}, {id:"dublin",type:"point",symbol:"port",at:DUB,name:"Dublin"}
    ], legend:{position:"bottom-left",columns:1} }
  ], text:{ intro:"England after 1066 is both an island kingdom and part of a French feudal map.", sections:[
    {heading:"Norman monarchy", entries:[
      {date:"1066-86", text:"William conquers England, replaces much of the Anglo-Saxon elite and records landholding in Domesday Book.", refs:["england","normandy","conquest","hastings","london"]},
      {date:"1106", text:"Henry I reunites England and Normandy after Tinchebray, keeping the Channel at the centre of English politics.", refs:["england","normandy","winchester"]}
    ]},
    {heading:"Angevin crisis", entries:[
      {date:"1154", text:"Henry II inherits England, Normandy, Anjou and Aquitaine through family claims and Eleanor of Aquitaine; Brittany sits in the Angevin orbit.", refs:["england2","angevin","brittany","angers","bordeaux"]},
      {date:"1171", text:"English power begins in Ireland, adding another frontier to the Angevin world.", refs:["ireland","dublin"]},
      {date:"1204-15", text:"John loses Normandy to Philip II, loses at Bouvines, and then grants Magna Carta at Runnymede under baronial pressure.", refs:["loss","capetian","rouen","bouvines","runnymede"]}
    ]}
  ]}, sources:["Penguin Atlas Vol. 1 pp. 160-162", "Approximate feudal fields; coastlines and rivers: Natural Earth 1:50m"] };
})();
