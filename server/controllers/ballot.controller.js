import Ballot from '../models/ballot.model';
import Park from '../models/park.model';
import Person from '../models/person.model';
import Allocation from '../models/allocation.model';

/**
 * Load ballot and append to req.
 */
function load(req, res, next, id) {
  Ballot.get(id)
    .then((ballot) => {
      req.ballot = ballot; // eslint-disable-line no-param-reassign
      return next();
    })
    .catch(e => next(e));
}

/**
 * Get ballot list.
 * @property {number} req.query.skip - Number of ballots to be skipped.
 * @property {number} req.query.limit - Limit number of ballots to be returned.
 * @returns {Ballot[]}
 */
function list(req, res, next) {
  const { limit = 50, skip = 0 } = req.query;
  Ballot.list({ limit, skip })
    .then(ballots => res.json(ballots))
    .catch(e => next(e));
}

/**
 * Create new ballot
 * @property {date} req.body.start_date
 * @property {date} req.body.end_date
 * @property {string} req.body.status
 * @returns {Ballot}
 */
function create(req, res, next) {
  const ballot = new Ballot({
    start_date: req.body.start_date,
    end_date: req.body.end_date,
    status: req.body.status
  });

  ballot.save()
    .then(savedBallot => res.json(savedBallot))
    .catch(e => next(e));
}

/**
 * Update existing ballot
 * @property {date} req.body.start_date
 * @property {date} req.body.end_date
 * @property {string} req.body.status
 * @returns {Ballot}
 */
function update(req, res, next) {
  const ballot = req.ballot;
  ballot.start_date = req.body.start_date;
  ballot.end_date = req.body.end_date;
  ballot.status = req.body.status;

  ballot.save()
    .then(savedBallot => res.json(savedBallot))
    .catch(e => next(e));
}

/**
 * Get ballot
 * @returns {Ballot}
 */
function get(req, res) {
  return res.json(req.ballot);
}

/**
 * Delete ballot.
 * @returns {Ballot}
 */
function remove(params) {
  const ballot = req.ballot;
  ballot.remove()
    .then(deletedBallot => res.json(deletedBallot))
    .catch(e => next(e));
}

function execute(req, res, next) {
  const { limit = 50, skip = 0 } = req.query;
  var p, pe;
  Park.list({ limit, skip })
    .then(parks => {
      p = parks
      Person.list({ limit, skip})
        .then(people => {
          pe = people

          var jsonObj = [];
          var personIndex;
          var count = Math.min(parks.length, people.length);
          for (let i = 0; i < count; i++) {
              personIndex  = Math.floor((Math.random() * people.length));
              jsonObj.push({"personId":people[personIndex].id,"parkId":parks[i].id});
              people.splice(personIndex,1);
          }

          for (var index in jsonObj) {
            var obj = jsonObj[index];
            var allocation = new Allocation({
              ballot: '5a850517a4a7c8597e2d26c1',
              person: obj.personId,
              park : obj.parkId
            });

            allocation.save()
              .catch(e => next(e));
          }

          return res.json({"result":"success", "allocations": jsonObj});
        });
    });
}

export default { load, get, create, update, list, remove, execute };
