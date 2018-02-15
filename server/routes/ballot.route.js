import express from 'express';
import validate from 'express-validation';
import paramValidation from '../config/param-validation';
import ballotCtrl from '../controllers/ballot.controller';

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

router.route('/')
  /** GET /api/users - Get list of users */
  .get(ballotCtrl.list)
  .post(ballotCtrl.create)

router.route('/:ballotId')
  /** GET /api/park/:parkId - Get park */
  .get(ballotCtrl.get)

/** Load park when API with parkId route parameter is hit */
router.param('ballotId', ballotCtrl.load);

export default router;
