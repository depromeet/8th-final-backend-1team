import {Model, DataTypes} from 'sequelize';
import {moduleLogger} from '@src/logger';
import {config} from '@src/config';
import {History} from './History';

const logger = moduleLogger('Memo');

export class Memo extends Model {
    toJSON() {
        return super.toJSON();
    }
}

export const init = (sequelize) =>
    Memo.init({
        id: {
            field: 'id',
            primaryKey: true,
            type: DataTypes.BIGINT,
            allowNull: false,
            autoIncrement: true,
        },
        title: {
            field: 'title',
            type: DataTypes.STRING,
            allowNull: false,
        },
        detail: {
            field: 'detail',
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdAt: {
            field: 'created_at',
            type: 'TIMESTAMP',
            allowNull: false,
            defaultValue: sequelize.NOW,
        },
        updatedAt: {
            field: 'updated_at',
            type: 'TIMESTAMP',
            allowNull: false,
        },
        historyId: {
            field: 'history_id',
            type: DataTypes.BIGINT,
            allowNull: false,
        },
    }, {
        sequelize,
        tableName: 't_memo',
        timestamps: false,
        schema: config.db.default.schema,
    });

export const associate = () => {
    Memo.belongsTo(History, {
        foreignKey: 'history_id',
        onDelete: 'CASECADE',
    });
};
