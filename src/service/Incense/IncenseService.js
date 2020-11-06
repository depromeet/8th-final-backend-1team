import {moduleLogger} from '@src/logger';
import {objectToString} from '@src/util/conversion';
import * as IncenseRepository from '@src/repository/IncenseRepository';

const logger = moduleLogger('IncenseService');

export const getIncense = async ({name, detail, weight, image, videoId, musicId, categoryId}) => {
    logger.debug(`getIncense start, { "incenseInfo": ${name, detail, weight, image, videoId, musicId, categoryId} }`);

    const savedIncense = await IncenseRepository.saveIncense({
        name: name,
        detail: detail,
        weight: weight,
        image: image,
        videoId: videoId,
        musicId: musicId,
        categoryId: categoryId,
    });

    logger.info(`save incense success, { "incenseInfo": ${objectToString(savedIncense)} }`);
};
