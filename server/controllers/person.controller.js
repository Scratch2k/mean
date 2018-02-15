import Person from '../models/person.model';

/**
 * Load person and append to req.
 */
function load(req, res, next, id) {
  Person.get(id)
    .then((person) => {
      req.person = person; // eslint-disable-line no-param-reassign
      return next();
    })
    .catch(e => next(e));
}

/**
 * Get person
 * @returns {Person}
 */
function get(req, res) {
  return res.json(req.person);
}

/**
 * Create new person
 * @property {string} req.body.name - The name of person.
 * @property {string} req.body.email - The email address of person.
 * @property {string} req.body.pass_no - The pass number of person.
 * @property {number} req.body.points_bal - The points balance of person
 * @property {array} req.body.vehicles - The licence plate numbers for the person
 * @returns {Person}
 */
function create(req, res, next) {
  const person = new Person({
    name: req.body.name,
    email: req.body.email,
    pass_no: req.body.pass_no,
    points_bal: req.body.points_bal,
    vehicles: req.body.vehicles
  });

  person.save()
    .then(savedPerson => res.json(savedPerson))
    .catch(e => next(e));
}

/**
 * Update existing person
 * @property {string} req.body.name - The name of person.
 * @property {string} req.body.email - The email address of person.
 * @property {string} req.body.pass_no - The pass number of person.
 * @property {number} req.body.points_bal - The points balance of person
 * @property {array} req.body.vehicles - The licence plate numbers for the person
 * @returns {Person}
 */
function update(req, res, next) {
  const person = req.person;
  person.name = req.body.name;
  person.email = req.body.email;
  person.pass_no = req.body.pass_no;
  person.points_bal = req.body.points_bal;
  person.vehicles = req.body.vehicles;

  person.save()
    .then(savedPerson => res.json(savedPerson))
    .catch(e => next(e));
}

/**
 * Get person list.
 * @property {number} req.query.skip - Number of persons to be skipped.
 * @property {number} req.query.limit - Limit number of persons to be returned.
 * @returns {Person[]}
 */
function list(req, res, next) {
  const { limit = 50, skip = 0 } = req.query;
  Person.list({ limit, skip })
    .then(persons => res.json(persons))
    .catch(e => next(e));
}

/**
 * Delete person.
 * @returns {Person}
 */
function remove(req, res, next) {
  const person = req.person;
  person.remove()
    .then(deletedPerson => res.json(deletedPerson))
    .catch(e => next(e));
}

export default { load, get, create, update, list, remove };
