import * as _ from 'fxjs';
import * as L from 'fxjs/Lazy';
import {moduleLogger} from '@src/logger';
import {objectToString} from '@src/util/conversion';
import * as HistoryRepository from '@src/repository/HistoryRepository';
import * as HistoryAndTagRepository from '@src/repository/HistoryAndTagRepository';
import {
    NotFoundException,
    UnauthorizedException,
} from '@src/exception/CommonException';

const logger = moduleLogger('HistoryService');

export const postHistory = async ({playTime, accountId, incenseId, tagIds}) => {
    logger.debug(`postHistory start playTime: ${playTime}, accountId: ${accountId}, incenseId: ${incenseId}`);

    const savedHistory = await HistoryRepository.saveHistory({
        playTime, accountId, incenseId,
    });

    logger.info(`save history success, { "historyInfo": ${objectToString(savedHistory)} }`);

    tagIds.map(async (tagId) => {
        await HistoryAndTagRepository.saveHistoryAndTag({
            historyId: savedHistory.id,
            tagId,
        });
    });

    logger.info(`save history and tag bridge success, { "history and tag": ${objectToString(savedHistory)} }`);

    logger.info(`postHistory success, { "historyInfo": ${objectToString(savedHistory)} }`);
    return {
        historyId: savedHistory.id,
    };
};

export const postImage = async ({historyId, imageUrl}) => {
    logger.debug(`postImage start, { "historyId": ${historyId}, "imageInfo": ${imageUrl} }`);

    await HistoryRepository.saveImage({historyId, imageUrl});

    logger.info(`postImage success`);
};

export const getHistories = async ({accountId, from, to}) => {
    logger.debug(`getHistory start, { "accountId": ${accountId} }`);

    const histories = await HistoryRepository.getHistories({accountId, from, to});

    if (!histories) {
        logger.error(`cannot find history info with accountId, { "accountId": "${accountId}" }`);
        throw new NotFoundException();
    }

    logger.info(`getHistory success, { "count of histories": ${histories.length} }`);

    return histories;
};

export const deleteHistory = async ({historyId, accountId}) => {
    logger.debug(`deleteHistory start, { "historyId": ${objectToString(historyId)} }`);

    const history = await HistoryRepository.findOneById(historyId);
    if (history.accountId !== accountId) {
        logger.error(`this account cannot delete this history, { "accountId": "${accountId}", "historyAccountId": "${history.accountId}" }`);
        throw new UnauthorizedException();
    }

    await HistoryRepository.deleteHistory(historyId);

    logger.info(`deleteHistory success}`);
};

export const getReportsData = async ({accountId}) => {
    const reportsData = await HistoryRepository.findAllByAccountId(accountId);

    const reportsResult = _.go(reportsData,
        _.groupBy((report) => report.incenseId),
        L.entries,
        L.map(([key, value]) => [key, value.length]),
        _.object,
    );

    logger.info(`getReportsData success, reports: ${reportsResult}`);

    return reportsResult;
};
