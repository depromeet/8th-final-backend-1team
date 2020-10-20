import {Router} from 'express';
import * as Controller from './Controller';
import memoRouter from './memos';

const router = new Router();

router.post(
    '/',
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
