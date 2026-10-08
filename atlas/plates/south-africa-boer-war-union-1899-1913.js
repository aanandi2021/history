(function(){
 const BRIT="#2f5f93", BOER="#d8a84f", PROT="#8cae7a", LAND="#8c3b3b", ROAD="#5b4a3f";
 const transkei=[[27.0,-32.6],[29.6,-32.1],[30.4,-31.1],[29.0,-30.5],[27.2,-31.2],[27.0,-32.6]];
 const ciskei=[[26.7,-33.1],[28.0,-32.9],[28.4,-32.2],[27.3,-32.0],[26.5,-32.5],[26.7,-33.1]];
 const zululand=[[30.0,-29.4],[31.7,-28.9],[31.6,-27.2],[30.4,-27.0],[29.8,-28.2],[30.0,-29.4]];
 const venda=[[29.5,-23.3],[31.0,-23.0],[31.3,-22.0],[30.0,-21.8],[29.2,-22.5],[29.5,-23.3]];
 const pedi=[[29.0,-25.2],[30.5,-25.0],[30.6,-24.2],[29.4,-24.0],[28.8,-24.6],[29.0,-25.2]];
 const tswana=[[23.0,-27.8],[25.2,-27.3],[25.1,-26.1],[23.4,-25.8],[22.5,-26.6],[23.0,-27.8]];
 window.PLATES["south-africa-boer-war-union-1899-1913"]={id:"south-africa-boer-war-union-1899-1913",title:"South Africa: Boer War, Union and land, 1899-1913",head:"Imperialism / South Africa",folio:"102-103",viewer:"imperial/1902/ch-south-africa-boer-war",figures:[{caption:"1899: British colonies, Boer republics and protectorates",share:0.50,extent:[[15,-36],[33,-21]],projection:"conic",layers:[
  {id:"cape",type:"area",hist:{year:1900,names:["Cape Colony","Natal"]},colour:BRIT,tier:"core",legend:"British colonies: Cape Colony and Natal"},
  {id:"boer",type:"area",hist:{year:1900,names:["Transvaal","Orange Free State"]},colour:BOER,tier:"core",legend:"Boer republics: ZAR and Orange Free State"},
  {id:"basuto",type:"area",hist:{year:1900,names:["Basutoland"]},colour:PROT,tier:"influence",legend:"British protectorate: Basutoland"},
  {id:"bechu",type:"point",symbol:"treaty",colour:PROT,at:[24.0,-24.5],name:"Bechuanaland Protectorate",labelPos:"w"},
  {id:"advance",type:"route",style:"road",weight:2.5,colour:ROAD,legend:"British advance, Feb-Jun 1900",path:[[18.42,-33.92],[24.76,-28.74],[26.22,-29.12],[28.04,-26.20],[28.19,-25.75]]},
  {id:"kimberley",type:"point",symbol:"siege",at:[24.76,-28.74],name:"Kimberley relieved",labelPos:"w",tag:{text:"Feb 1900",colour:"#e8806a"}},
  {id:"ladysmith",type:"point",symbol:"siege",at:[29.78,-28.56],name:"Ladysmith relieved",labelPos:"e",tag:{text:"Feb 1900",colour:"#e8806a"}},
  {id:"mafeking",type:"point",symbol:"siege",at:[25.64,-25.86],name:"Mafeking relieved",labelPos:"w",tag:{text:"May 1900",colour:"#e8806a"}},
  {id:"bloem",type:"point",symbol:"capital",at:[26.22,-29.12],name:"Bloemfontein",labelPos:"s",tag:{text:"Mar 1900",colour:"#f1c75b"}},
  {id:"johannesburg",type:"point",symbol:"city",at:[28.04,-26.20],name:"Johannesburg",labelPos:"s"},
  {id:"pretoria",type:"point",symbol:"capital",at:[28.19,-25.75],name:"Pretoria",labelPos:"n",tag:{text:"Jun 1900",colour:"#f1c75b"}},
  {id:"camp-bloem",type:"point",symbol:"power",colour:LAND,at:[26.22,-29.12],name:"camp: Bloemfontein",labelPos:"e"},
  {id:"camp-kroon",type:"point",symbol:"power",colour:LAND,at:[27.23,-27.65],name:"camp: Kroonstad",labelPos:"e"},
  {id:"camp-stand",type:"point",symbol:"power",colour:LAND,at:[29.24,-26.94],name:"camp: Standerton",labelPos:"e"}
 ],legend:{position:"bottom-left",columns:1}},{caption:"1910 Union and 1913 scheduled reserve areas",share:0.50,extent:[[15,-36],[33,-21]],projection:"conic",layers:[
  {id:"union",type:"area",hist:{year:1914,names:["South Africa"]},colour:BRIT,tier:"core",legend:"Union of South Africa, 1910"},
  {id:"reserve-transkei",type:"area",polygon:transkei,smooth:false,clipToLand:true,pattern:"hatch",colour:LAND,legend:"Scheduled reserves, 1913: scattered areas"},
  {id:"reserve-ciskei",type:"area",polygon:ciskei,smooth:false,clipToLand:true,pattern:"hatch",colour:LAND},
  {id:"reserve-zulu",type:"area",polygon:zululand,smooth:false,clipToLand:true,pattern:"hatch",colour:LAND},
  {id:"reserve-venda",type:"area",polygon:venda,smooth:false,clipToLand:true,pattern:"hatch",colour:LAND},
  {id:"reserve-pedi",type:"area",polygon:pedi,smooth:false,clipToLand:true,pattern:"hatch",colour:LAND},
  {id:"reserve-tswana",type:"area",polygon:tswana,smooth:false,clipToLand:true,pattern:"hatch",colour:LAND},
  {id:"cape-town",type:"point",symbol:"port",at:[18.42,-33.92],name:"Cape Town",labelPos:"e"},
  {id:"pretoria2",type:"point",symbol:"capital",at:[28.19,-25.75],name:"Pretoria",labelPos:"e"}
 ],legend:{position:"bottom-left",columns:1}} ],text:{intro:"South Africa links imperial war to a state structure that later hardened into apartheid.",sections:[{heading:"War and settlement",entries:[{date:"1899-1902",text:"In 1899 British Cape Colony and Natal faced the Transvaal and Orange Free State, with Basutoland filled from the 1900 historical layer and Bechuanaland marked as a protectorate label because the layer has no separate polygon. British columns relieved Kimberley, Ladysmith and Mafeking before taking Bloemfontein, Johannesburg and Pretoria.",refs:["cape","boer","basuto","bechu","advance","kimberley","ladysmith","mafeking","bloem","johannesburg","pretoria"]},{date:"1900-1902",text:"Concentration camps for Boer and African civilians are marked at Bloemfontein, Kroonstad and Standerton with a distinct camp symbol rather than battle marks.",refs:["camp-bloem","camp-kroon","camp-stand"]},{date:"1910-1913",text:"Union joins the four provinces under white political control; the Natives Land Act schedules scattered reserve areas including Transkei, Ciskei, Zululand, northern Transvaal and the Bechuanaland border.",refs:["union","reserve-transkei","reserve-ciskei","reserve-zulu","reserve-venda","reserve-pedi","reserve-tswana","cape-town","pretoria2"]}]}]},sources:["Penguin Atlas Vol. 2 pp. 102-103; historical-basemaps world_1900 and world_1914"]};
})();
