import {Op} from 'sequelize';
import {moduleLogger} from '@src/logger';
import {History} from '@src/model/entity/History';
import {Incense} from '@src/model/entity/Incense';
import {Memo} from '@src/model/entity/Memo';
import {Tag} from '@src/model/entity/Tag';

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

export const getHistory = async (accountId) => {
    return await History.findAll({
        include: [{
            model: Incense,
            attributes: ['id', 'name', 'image', 'detail', 'categoryId'],
        },
        {
            model: Memo,
            attributes: ['id', 'title', 'detail'],
        },
        {
            model: Tag,
            attributes: ['id', 'name'],
            through: {
                attributes: [],
            },
        }],
        where: {
            accountId: {[Op.eq]: accountId},
        },
        attributes: ['id', 'createdAt', 'playTime'],
        order: [['createdAt', 'DESC']],
    });
};

export const deleteHistory = async (historyId) => {
    await History.destroy({
        where: {
            id: {[Op.eq]: historyId},
        },
    });
};