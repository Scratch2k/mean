import Ballot from '../models/ballot.model';

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

export default { load, get, create, update, list, remove };
