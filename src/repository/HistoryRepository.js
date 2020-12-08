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
}) => {
    const history = await History.create({
        playTime,
        accountId,
        incenseId,
    });
    return history.dataValues;
};

export const saveImage = async ({historyId, imageUrl}) => {
    return await History.update({
        image: imageUrl,
    },
    {
        where: {
            id: {[Op.eq]: historyId},
        },
    });
};

export const findOneById = async (historyId) => {
    return History.findOne({
        where: {
            id: {[Op.eq]: historyId},
        },
    });
};

export const findAllByAccountId = async (accountId) => {
    return History.findAll({
        where: {
            accountId: {[Op.eq]: accountId},
        },
    });
};

export const getHistories = async ({
    accountId,
    from,
    to,
}) => {
    let where = {
        accountId: {[Op.eq]: accountId},
    };
    where = from ?
        where = {
            ...where,
            createdAt: {[Op.gt]: from},
        } : where;

    where = to ?
        where = {
            ...where,
            createdAt: {
                ...where.createdAt,
                [Op.lt]: to,
            },
        } : where;

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
        where: where,
        attributes: ['id', 'createdAt', 'playTime', 'image'],
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
