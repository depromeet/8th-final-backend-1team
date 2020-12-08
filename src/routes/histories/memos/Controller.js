import {moduleLogger} from '@src/logger';
import * as MemoService from '@src/service/MemoService';
import {ApiResponse} from '@src/model/api/ApiResponse';

const logger = moduleLogger('MemoController');

export const postMemo = async (req, res, next) => {
    logger.debug(`postMemo request start`);

    const {accountId} = req;
    const {historyId} = req.params;
    const {title, detail} = req.body;

    logger.info(`postMemo request, { "historyId": ${historyId}, "title": ${title}, "detail": ${detail} }`);

    try {
        const memoInfo = await MemoService.postMemo({historyId, title, detail, accountId});

        logger.info(`postMemo request success`);

        return res.status(200).json(new ApiResponse(memoInfo));
    } catch (e) {
        next(e);
    }
};

export const putMemo = async (req, res, next) => {
    logger.debug(`putMemo request start`);

    const {accountId} = req;
    const {historyId, memoId} = req.params;
    const {title, detail} = req.body;

    logger.info(`putMemo request, { "historyId": ${historyId}, "memoId": ${memoId}, "title": ${title}, "detail": ${detail} }`);

    try {
        const memoInfo = await MemoService.updateMemo({historyId, memoId, title, detail, accountId});

        logger.info(`putMemo request success`);

        return res.status(200).json(new ApiResponse({memoInfo}));
    } catch (e) {
        next(e);
    }
};

export const deleteMemo = async (req, res, next) => {
    logger.debug(`deleteMemo request start`);

    const {accountId} = req;
    const {historyId, memoId} = req.params;

    logger.info(`deleteMemo request, { "historyId": ${historyId}, "memoId": ${memoId} }`);

    try {
        await MemoService.deleteMemo({historyId, memoId, accountId});

        logger.info(`deleteMemo request success`);

        return res.status(200).json(new ApiResponse({}));
    } catch (e) {
        next(e);
    }
};
