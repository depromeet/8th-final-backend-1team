import {moduleLogger} from '@src/logger';
import {objectToString} from '@src/util/conversion';
import {ApiResponse} from '@src/model/api/ApiResponse';

const logger = moduleLogger('MemoController');

export const postMemo = async (req, res, next) => {
    logger.debug(`postMemo request start`);

    // logger.info(`postMemo request, { "detail": ${objectToString(detail)} }`);

    try {
        // logger.info(`postMemo request success`);

        // return res.status(200).json(new ApiResponse({memoId}));
        return res.status(200).json(new ApiResponse({memoId: 1}));
    } catch (e) {
        next(e);
    }
};

export const putMemo = async (req, res, next) => {
    logger.debug(`putMemo request start`);

    // const {memoId} = req.params;
    // const {detail} = req.body;

    // logger.info(`putMemo request, { "detail": ${detail} }`);

    try {
        // logger.info(`putMemo request success`);

        // return res.status(200).json(new ApiResponse({memoId}));
        return res.status(200).json(new ApiResponse({memoId: 1}));
    } catch (e) {
        next(e);
    }
};

export const deleteMemo = async (req, res, next) => {
    logger.debug(`deleteMemo request start`);

    try {
        // logger.info(`deleteMemo request success`);

        return res.status(200).json(new ApiResponse({}));
    } catch (e) {
        next(e);
    }
};
