import {DataTypes, Model} from 'sequelize';
import {Sample} from '@src/model/entity/Sample';
import {config} from '@src/config';
import {moduleLogger} from '@src/logger';

const logger = moduleLogger('Sample2');

export class Sample2 extends Model {}

export const init = (sequelize) =>
    Sample2.init({
        seq: {
            primaryKey: true,
            type: DataTypes.BIGINT,
            allowNull: false,
            autoIncrement: true,
        },
        text: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'text',
        },
        sample1: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
    }, {
        sequelize,
        tableName: 't_sample2',
        timestamps: false,
        schema: config.db.default.schema,
    });

export const associate = () => {
    logger.debug('Sample2 associate success');
    Sample2.belongsTo(Sample, {
        foreignKey: 'sample1',
        targetKey: 'seq',
    });
};


