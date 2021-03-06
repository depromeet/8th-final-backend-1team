import {Op} from 'sequelize';
import {moduleLogger} from '@src/logger';
import {Memo} from '@src/model/entity/Memo';

const logger = moduleLogger('MemoRepository');

export const findOneById = async ({memoId, historyId}) => {
    return Memo.findOne({
        where: {
            id: {[Op.eq]: memoId},
            historyId: {[Op.eq]: historyId},
        },
    });
}

export const saveMemo = async ({
    title,
    detail,
    createdAt,
    updatedAt,
    historyId,
}) => {
    const memo = await Memo.create({
        title,
        detail,
        createdAt,
        updatedAt,
        historyId,
    });
    return memo.dataValues;
};

export const updateMemo = async ({historyId, memoId, title, detail, updatedAt}) => {
    return await Memo.update({
        title: title,
        detail: detail,
        updatedAt: updatedAt,
    },
    {
        where: {
            id: {[Op.eq]: memoId},
            historyId: {[Op.eq]: historyId},
        },
    });
};

export const deleteMemo = async ({historyId, memoId}) => {
    await Memo.destroy({
        where: {
            id: {[Op.eq]: memoId},
            historyId: {[Op.eq]: historyId},
        },
    });
};
