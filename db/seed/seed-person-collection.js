//mongo localhost:27017/ParkAnotherDay < seed-person-collection.js
use ParkAnotherDay  //db name

db.personcollection.remove({});
db.personcollection.insert({"name":"Mayor McCheese","email":"mm@maccas.com.au","pass-no":"666","points-bal":100,"vehicles":[{"licence":"123456"},{"licence":"654321"}]});
db.personcollection.insert({"name":"Birdie","email":"bird@maccas.com.au","pass-no":"111","points-bal":500,"vehicles":[{"licence":"abcdef"},{"licence":"fedcba"}]});
db.personcollection.insert({"name":"Grimace","email":"grim_reaper@maccas.com.au","pass-no":"C5555","points-bal":0,"vehicles":[{"licence":"grim-234"}]});
db.personcollection.insert({"name":"Hamburglar","email":"black_and_white_stripes@maccas.com.au","pass-no":"C5555","points-bal":1,"vehicles":[{"licence":"1234567890"}]});
db.personcollection.insert({"name":"McBain","email":"bam-bam@springfield.com","pass-no":"666","points-bal":500,"vehicles":[{"licence":"sfslfiu324"}]});
