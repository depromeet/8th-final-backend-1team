import {Router} from 'express';
import * as Controller from './Controller';

const router = new Router();

router.get(
    '/:userId',
    Controller.getUser);

export default router;
