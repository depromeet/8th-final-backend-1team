import {Model, DataTypes} from 'sequelize';
import {moduleLogger} from '@src/logger';
import {config} from '@src/config';
import {Provider} from './Provider';
import {History} from './History';

const logger = moduleLogger('Account');

export class Account extends Model {
    toJSON() {
        return super.toJSON();
    }
}

export const init = (sequelize) =>
    Account.init({
        id: {
            field: 'id',
            primaryKey: true,
            type: DataTypes.BIGINT,
            allowNull: false,
            autoIncrement: true,
        },
        nickname: {
            field: 'nickname',
            type: DataTypes.STRING,
            allowNull: false,
        },
        profileImage: {
            field: 'profile_image',
            type: DataTypes.STRING,
            allowNull: true,
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
    },
    {
        sequelize,
        tableName: 't_account',
        timestamps: false,
        schema: config.db.default.schema,
    });

export const associate = () => {
    Account.hasOne(Provider, {
        foreignKey: 'account_id',
    });
    Account.hasMany(History, {
        foreignKey: 'account_id',
    });
};
