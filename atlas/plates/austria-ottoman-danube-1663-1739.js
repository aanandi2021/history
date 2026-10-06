// Austria and the Ottoman frontier, round 13.
(function () {
  const HAB="#d8a84f", OTT="#8c6d3f", VEN="#2f7f86", POL="#6b8c3f", WAR="#8c3b3b", GAIN="#b36b2e";
  const VIE=[16.37,48.21], BUDA=[19.04,47.50], BEL=[20.46,44.81], ZEN=[20.08,45.42], KAR=[18.93,45.49], PET=[20.16,45.25], TEM=[21.22,45.75], MOH=[18.64,45.99], STG=[16.32,46.93], NIS=[21.90,43.32], SAR=[18.41,43.86], AZOV=[39.42,47.10], PASS=[21.08,44.93];
  const ottoman1683=[[15.5,45.5],[16.6,46.5],[17.8,47.3],[19.0,47.8],[21.0,48.2],[23.5,47.8],[25.5,47.0],[27.5,46.0],[29.0,44.5],[29.5,42.6],[27.2,41.4],[24.0,41.2],[21.2,42.0],[19.0,43.0],[17.2,44.2]];
  const habsburg1699=[[14.0,45.7],[15.0,47.2],[16.4,48.5],[18.0,48.8],[20.0,48.6],[22.3,48.0],[24.2,47.2],[25.2,46.2],[24.5,45.3],[22.2,45.2],[20.0,45.4],[18.2,45.8],[16.0,45.6]];
  const transylvania=[[21.2,45.4],[22.4,46.4],[24.5,47.0],[25.5,46.0],[24.8,45.0],[23.0,44.7]];
  const veniceMorea=[[20.4,36.4],[21.0,38.0],[22.6,38.4],[23.0,37.0],[22.0,36.2]];
  const passarowitz=[[19.4,44.6],[20.5,45.0],[22.0,45.3],[23.5,44.8],[24.0,43.8],[23.0,43.0],[21.4,43.0],[20.0,43.6]];
  const lost1739=[[20.0,43.6],[21.4,43.0],[23.0,43.0],[24.0,43.8],[23.8,44.6],[22.0,44.8],[20.5,44.5]];
  const karlowitzLine=[[16.1,45.8],MOH,BUDA,[21.5,46.0],[23.3,45.0],[24.2,44.1]];
  window.PLATES["austria-ottoman-danube-1663-1739"] = { id:"austria-ottoman-danube-1663-1739", title:"Austria and the Ottoman Danube frontier", head:"Age of Reason / Austria and the Ottoman Empire", folio:"37", viewer:"early-modern/1683/ch-austria-ottoman-danube", figures:[
    {caption:"The Ottoman high-water mark and the liberation of Hungary, 1663-1699", share:0.56, extent:[[12.5,41.0],[30.5,50.2]], projection:"conic", layers:[
      {id:"ottoman-frontier-1683",type:"area",clipToLand:true,tier:"core",colour:OTT,legend:"Ottoman Hungary and Balkans before 1683",polygon:ottoman1683,smooth:false},
      {id:"habsburg-hungary-1699",type:"area",clipToLand:true,tier:"core",colour:HAB,legend:"Austria after Karlowitz, 1699",polygon:habsburg1699,smooth:false},
      {id:"transylvania-gain",type:"area",clipToLand:true,pattern:"hatch",colour:HAB,legend:"Transylvania brought under Habsburg rule",polygon:transylvania,smooth:false},
      {id:"vienna-campaign",type:"arrow",colour:WAR,width:3,legend:"Kara Mustafa's advance and relief",path:[[28.98,41.01],[24.5,44.5],BUDA,VIE],label:"1683"},
      {id:"holy-league",type:"route",style:"dashed",weight:2.4,colour:POL,legend:"Holy League counteroffensive",path:[[21.01,52.23],VIE,BUDA,BEL,ZEN]},
      {id:"karlowitz-frontier",type:"boundary",style:"partition",colour:WAR,width:2,legend:"Karlowitz frontier",path:karlowitzLine},
      {id:"vienna",type:"point",symbol:"siege",at:VIE,name:"Vienna",labelPos:"nw",tag:{text:"1683",colour:"#e8806a"}}, {id:"st-gotthard",type:"point",symbol:"battle",at:STG,name:"St Gotthard",labelPos:"w",tag:{text:"1664",colour:"#f1c75b"}}, {id:"buda",type:"point",symbol:"fortress",at:BUDA,name:"Buda",labelPos:"ne",tag:{text:"1686",colour:"#f1c75b"}}, {id:"belgrade",type:"point",symbol:"fortress",at:BEL,name:"Belgrade",labelPos:"e",tag:{text:"1688",colour:"#f1c75b"}}, {id:"zenta",type:"point",symbol:"battle",at:ZEN,name:"Zenta",labelPos:"s",tag:{text:"1697",colour:"#f1c75b"}}, {id:"karlowitz",type:"point",symbol:"treaty",at:KAR,name:"Karlowitz",labelPos:"sw",tag:{text:"1699",colour:"#f1c75b"}}
    ], legend:{x:8,y:8,columns:1}},
    {caption:"Passarowitz and the unstable Habsburg-Ottoman border, 1716-1739", share:0.44, extent:[[12.5,36.0],[31.0,49.5]], projection:"conic", layers:[
      {id:"habsburg-core",type:"area",clipToLand:true,tier:"core",colour:HAB,legend:"Habsburg monarchy",polygon:habsburg1699,smooth:false},
      {id:"passarowitz-gains",type:"area",clipToLand:true,tier:"core",colour:GAIN,legend:"Banat, Serbia and Little Wallachia after 1718",polygon:passarowitz,smooth:false},
      {id:"venetian-morea",type:"area",clipToLand:true,tier:"influence",colour:VEN,legend:"Venetian Morea until 1715",polygon:veniceMorea,smooth:false},
      {id:"losses-1739",type:"area",clipToLand:true,pattern:"hatch",colour:OTT,legend:"Returned to Ottomans by 1739",polygon:lost1739,smooth:false},
      {id:"eugene-campaign",type:"route",style:"road",weight:2.8,colour:WAR,legend:"Prince Eugene's campaign",path:[VIE,PET,TEM,BEL,PASS]},
      {id:"ottoman-recovery",type:"arrow",colour:OTT,width:2.4,legend:"Ottoman recovery after 1739",path:[[28.98,41.01],NIS,BEL]},
      {id:"peterwardein",type:"point",symbol:"battle",at:PET,name:"Peterwardein",labelPos:"w",tag:{text:"1716",colour:"#f1c75b"}}, {id:"temesvar",type:"point",symbol:"fortress",at:TEM,name:"Temesvar",labelPos:"ne",tag:{text:"1716",colour:"#f1c75b"}}, {id:"belgrade-1717",type:"point",symbol:"fortress",at:BEL,name:"Belgrade",labelPos:"s",tag:{text:"1717",colour:"#e8806a"}}, {id:"passarowitz",type:"point",symbol:"treaty",at:PASS,name:"Passarowitz",labelPos:"e",tag:{text:"1718",colour:"#f1c75b"}}, {id:"sarajevo",type:"point",symbol:"large-city",at:SAR,name:"Sarajevo",labelPos:"s"}, {id:"azov",type:"point",symbol:"fortress",at:AZOV,name:"Azov",labelPos:"e",tag:{text:"1696",colour:"#f1c75b"}}
    ], legend:{position:"bottom-left",columns:1}}
  ], text:{intro:"The Ottoman-Habsburg frontier shifted from an Ottoman siege line at Vienna to an Austrian Danube monarchy, but the frontier stayed unstable after Passarowitz and Belgrade.", sections:[
    {heading:"Vienna to Karlowitz", entries:[{date:"1663-1683",text:"Ottoman power still reaches deep into central Europe: St Gotthard and Vasvar leave Hungary divided before Kara Mustafa's army comes to Vienna.",refs:["ottoman-frontier-1683","st-gotthard","vienna-campaign","vienna"]},{date:"1684-1699",text:"The Holy League counteroffensive takes Buda and Belgrade, wins at Zenta, and fixes a new Karlowitz frontier that makes Austria a major power.",refs:["holy-league","habsburg-hungary-1699","transylvania-gain","buda","belgrade","zenta","karlowitz-frontier","karlowitz"]}]},
    {heading:"A Danube monarchy", entries:[{date:"1716-1718",text:"Prince Eugene's victories at Peterwardein, Temesvar and Belgrade produce Passarowitz and Austria's greatest extension into the Banat, Serbia and Little Wallachia.",refs:["eugene-campaign","passarowitz-gains","peterwardein","temesvar","belgrade-1717","passarowitz"]},{date:"1739",text:"The later Treaty of Belgrade gives back much of the southern advance, showing that Austria's Danube frontier was a military border, not a finished national map.",refs:["losses-1739","ottoman-recovery","venetian-morea","azov"]}]}
  ]}, sources:["Penguin Atlas Vol. 1 pp. 262-265", "Approximate Ottoman, Austrian and Venetian changes after the Penguin map; coastlines and rivers: Natural Earth 1:50m"] };
})();
