import {Op} from 'sequelize';
import {moduleLogger} from '@src/logger';
import {Tag} from '@src/model/entity/Tag';
import {Incense} from '@src/model/entity/Incense';
import {Music} from '@src/model/entity/Music';
import {Video} from '@src/model/entity/Video';

const logger = moduleLogger('IncenseRepository');

export const saveIncense = async ({
    name,
    detail,
    weight,
    image,
    videoId,
    musicId,
    categoryId,
}) => {
    const incense = await Incense.create({
        name,
        detail,
        weight,
        image,
        videoId,
        musicId,
        categoryId,
    });
    return incense.dataValues;
};

export const getRecommendations = async (tagIds) => {
    return await Incense.findAll({
        attributes: ['id', 'name', 'image', 'detail'],
        include: [{
            model: Music,
            attributes: ['id', 'url', 'content_length'],
        },
        {
            model: Video,
            attributes: ['id', 'url'],
        }],
        where: {
            id: {[Op.in]: tagIds},
        },
        raw: true,
    });
};
