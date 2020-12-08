import {Router} from 'express';
import * as Controller from './Controller';
import memoRouter from './memos';

import {validateBearerToken} from '@src/middleware/jwtMiddleware';
import {validateParamMiddleware} from '@src/middleware/request-validate-middleware';
import {
    PostHistoryBodyParameter, DeleteHistoryPathParameter,
} from '@src/routes/histories/dto/HistoryRequest';

const router = new Router();

router.post(
    '/',
    validateBearerToken,
    validateParamMiddleware(PostHistoryBodyParameter, null, null),
    Controller.postHistory);

router.get(
    '/',
    validateBearerToken,
    Controller.getHistory);

router.delete(
    '/:historyId',
    validateParamMiddleware(null, DeleteHistoryPathParameter, null),
    Controller.deleteHistory);

router.use(
    '/:historyId/memos', memoRouter);

export default router;
