import {moduleLogger} from '@src/logger';
import {History_Tag} from '@src/model/entity/History_Tag';

const logger = moduleLogger('HistoryTagRepository');

export const saveHistoryTag = async ({
    historyId,
    tagId,
}) => {
    const historyTag = await History_Tag.create({
        historyId,
        tagId,
    });
    return historyTag.dataValues;
};
