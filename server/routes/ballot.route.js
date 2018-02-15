import express from 'express';
import validate from 'express-validation';
import paramValidation from '../config/param-validation';
import ballotCtrl from '../controllers/ballot.controller';

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

router.route('/execute')
  .post(ballotCtrl.execute)

router.route('/')
  /** GET /api/ballot - Get list of ballots */
  .get(ballotCtrl.list)
  .post(ballotCtrl.create)

router.route('/:ballotId')
  /** GET /api/ballot/:ballotId - Get ballot */
  .get(ballotCtrl.get)
  .put(ballotCtrl.update)

/** Load park when API with parkId route parameter is hit */
router.param('ballotId', ballotCtrl.load);

export default router;
