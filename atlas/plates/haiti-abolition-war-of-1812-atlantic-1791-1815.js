// Haiti, abolition and the War of 1812, Vol. 2 round 1.
(function () {
  const HAITI="#b36b2e", BRIT="#2f5f93", USA="#2f7f86", CAN="#b22d2d", IND="#8c6d3f", WAR="#8c3b3b", ROAD="#5b4a3f";
  const CAP=[-72.20,19.76], PORT=[-72.34,18.54], LON=[-0.13,51.51], WASH=[-77.04,38.90], DET=[-83.05,42.33], TOR=[-79.38,43.65], QUEEN=[-79.05,43.16], CHAT=[-73.75,45.13], GHENT=[3.72,51.05], BUEN=[-58.38,-34.60], CAR=[-66.90,10.48];
  window.PLATES["haiti-abolition-war-of-1812-atlantic-1791-1815"] = { id:"haiti-abolition-war-of-1812-atlantic-1791-1815", title:"Haiti, abolition and the War of 1812, 1791-1815", head:"Age of Revolution / Atlantic world", folio:"13-31", viewer:"revolution/1804/ch-haiti-abolition-atlantic", figures:[
    {caption:"Haiti and Atlantic abolition, 1791-1810", share:0.45, extent:[[-86,5],[-50,28]], projection:"mercator", layers:[
      {id:"saint-domingue",type:"area",tier:"core",colour:HAITI,legend:"Saint-Domingue / Haiti",regions:["HTI"]},
      {id:"caribbean-slavery",type:"area",pattern:"hatch",colour:BRIT,legend:"Caribbean plantation zone",regions:["JAM","CUB","DOM","BHS"]},
      {id:"haiti-rising",type:"route",style:"dashed",weight:2.4,colour:WAR,legend:"Haitian Revolution",path:[CAP,[-72.6,19.2],PORT]},
      {id:"atlantic-slave-route",type:"route",style:"dotted",geo:true,weight:2.2,colour:ROAD,legend:"Atlantic slave trade routes",path:[[-15,12],[-35,10],[-60,18],[-75,19]]},
      {id:"cap",type:"point",symbol:"insurrection",at:CAP,name:"Cap-Francais",labelPos:"e",tag:{text:"1791",colour:"#f1c75b"}}, {id:"port",type:"point",symbol:"capital",at:PORT,name:"Port-au-Prince",labelPos:"s",tag:{text:"1804",colour:"#f1c75b"}}, {id:"caracas",type:"point",symbol:"insurrection",at:CAR,name:"Caracas",labelPos:"e",tag:{text:"1810",colour:"#f1c75b"}}
    ], legend:{position:"bottom-left",columns:1}},
    {caption:"The War of 1812 in British North America", share:0.55, extent:[[-86,36],[-70,47]], projection:"conic", layers:[
      {id:"upper-canada",type:"area",tier:"core",colour:CAN,legend:"Upper and Lower Canada",regions:["CA-ON","CA-QC"]},
      {id:"us",type:"area",tier:"core",colour:USA,legend:"United States",regions:["US-MI","US-OH","US-NY","US-PA","US-MD","US-VA","US-LA"]},
      {id:"indigenous",type:"area",pattern:"crosshatch",colour:IND,legend:"Tecumseh's confederacy and allies",regions:["US-MI","US-OH","US-IN","CA-ON"]},
      {id:"us-attacks",type:"route",style:"dashed",weight:2.4,colour:USA,legend:"US attacks on Canada",path:[[-83.05,42.33],QUEEN,TOR,CHAT]},
      {id:"british-raids",type:"route",style:"dashed",weight:2.4,colour:BRIT,legend:"British and Canadian counterstrokes",path:[[ -79.06,43.15],DET,[-81.98,42.56],[-77.04,38.90]]},
      {id:"brock",type:"point",symbol:"battle",at:QUEEN,name:"Queenston Heights",labelPos:"e",tag:{text:"1812",colour:"#f1c75b"}}, {id:"detroit",type:"point",symbol:"fortress",at:DET,name:"Detroit",labelPos:"w",tag:{text:"1812",colour:"#f1c75b"}}, {id:"york",type:"point",symbol:"destroyed",at:TOR,name:"York",labelPos:"n",tag:{text:"1813",colour:"#e8806a"}}, {id:"thames",type:"point",symbol:"battle",at:[-81.98,42.56],name:"Thames",labelPos:"s",tag:{text:"1813",colour:"#e8806a"}}, {id:"chateauguay",type:"point",symbol:"battle",at:CHAT,name:"Chateauguay",labelPos:"e",tag:{text:"1813",colour:"#f1c75b"}}, {id:"ghent",type:"point",symbol:"treaty",at:GHENT,name:"Ghent",labelPos:"e",tag:{text:"1814",colour:"#f1c75b"}}
    ], legend:{position:"bottom-left",columns:1}}
  ], text:{intro:"The Atlantic plate puts three stories together: enslaved people make Haiti independent, Britain and the United States ban the overseas slave trade, and the War of 1812 tests Canada, Indigenous sovereignty and the young republic.", sections:[
    {heading:"Haiti and abolition", entries:[{date:"1791-1804",text:"The Haitian Revolution begins in Saint-Domingue, survives French intervention and declares independence in 1804 under a Black republic.",refs:["saint-domingue","haiti-rising","cap","port"]},{date:"1807-1810",text:"Britain abolishes the Atlantic slave trade in 1807, the United States ban takes effect in 1808, and Spanish American juntas begin from 1810.",refs:["caribbean-slavery","atlantic-slave-route","caracas"]}]},
    {heading:"Canada and the United States", entries:[{date:"1812-1814",text:"The War of 1812 brings Brock, Tecumseh, Queenston Heights, York, the Thames, Chateauguay and Ghent into the same northern border story.",refs:["upper-canada","us","indigenous","us-attacks","british-raids","brock","detroit","york","thames","chateauguay","ghent"]}]}
  ]}, sources:["Penguin Atlas Vol. 2 pp. 13, 15, 31", "Haiti and abolition are added as the necessary Atlantic lens around the book's North American and British pages"] };
})();
