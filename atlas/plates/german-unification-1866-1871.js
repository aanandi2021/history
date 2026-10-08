(function(){
 const GER="#4f7f4f", PRUS="#2f5f93", AUS="#d8a84f", FRA="#8c3b3b", ROAD="#5b4a3f";
 window.PLATES["german-unification-1866-1871"]={id:"german-unification-1866-1871",title:"German unification and the Reich, 1866-1871",head:"National states / Germany",folio:"74-79",viewer:"national/1871/ch-german-unification",figures:[{caption:"Prussia excludes Austria and founds the Reich",share:1,extent:[[-1,45],[21,55.5]],projection:"conic",layers:[
  {id:"germany",type:"area",hist:{year:1878,names:["Germany"]},colour:GER,tier:"core",legend:"German Empire, 1871"},
  {id:"prussia-1815",type:"area",hist:{year:1815,names:["Prussia"]},pattern:"stripe",colour:PRUS,tier:"conquest",legend:"Prussian core before unification"},
  {id:"austria",type:"area",hist:{year:1878,names:["Austria Hungary"]},colour:AUS,tier:"influence",legend:"Austria-Hungary excluded"},
  {id:"france",type:"area",hist:{year:1878,names:["France"]},colour:FRA,tier:"influence",legend:"France after 1871"},
  {id:"war66",type:"route",style:"road",weight:2.5,colour:ROAD,legend:"Austro-Prussian War, 1866",path:[[13.40,52.52],[15.75,49.44],[16.37,48.21]]},
  {id:"war70",type:"route",style:"road",weight:2.5,colour:FRA,legend:"Franco-Prussian War, 1870-71",path:[[13.40,52.52],[6.18,49.12],[4.94,49.70],[2.12,48.80]]},
  {id:"berlin",type:"point",symbol:"capital",at:[13.40,52.52],name:"Berlin"},
  {id:"konig",type:"point",symbol:"battle",at:[15.75,49.44],name:"Koniggratz",tag:{text:"1866",colour:"#e8806a"}},
  {id:"sedan",type:"point",symbol:"battle",at:[4.94,49.70],name:"Sedan",tag:{text:"1870",colour:"#e8806a"}},
  {id:"versailles",type:"point",symbol:"capital",at:[2.12,48.80],name:"Versailles",tag:{text:"1871",colour:"#f1c75b"}}
 ],legend:{position:"bottom-left",columns:1}}],text:{intro:"German unification is a sequence of exclusions: Austria is pushed out in 1866, southern German states are drawn in during the French war, and the empire is proclaimed at Versailles.",sections:[{heading:"Wars of unification",entries:[{date:"1866",text:"Koniggratz ends the old Confederation and makes a Prussian-led north possible.",refs:["war66","konig","austria","prussia-1815"]},{date:"1870-1871",text:"War with France brings the southern states into the Reich and makes Alsace-Lorraine the new grievance.",refs:["war70","sedan","versailles","germany","france"]}]}]},sources:["Penguin Atlas Vol. 2 pp. 74-79"]};
})();
