// Voyages of discovery and oceanic claims, round 11.
(function () {
  const POR="#2f7f86", SPA="#8c3b3b", LINE="#5f4b8b", AFR="#d8a84f";
  const LIS=[-9.14,38.72], CEU=[-5.32,35.89], VER=[-23.60,15.11], ELM=[-1.35,5.08], CAPE=[18.47,-34.36], MAL=[39.67,-4.05], CAL=[75.78,11.26], SEV=[-5.99,37.39], CAR=[-74.47,24.05], MEX=[-99.13,19.43], PAN=[-79.52,8.98], BRA=[-39,-16];
  window.PLATES["voyages-discovery-1415-1522"] = { id:"voyages-discovery-1415-1522", title:"Voyages of discovery and oceanic claims", head:"Age of Transition / Discoveries", folio:"29", viewer:"transition/1498/ch-voyages-discovery", figures:[
    {caption:"Portuguese and Spanish routes, 1415-1522", share:1, extent:[[-125,-38],[120,55]], projection:"mercator", layers:[
      {id:"africa-zone",type:"area",clipToLand:true,tier:"influence",colour:AFR,legend:"Known African trade zones",polygon:[[-18,32],[-5,35],[15,30],[35,12],[40,-10],[25,-32],[10,-35],[-5,-10],[-15,10]],smooth:false},
      {id:"portuguese-route",type:"route",style:"dashed",weight:3,colour:POR,legend:"Portuguese route to India",path:[LIS,CEU,VER,ELM,CAPE,MAL,CAL]},
      {id:"dias",type:"point",symbol:"treaty",at:CAPE,name:"Cape",tag:{text:"1488",colour:"#f1c75b"}}, {id:"gama",type:"point",symbol:"port",at:CAL,name:"Calicut",tag:{text:"1498",colour:"#f1c75b"}}, {id:"elmina",type:"point",symbol:"fortress",at:ELM,name:"Elmina",tag:{text:"1482",colour:"#f1c75b"}},
      {id:"columbus",type:"route",style:"dashed",weight:3,colour:SPA,legend:"Spanish Atlantic route",path:[SEV,CAR]},
      {id:"magellan",type:"route",style:"dashed",weight:2,colour:SPA,legend:"Magellan-Elcano crossing",path:[SEV,CAR,PAN,[-110,-15],[-90,-25]]},
      {id:"cabral",type:"route",style:"dashed",weight:2,colour:POR,legend:"Cabral to Brazil",path:[LIS,VER,BRA,CAPE]},
      {id:"tordesillas",type:"boundary",style:"meridian",colour:LINE,width:2.3,legend:"Tordesillas meridian, 1494",path:[[-46.6,-35],[-46.6,45]],dates:[[0.52,"1494"]]},
      {id:"lisbon",type:"point",symbol:"port",at:LIS,name:"Lisbon",labelPos:"nw"}, {id:"seville",type:"point",symbol:"port",at:SEV,name:"Seville",labelPos:"sw"}, {id:"caribbean",type:"point",symbol:"find",at:CAR,name:"Caribbean",tag:{text:"1492",colour:"#e8806a"}}, {id:"brazil",type:"point",symbol:"find",at:BRA,name:"Brazil",tag:{text:"1500",colour:"#e8806a"}}, {id:"tenochtitlan",type:"point",symbol:"large-city",at:MEX,name:"Tenochtitlan"}
    ], legend:{position:"bottom-left",columns:1}}
  ], text:{intro:"The map keeps two things separate: actual sailing routes, and the paper claim line that Spain and Portugal drew through the ocean.", sections:[
    {heading:"Portugal", entries:[{date:"1415-98",text:"Portugal works down the African coast through Ceuta, Cape Verde, Elmina and the Cape, then reaches Calicut.",refs:["portuguese-route","elmina","dias","gama","africa-zone"]},{date:"1500",text:"Cabral's outward Atlantic swing reaches Brazil before joining the route toward the Cape.",refs:["cabral","brazil"]}]},
    {heading:"Spain", entries:[{date:"1492",text:"Columbus reaches the Caribbean, opening the Spanish American conquest story rather than a route to Asia.",refs:["columbus","caribbean","tenochtitlan"]},{date:"1494-1522",text:"Tordesillas marks a treaty meridian; Magellan and Elcano prove the route can become planetary, at enormous human cost.",refs:["tordesillas","magellan"]}]}
  ]}, sources:["Penguin Atlas Vol. 1 pp. 220-225", "Approximate voyage tracks and treaty line; coastlines: Natural Earth 1:50m"] };
})();
