import {Router} from 'express';
import * as Controller from './Controller';
import {validateBearerToken} from '@src/middleware/jwtMiddleware';
import {validateParamMiddleware} from '@src/middleware/request-validate-middleware';
import {PutMeBodyParameter} from '@src/routes/me/RequestValue';

const router = new Router();

router.get(
    '/',
    validateBearerToken,
    Controller.getMe);

router.put(
    '/',
    validateBearerToken,
    validateParamMiddleware(PutMeBodyParameter, null, null),
    Controller.putMe);

export default router;
