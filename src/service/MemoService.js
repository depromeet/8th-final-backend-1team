import {moduleLogger} from '@src/logger';
import {objectToString} from '@src/util/conversion';
import * as MemoRepository from '@src/repository/MemoRepository';
import * as HistoryRepository from '@src/repository/HistoryRepository';
import {
    NotFoundException,
    UnauthorizedException,
} from '@src/exception/CommonException';

const logger = moduleLogger('MemoService');

export const getMemo = async ({historyId, memoId, accountId}) => {
    const history = await HistoryRepository.findOneById(historyId);
    if (history.accountId !== accountId) {
        logger.error(`this account cannot delete this history, { "accountId": "${accountId}", "historyAccountId": "${history.accountId}" }`);
        throw new UnauthorizedException();
    }

    const memo = await MemoRepository.findOneById({memoId, historyId});
    if (!memo) {
        throw new NotFoundException('cannot find memo');
    }
    return {
        id: memo.id,
        title: memo.title,
        detail: memo.detail,
    };
};

export const postMemo = async ({historyId, title, detail, accountId}) => {
    logger.debug(`postMemo start, { "historyId": ${historyId}, "title": ${title}, "detail": ${detail} }`);

    const history = await HistoryRepository.findOneById(historyId);
    if (history.accountId !== accountId) {
        logger.error(`this account cannot delete this history, { "accountId": "${accountId}", "historyAccountId": "${history.accountId}" }`);
        throw new UnauthorizedException();
    }

    const savedMemo = await MemoRepository.saveMemo({
        title: title,
        detail: detail,
        historyId: historyId,
    });

    logger.info(`save Memo success, { "MemoInfo": ${objectToString(savedMemo)} }`);

    return {
        memoId: savedMemo.id,
        title: savedMemo.title,
    };
};

export const updateMemo = async ({historyId, memoId, title, detail, accountId}) => {
    logger.debug(`updateMemo start, { "historyId": ${historyId}, "memoId": ${memoId}, "detail": ${detail} }`);

    const history = await HistoryRepository.findOneById(historyId);
    if (history.accountId !== accountId) {
        logger.error(`this account cannot delete this history, { "accountId": "${accountId}", "historyAccountId": "${history.accountId}" }`);
        throw new UnauthorizedException();
    }

    await MemoRepository.updateMemo({
        historyId,
        memoId,
        title,
        detail,
    });

    logger.info(`updateMemo success, { "memoId": ${memoId} }`);

    return {memoId};
};

export const deleteMemo = async ({historyId, memoId, accountId}) => {
    logger.debug(`deleteMemo start, { "historyId": ${historyId}, "memoId": ${memoId} }`);

    const history = await HistoryRepository.findOneById(historyId);
    if (history.accountId !== accountId) {
        logger.error(`this account cannot delete this history, { "accountId": "${accountId}", "historyAccountId": "${history.accountId}" }`);
        throw new UnauthorizedException();
    }

    await MemoRepository.deleteMemo({historyId, memoId});

    logger.info(`deleteMemo success}`);
};
