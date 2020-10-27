import {Router} from 'express';
import * as Controller from './Controller';
import memoRouter from './memos';

import {validateParamMiddleware} from '@src/middleware/request-validate-middleware';
import {
    HistoryRequest,
} from '@src/routes/histories/dto/HistoryRequest';

const router = new Router();

router.post(
    '/',
    validateParamMiddleware(HistoryRequest),
    Controller.postHistory);

router.get(
    '/',
    Controller.getHistory);

router.delete(
    '/:historyId',
    Controller.deleteHistory);

router.use(
    '/:historyId/memos', memoRouter);

export default router;
