// American civilizations on the eve of conquest, round 11.
(function () {
  const AZ="#d8a84f", IN="#7a5a8c", MAY="#6b8c3f", CH="#2f7f86", LINE="#5f4b8b";
  const TENO=[-99.13,19.43], MAYA=[-89.46,20.63], CUS=[-71.97,-13.53], CAJ=[-78.52,-7.16], BAC=[-74.08,4.71];
  window.PLATES["american-civilizations-1500"] = { id:"american-civilizations-1500", title:"American civilizations before conquest", head:"Age of Transition / Ancient American civilizations", folio:"30", viewer:"transition/1502/ch-american-civilizations", figures:[
    {caption:"Central America to 1520", share:0.47, extent:[[-112,7],[-78,24]], projection:"mercator", layers:[
      {id:"aztec",type:"area",clipToLand:true,tier:"core",colour:AZ,legend:"Aztec Empire",polygon:[[-104,16],[-101,21],[-97,21],[-95,18],[-98,15],[-102,15]],smooth:false},
      {id:"maya",type:"area",clipToLand:true,tier:"influence",colour:MAY,legend:"Maya cities and traditions",polygon:[[-92,14],[-89,21],[-84,21],[-86,16]],smooth:false},
      {id:"tarascan",type:"area",clipToLand:true,tier:"influence",colour:LINE,legend:"Autonomous rivals",polygon:[[-103,18],[-101,20],[-100,18],[-102,17]],smooth:false},
      {id:"tenochtitlan",type:"point",symbol:"capital",at:TENO,name:"Tenochtitlan",tag:{text:"1521",colour:"#e8806a"}}, {id:"mayapan",type:"point",symbol:"large-city",at:MAYA,name:"Mayapan"}, {id:"veracruz",type:"point",symbol:"port",at:[-96.13,19.20],name:"Veracruz"},
      {id:"cortes",type:"arrow",colour:"#4b4642",width:3,legend:"Cortes and allies, 1519",path:[[-96.13,19.20],[-98,19],TENO]}
    ], legend:{position:"bottom-left",columns:1}},
    {caption:"The Andes and northern South America, 1460-1532", share:0.53, extent:[[-83,-24],[-60,12]], projection:"mercator", layers:[
      {id:"inca",type:"area",clipToLand:true,tier:"core",colour:IN,legend:"Inca Empire",polygon:[[-79,0],[-76,1],[-72,-5],[-69,-15],[-71,-23],[-74,-18],[-77,-8]],smooth:false},
      {id:"chibcha",type:"area",clipToLand:true,tier:"influence",colour:CH,legend:"Chibcha / Muisca",polygon:[[-75,3],[-73,7],[-71,5],[-73,2]],smooth:false},
      {id:"andean-road",type:"route",style:"road",weight:2,colour:LINE,legend:"Inca road spine",path:[[-77,0],[-76,-7],CUS,[-72,-18]]},
      {id:"cusco",type:"point",symbol:"capital",at:CUS,name:"Cusco",tag:{text:"1533",colour:"#e8806a"}}, {id:"cajamarca",type:"point",symbol:"battle",at:CAJ,name:"Cajamarca",tag:{text:"1532",colour:"#e8806a"}}, {id:"bacata",type:"point",symbol:"large-city",at:BAC,name:"Bacata"}, {id:"quito",type:"point",symbol:"large-city",at:[-78.47,-0.18],name:"Quito"}
    ], legend:{position:"bottom-left",columns:1}}
  ], text:{intro:"The point is not one 'New World' civilization. The Aztec, Maya, Chibcha and Inca worlds use different political forms and landscapes.", sections:[
    {heading:"Mesoamerica", entries:[{date:"1502-21",text:"Moctezuma's Aztec Empire is a tribute power centred on Tenochtitlan; Cortes wins by alliance and siege, not by arriving alone.",refs:["aztec","tenochtitlan","cortes","veracruz"]},{text:"Maya cities and traditions continue in Yucatan after the Classic period, beside autonomous rivals such as the Tarascans.",refs:["maya","mayapan","tarascan"]}]},
    {heading:"Andes and Colombia", entries:[{date:"1460-1532",text:"The Inca Empire is a road-and-tribute state running along the Andes from Cusco toward Quito and Chile.",refs:["inca","andean-road","cusco","quito"]},{date:"1532-33",text:"Pizarro captures Atahualpa at Cajamarca and enters Cusco; Chibcha/Muisca chiefdoms remain a separate northern story.",refs:["cajamarca","chibcha","bacata"]}]}
  ]}, sources:["Penguin Atlas Vol. 1 pp. 222-223", "Approximate civilization fields; coastlines and rivers: Natural Earth 1:50m"] };
})();
