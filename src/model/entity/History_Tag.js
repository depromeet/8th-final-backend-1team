import {DataTypes, Model} from 'sequelize';
import {moduleLogger} from '@src/logger';
import {Tag} from '@src/model/entity/Tag';
import {History} from '@src/model/entity/History';

const logger = moduleLogger('History_Tag');

export class History_Tag extends Model {
    toJSON() {
        return super.toJSON();
    }
}

export const link = (sequelize) =>
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
            references: {
                model: History,
                key: 'id',
            },
        },
        tagId: {
            field: 'tag_id',
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: Tag,
                key: 'id',
            },
        },
    }, {
        sequelize,
        tableName: 't_history_tag',
        timestamps: false,
    });
