// Charles V, Habsburg-Valois rivalry and Catholic renewal, round 12.
(function () {
  const HAB="#d8a84f", SPA="#b36b2e", AUS="#6b8c3f", HUN="#8fae58", MIL="#c58b32", FRA="#7a5a8c", OTT="#8c6d3f", CAT="#8c3b3b";
  const MAD=[-3.70,40.42], PAR=[2.35,48.86], GHE=[3.72,51.05], AIX=[6.08,50.78], PAV=[9.16,45.19], ROM=[12.50,41.90], VIE=[16.37,48.21], TUN=[10.18,36.81], TRE=[11.12,46.07], MOH=[18.64,45.99], MILAN=[9.19,45.46], BES=[6.03,47.24], NAP=[14.27,40.85];
  const iberia=[[-9.8,36.0],[-9.4,38.8],[-8.8,41.8],[-7.4,43.6],[-4.5,43.8],[-1.4,43.4],[2.0,42.5],[3.2,41.2],[2.5,39.4],[0.4,38.3],[-2.2,36.3],[-5.6,36.0]];
  const lowCountries=[[2.6,50.0],[2.8,51.0],[3.2,51.8],[4.2,52.8],[5.6,53.4],[6.9,53.2],[7.2,52.1],[6.4,51.0],[5.4,50.2],[4.0,49.8]];
  const austria=[[9.6,46.4],[10.4,47.3],[11.3,47.8],[12.5,48.2],[13.9,48.3],[15.4,48.7],[16.8,48.5],[17.2,47.6],[16.0,46.6],[14.3,46.0],[12.6,46.0],[11.1,46.1]];
  const bohemia=[[12.0,48.7],[12.7,49.5],[13.7,50.2],[15.0,50.6],[16.4,50.4],[17.2,49.5],[16.7,48.7],[15.2,48.2],[13.6,48.2]];
  const tyrol=[[9.5,46.2],[10.4,47.1],[11.6,47.4],[12.5,47.2],[12.1,46.5],[10.8,46.1]];
  const royalHungary=[[16.3,47.0],[17.7,48.3],[19.6,48.8],[21.3,48.2],[22.1,47.0],[21.4,46.1],[19.6,45.7],[17.8,45.8]];
  const franche=[[5.5,46.2],[5.9,47.0],[6.4,47.6],[7.0,47.4],[7.1,46.6],[6.5,46.0]];
  const milanese=[[8.4,44.7],[8.8,45.4],[9.6,45.9],[10.5,45.7],[10.7,45.0],[10.0,44.5],[9.0,44.3]];
  const southItaly=[[12.0,37.2],[13.2,41.0],[15.4,41.6],[17.0,40.5],[16.0,38.7],[14.4,37.5]];
  const ottomanBalkans=[[18.0,41.2],[19.0,44.4],[18.7,45.4],[19.7,46.7],[21.0,47.3],[22.8,46.7],[24.4,45.4],[25.6,43.7],[26.2,41.7],[25.1,40.0],[23.1,39.2],[21.0,39.7],[19.3,40.3]];
  window.PLATES["charles-v-habsburg-valois-1519-1556"] = { id:"charles-v-habsburg-valois-1519-1556", title:"Charles V and the Habsburg-Valois world", head:"Age of Religious Discord / Empire of Charles V", folio:"32", viewer:"transition/1519/ch-charles-v-habsburg-valois", figures:[
    {caption:"Charles V's composite monarchy and rivals, 1519-1556", share:0.62, extent:[[-11,34],[28,56]], projection:"conic", layers:[
      {id:"spain",type:"area",clipToLand:true,tier:"core",colour:SPA,legend:"Spanish Habsburg lands",polygon:iberia,smooth:false},
      {id:"low-countries",type:"area",clipToLand:true,tier:"core",colour:HAB,legend:"Burgundian inheritance / Low Countries",polygon:lowCountries,smooth:false},
      {id:"austria",type:"area",clipToLand:true,tier:"core",colour:AUS,legend:"Austrian lands, Tyrol and Bohemia",polygon:austria,smooth:false},
      {id:"bohemia",type:"area",clipToLand:true,tier:"core",colour:AUS,polygon:bohemia,smooth:false},
      {id:"tyrol",type:"area",clipToLand:true,tier:"core",colour:AUS,polygon:tyrol,smooth:false},
      {id:"royal-hungary",type:"area",clipToLand:true,tier:"influence",colour:HUN,legend:"Royal Hungary after Mohacs",polygon:royalHungary,smooth:false},
      {id:"franche-comte",type:"area",clipToLand:true,tier:"core",colour:HAB,legend:"Franche-Comte",polygon:franche,smooth:false},
      {id:"milanese",type:"area",clipToLand:true,tier:"core",colour:MIL,legend:"Milanese after 1535",polygon:milanese,smooth:false},
      {id:"naples-sicily",type:"area",clipToLand:true,tier:"core",colour:SPA,legend:"Naples, Sicily and Sardinia",polygon:southItaly,smooth:false},
      {id:"ottoman-balkans",type:"area",clipToLand:true,tier:"core",colour:OTT,legend:"Ottoman Balkans and Hungary",polygon:ottomanBalkans,smooth:false},
      {id:"france-east-pressure",type:"boundary",style:"dashdot",colour:FRA,width:2.2,legend:"France pressed on Habsburg borders",path:[[2.5,50.5],[4.0,49.5],[5.7,47.8],[6.6,46.0],[7.6,44.7]]},
      {id:"lowcountry-pressure",type:"arrow",colour:FRA,width:2.6,legend:"Habsburg-Valois pressure",path:[GHE,[3.0,50.0],PAR]},
      {id:"italian-pressure",type:"arrow",colour:FRA,width:2.8,path:[PAR,[5.2,46.5],PAV]},
      {id:"spain-pressure",type:"arrow",colour:SPA,width:2.4,path:[[1.8,42.6],[-0.5,43.7],[-1.5,45.2]]},
      {id:"ottoman-arrow",type:"arrow",colour:OTT,width:3.0,legend:"Ottoman advance to Vienna",path:[[28.98,41.01],[22.0,44.8],MOH,VIE],label:"1526-29"},
      {id:"charles",type:"point",symbol:"monarch",at:GHE,name:"Ghent",labelPos:"nw",tag:{text:"1500",colour:"#f1c75b"}}, {id:"aachen",type:"point",symbol:"monarch",at:AIX,name:"Aachen",labelPos:"se",tag:{text:"1520",colour:"#f1c75b"}}, {id:"madrid",type:"point",symbol:"capital",at:MAD,name:"Madrid"}, {id:"besancon",type:"point",symbol:"large-city",at:BES,name:"Franche-Comte",labelPos:"w"}, {id:"milan",type:"point",symbol:"capital",at:MILAN,name:"Milan",labelPos:"ne",tag:{text:"1535",colour:"#f1c75b"}}, {id:"naples",type:"point",symbol:"capital",at:NAP,name:"Naples"}, {id:"pavia",type:"point",symbol:"battle",at:PAV,name:"Pavia",labelPos:"s",tag:{text:"1525",colour:"#e8806a"}}, {id:"rome-sack",type:"point",symbol:"destroyed",at:ROM,name:"Rome",tag:{text:"1527",colour:"#e8806a"}}, {id:"mohacs",type:"point",symbol:"battle",at:MOH,name:"Mohacs",tag:{text:"1526",colour:"#e8806a"}}, {id:"vienna",type:"point",symbol:"siege",at:VIE,name:"Vienna",tag:{text:"1529",colour:"#e8806a"}}, {id:"tunis",type:"point",symbol:"battle",at:TUN,name:"Tunis",tag:{text:"1535",colour:"#e8806a"}}
    ], legend:{position:"bottom-left",columns:1}},
    {kind:"diagram",caption:"Habsburg inheritance, Catholic renewal and the 1556 split", share:0.38, diagram:{height:0.58, compartments:[
      {id:"inheritance-frame",label:"Composite inheritance",x:0.04,y:0.05,w:0.92,h:0.35,colour:HAB,fill:"#f3e4be"},
      {id:"split-frame",label:"1556 split and Catholic renewal",x:0.04,y:0.50,w:0.92,h:0.35,colour:CAT,fill:"#f0dccb"}
    ], nodes:[
      {id:"burgundy",label:"Burgundy\nLow Countries",x:0.18,y:0.20,w:0.22,h:0.10,colour:HAB},
      {id:"spain-node",label:"Spain\nCastile-Aragon",x:0.43,y:0.20,w:0.22,h:0.10,colour:SPA},
      {id:"austria-node",label:"Austria\nBohemia-Hungary",x:0.68,y:0.20,w:0.24,h:0.10,colour:AUS},
      {id:"charles-node",label:"Charles V\n1519-1556",x:0.43,y:0.34,w:0.22,h:0.10,colour:HAB,strong:true},
      {id:"philip",label:"Philip II\nSpain, NL, Italy",x:0.20,y:0.66,w:0.23,h:0.11,colour:SPA,strong:true},
      {id:"ferdinand",label:"Ferdinand I\nAustria, Empire",x:0.48,y:0.66,w:0.23,h:0.11,colour:AUS,strong:true},
      {id:"trent",label:"Trent\nJesuits",x:0.77,y:0.66,w:0.20,h:0.11,colour:CAT}
    ], arrows:[
      {id:"burgundy-link",from:"burgundy",to:"charles-node",label:"1506",colour:HAB,labelAt:[0.28,0.31]}, {id:"spain-link",from:"spain-node",to:"charles-node",label:"1516",colour:SPA,labelAt:[0.38,0.28],via:[[0.37,0.26]]}, {id:"austria-link",from:"austria-node",to:"charles-node",label:"1519",colour:AUS,labelAt:[0.59,0.31]},
      {id:"philip-link",from:"charles-node",to:"philip",label:"abdicates",colour:SPA,labelAt:[0.27,0.48]}, {id:"ferdinand-link",from:"charles-node",to:"ferdinand",label:"imperial line",colour:AUS,labelAt:[0.49,0.50]}, {id:"trent-link",from:"ferdinand",to:"trent",label:"reform",colour:CAT,labelAt:[0.63,0.66]}
    ]}}
  ], text:{intro:"Charles V ruled a stack of inheritances rather than one tidy state. That made France feel encircled, tied Spain to Germany and Italy, and put Catholic renewal inside imperial politics.", sections:[
    {heading:"Composite empire", entries:[{date:"1516-1519",text:"Burgundy, Spain, Austria and the imperial title converge on Charles V, with the Low Countries, Franche-Comte, the Milanese and Naples making France the central rival.",refs:["spain","low-countries","austria","bohemia","tyrol","franche-comte","milanese","naples-sicily","charles","aachen","burgundy-link","spain-link","austria-link"]},{date:"1525-1529",text:"Pavia, the sack of Rome, Mohacs and Vienna show the same map under pressure: France, the papacy and the Ottomans all exploit the Habsburg system.",refs:["france-east-pressure","lowcountry-pressure","italian-pressure","spain-pressure","pavia","rome-sack","ottoman-balkans","ottoman-arrow","mohacs","vienna"]}]},
    {heading:"Renewal and split", entries:[{date:"1534-1563",text:"Ignatius of Loyola, the Jesuits and Trent rebuild Catholic discipline, schooling and missions without undoing the political rupture already on the map.",refs:["trent","trent-link"]},{date:"1556",text:"Charles's abdication divides the inheritance: Philip II takes Spain, the Netherlands and Italy; Ferdinand takes Austria and the imperial line.",refs:["philip","ferdinand","philip-link","ferdinand-link"]},{date:"1535",text:"Tunis shows Charles acting as Mediterranean crusader-king as well as German emperor and Spanish monarch.",refs:["tunis","ottoman-balkans"]}]}
  ]}, sources:["Penguin Atlas Vol. 1 pp. 237-240", "Approximate dynastic and strategic fields drawn from the Low Countries, Iberia, Franche-Comte, Milan, Austrian lands and Ottoman Hungary; coastlines and rivers: Natural Earth 1:50m"] };
})();
