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
        schema: config.db.default.schema,
    });

export const associate = () => {
    Category.hasOne(Tag, {
        targetKey: 'id',
        foreignKey: 'categoryId',
    });
    Category.hasOne(Incense, {
        targetKey: 'id',
        foreignKey: 'categoryId',
    });

    return Category;
};
