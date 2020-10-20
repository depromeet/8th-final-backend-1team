import {Router} from 'express';
import authRouter from './auth';
import meRouter from './me';
import userRouter from './users';
import tagRouter from './tags';
// import reportRouter from './reports';
import incenseRouter from './incenses';
import recommendationRouter from './recommendations';
import historyRouter from './histories';

const router = new Router();

router.use('/auth', authRouter);
router.use('/me', meRouter);
router.use('/users', userRouter);
router.use('/tags', tagRouter);
// router.use('/reports', reportRouter);
router.use('/incenses', incenseRouter);
router.use('/recommendations', recommendationRouter);
router.use('/histories', historyRouter);

export default router;
