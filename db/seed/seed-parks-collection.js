//mongo localhost:27017/ParkAnotherDay < seed-parks-collection.js
use ParkAnotherDay  //db name

db.parks.remove({});
db.parks.insert({"floor":"CPO","park":"001","nom_cost":10,"all_cost":50, "attributes": { "pole":"0","edge":"0","motorbike":"0","acrod":"0","tier":"bronze","prox":"near","lat":1.2,"lon":1.2,"reception":"good" }});
db.parks.insert({"floor":"1","park":"100","nom_cost":30,"all_cost":20, "attributes": { "pole":"0","edge":"0","motorbike":"0","acrod":"0","tier":"gold","prox":"near","lat":1.3,"lon":1.3,"reception":"bad"  }});
db.parks.insert({"floor":"2","park":"101","nom_cost":30,"all_cost":10, "attributes": { "pole":"0","edge":"0","motorbike":"0","acrod":"0","tier":"gold","prox":"far","lat":1.4,"lon":1.4,"reception":"good"  }});
db.parks.insert({"floor":"3","park":"102","nom_cost":50,"all_cost":10, "attributes": { "pole":"0","edge":"0","motorbike":"0","acrod":"0","tier":"platinum","prox":"near","lat":1.5,"lon":1.5,"reception":"bad"  }});
db.parks.insert({"floor":"4","park":"103","nom_cost":20,"all_cost":10, "attributes": { "pole":"0","edge":"1","motorbike":"0","acrod":"0","tier":"silver","prox":"far","lat":1.6,"lon":1.6,"reception":"good" }});
db.parks.insert({"floor":"5","park":"104","nom_cost":20,"all_cost":10, "attributes": { "pole":"0","edge":"0","motorbike":"0","acrod":"0","tier":"silver","prox":"near","lat":1.7,"lon":1.7,"reception":"bad"  }});
