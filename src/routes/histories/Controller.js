import {moduleLogger} from '@src/logger';
import {objectToString} from '@src/util/conversion';
import * as HistoryService from '@src/service/history/HistoryService';
import {ApiResponse} from '@src/model/api/ApiResponse';

const logger = moduleLogger('HistoryController');

export const postHistory = async (req, res, next) => {
    logger.debug(`postHistory request start`);

    const historyInfo = req.body;
    historyInfo.accountId = req.accountId;

    logger.info(`postHistory request, { "historyInfo": ${objectToString(historyInfo)} }`);

    try {
        const {historyId} = await HistoryService.postHistory(historyInfo);

        logger.info(`postHisotry request success`);

        return res.status(200).json(new ApiResponse({historyId}));
    } catch (e) {
        next(e);
    }
};

export const postImage = async (req, res, next) => {
    logger.debug(`postImage request start`);

    const {historyId} = req.params;
    const imageInfo = req.file;
    const imageUrl = imageInfo.filename;

    logger.info(`postImage request, { "historyId": ${historyId}, "imageInfo": ${objectToString(imageInfo)} }`);

    try {
        await HistoryService.postImage({historyId, imageUrl});

        logger.info(`postHisotry request success`);

        return res.status(200).json(new ApiResponse());
    } catch (e) {
        next(e);
    }
};

export const getHistories = async (req, res, next) => {
    logger.debug(`getHistory request start`);

    const {accountId} = req;
    const {from, to} = req.query;

    logger.info(`getHistory request, { "accountId": ${accountId}, "from": ${from}, "to": ${to} }`);

    try {
        const histories = await HistoryService.getHistories({accountId, from, to});

        logger.info(`getHistories request success`);

        // 나중에 lastId 추가
        return res.status(200).json(new ApiResponse({histories}));
    } catch (e) {
        next(e);
    }
};

export const deleteHistory = async (req, res, next) => {
    logger.debug(`deleteHistory request start`);

    const {accountId} = req;
    const {historyId} = req.params;

    logger.info(`deleteHistory request, { "historyId": ${objectToString(historyId)} }`);

    try {
        await HistoryService.deleteHistory({
            accountId, historyId,
        });

        logger.info(`deleteHisotry request success`);

        return res.status(200).json(new ApiResponse({}));
    } catch (e) {
        next(e);
    }
};
