import {moduleLogger} from '@src/logger';
import {objectToString} from '@src/util/conversion';
import {sequelize} from '@src/database/Sequelize';
import * as MemoRepository from '@src/repository/MemoRepository';

const logger = moduleLogger('MemoService');

export const postMemo = async ({historyId, detail}) => {
    logger.debug(`postMemo start, { "historyId": ${historyId}, "detail": ${detail} }`);

    const savedMemo = await MemoRepository.saveMemo({
        title: 'title....?',
        detail: detail,
        createdAt: sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: sequelize.literal('CURRENT_TIMESTAMP'),
        historyId: historyId,
    });

    logger.info(`save Memo success, { "MemoInfo": ${objectToString(savedMemo)} }`);

    return {
        memoId: savedMemo.id,
    };
};

export const updateMemo = async ({historyId, memoId, detail}) => {
    logger.debug(`putMemo start, { "historyId": ${historyId}, "memoId": ${memoId}, "detail": ${detail} }`);

    await MemoRepository.updateMemo({historyId, memoId, detail});

    logger.info(`putMemo success, { "memoId": ${memoId} }`);

    return memoId;
};

export const deleteMemo = async ({historyId, memoId}) => {
    logger.debug(`deleteMemo start, { "historyId": ${historyId}, "memoId": ${memoId} }`);

    await MemoRepository.deleteMemo({historyId, memoId});

    logger.info(`deleteMemo success}`);
};
