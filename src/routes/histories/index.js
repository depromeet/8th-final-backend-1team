import {Router} from 'express';
import * as Controller from './Controller';
import memoRouter from './memos';

import {upload} from '@src/middleware/multer-middleware';
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

router.post(
    '/:historyId/images',
    validateBearerToken,
    upload.single('image'),
    Controller.postImage);

router.get(
    '/',
    validateBearerToken,
    Controller.getHistory);

router.delete(
    '/:historyId',
    validateBearerToken,
    validateParamMiddleware(null, DeleteHistoryPathParameter, null),
    Controller.deleteHistory);

router.use(
    '/:historyId/memos', memoRouter);

export default router;
