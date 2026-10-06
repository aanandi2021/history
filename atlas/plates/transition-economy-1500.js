// Economic life around 1500, round 11.
(function () {
  const HAB="#d8a84f", VEN="#7a5a8c", FUG="#8c3b3b", TRADE="#7b6848", PORT="#2f7f86";
  const LIS=[-9.14,38.72], SEV=[-5.99,37.39], ANT=[4.40,51.22], AUG=[10.90,48.37], VENICE=[12.33,45.44], FLO=[11.25,43.77], LYON=[4.83,45.76], NAP=[14.27,40.85];
  window.PLATES["transition-economy-1500"] = { id:"transition-economy-1500", title:"Economic life around 1500", head:"Age of Transition / Economic life", folio:"28", viewer:"transition/1500/ch-transition-economy", figures:[
    {caption:"Early capitalist associations and trade, c. 1500", share:0.62, extent:[[-12,35],[25,56]], projection:"conic", layers:[
      {id:"habsburg",type:"area",clipToLand:true,tier:"influence",colour:HAB,legend:"Habsburg territories and credit needs",polygon:[[-5,36],[-3,42],[3,50],[8,52],[16,49],[15,44],[10,42],[4,43]],smooth:false},
      {id:"venice-zone",type:"area",clipToLand:true,tier:"core",colour:VEN,legend:"Venice and north Italian trade",polygon:[[8,44],[12,46.5],[16,45],[15,42],[10,42]],smooth:false},
      {id:"medici",type:"point",symbol:"power",at:FLO,name:"Medici Florence",legend:"Medici bank"},
      {id:"fuggers",type:"point",symbol:"power",at:AUG,name:"Fuggers",legend:"Fugger head office"},
      {id:"lisbon",type:"point",symbol:"port",at:LIS,name:"Lisbon",legend:"Atlantic ports"}, {id:"antwerp",type:"point",symbol:"port",at:ANT,name:"Antwerp"}, {id:"venice",type:"point",symbol:"port",at:VENICE,name:"Venice"}, {id:"seville",type:"point",symbol:"port",at:SEV,name:"Seville"}, {id:"naples",type:"point",symbol:"large-city",at:NAP,name:"Naples"},
      {id:"atlantic-route",type:"route",style:"dotted",weight:3,colour:PORT,legend:"Atlantic and North Sea trade",path:[LIS,SEV,LYON,ANT]},
      {id:"alpine-route",type:"route",style:"dotted",weight:3,colour:TRADE,legend:"Silver, cloth and credit routes",path:[ANT,AUG,VENICE]},
      {id:"italy-route",type:"route",style:"dotted",weight:2,colour:TRADE,path:[FLO,VENICE]}
    ], legend:{position:"bottom-left",columns:1}},
    {kind:"diagram",caption:"How a trading company joins mines, credit, princes and markets", share:0.38, diagram:{height:0.58, compartments:[
      {id:"money-frame",label:"Money and privilege",x:0.06,y:0.08,w:0.88,h:0.30,colour:FUG,fill:"#f0dccb"},
      {id:"goods-frame",label:"Goods and markets",x:0.06,y:0.48,w:0.88,h:0.30,colour:TRADE,fill:"#e6e0d6"}
    ], nodes:[
      {id:"princes",label:"Princes\nneed cash",x:0.12,y:0.22,w:0.16,h:0.10,colour:FUG},
      {id:"bank",label:"Bank",x:0.42,y:0.22,w:0.16,h:0.10,colour:FUG,strong:true},
      {id:"company",label:"Trading\ncompany",x:0.72,y:0.22,w:0.16,h:0.10,colour:FUG},
      {id:"mines",label:"Mines",x:0.16,y:0.62,w:0.16,h:0.10,colour:TRADE},
      {id:"ports",label:"Ports",x:0.42,y:0.62,w:0.16,h:0.10,colour:PORT},
      {id:"markets",label:"Markets",x:0.70,y:0.62,w:0.18,h:0.10,colour:TRADE}
    ], arrows:[
      {id:"tax-farm",from:"bank",to:"princes",label:"loans",labelAt:[0.23,0.22]}, {id:"privilege",from:"princes",to:"company",label:"privileges",colour:FUG,labelAt:[0.56,0.14]}, {id:"capital",from:"bank",to:"company",label:"capital",colour:FUG,labelAt:[0.64,0.25]},
      {id:"ore",from:"mines",to:"ports",label:"metals",colour:TRADE}, {id:"ships",from:"ports",to:"markets",label:"sale",colour:PORT}, {id:"profit",from:"markets",to:"bank",label:"profits",colour:TRADE,via:[[0.79,0.50],[0.50,0.42]]}
    ]}}
  ], text:{intro:"The atlas's economic page treats capitalism as a web of offices, privileges, mines, routes and royal debt, not just a bigger market.", sections:[
    {heading:"Money and power", entries:[{date:"1460-1520",text:"The Medici and Fuggers show how banking, mining rights and state debt joined Renaissance politics to cash flow.",refs:["medici","fuggers","habsburg","princes","bank","tax-farm"]},{date:"1500",text:"Antwerp, Lisbon, Venice and Seville pull Atlantic, Mediterranean and inland trade into one European money map.",refs:["lisbon","antwerp","venice","seville","atlantic-route","alpine-route"]}]},
    {heading:"Company logic", entries:[{text:"A trading company sat between princes, mines, ports and markets: privilege and credit were as important as ships.",refs:["company","privilege","capital","mines","ports","markets","profit"]}]}
  ]}, sources:["Penguin Atlas Vol. 1 pp. 214-215", "Approximate economic fields; coastlines and rivers: Natural Earth 1:50m"] };
})();
