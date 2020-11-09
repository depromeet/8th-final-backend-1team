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

/*
export const getTag = async (req, res, next) => {
    logger.debug(`getTag request start`);

    try {
        // logger.info(`getTag request success`);

        return res.status(200).json(new ApiResponse({
            'tags': [
                {
                    'id': 1,
                    'name': '신나는',
                    'weight': 0.7,
                },
                {
                    'id': 2,
                    'name': '설레서 웃음 나오는',
                    'weight': 0.2,
                },
                {
                    'id': 3,
                    'name': '꿀꿀한 날씨 때문에',
                    'weight': 0.8,
                },
            ],
        }));
    } catch (e) {
        next(e);
    }
};*/
