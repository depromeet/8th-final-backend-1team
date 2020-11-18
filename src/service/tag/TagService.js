import {moduleLogger} from '@src/logger';
import {objectToString} from '@src/util/conversion';
import * as TagRepository from '@src/repository/TagRepository';
import {NotFoundException} from '@src/exception/CommonException';

const logger = moduleLogger('TagService');

export const getTags = async () => {
    logger.debug(`getTags start`);

    const list = await TagRepository.getTags();

    if (!list) {
        logger.error(`cannot find tags info`);
        throw new NotFoundException();
    }
    logger.info(`getTags success, { "tagsInfo": ${objectToString(list)} }`);

    return list;
};
