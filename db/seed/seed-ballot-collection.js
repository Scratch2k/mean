//mongo localhost:27017/ParkAnotherDay < seed-parks-collection.js
use ParkAnotherDay  //db name

db.ballots.remove({});
db.ballots.insert({"start_date":"2018-02-30T00:00:00.000Z","end_date":"2018-08-30T00:00:00.000Z","status":"closed"});
db.ballots.insert({"start_date":"2018-08-30T00:00:00.000Z","end_date":"2019-02-30T00:00:00.000Z","status":"closed"});
