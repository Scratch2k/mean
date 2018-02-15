import express from 'express';
import validate from 'express-validation';
import paramValidation from '../config/param-validation';
import allocationCtrl from '../controllers/allocation.controller';

const router = express.Router();

router.route('/')
  /** GET /api/allocations - Get list of allocations */
  .get(allocationCtrl.list)

  /** POST /api/allocations - Create new allocation */
  .post(validate(paramValidation.createPost), allocationCtrl.create);

router.route('/:allocationId')
  /** GET /api/allocations/:allocationId - Get allocation */
  .get(allocationCtrl.get)

  /** PUT /api/allocations/:allocationId - Update allocation */
  .put(validate(paramValidation.updatePost), allocationCtrl.update)

  /** DELETE /api/allocations/:allocationId - Delete allocation */
  .delete(allocationCtrl.remove);

/** Load allocation when API with allocationId route parameter is hit */
router.param('allocationId', allocationCtrl.load);

export default router;
