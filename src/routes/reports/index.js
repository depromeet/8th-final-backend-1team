import {Router} from 'express';
import * as Controller from './Controller';
import {validateBearerToken} from '@src/middleware/jwtMiddleware';

const router = new Router();

router.get(
    '/',
    validateBearerToken,
    Controller.getReports);

export default router;
