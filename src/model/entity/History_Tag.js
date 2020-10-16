import {Model, DataTypes} from 'sequelize';
import {moduleLogger} from '@src/logger';
import {config} from '@src/config';

const logger = moduleLogger('History_Tag');

export class History_Tag extends Model {
    toJSON() {
        return super.toJSON();
    }
}

export const init = (sequelize) =>
    History_Tag.init({
        id: {
            field: 'id',
            primaryKey: true,
            type: DataTypes.BIGINT,
            allowNull: false,
            autoIncrement: true,
        },
        historyId: {
            field: 'history_id',
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        tagId: {
            field: 'tag_id',
            type: DataTypes.BIGINT,
            allowNull: false,
        },
    }, {
        sequelize,
        tableName: 't_history_tag',
        timestamps: false,
        schema: config.db.default.schema,
    });
