// Charles V, Habsburg-Valois rivalry and Catholic renewal, round 12.
(function () {
  const HAB="#d8a84f", SPA="#b36b2e", AUS="#6b8c3f", FRA="#7a5a8c", OTT="#8c6d3f", CAT="#8c3b3b", LINE="#5f4b8b";
  const MAD=[-3.70,40.42], PAR=[2.35,48.86], GHE=[3.72,51.05], AIX=[6.08,50.78], PAV=[9.16,45.19], ROM=[12.50,41.90], VIE=[16.37,48.21], TUN=[10.18,36.81], TRE=[11.12,46.07], LOY=[-2.67,43.18], MUE=[11.44,48.14], MET=[6.18,49.12], CER=[2.95,44.91];
  window.PLATES["charles-v-habsburg-valois-1519-1556"] = { id:"charles-v-habsburg-valois-1519-1556", title:"Charles V and the Habsburg-Valois world", head:"Age of Religious Discord / Empire of Charles V", folio:"32", viewer:"transition/1519/ch-charles-v-habsburg-valois", figures:[
    {caption:"Charles V's composite monarchy and rivals, 1519-1556", share:0.64, extent:[[-11,34],[31,56]], projection:"conic", layers:[
      {id:"spain",type:"area",clipToLand:true,tier:"core",colour:SPA,legend:"Spanish Habsburg lands",polygon:[[-10.5,36.0],[-9.5,43.8],[-1.0,44.0],[4.0,42.5],[3.0,39.0],[-2.0,36.0]],smooth:false},
      {id:"low-countries",type:"area",clipToLand:true,tier:"core",colour:HAB,legend:"Burgundian inheritance / Low Countries",polygon:[[2.4,49.7],[3.4,52.9],[7.3,53.2],[7.0,50.0]],smooth:false},
      {id:"austria-bohemia",type:"area",clipToLand:true,tier:"core",colour:AUS,legend:"Austrian Habsburg lands",polygon:[[9.0,46.1],[12.0,50.3],[16.6,50.7],[19.4,48.8],[17.4,45.8],[12.2,45.5]],smooth:false},
      {id:"france",type:"area",clipToLand:true,tier:"influence",colour:FRA,legend:"France encircled",polygon:[[-4.8,43.0],[-2.5,49.5],[1.4,51.1],[6.4,49.8],[7.6,46.4],[4.0,43.0]],smooth:false},
      {id:"naples-sicily",type:"area",clipToLand:true,tier:"core",colour:SPA,legend:"Naples, Sicily and Sardinia",polygon:[[8.2,37.2],[12.8,41.5],[16.8,40.7],[16.2,37.0],[12.0,36.5]],smooth:false},
      {id:"ottoman-pressure",type:"area",clipToLand:true,tier:"influence",colour:OTT,legend:"Ottoman pressure",polygon:[[18.0,36.0],[23.0,45.5],[31.0,46.0],[31.0,35.0]],smooth:false},
      {id:"habsburg-ring",type:"boundary",style:"partition",colour:LINE,width:2.2,legend:"Habsburg strategic ring",path:[[GHE[0],GHE[1]],AIX,VIE,ROM,MAD,GHE],closed:true},
      {id:"valois-wars",type:"arrow",colour:FRA,width:3.4,legend:"Habsburg-Valois Italian wars",path:[PAR,CER,PAV,[9.2,44.5]],label:"1494-1559"},
      {id:"ottoman-arrow",type:"arrow",colour:OTT,width:3.2,legend:"Ottoman-Habsburg front",path:[[28.98,41.01],[21.0,45.9],VIE],label:"1526-29"},
      {id:"charles",type:"point",symbol:"monarch",at:GHE,name:"Ghent",labelPos:"nw",tag:{text:"1500",colour:"#f1c75b"}}, {id:"aachen",type:"point",symbol:"monarch",at:AIX,name:"Aachen",labelPos:"se",tag:{text:"1520",colour:"#f1c75b"}}, {id:"madrid",type:"point",symbol:"capital",at:MAD,name:"Madrid"}, {id:"pavia",type:"point",symbol:"battle",at:PAV,name:"Pavia",tag:{text:"1525",colour:"#e8806a"}}, {id:"rome-sack",type:"point",symbol:"destroyed",at:ROM,name:"Rome",tag:{text:"1527",colour:"#e8806a"}}, {id:"vienna",type:"point",symbol:"siege",at:VIE,name:"Vienna",tag:{text:"1529",colour:"#e8806a"}}, {id:"tunis",type:"point",symbol:"battle",at:TUN,name:"Tunis",tag:{text:"1535",colour:"#e8806a"}}
    ], legend:{position:"bottom-left",columns:1}},
    {kind:"diagram",caption:"Habsburg inheritance and Catholic renewal", share:0.36, diagram:{height:0.78, compartments:[
      {id:"inheritance-frame",label:"Composite inheritance",x:0.05,y:0.06,w:0.90,h:0.38,colour:HAB,fill:"#f3e4be"},
      {id:"renewal-frame",label:"Catholic renewal",x:0.05,y:0.54,w:0.90,h:0.34,colour:CAT,fill:"#f0dccb"}
    ], nodes:[
      {id:"burgundy",label:"Burgundy\nLow Countries",x:0.18,y:0.21,w:0.22,h:0.10,colour:HAB},
      {id:"spain-node",label:"Spain\nCastile-Aragon",x:0.48,y:0.21,w:0.24,h:0.10,colour:SPA},
      {id:"austria-node",label:"Austria\nBohemia-Hungary",x:0.78,y:0.21,w:0.24,h:0.10,colour:AUS},
      {id:"charles-node",label:"Charles V\n1519-1556",x:0.48,y:0.37,w:0.24,h:0.10,colour:HAB,strong:true},
      {id:"trident",label:"Council\nof Trent",x:0.18,y:0.70,w:0.20,h:0.10,colour:CAT},
      {id:"jesuits",label:"Jesuits\nIgnatius",x:0.48,y:0.70,w:0.20,h:0.10,colour:CAT,strong:true},
      {id:"schools",label:"seminaries\nmissions",x:0.78,y:0.70,w:0.20,h:0.10,colour:CAT}
    ], arrows:[
      {id:"burgundy-link",from:"burgundy",to:"charles-node",label:"1477/1506",colour:HAB}, {id:"spain-link",from:"spain-node",to:"charles-node",label:"1516",colour:SPA}, {id:"austria-link",from:"austria-node",to:"charles-node",label:"1519",colour:AUS},
      {id:"trent-link",from:"trident",to:"jesuits",label:"doctrine",colour:CAT}, {id:"jesuit-link",from:"jesuits",to:"schools",label:"education",colour:CAT}
    ]}}
  ], text:{intro:"Charles V ruled a stack of inheritances rather than one tidy state. That made France feel encircled, tied Spain to Germany and Italy, and put Catholic renewal inside imperial politics.", sections:[
    {heading:"Composite empire", entries:[{date:"1516-1519",text:"Burgundy, Spain, Austria and the imperial title converge on Charles V, with the Low Countries and Italian possessions making France the central rival.",refs:["spain","low-countries","austria-bohemia","naples-sicily","habsburg-ring","charles","aachen","burgundy-link","spain-link","austria-link"]},{date:"1525-1529",text:"Pavia, the sack of Rome and Vienna show the same map under pressure: France, the papacy and the Ottomans all exploit the Habsburg ring.",refs:["france","valois-wars","pavia","rome-sack","ottoman-pressure","ottoman-arrow","vienna"]}]},
    {heading:"Catholic renewal", entries:[{date:"1534-1563",text:"Ignatius of Loyola, the Jesuits and Trent rebuild Catholic discipline, schooling and missions without undoing the political rupture already on the map.",refs:["trident","jesuits","schools","trent-link","jesuit-link"]},{date:"1535",text:"Tunis shows Charles acting as Mediterranean crusader-king as well as German emperor and Spanish monarch.",refs:["tunis","ottoman-pressure"]}]}
  ]}, sources:["Penguin Atlas Vol. 1 pp. 237-240", "Approximate dynastic and strategic fields; coastlines and rivers: Natural Earth 1:50m"] };
})();
