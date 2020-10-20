import {Router} from 'express';
import * as Controller from './Controller';

const router = new Router();

router.get(
    '/',
    Controller.getRecommendation);

export default router;
