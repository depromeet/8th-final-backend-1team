import {Router} from 'express';
import authRouter from './auth';

const router = new Router();

router.use('/auth', authRouter);

export default router;
