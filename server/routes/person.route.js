import express from 'express';
import validate from 'express-validation';
import paramValidation from '../config/param-validation';
import personCtrl from '../controllers/person.controller';

const router = express.Router();

router.route('/')
  /** GET /api/persons - Get list of persons */
  .get(personCtrl.list)
  .post(personCtrl.create)

  /** POST /api/persons - Create new person */
  //.post(validate(paramValidation.createPerson), personCtrl.create);

router.route('/:personId')
  /** GET /api/person/:personId - Get person */
  .get(personCtrl.get)

  /** PUT /api/persons/:personId - Update person */
  .put(validate(paramValidation.updatePerson), personCtrl.update)

  /** DELETE /api/persons/:personId - Delete person */
  .delete(personCtrl.remove);

/** Load person when API with personId route parameter is hit */
router.param('personId', personCtrl.load);

export default router;
