import {moduleLogger} from '@src/logger';
import * as MemoService from '@src/service/MemoService';
import {ApiResponse} from '@src/model/api/ApiResponse';

const logger = moduleLogger('MemoController');

export const postMemo = async (req, res, next) => {
    logger.debug(`postMemo request start`);

    const {historyId} = req.params;
    const {detail} = req.body;

    logger.info(`postMemo request, { "historyId": ${historyId}, "detail": ${detail} }`);

    try {
        const {memoId} = await MemoService.postMemo({historyId, detail});

        logger.info(`postMemo request success`);

        return res.status(200).json(new ApiResponse({memoId}));
    } catch (e) {
        next(e);
    }
};

export const putMemo = async (req, res, next) => {
    logger.debug(`putMemo request start`);

    const {historyId, memoId} = req.params;
    const {detail} = req.body;

    logger.info(`putMemo request, { "historyId": ${historyId}, "memoId": ${memoId}, "detail": ${detail} }`);

    try {
        const memoInfo = await MemoService.updateMemo({historyId, memoId, detail});

        logger.info(`putMemo request success`);

        return res.status(200).json(new ApiResponse({memoInfo}));
    } catch (e) {
        next(e);
    }
};

export const deleteMemo = async (req, res, next) => {
    logger.debug(`deleteMemo request start`);

    const {historyId, memoId} = req.params;

    logger.info(`deleteMemo request, { "historyId": ${historyId}, "memoId": ${memoId} }`);

    try {
        await MemoService.deleteMemo({historyId, memoId});

        logger.info(`deleteMemo request success`);

        return res.status(200).json(new ApiResponse({}));
    } catch (e) {
        next(e);
    }
};
