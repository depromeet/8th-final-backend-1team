import {moduleLogger} from '@src/logger';
import {History_Tag} from '@src/model/entity/History_Tag';

const logger = moduleLogger('HistoryAndTagRepository');

export const saveHistoryAndTag = async ({
    historyId,
    tagId,
}) => {
    const historyAndTag = await History_Tag.create({
        historyId,
        tagId,
    });
    return historyAndTag.dataValues;
};
