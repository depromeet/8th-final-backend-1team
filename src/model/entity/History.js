import {Model, DataTypes} from 'sequelize';
import {moduleLogger} from '@src/logger';
import {config} from '@src/config';
import {Memo} from './Memo';
import {History_Tag} from './History_Tag';

const logger = moduleLogger('History');

export class History extends Model {
    toJSON() {
        return super.toJSON();
    }
}

export const init = (sequelize) =>
    History.init(
        {
            id: {
                field: 'id',
                primaryKey: true,
                type: DataTypes.BIGINT,
                allowNull: false,
                autoIncrement: true,
            },
            playTime: {
                field: 'play_time',
                type: DataTypes.BIGINT,
                allowNull: false,
            },
            accountId: {
                field: 'account_id',
                type: DataTypes.BIGINT,
                allowNull: false,
            },
            incenseId: {
                field: 'incense_id',
                type: DataTypes.BIGINT,
                allowNull: false,
            },
            createdAt: {
                field: 'created_at',
                type: 'TIMESTAMP',
                allowNull: false,
                defaultValue: sequelize.NOW,
            },
        },
        {
            sequelize,
            tableName: 't_history',
            timestamps: false,
            schema: config.db.default.schema,
        },
    );

export const associate = () => {
    History.hasOne(Memo, {
        foreignKey: 'history_id',
    });
    History.hasMany(History_Tag, {
        foreignKey: 'history_id',
        onDelete: 'CASECADE',
    });
};
