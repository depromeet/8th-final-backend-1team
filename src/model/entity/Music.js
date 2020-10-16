import {Model, DataTypes} from 'sequelize';
import {moduleLogger} from '@src/logger';
import {config} from '@src/config';
import {Incense} from './Incense';

const logger = moduleLogger('Music');

export class Music extends Model {
    toJSON() {
        return super.toJSON();
    }
}

export const init = (sequelize) =>
    Music.init(
        {
            id: {
                field: 'id',
                primaryKey: true,
                type: DataTypes.BIGINT,
                allowNull: false,
                autoIncrement: true,
            },
            url: {
                field: 'url',
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
            contentLength: {
                field: 'content_length',
                type: DataTypes.BIGINT,
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: 't_music',
            timestamps: false,
            schema: config.db.default.schema,
        },
    );

export const associate = () => {
    Music.hasOne(Incense, {
        foreignKey: 'music_id',
    });
};
