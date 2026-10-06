// The Seven Years' War, round 14.
(function () {
  const PRUS="#2f7f86", AUS="#d8a84f", FRA="#8c3b3b", BRIT="#7a5a8c", RUS="#6b8c3f", SAX="#b36b2e", WAR="#5b4a3f";
  const BER=[13.40,52.52], PRG=[14.42,50.08], ROS=[11.88,51.25], LEU=[16.16,51.05], ZOR=[14.70,52.65], KUN=[14.63,52.35], MIN=[8.92,52.29], KOL=[15.20,50.03], LON=[-0.13,51.51], PAR=[2.35,48.86], VIE=[16.37,48.21], PET=[30.31,59.94];
  const QUE=[-71.21,46.81], LOU=[-59.96,45.90], DUQ=[-79.99,40.44], MTL=[-73.56,45.50], BOS=[-71.06,42.36];
  const CAL=[88.36,22.57], PLA=[88.25,23.80], BUX=[84.05,25.56], MAD=[80.27,13.08], PON=[79.83,11.93];
  window.PLATES["seven-years-war-global-1756-1763"] = { id:"seven-years-war-global-1756-1763", title:"The Seven Years' War, 1756-1763", head:"Age of Reason / World war", folio:"41", viewer:"early-modern/1756/ch-seven-years-war-global", figures:[
    {caption:"Europe: Silesia, Saxony and the diplomatic revolution", share:0.42, extent:[[-2,47],[27,57]], projection:"conic", layers:[
      {id:"prussia",type:"area",tier:"core",colour:PRUS,legend:"Prussia and Silesia",regions:["DE-BB","DE-BE","DE-ST","PL-LB","PL-DS","PL-OP","PL-WP","PL-ZP","PL-PM"]},
      {id:"austria-coalition",type:"area",tier:"core",colour:AUS,legend:"Austria and Empire coalition",regions:["AUT","CZE","SVK","HUN","HRV","SVN","DE-BY","DE-BW"]},
      {id:"france",type:"area",tier:"influence",colour:FRA,legend:"France against Prussia",regions:["FRA"]},
      {id:"britain-hanover",type:"area",pattern:"hatch",colour:BRIT,legend:"Britain-Hanover",regions:["GBR","DE-NI","DE-HB","DE-HH"]},
      {id:"russia",type:"area",tier:"influence",colour:RUS,legend:"Russia and East Prussian pressure",regions:["RUS"]},
      {id:"saxony",type:"area",tier:"core",colour:SAX,legend:"Saxony, Prussian base after Pirna",regions:["DE-SN"]},
      {id:"frederick-lines",type:"route",style:"road",weight:2.6,colour:WAR,legend:"Frederick's interior lines",path:[BER,PRG,ROS,LEU,BER,ZOR,KUN]},
      {id:"western-army",type:"route",style:"dashed",weight:2.2,colour:BRIT,legend:"Ferdinand holds western Germany",path:[[4.9,50.6],[6.8,51.3],MIN]},
      {id:"rossbach",type:"point",symbol:"battle",at:ROS,name:"Rossbach",labelPos:"sw",tag:{text:"1757",colour:"#f1c75b"}}, {id:"leuthen",type:"point",symbol:"battle",at:LEU,name:"Leuthen",labelPos:"e",tag:{text:"1757",colour:"#f1c75b"}}, {id:"zorndorf",type:"point",symbol:"battle",at:ZOR,name:"Zorndorf",labelPos:"e",tag:{text:"1758",colour:"#f1c75b"}}, {id:"kunersdorf",type:"point",symbol:"battle",at:KUN,name:"Kunersdorf",labelPos:"s",tag:{text:"1759",colour:"#e8806a"}}, {id:"minden",type:"point",symbol:"battle",at:MIN,name:"Minden",labelPos:"n",tag:{text:"1759",colour:"#f1c75b"}}, {id:"hubertusburg",type:"point",symbol:"treaty",at:[12.92,51.25],name:"Hubertusburg",labelPos:"s",tag:{text:"1763",colour:"#f1c75b"}}
    ], legend:{position:"top-left",columns:1}},
    {caption:"North America: Canada won on the St Lawrence, 1754-1763", share:0.31, extent:[[-90,36],[-55,52]], projection:"conic", layers:[
      {id:"french-canada-war",type:"area",tier:"core",colour:FRA,legend:"French Canada and Ohio posts",regions:["CA-QC","CA-ON","CA-NB","CA-PE","US-OH","US-WV","US-MI"]},
      {id:"cape-breton",type:"area",tier:"core",colour:FRA,legend:"French Ile Royale / Cape Breton",polygon:[[-61.7,45.25],[-60.9,45.25],[-59.7,45.75],[-59.5,46.25],[-60.2,47.05],[-61.3,47.05],[-61.8,46.25]],clipToLand:true},
      {id:"british-seaboard",type:"area",tier:"core",colour:BRIT,legend:"British seaboard colonies",regions:["CA-NL","CA-NS","US-ME","US-NH","US-VT","US-MA","US-RI","US-CT","US-NY","US-NJ","US-PA","US-MD","US-DE","US-VA"]},
      {id:"louisbourg-quebec",type:"route",geo:true,style:"road",weight:2.8,colour:BRIT,legend:"British sea-borne advance",path:[BOS,[-66.0,42.8],[-61.8,44.2],LOU,[-60.4,47.3],[-64.2,48.8],[-68.5,49.0],QUE,MTL]},
      {id:"ohio-1758",type:"route",style:"dashed",weight:2.2,colour:WAR,legend:"Ohio advance to Fort Duquesne",path:[[-78.6,39.5],[-80.6,40.1],DUQ]},
      {id:"louisbourg",type:"point",symbol:"fortress",at:LOU,name:"Louisbourg",labelPos:"e",tag:{text:"1758",colour:"#f1c75b"}}, {id:"quebec",type:"point",symbol:"battle",at:QUE,name:"Quebec",labelPos:"w",tag:{text:"1759",colour:"#e8806a"}}, {id:"montreal",type:"point",symbol:"fortress",at:MTL,name:"Montreal",labelPos:"sw",tag:{text:"1760",colour:"#f1c75b"}}, {id:"duquesne",type:"point",symbol:"fortress",at:DUQ,name:"Fort Duquesne",labelPos:"s",tag:{text:"1758",colour:"#f1c75b"}}
    ], legend:{position:"bottom-left",columns:1}},
    {caption:"India: Plassey, Bengal revenue and the failure of French plans", share:0.27, extent:[[72,7],[91,27]], projection:"conic", layers:[
      {id:"british-bengal",type:"area",pattern:"hatch",colour:BRIT,legend:"British gains in Bengal by 1765",regions:["IN-WB","BD-C","BD-D","BD-E","IN-BR"]},
      {id:"french-losses",type:"area",pattern:"hatch",colour:FRA,legend:"French losses / restored enclaves",regions:["IN-PY","IN-TN"]},
      {id:"maratha-field",type:"area",tier:"influence",colour:SAX,legend:"Maratha and Deccan powers",regions:["IN-MH","IN-MP","IN-TG","IN-AP","IN-KA"]},
      {id:"clive",type:"route",style:"dashed",weight:2.4,colour:BRIT,legend:"Clive's Bengal campaign",path:[CAL,PLA,BUX]},
      {id:"calcutta",type:"point",symbol:"port",at:CAL,name:"Calcutta",labelPos:"e"}, {id:"plassey",type:"point",symbol:"battle",at:PLA,name:"Plassey",labelPos:"nw",tag:{text:"1757",colour:"#e8806a"}}, {id:"buxar",type:"point",symbol:"battle",at:BUX,name:"Buxar",labelPos:"nw",tag:{text:"1764",colour:"#f1c75b"}}, {id:"madras",type:"point",symbol:"port",at:MAD,name:"Madras",labelPos:"e"}, {id:"pondicherry",type:"point",symbol:"fortress",at:PON,name:"Pondicherry",labelPos:"s"}
    ], legend:{position:"bottom-left",columns:1}}
  ], text:{intro:"The Seven Years' War is the atlas's first fully global war: Silesia, Hanover, Canada, the Caribbean, Senegal and India all belong to the same fiscal and naval struggle.", sections:[
    {heading:"Europe", entries:[{date:"1756-1763",text:"Frederick strikes first in Saxony, survives coalition pressure by interior lines, and keeps Silesia at Hubertusburg.",refs:["prussia","saxony","austria-coalition","russia","frederick-lines","rossbach","leuthen","zorndorf","kunersdorf","hubertusburg"]},{date:"1757-1759",text:"Britain subsidizes Prussia and uses Hanoverian western Germany to hold France while the navy attacks overseas.",refs:["britain-hanover","france","western-army","minden"]}]},
    {heading:"Overseas", entries:[{date:"1758-1760",text:"Louisbourg, Quebec and Montreal break New France; Canada is won on the St Lawrence as much as in Silesia.",refs:["french-canada-war","cape-breton","british-seaboard","louisbourg-quebec","louisbourg","quebec","montreal","ohio-1758"]},{date:"1757-1765",text:"In India, Plassey and Buxar let the East India Company turn Bengal from trading theatre into revenue base, while French plans collapse.",refs:["british-bengal","french-losses","maratha-field","clive","plassey","buxar","pondicherry"]}]}
  ]}, sources:["Penguin Atlas Vol. 1 pp. 283-284", "Natural Earth admin-1 regions approximate war theatres and territorial fields"] };
})();
