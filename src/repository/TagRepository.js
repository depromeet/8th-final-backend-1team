import {Op} from 'sequelize';
import sequelize from 'sequelize';
import {moduleLogger} from '@src/logger';
import {Tag} from '@src/model/entity/Tag';

const logger = moduleLogger('TagRepository');

export const getTags = async () => {
    return await Tag.findAll();
};

export const getTag = async (tagIds) => {
    return await Tag.findAll({
        where: {
            id: {[Op.in]: tagIds},
        },
    });
};

export const getRecommendationCategoryId = async (tagIds) => {
    console.log(tagIds);
    return await Tag.findAll({
        attributes: [
            'categoryId',
            [sequelize.fn('sum', sequelize.col('weight')), 'weight_sum'],
        ],
        limit: 1,
        order: [sequelize.literal('weight_sum DESC')],
        group: 'categoryId',
        where: {
            id: {[Op.in]: tagIds},
        },
        raw: true,
    });
};
