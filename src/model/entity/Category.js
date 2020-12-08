import {Model, DataTypes} from 'sequelize';
import {moduleLogger} from '@src/logger';
import {config} from '@src/config';
import {Tag} from '@src/model/entity/Tag';
import {Incense} from '@src/model/entity/Incense';

const logger = moduleLogger('Category');

export class Category extends Model {
    toJSON() {
        return super.toJSON();
    }
}

export const init = (sequelize) =>
    Category.init({
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
    }, {
        sequelize,
        tableName: 't_category',
        timestamps: false,
    });

export const associate = () => {
    Category.hasMany(Tag, {
        targetKey: 'id',
        foreignKey: 'category_id',
        as: 'tag',
    });
    Category.hasMany(Incense, {
        targetKey: 'id',
        foreignKey: 'category_id',
        as: 'incense',
    });

    return Category;
};
