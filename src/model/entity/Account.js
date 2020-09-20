import {Model, DataTypes} from 'sequelize';
import {moduleLogger} from '@src/logger';
import {config} from '@src/config';

const logger = moduleLogger('Account');

export class Account extends Model {
    toJSON() {
        return super.toJSON();
    }
}

export const init = (sequelize) =>
    Account.init({
        seq: {
            field: 'seq',
            primaryKey: true,
            type: DataTypes.BIGINT,
            allowNull: false,
            autoIncrement: true,
        },
        uuid: {
            field: 'uuid',
            type: DataTypes.STRING,
            allowNull: false,
        },
        nickname: {
            field: 'nickname',
            type: DataTypes.STRING,
            allowNull: false,
        },
        profileUrl: {
            field: 'profile_url',
            type: DataTypes.STRING,
            allowNull: true,
        },
        provider: {
            field: 'provider',
            type: DataTypes.STRING,
            allowNull: false,
        },
        providerId: {
            field: 'provider_id',
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        sequelize,
        tableName: 't_account',
        timestamps: false,
        schema: config.db.default.schema,
    });


// export const associate = () => {
//     logger.debug('Sample2 associate success');
//     Sample2.belongsTo(Sample, {
//         foreignKey: 'sample1',
//         targetKey: 'seq',
//     });
// };
