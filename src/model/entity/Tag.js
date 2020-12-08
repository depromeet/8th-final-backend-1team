import {Model, DataTypes} from 'sequelize';
import {moduleLogger} from '@src/logger';
import {config} from '@src/config';
import {History_Tag} from './History_Tag';
import {History} from '@src/model/entity/History';
import {Category} from '@src/model/entity/Category';

const logger = moduleLogger('Tag');

export class Tag extends Model {
    toJSON() {
        return super.toJSON();
    }
}

export const init = (sequelize) =>
    Tag.init(
        {
            id: {
                field: 'id',
                primaryKey: true,
                type: DataTypes.BIGINT,
                allowNull: false,
                autoIncrement: true,
            },
            name: {
                field: 'name',
                type: DataTypes.STRING,
                allowNull: false,
            },
            weight: {
                field: 'weight',
                type: DataTypes.FLOAT,
                defaultValue: 0,
            },
            categoryId: {
                field: 'category_id',
                type: DataTypes.BIGINT,
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: 't_tag',
            timestamps: false,
        },
    );

export const associate = () => {
    Tag.belongsToMany(History, {
        through: History_Tag,
        foreignKey: 'tag_id',
        as: 'histories',
    });
    Tag.belongsTo(Category, {
        targetKey: 'id',
        foreignKey: 'category_id',
        as: 'category',
    });

    return Tag;
};
