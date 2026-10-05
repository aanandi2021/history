// Christianity and the migrations, written from general historical knowledge for the atlas renderer.
(function () {
  const R="#d66a4a", CH="#d8b84a", CH2="#e8903a", GOTH="#7a5a8c", HUN="#4b4642", VAND="#2f7f86", FR="#6f8f5f", SL="#79a85a", P="#6b8c3f";
  const JER=[35.23,31.78], ANT=[36.2,36.2], EPH=[27.34,37.94], COR=[22.93,37.94], ROME=[12.496,41.902], ALEX=[29.92,31.20], CAR=[10.31,36.85], MIL=[9.19,45.46], NIC=[29.72,40.43], CON=[28.98,41.01], ADR=[26.56,41.68], RAV=[12.20,44.42], TOUL=[1.44,43.60], HIP=[7.75,36.88], KIEV=[30.52,50.45], PRAG=[14.42,50.08], THES=[22.94,40.64];
  window.PLATES["christianity-migrations"] = {
    id:"christianity-migrations", title:"Christianity and the migrations, A.D. 300-700", head:"Late Antiquity / Church and peoples", folio:"11", viewer:"ancient/0395/ch-christianity-migrations",
    figures:[
      { caption:"Christianity as a network inside the empire", share:0.50, extent:[[-10,27],[43,55]], projection:"mercator", layers:[
        { id:"christian-325", type:"area", colour:CH2, opacity:0.38, pad:1.1, legend:"Strong Christian communities by Nicaea, 325", around:[JER,ANT,EPH,COR,ROME,ALEX,CAR,[7,44],[30,38]] },
        { id:"christian-600", type:"area", colour:CH, opacity:0.30, pad:1.6, legend:"Christianized regions by about 600", around:[[-5,40],[3,45],[12,47],[20,45],[29,42],[36,37],[31,31],[15,35],[5,36]] },
        { id:"paul-route", type:"route", style:"dashed", colour:"#111111", label:"Paul", legend:"Paul's journeys and route to Rome", path:[ANT,[33,35],EPH,COR,[21,36],ROME], head:true },
        { id:"africa-church", type:"arrow", colour:"#111111", width:4, label:"Africa", legend:"African and western centres", path:[ALEX,CAR,HIP,ROME] },
        { id:"balkan-mission", type:"arrow", colour:"#111111", width:4, legend:"Constantinople and Balkan mission field", path:[CON,THES,[19,44],[15,46]] },
        { id:"jerusalem", type:"point", symbol:"large-city", at:JER, name:"Jerusalem", labelPos:"e", legend:"Christian centre" },
        { id:"antioch", type:"point", symbol:"large-city", at:ANT, name:"Antioch", labelPos:"e" },
        { id:"ephesus", type:"point", symbol:"large-city", at:EPH, name:"Ephesus", labelPos:"s" },
        { id:"rome", type:"point", symbol:"capital", at:ROME, name:"Rome", labelPos:"e" },
        { id:"alexandria", type:"point", symbol:"large-city", at:ALEX, name:"Alexandria", labelPos:"e" },
        { id:"carthage", type:"point", symbol:"large-city", at:CAR, name:"Carthage", labelPos:"e" },
        { id:"milan", type:"point", symbol:"treaty", at:MIL, name:"Milan", labelPos:"n", tag:{text:"313", colour:"#f1c75b"}, legend:"Edict or council" },
        { id:"nicaea", type:"point", symbol:"conference", at:NIC, name:"Nicaea", labelPos:"e", tag:{text:"325", colour:"#f1c75b"} },
        { id:"constantinople", type:"point", symbol:"capital", at:CON, name:"Constantinople", labelPos:"e", tag:{text:"330", colour:"#f1c75b"} },
        { id:"hippo", type:"point", symbol:"bishopric", at:HIP, name:"Hippo", labelPos:"e", tag:{text:"Augustine", colour:"#f1c75b"} },
        { type:"label", style:"realm", colour:CH2, text:"Christian centres", at:[18,42.6], size:11 },
        { type:"label", style:"water", text:"Mediterranean", at:[11,34.0], size:9 }
      ], legend:{position:"bottom-left", columns:2} },
      { caption:"Peoples moving through the late Roman frontier", share:0.50, extent:[[-10,34],[35,57]], projection:"mercator", layers:[
        { id:"western-empire", type:"area", colour:R, opacity:0.26, pad:1.25, legend:"Western Roman framework", around:[[-5,38],[2,44],[7,49],[12,45],[18,45],[20,41],[16,37],[8,36]] },
        { id:"eastern-empire", type:"area", colour:"#e0a080", opacity:0.24, pad:1.25, legend:"Eastern Roman framework", around:[[18,40],[24,45],[30,43],[35,38],[32,34],[23,35]] },
        { id:"slavic-settlement", type:"area", tier:"influence", colour:SL, pad:1.5, legend:"Slavic settlement zones by about 700", around:[[14,50],[19,50],[24,49],[27,46],[23,43],[19,42],[16,45]] },
        { id:"franks", type:"area", tier:"influence", colour:FR, pad:1.0, legend:"Frankish kingdom", around:[[1,49],[4,50.5],[7,49.5],[8,47],[4,46],[1,47]] },
        { id:"huns", type:"arrow", colour:HUN, width:9, label:"Huns", date:"c. 375-451", legend:"Hun pressure", path:[[34,49],[29,47],[21,45],[11,48],[4.1,48.3]] },
        { id:"goths", type:"arrow", colour:GOTH, width:8, label:"Goths", date:"376-410", legend:"Gothic route", path:[[27.8,43.8],ADR,[20,43.5],[14,42.5],ROME,TOUL] },
        { id:"vandals", type:"arrow", colour:VAND, width:8, legend:"Vandal route, 406-455", path:[[7,50],[2,47],[-3,41],[-5,36],[2,35],CAR,ROME] },
        { id:"lombards", type:"arrow", colour:P, width:6, label:"Lombards", date:"568", legend:"Later Lombard move", path:[[14,47],[13,45],[10.5,44.5]] },
        { id:"partition", type:"boundary", style:"wall", colour:"#c58b32", side:"right", legend:"East-West imperial line after 395", path:[[18.5,47],[18.6,43.5],[19.2,40.5],[19.2,36.0]] },
        { id:"adrianople", type:"point", symbol:"battle", at:ADR, name:"Adrianople", labelPos:"e", tag:{text:"378", colour:"#e8806a"}, legend:"Battle" },
        { id:"rome410", type:"point", symbol:"destroyed", at:ROME, name:"Rome", labelPos:"e", tag:{text:"410/455", colour:"#e8806a"} },
        { id:"catalaunian", type:"point", symbol:"battle", at:[4.1,48.3], name:"Catalaunian Plains", labelPos:"w", tag:{text:"451", colour:"#e8806a"} },
        { id:"ravenna", type:"point", symbol:"capital", at:RAV, name:"Ravenna", labelPos:"e", tag:{text:"476", colour:"#f1c75b"} },
        { id:"constantinople2", type:"point", symbol:"capital", at:CON, name:"Constantinople", labelPos:"e" },
        { id:"prague", type:"point", symbol:"large-city", at:PRAG, name:"Prague", labelPos:"n" },
        { id:"kiev", type:"point", symbol:"large-city", at:KIEV, name:"Kiev", labelPos:"e" },
        { type:"label", style:"people", colour:SL, text:"Slavs", at:[22,47], size:12 },
        { type:"label", style:"people", colour:FR, text:"Franks", at:[5,49], size:9 },
      ], legend:{position:"bottom-left", columns:2} }
    ], text:{ intro:"Late antiquity was not just the fall of a western empire. A Christian network spread across the Roman world while Gothic, Vandal, Hun, Frankish and Slavic movements turned frontiers into settlement zones.", sections:[
      { heading:"A second network", entries:[
        { date:"45-61", text:"Paul's journeys made the eastern Mediterranean legible as a missionary route system from Antioch through Asia Minor and Greece to Rome.", refs:["paul-route","antioch","ephesus","rome"] },
        { date:"313-325", text:"Milan legalized Christianity; Nicaea tried to define belief for an imperial church.", refs:["milan","nicaea","christian-325"] },
        { date:"330-430", text:"Constantinople became a Christian capital, while African bishops such as Augustine made the western church intellectually powerful.", refs:["constantinople","africa-church","hippo","christian-600"] }
      ] },
      { heading:"Frontiers turn into kingdoms", entries:[
        { date:"376-410", text:"Gothic settlement inside the empire led to Adrianople and then Alaric's sack of Rome.", refs:["goths","adrianople","rome410"] },
        { date:"406-455", text:"Vandals crossed the Rhine, Spain and North Africa before using Carthage as a base against Rome.", refs:["vandals","rome410"] },
        { date:"451-568", text:"The Huns were checked in Gaul, while Franks, Lombards and Slavic settlement zones reshaped the post-Roman map.", refs:["huns","catalaunian","franks","lombards","slavic-settlement","prague","kiev"] },
        { date:"395-476", text:"The administrative split hardened after Theodosius. Ravenna's western court ended in 476, but Constantinople remained the centre of the eastern empire.", refs:["partition","ravenna","constantinople2","western-empire","eastern-empire"] }
      ] }
    ] }, sources:["General late-antique chronology; approximate settlement zones", "Coastlines and rivers: Natural Earth 1:50m"] };
})();
