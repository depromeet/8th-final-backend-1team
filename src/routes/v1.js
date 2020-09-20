import {Router} from 'express';
import sampleRouter from './sample';
import authRouter from './auth';

const router = new Router();

router.use('/sample', sampleRouter);
router.use('/auth', authRouter);

export default router;
