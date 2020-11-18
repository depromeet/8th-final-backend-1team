import {Router} from 'express';
import * as Controller from './Controller';
import {validateParamMiddleware} from '@src/middleware/request-validate-middleware';
import {GetUserPathParameter} from '@src/routes/users/RequestValue';

const router = new Router();

router.get(
    '/:userId',
    validateParamMiddleware(null, GetUserPathParameter, null),
    Controller.getUser);

export default router;
