import Park from '../models/park.model';

/**
 * Load park and append to req.
 */
function load(req, res, next, id) {
  Park.get(id)
    .then((park) => {
      req.park = park; // eslint-disable-line no-param-reassign
      return next();
    })
    .catch(e => next(e));
}

/**
 * Get park list.
 * @property {number} req.query.skip - Number of users to be skipped.
 * @property {number} req.query.limit - Limit number of users to be returned.
 * @returns {Park[]}
 */
function list(req, res, next) {
  const { limit = 50, skip = 0 } = req.query;
  Park.list({ limit, skip })
    .then(parks => res.json(parks))
    .catch(e => next(e));
}

/**
 * Create new park
 * @property {string} req.body.floor
 * @property {string} req.body.park
 * @property {number} req.body.nom_cost
 * @property {number} req.body.all_cost
 * @property {object} req.attributes
 * @returns {Park}
 */
function create(req, res, next) {
  const park = new Park({
    floor: req.body.floor,
    park: req.body.park,
    nom_cost: req.body.nom_cost,
    all_cost: req.body.all_cost,
    attributes: req.body.attributes
  });

  park.save()
    .then(savedPark => res.json(savedPark))
    .catch(e => next(e));
}

/**
 * Update existing park
 * @property {string} req.body.floor - The floor of park.
 * @property {string} req.body.park - The park # of the park.
 * @property {number} req.body.nom_cost
 * @property {number} req.body.all_cost
 * @property {object} req.attributes
 * @returns {Park}
 */
function update(req, res, next) {
  const park = req.park;
  park.floor = req.body.floor;
  park.park = req.body.park;
  park.nom_cost = req.body.nom_cost;
  park.all_cost = req.body.all_cost;
  park.attributes = req.body.attributes;

  user.save()
    .then(savedPark => res.json(savedPark))
    .catch(e => next(e));
}

/**
 * Get park
 * @returns {Park}
 */
function get(req, res) {
  return res.json(req.park);
}

/**
 * Delete park.
 * @returns {Park}
 */
function remove(params) {
  const park = req.park;
  user.remove()
    .then(deletedPark => res.json(deletedPark))
    .catch(e => next(e));
}

export default { load, get, create, update, list, remove };
