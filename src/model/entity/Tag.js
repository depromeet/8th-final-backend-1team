import {Model, DataTypes} from 'sequelize';
import {moduleLogger} from '@src/logger';
import {config} from '@src/config';

const logger = moduleLogger('Tag');

export class Tag extends Model {
    toJSON() {
        return super.toJSON();
    }
}

export const init = (sequelize) =>
    Tag.init({
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
    }, {
        sequelize,
        tableName: 't_tag',
        timestamps: false,
        schema: config.db.default.schema,
    });

