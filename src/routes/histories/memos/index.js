import {Router} from 'express';
import * as Controller from './Controller';

import {validateParamMiddleware} from '@src/middleware/request-validate-middleware';
import {
    MemoBodyParameter, PostMemoPathParameter, MemoPathParameter,
} from '@src/routes/histories/memos/RequestValue';
import {validateBearerToken} from '@src/middleware/jwtMiddleware';

const router = new Router({mergeParams: true});

router.post(
    '/',
    validateBearerToken,
    validateParamMiddleware(MemoBodyParameter, PostMemoPathParameter, null),
    Controller.postMemo);

router.put(
    '/:memoId',
    validateBearerToken,
    validateParamMiddleware(MemoBodyParameter, MemoPathParameter, null),
    Controller.putMemo);

router.delete(
    '/:memoId',
    validateParamMiddleware(null, MemoPathParameter, null),
    Controller.deleteMemo);

export default router;
