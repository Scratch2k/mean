//mongo localhost:27017/ParkAnotherDay < seed-parks-collection.js
use ParkAnotherDay  //db name

db.parkcollection.remove({});
db.parkcollection.insert({"floor":"CPO","park":"001","nom-cost":"10","all-cost":"50", "attributes": { "pole":"0","motobike":"0","acrod":"0","tier":"bronze","prox":"near","lat":1.2,"lon":1.2,"reception":"good" }});
db.parkcollection.insert({"floor":"1","park":"100","nom-cost":"30","all-cost":"20", "attributes": { "pole":"0","motobike":"0","acrod":"0","tier":"gold","prox":"near","lat":1.3,"lon":1.3,"reception":"bad"  }});
db.parkcollection.insert({"floor":"2","park":"101","nom-cost":"40","all-cost":"10", "attributes": { "pole":"0","motobike":"0","acrod":"0","tier":"gold","prox":"far","lat":1.4,"lon":1.4,"reception":"good"  }});
db.parkcollection.insert({"floor":"3","park":"102","nom-cost":"50","all-cost":"10", "attributes": { "pole":"0","motobike":"0","acrod":"0","tier":"platinum","prox":"near","lat":1.5,"lon":1.5,"reception":"bad"  }});
db.parkcollection.insert({"floor":"4","park":"103","nom-cost":"20","all-cost":"10", "attributes": { "pole":"0","motobike":"0","acrod":"0","tier":"silver","prox":"far","lat":1.6,"lon":1.6,"reception":"good" }});
db.parkcollection.insert({"floor":"5","park":"104","nom-cost":"20","all-cost":"10", "attributes": { "pole":"0","motobike":"0","acrod":"0","tier":"silver","prox":"near","lat":1.7,"lon":1.7,"reception":"bad"  }});
