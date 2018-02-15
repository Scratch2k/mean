import Allocation from '../models/allocation.model';

/**
 * Load allocation and append to req.
 */
function load(req, res, next, id) {
  Allocation.get(id)
    .then((allocation) => {
      req.allocation = allocation; // eslint-disable-line no-param-reassign
      return next();
    })
    .catch(e => next(e));
}

/**
 * Get allocation
 * @returns {Allocation}
 */
function get(req, res) {
  return res.json(req.allocation);
}

/**
 * Create new allocation
 * @returns {Allocation}
 */
function create(req, res, next) {
  const allocation = new Allocation({
    ballot: req.body.ballotId,
    person: req.body.personId,
    park : req.body.parkId
  });

  allocation.save()
    .then(savedAllocation => res.json(savedAllocation))
    .catch(e => next(e));
}

/**
 * Update existing allocation
 * @returns {Allocation}
 */
function update(req, res, next) {
  const allocation = req.allocation;
  allocation.ballot = req.body.ballotId;
  allocation.person = req.body.personId;
  allocation.park = req.body.parkId;

  allocation.save()
    .then(savedAllocation => res.json(savedAllocation))
    .catch(e => next(e));
}

/**
 * Get allocation list.
 * @returns {Allocation[]}
 */
function list(req, res, next) {
  const { limit = 50, skip = 0 } = req.query;
  Allocation.list({ limit, skip })
    .then(allocations => res.json(allocations))
    .catch(e => next(e));
}

/**
 * Delete allocation.
 * @returns {Allocation}
 */
function remove(req, res, next) {
  const allocation = req.allocation;
  allocation.remove()
    .then(deletedAllocation => res.json(deletedAllocation))
    .catch(e => next(e));
}

export default { load, get, create, update, list, remove };
