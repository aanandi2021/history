// Capetian France and the growth of royal power, round 8.
(function () {
  const ROY="#4f78a8", ANJ="#c58b32", LANG="#8c5fb3", FIEF="#b8c86a", LINE="#5f4b8b";
  const PAR=[2.35,48.86], REI=[4.03,49.26], ROU=[1.1,49.44], BOU=[2.34,50.58], TOU=[1.44,43.6], BEZ=[3.22,43.34], MUR=[1.33,43.46], BOR=[-0.58,44.84], AV=[4.81,43.95];
  window.PLATES["capetian-france"] = { id:"capetian-france", title:"Capetian France: from royal island to kingdom", head:"High Middle Ages / France", folio:"20", viewer:"medieval/1214/ch-capetian-france", figures:[
    { caption:"France under the early Capetians", share:0.5, extent:[[-6,42],[9,52]], projection:"mercator", layers:[
      {id:"royal-domain-987",type:"area",clipToLand:true,tier:"core",colour:ROY,legend:"Royal domain c. 987",polygon:[[1.4,47.8],[2.2,49.4],[3.4,49.4],[3.8,48.4],[2.9,47.6]],smooth:"basis"},
      {id:"great-fiefs",type:"area",clipToLand:true,tier:"influence",colour:FIEF,legend:"Great territorial fiefs",polygon:[[-5,43],[-2,49],[1,51],[5,50],[7,46],[4,43],[-1,42]],smooth:"basis"},
      {id:"normandy",type:"area",clipToLand:true,tier:"core",colour:ANJ,legend:"Normandy, Angevin/English pressure",polygon:[[-1,48.5],[1.6,50.3],[2.0,49.2],[0.5,48.5]],smooth:"basis"},
      {id:"paris",type:"point",symbol:"capital",at:PAR,name:"Paris"}, {id:"reims",type:"point",symbol:"large-city",at:REI,name:"Reims",tag:{text:"987",colour:"#f1c75b"}}, {id:"rouen",type:"point",symbol:"large-city",at:ROU,name:"Rouen"}
    ], legend:{position:"bottom-left",columns:1} },
    { caption:"Philip II and Louis IX enlarge the crown", share:0.5, extent:[[-6,42],[9,52]], projection:"mercator", layers:[
      {id:"crown-1180",type:"area",clipToLand:true,tier:"core",colour:ROY,legend:"Crown land before Philip II",polygon:[[0.8,47.5],[2.1,49.7],[4.0,49.2],[4.0,47.5],[2.5,46.8]],smooth:"basis"},
      {id:"philip-gains",type:"area",clipToLand:true,tier:"conquest",colour:ROY,legend:"Philip II gains north of the Loire",polygon:[[-2,46.6],[-1,49.6],[2.0,50.4],[4.5,49.6],[3.8,46.5],[1,46.0]],smooth:"basis"},
      {id:"languedoc",type:"area",clipToLand:true,tier:"conquest",colour:LANG,legend:"Albigensian/Languedoc brought under crown",polygon:[[-0.4,42.5],[2.5,44.6],[4.2,44.0],[3.1,42.6],[1,42.3]],smooth:"basis"},
      {id:"guyenne",type:"area",clipToLand:true,tier:"influence",colour:ANJ,legend:"English Guyenne remains",polygon:[[-1.7,43.5],[-0.3,45.4],[1.1,45.0],[0.2,43.7]],smooth:"basis"},
      {id:"bouvines",type:"point",symbol:"battle",at:BOU,name:"Bouvines",tag:{text:"1214",colour:"#e8806a"}}, {id:"beziers",type:"point",symbol:"destroyed",at:BEZ,name:"Beziers",tag:{text:"1209",colour:"#e8806a"}}, {id:"muret",type:"point",symbol:"battle",at:MUR,name:"Muret",tag:{text:"1213",colour:"#e8806a"}}, {id:"paris2",type:"point",symbol:"capital",at:PAR,name:"Paris"}, {id:"bordeaux",type:"point",symbol:"large-city",at:BOR,name:"Bordeaux"}
    ], legend:{position:"bottom-left",columns:1} }
  ], text:{ intro:"Capetian power starts small, then grows by law, feudal pressure, war and crusade inside France.", sections:[
    {heading:"Small crown", entries:[
      {date:"987", text:"Hugh Capet is crowned at Reims. The king's direct land is small, but the royal title gives him a legal and sacred claim above the great fiefs.", refs:["royal-domain-987","great-fiefs","paris","reims"]},
      {date:"1108-37", text:"Louis VI and Abbot Suger make the crown more practical: local vassals are disciplined and Paris becomes an administrative centre.", refs:["royal-domain-987","paris"]}
    ]},
    {heading:"Bigger crown", entries:[
      {date:"1204-14", text:"Philip II takes Normandy and other lands north of the Loire from John, then wins at Bouvines. The crown is no longer just a Paris island.", refs:["philip-gains","bouvines","rouen"]},
      {date:"1209-29", text:"The Albigensian Crusade breaks the power of Toulouse and ties Languedoc more closely to the French monarchy.", refs:["languedoc","beziers","muret"]},
      {date:"1259", text:"Louis IX's peace with Henry III leaves Guyenne in English hands, but under French overlordship.", refs:["guyenne","bordeaux"]}
    ]}
  ]}, sources:["Penguin Atlas Vol. 1 pp. 158-160", "Approximate Capetian and feudal fields; coastlines and rivers: Natural Earth 1:50m"] };
})();
