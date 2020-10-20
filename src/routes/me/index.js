import {Router} from 'express';
import * as Controller from './Controller';

const router = new Router();

router.get(
    '/',
    Controller.getMe);

router.put(
    '/',
    Controller.putMe);

export default router;
