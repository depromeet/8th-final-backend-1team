import {Op} from 'sequelize';
import sequelize from 'sequelize';
import {moduleLogger} from '@src/logger';
import {Tag} from '@src/model/entity/Tag';
import { concat } from 'lodash';

const logger = moduleLogger('TagRepository');

export const getTags = async () => {
    const tags1 = await Tag.findAll({
        order: [
            [sequelize.literal('random()')],
        ],
        limit: 5,
        where: {
            category_id: {[Op.eq]: 1},
        },
    });
    const tags2 = await Tag.findAll({
        order: [
            [sequelize.literal('random()')],
        ],
        limit: 5,
        where: {
            category_id: {[Op.eq]: 2},
        },
    });
    const tags3 = await Tag.findAll({
        order: [
            [sequelize.literal('random()')],
        ],
        limit: 5,
        where: {
            category_id: {[Op.eq]: 3},
        },
    });
    const tags4 = await Tag.findAll({
        order: [
            [sequelize.literal('random()')],
        ],
        limit: 5,
        where: {
            category_id: {[Op.eq]: 4},
        },
    });
    const tags5 = await Tag.findAll({
        order: [
            [sequelize.literal('random()')],
        ],
        limit: 5,
        where: {
            category_id: {[Op.eq]: 5},
        },
    });
    const tags = concat(tags1, tags2, tags3, tags4, tags5);
    tags.sort(() => Math.random() - 0.5);

    return tags;
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
            'category_id',
            [sequelize.fn('sum', sequelize.col('weight')), 'weight_sum'],
        ],
        limit: 2,
        order: [sequelize.literal('weight_sum DESC')],
        group: 'category_id',
        where: {
            id: {[Op.in]: tagIds},
        },
        raw: true,
    });
};
