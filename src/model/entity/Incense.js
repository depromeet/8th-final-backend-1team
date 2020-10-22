import {DataTypes, Model} from 'sequelize';
import {moduleLogger} from '@src/logger';
import {config} from '@src/config';
import {History} from './History';
import {Video} from '@src/model/entity/Video';
import {Music} from '@src/model/entity/Music';

const logger = moduleLogger('Incense');

export class Incense extends Model {
    toJSON() {
        return super.toJSON();
    }
}

export const init = (sequelize) =>
    Incense.init(
        {
            id: {
                field: 'id',
                primaryKey: true,
                type: DataTypes.BIGINT,
                allowNull: false,
                autoIncrement: true,
            },
            name: {
                field: 'name',
                type: DataTypes.STRING,
                allowNull: false,
            },
            detail: {
                field: 'detail',
                type: DataTypes.STRING,
                allowNull: false,
            },
            weight: {
                field: 'weight',
                type: DataTypes.FLOAT,
                allowNull: false,
                defaultValue: 0,
            },
            image: {
                field: 'image',
                type: DataTypes.STRING,
                allowNull: false,
            },
            videoId: {
                field: 'video_id',
                type: DataTypes.BIGINT,
                allowNull: false,
            },
            musicId: {
                field: 'music_id',
                type: DataTypes.BIGINT,
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: 't_incense',
            timestamps: false,
            schema: config.db.default.schema,
        },
    );

export const associate = () => {
    Incense.hasMany(History, {
        targetKey: 'id',
        foreignKey: 'incense_id',
    });
    Incense.belongsTo(Music, {
        targetKey: 'id',
        foreignKey: 'music_id',
    });
    Incense.belongsTo(Video, {
        targetKey: 'id',
        foreignKey: 'video_id',
    });

    return Incense;
};
