import express from 'express';
import userRoutes from './user.route';
import authRoutes from './auth.route';
import postRoutes from './post.route';
import parkRoutes from './park.route';
import ballotRoutes from './ballot.route';
import personRoutes from './person.route';
import allocationRoutes from './allocation.route';

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

// mount user routes at /users
router.use('/users', userRoutes);

// mount auth routes at /auth
router.use('/auth', authRoutes);

router.use('/posts', postRoutes);

router.use('/park', parkRoutes);

router.use('/ballot', ballotRoutes);

router.use('/person', personRoutes);

router.use('/allocations', allocationRoutes);
export default router;
