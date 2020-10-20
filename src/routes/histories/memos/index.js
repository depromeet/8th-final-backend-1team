import {Router} from 'express';
import * as Controller from './Controller';

const router = new Router();

router.post(
    '/',
    Controller.postMemo);

router.put(
    '/:memoId',
    Controller.putMemo);

router.delete(
    '/:memoId',
    Controller.deleteMemo);

export default router;
