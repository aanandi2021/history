// Abbasid Baghdad and the House of Wisdom, round 7.
(function () {
  const IS="#6b8c3f", KNOW="#5b78a8", BYZ="#d66a4a", IND="#b36b2e", CHN="#8c5fb3", PER="#9a6a38", WATER="#5f9dc7", WALL="#7b6848";
  const BAG=[44.37,33.31], CON=[28.98,41.01], SAM=[66.98,39.65], GUN=[48.56,32.28], UJJ=[75.78,23.18], CHANG=[108.94,34.26], CORD=[-4.78,37.88], TOL=[-4.03,39.86];
  const circle=(cx,cy,r,n=96)=>Array.from({length:n+1},(_,i)=>{const a=2*Math.PI*i/n; return [cx+r*Math.cos(a),cy+r*Math.sin(a)];});
  window.PLATES["abbasid-baghdad"] = { id:"abbasid-baghdad", title:"Abbasid Baghdad: the Round City and the House of Wisdom", head:"Early Middle Ages / Islam", folio:"18", viewer:"medieval/0762/ch-abbasid-baghdad", figures:[
    { caption:"The Round City founded by al-Mansur, 762", share:0.55, extent:[[0,0],[100,80]], projection:"plan", base:{map:false,sea:"#fbf8f0"}, layers:[
      {id:"tigris",type:"route",style:"dashed",colour:WATER,width:5,legend:"Tigris",path:[[78,78],[74,65],[72,52],[75,36],[73,18],[70,2]]},
      {id:"sarat",type:"route",style:"road",colour:WATER,width:2.3,legend:"Sarat and Isa canals",path:[[18,52],[34,49],[50,45],[67,42],[75,39]]},
      {id:"isa",type:"route",style:"road",colour:WATER,width:2.3,path:[[17,28],[36,30],[53,33],[72,36]]},
      {id:"outer-wall",type:"boundary",style:"wall",colour:WALL,width:2.8,legend:"Round City walls",path:circle(48,40,25)},
      {id:"inner-wall",type:"boundary",style:"solid",colour:WALL,width:1.3,legend:"Inner palace ring",path:circle(48,40,10)},
      {id:"kufa-gate",type:"point",symbol:"fortress",at:[34,19],name:"Kufa Gate",legend:"Four gates"},
      {id:"basra-gate",type:"point",symbol:"fortress",at:[65,21],name:"Basra Gate"},
      {id:"khurasan-gate",type:"point",symbol:"fortress",at:[73,45],name:"Khurasan Gate"},
      {id:"syria-gate",type:"point",symbol:"fortress",at:[26,48],name:"Syria Gate"},
      {id:"palace",type:"point",symbol:"capital",at:[46,41.5],name:"Golden Gate palace",legend:"Palace and mosque",dx:-28},
      {id:"mosque",type:"point",symbol:"temple",at:[51,35],name:"Great Mosque"},
      {id:"karkh",type:"area",tier:"influence",colour:IS,legend:"Karkh market suburb",polygon:[[17,17],[31,15],[34,25],[25,33],[13,29]],smooth:false,clipToLand:false},
      {id:"wisdom",type:"point",symbol:"university",at:[61,47],name:"House of Wisdom",legend:"Translation centre",dx:22,dy:-10,tag:{text:"Bayt al-Hikma",colour:"#f1c75b"}},
      {id:"round-city-label",type:"label",style:"realm",text:"MADINAT AL-SALAM",at:[48,60],size:11}
    ], legend:{position:"bottom-left",columns:2} },
    { caption:"Knowledge flows through Baghdad", share:0.45, extent:[[-15,15],[115,55]], projection:"conic", layers:[
      {id:"abbasid-heart",type:"area",clipToLand:true,tier:"core",colour:IS,legend:"Abbasid heartland",polygon:[[30,28],[38,36],[47,36],[52,31],[48,25],[38,24]],smooth:false},
      {id:"greek",type:"arrow",colour:BYZ,width:3,legend:"Greek texts from Byzantium",path:[CON,[36,39],BAG],label:"Greek"},
      {id:"persian",type:"arrow",colour:PER,width:3,legend:"Persian learning from Gundeshapur",path:[GUN,[46,33.5],[43.5,34.2],BAG]},
      {id:"indian",type:"arrow",colour:IND,width:3,legend:"Indian numerals and astronomy",path:[UJJ,[62,28],BAG],label:"Indian numerals"},
      {id:"paper",type:"arrow",colour:CHN,width:3,legend:"Paper from China via Samarkand",path:[CHANG,[88,39],SAM,[55,37],BAG],label:"paper"},
      {id:"westward",type:"arrow",colour:KNOW,width:3,legend:"Onward to al-Andalus and Toledo",path:[BAG,[25,34],CORD,TOL],label:"to Toledo"},
      {id:"baghdad",type:"point",symbol:"capital",at:BAG,name:"Baghdad",tag:{text:"762",colour:"#f1c75b"}},
      {id:"constantinople",type:"point",symbol:"capital",at:CON,name:"Constantinople"}, {id:"samarkand",type:"point",symbol:"large-city",at:SAM,name:"Samarkand",tag:{text:"751",colour:"#f1c75b"}}, {id:"gundeshapur",type:"point",symbol:"university",at:GUN,name:"Gundeshapur"}, {id:"toledo",type:"point",symbol:"university",at:TOL,name:"Toledo"}
    ], legend:{position:"bottom-left",columns:1} }
  ], text:{ intro:"Baghdad was both a planned capital and a collecting house for knowledge moving across Eurasia.", sections:[
    {heading:"Round City", entries:[
      {date:"762", text:"Al-Mansur builds Madinat al-Salam, the Round City of Baghdad, on the Tigris. The plan makes power legible: circular walls, four axial gates, and the palace and mosque at the centre.", refs:["outer-wall","inner-wall","kufa-gate","basra-gate","khurasan-gate","syria-gate","palace","mosque","tigris"]},
      {date:"8th-9th c.", text:"Karkh grows outside the walls as a market suburb. The city is not just the neat circle; it is canals, trade, suburbs and court demand around it.", refs:["karkh","sarat","isa"]}
    ]},
    {heading:"House of Wisdom", entries:[
      {date:"8th-9th c.", text:"The House of Wisdom gathers translators, astronomers and mathematicians. Greek, Persian and Indian learning is pulled into Arabic scholarly culture.", refs:["wisdom","greek","persian","indian","constantinople","gundeshapur"]},
      {date:"751 onward", text:"Paper-making moves west after Talas and Samarkand. Indian numerals and astronomy reach Baghdad, then parts of this learning travel through al-Andalus and Toledo into Europe.", refs:["paper","samarkand","westward","toledo","baghdad"]}
    ]}
  ]}, sources:["Penguin Atlas Vol. 1 pp. 136-139", "Round City plan schematic after standard descriptions; city plan is diagrammatic, not a surveyed street map"] };
})();
