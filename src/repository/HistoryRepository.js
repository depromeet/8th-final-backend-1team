import {moduleLogger} from '@src/logger';
import {History} from '@src/model/entity/History';

const logger = moduleLogger('HistoryRepository');

export const saveHistory = async ({
    playTime,
    accountId,
    incenseId,
    createdAt,
}) => {
    const history = await History.create({
        playTime,
        accountId,
        incenseId,
        createdAt,
    });
    return history.dataValues;
};
