import {Model, DataTypes} from 'sequelize';
import {moduleLogger} from '@src/logger';
import {config} from '@src/config';
import {Account} from './Account';

const logger = moduleLogger('Provider');

export class Provider extends Model {
    toJSON() {
        return super.toJSON();
    }
}

export const init = (sequelize) =>
    Provider.init({
        id: {
            field: 'id',
            primaryKey: true,
            type: DataTypes.BIGINT,
            allowNull: false,
            autoIncrement: true,
        },
        providerId: {
            field: 'provider_id',
            type: DataTypes.STRING,
            allowNull: false,
        },
        proivderName: {
            field: 'provider_name',
            type: DataTypes.STRING,
            allowNull: false,
        },
        accountId: {
            field: 'account_id',
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdAt: {
            field: 'created_at',
            type: DataTypes.DATE,
            allowNull: false,
        },
    }, {
        sequelize,
        tableName: 't_provider',
        timestamps: false,
        schema: config.db.default.schema,
    });

export const associate = () => {
    Provider.belongsTo(Account, {
        foreignKey: 'account_id',
    });
};
