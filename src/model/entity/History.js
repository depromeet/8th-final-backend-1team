import {Model, DataTypes} from 'sequelize';
import {moduleLogger} from '@src/logger';
import {config} from '@src/config';
import {Memo} from './Memo';
import {History_Tag} from './History_Tag';
import {Account} from '@src/model/entity/Account';
import {Incense} from '@src/model/entity/Incense';
import {Tag} from '@src/model/entity/Tag';

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
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            image: {
                field: 'image',
                type: DataTypes.STRING,
                allowNull: true,
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
                defaultValue: DataTypes.NOW,
            },
            updatedAt: {
                field: 'updated_at',
                type: 'TIMESTAMP',
                allowNull: false,
                defaultValue: DataTypes.NOW,
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
    History.hasMany(Memo, {
        targetKey: 'id',
        foreignKey: 'history_id',
    });
    History.belongsToMany(Tag, {
        through: History_Tag,
        foreignKey: 'history_id',
    });
    History.belongsTo(Incense, {
        targetKey: 'id',
        foreignKey: 'incense_id',
    });
    History.belongsTo(Account, {
        targetKey: 'id',
        foreignKey: 'account_id',
    });

    return History;
};
