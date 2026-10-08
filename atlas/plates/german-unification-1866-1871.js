(function(){
 const GER="#4f7f4f", PRUS="#2f5f93", ANN="#5f9ea0", AUS="#d8a84f", FRA="#8c3b3b", ROAD="#5b4a3f";
 window.PLATES["german-unification-1866-1871"]={id:"german-unification-1866-1871",title:"German unification and the Reich, 1866-1871",head:"National states / Germany",folio:"74-79",viewer:"national/1871/ch-german-unification",figures:[{caption:"Prussia excludes Austria and founds the Reich",share:1,extent:[[-2,42],[24,57]],projection:"conic",layers:[
  {id:"reich",type:"area",hist:{year:1880,names:["Germany"]},colour:GER,tier:"core",legend:"German Empire, 1871"},
  {id:"prussia-1815",type:"area",hist:{year:1815,names:["Prussia"]},colour:PRUS,tier:"conquest",legend:"Prussian core before 1866"},
  {id:"annex",type:"area",pattern:"hatch",colour:ANN,legend:"Prussian annexations, 1866",hist:{year:1815,names:["Hanover","Electoral Hesse","Nassau","Schleswig"]}},
  {id:"holstein-frankfurt",type:"area",pattern:"hatch",colour:ANN,regions:["DE-SH","DE-HH","DE-HE"],legend:"Schleswig-Holstein, Frankfurt and Hesse-Nassau zone"},
  {id:"austria",type:"area",hist:{year:1880,names:["Austria Hungary"]},colour:AUS,tier:"influence",legend:"Austria-Hungary excluded"},
  {id:"france",type:"area",hist:{year:1880,names:["France"]},colour:FRA,tier:"influence",legend:"France after Alsace-Lorraine loss"},
  {id:"alsace",type:"area",regions:["FR-67","FR-68","FR-57"],pattern:"crosshatch",colour:GER,legend:"Alsace-Lorraine annexed, 1871"},
  {id:"war66",type:"route",style:"road",weight:2.5,colour:ROAD,legend:"Austro-Prussian War, 1866",path:[[13.40,52.52],[15.83,50.28],[16.37,48.21]]},
  {id:"war70",type:"route",style:"road",weight:2.5,colour:FRA,legend:"Franco-Prussian War, 1870-71",path:[[13.40,52.52],[6.18,49.12],[4.94,49.70],[2.12,48.80]]},
  {id:"berlin",type:"point",symbol:"capital",at:[13.40,52.52],name:"Berlin"},
  {id:"sadowa",type:"point",symbol:"battle",at:[15.83,50.28],name:"Sadowa / Koniggratz",labelPos:"e",tag:{text:"1866",colour:"#e8806a"}},
  {id:"metz",type:"point",symbol:"battle",at:[6.18,49.12],name:"Metz",labelPos:"s"},
  {id:"sedan",type:"point",symbol:"battle",at:[4.94,49.70],name:"Sedan",labelPos:"w",tag:{text:"1870",colour:"#e8806a"}},
  {id:"versailles",type:"point",symbol:"capital",at:[2.12,48.80],name:"Versailles",labelPos:"w",tag:{text:"1871",colour:"#f1c75b"}}
 ],legend:{position:"bottom-left",columns:1}}],text:{intro:"German unification is a sequence of exclusions and annexations: Austria is pushed out in 1866, Prussia absorbs northern states, southern German states enter during the French war, and Alsace-Lorraine is annexed after 1871.",sections:[{heading:"Wars of unification",entries:[{date:"1866",text:"Sadowa/Koniggratz ends the old Confederation and is followed by Prussian annexations in the north.",refs:["war66","sadowa","austria","prussia-1815","annex","holstein-frankfurt"]},{date:"1870-1871",text:"War with France brings the southern states into the Reich; Alsace-Lorraine becomes the new grievance.",refs:["war70","metz","sedan","versailles","reich","alsace","france"]}]}]},sources:["Penguin Atlas Vol. 2 pp. 74-79"]};
})();
