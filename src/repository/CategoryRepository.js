import {Op} from 'sequelize';
import sequelize from 'sequelize';
import {moduleLogger} from '@src/logger';
import {Category} from '@src/model/entity/Category';

const logger = moduleLogger('CategoryRepository');

export const getCategoryIds = async () => {
    return await Category.findAll({
        attributes: ['id'],
    });
};
