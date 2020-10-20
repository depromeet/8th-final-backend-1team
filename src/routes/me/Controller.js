import {moduleLogger} from '@src/logger';
import {ApiResponse} from '@src/model/api/ApiResponse';

const logger = moduleLogger('MeController');

export const getMe = async (req, res, next) => {
    logger.debug(`getMe request start`);

    try {
        // logger.info(`getMe request success`);

        return res.status(200).json(new ApiResponse({
            'id': 1,
            'nickname': '삼겹살',
            'profileUrl': 'https://avatars3.githubusercontent.com/u/18240792?s=400&u=12f0b35a5ebcaf14e0cf8fa37665174720814593&v=4',
            'provider': 'kakao',
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
            'id': 1,
            'nickname': '오겹살',
            'profileUrl': 'https://avatars3.githubusercontent.com/u/18240792?s=400&u=12f0b35a5ebcaf14e0cf8fa37665174720814593&v=4',
            'provider': 'kakao',
        }));
    } catch (e) {
        next(e);
    }
};
