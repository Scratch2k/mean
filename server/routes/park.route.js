import express from 'express';
import validate from 'express-validation';
import paramValidation from '../config/param-validation';
import parkCtrl from '../controllers/park.controller';

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

router.route('/')
  /** GET /api/users - Get list of users */
  .get(parkCtrl.list).
  .post(parkCtrl.create)

router.route('/:parkId')
  /** GET /api/park/:parkId - Get park */
  .get(parkCtrl.get)

/** Load park when API with parkId route parameter is hit */
router.param('parkId', parkCtrl.load);

export default router;
