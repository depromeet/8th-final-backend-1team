import {moduleLogger} from '@src/logger';
import {objectToString} from '@src/util/conversion';
import {sequelize} from '@src/database/Sequelize';
import * as HistoryRepository from '@src/repository/HistoryRepository';
import * as HistoryAndTagRepository from '@src/repository/HistoryAndTagRepository';

const logger = moduleLogger('HistoryService');

export const postHistory = async (historyInfo) => {
    logger.debug(`postHistory start, { "historyInfo": ${objectToString(historyInfo)} }`);

    const savedHistory = await HistoryRepository.saveHistory({
        playTime: historyInfo.playTime,
        accountId: historyInfo.accountId,
        incenseId: historyInfo.incenseId,
        createdAt: sequelize.literal('CURRENT_TIMESTAMP'),
    });

    logger.info(`save history success, { "historyInfo": ${objectToString(savedHistory)} }`);

    const tagIds = historyInfo.tagIds;
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

    // return thumbnail
};

export const getHistory = async (accountId) => {
    logger.debug(`getHistory start, { "accountId": ${accountId} }`);

    const histories = await HistoryRepository.getHistory(accountId);

    if (!histories) {
        logger.error(`cannot find history info with accountId, { "accountId": "${accountId}" }`);
        throw new NotFoundException();
    }

    logger.info(`getHistory success, { "count of histories": ${histories.length} }`);

    return histories;
};

export const deleteHistory = async (historyId) => {
    logger.debug(`deleteHistory start, { "historyId": ${objectToString(historyId)} }`);

    await HistoryRepository.deleteHistory(historyId);

    logger.info(`deleteHistory success}`);
};
