import {moduleLogger} from '@src/logger';
import {objectToString} from '@src/util/conversion';
import * as IncenseRepository from '@src/repository/IncenseRepository';

const logger = moduleLogger('IncenseService');

export const postIncense = async (incenseInfo) => {
    logger.debug(`postIncense start, { "incenseInfo": ${objectToString(incenseInfo)} }`);

    const savedIncense = await IncenseRepository.saveIncense({
        name: incenseInfo.name,
        detail: incenseInfo.detail,
        weight: incenseInfo.weight,
        image: incenseInfo.image,
        videoId: incenseInfo.videoId,
        musicId: incenseInfo.musicId,
        categoryId: incenseInfo.categoryId,
    });

    logger.info(`save incense success, { "incenseInfo": ${objectToString(savedIncense)} }`);
};
