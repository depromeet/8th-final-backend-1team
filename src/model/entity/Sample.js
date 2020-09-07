import {Model, DataTypes} from 'sequelize';
import {moduleLogger} from '@src/logger';
import {config} from '@src/config';

const logger = moduleLogger('Sample');

export class Sample extends Model {
    toJSON() {
        return super.toJSON();
    }
}

export const init = (sequelize) =>
    Sample.init({
        seq: {
            primaryKey: true,
            type: DataTypes.BIGINT,
            allowNull: false,
            autoIncrement: true,
        },
        textText: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'text',
        },
    }, {
        sequelize,
        tableName: 't_sample',
        timestamps: false,
        schema: config.db.default.schema,
    });

export const associate = () => {
    logger.debug('Sample1 associate success');
};
