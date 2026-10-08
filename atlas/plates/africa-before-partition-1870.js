(function(){
 const AFR="#7a6b42", TRADE="#5b4a3f", EUR="#2f5f93", WAR="#8c3b3b";
 window.PLATES["africa-before-partition-1870"]={id:"africa-before-partition-1870",title:"Africa before partition, c. 1870",head:"National states / Africa",folio:"96-97",viewer:"national/1870/ch-africa-before-partition",figures:[{caption:"States, coastal enclaves and trade routes before the scramble",share:1,extent:[[-20,-36],[50,24]],projection:"mercator",layers:[
  {id:"states",type:"area",hist:{year:1880,names:["Sokoto Caliphate","Tukular Caliphate","Asante","Dahomey","Liberia","Ethiopia","Egypt","Buganda","Kanem-Bornu","Sultanate of Zanzibar","Zululand","Transvaal","Orange Free State","Cape Colony","Natal"]},colour:AFR,tier:"core",legend:"African states, colonies and settler republics, c. 1870"},
  {id:"trans-saharan",type:"route",style:"road",weight:2.3,colour:TRADE,legend:"Trans-Saharan route",path:[[8.52,12.0],[13.18,18.54],[13.19,32.89]]},
  {id:"east-caravan",type:"route",style:"road",weight:2.3,colour:TRADE,legend:"East African caravan route",path:[[39.19,-6.16],[38.90,-6.44],[32.80,-5.02],[29.68,-4.90]]},
  {id:"atlantic-end",type:"route",style:"dotted",weight:2.2,colour:WAR,legend:"Atlantic slave-trade end-state coasts",path:[[2.09,6.36],[7.38,4.95],[8.32,4.98]]},
  {id:"stlouis",type:"point",symbol:"port",at:[-16.50,16.03],name:"St-Louis / Senegal"},
  {id:"lagos",type:"point",symbol:"port",at:[3.38,6.52],name:"Lagos 1861",labelPos:"e"},
  {id:"gold",type:"point",symbol:"port",at:[-1.24,5.10],name:"Gold Coast forts",labelPos:"s"},
  {id:"luanda",type:"point",symbol:"port",at:[13.23,-8.84],name:"Luanda"},
  {id:"moz",type:"point",symbol:"port",at:[40.74,-15.03],name:"Mozambique"},
  {id:"kano",type:"point",symbol:"capital",at:[8.52,12.00],name:"Kano / Sokoto"},
  {id:"dahomey",type:"point",symbol:"capital",at:[1.78,7.18],name:"Dahomey",labelPos:"w"},
  {id:"asante",type:"point",symbol:"capital",at:[-1.62,6.67],name:"Asante"},
  {id:"zanzibar",type:"point",symbol:"port",at:[39.19,-6.16],name:"Zanzibar"},
  {id:"ujiji",type:"point",symbol:"port",at:[29.68,-4.90],name:"Ujiji"},
  {id:"isandlwana",type:"point",symbol:"battle",at:[30.65,-28.36],name:"Isandlwana",tag:{text:"1879",colour:"#e8806a"}}
 ],legend:{position:"bottom-left",columns:1}}],text:{intro:"Africa before partition was not blank space. It contained states, city networks, religious reform polities, settler republics, long-distance commerce and slave-trading systems.",sections:[{heading:"Before the scramble",entries:[{date:"c. 1870",text:"The map uses historical 1880 shapes for Sokoto, Tukular, Asante, Dahomey, Liberia, Ethiopia, Egypt, Buganda, Kanem-Bornu, Zanzibar, Zululand, Transvaal, Orange Free State, Cape Colony and Natal.",refs:["states","kano","dahomey","asante","zanzibar","isandlwana"]},{date:"c. 1870",text:"Captives sold by states such as Dahomey, Asante and Sokoto were usually war captives or people from outside the polity. The economics shifted after British and U.S. abolition: Atlantic demand was suppressed, but internal slavery and Indian Ocean commerce continued, while palm oil and other 'legitimate commerce' expanded on parts of the coast.",refs:["atlantic-end","lagos","gold"]},{date:"c. 1870",text:"Trans-Saharan and East African caravan routes linked inland markets to Tripoli and Zanzibar/Bagamoyo without implying a single all-African route.",refs:["trans-saharan","east-caravan","ujiji"]}]}]},sources:["Penguin Atlas Vol. 2 pp. 96-97"]};
})();

