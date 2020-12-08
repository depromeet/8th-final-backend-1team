import {moduleLogger} from '@src/logger';
import * as TagService from '@src/service/tag/TagService';
import {ApiResponse} from '@src/model/api/ApiResponse';

const logger = moduleLogger('TagController');

export const getTag = async (req, res, next) => {
    logger.debug(`getTag request start`);

    try {
        const tags = await TagService.getTags();

        logger.info(`getTag request success`);

        return res.status(200).json(new ApiResponse({tags}));
    } catch (e) {
        next(e);
    }
};
