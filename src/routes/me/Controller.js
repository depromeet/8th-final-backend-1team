import {moduleLogger} from '@src/logger';
import {ApiResponse} from '@src/model/api/ApiResponse';

const logger = moduleLogger('MeController');

export const getMe = async (req, res, next) => {
    logger.debug(`getMe request start`);

    try {
        // logger.info(`getMe request success`);

        return res.status(200).json(new ApiResponse({
            'nickname': '삼겹살',
            'profileUrl': 'https://xxx.xxx.xxx/xxxx.jpg',
        }));
    } catch (e) {
        next(e);
    }
};

export const putMe = async (req, res, next) => {
    logger.debug(`putMe request start`);

    try {
        // logger.info(`putMe request success`);

        return res.status(200).json(new ApiResponse({
            'nickname': '오겹살',
            'profileUrl': 'https://xxx.xxx.xxx/xxxx.jpg',
        }));
    } catch (e) {
        next(e);
    }
};
