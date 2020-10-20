import {moduleLogger} from '@src/logger';
import {ApiResponse} from '@src/model/api/ApiResponse';

const logger = moduleLogger('UserController');

export const getUser = async (req, res, next) => {
    logger.debug(`getUser request start`);

    try {
        // logger.info(`getUser request success`);

        return res.status(200).json(new ApiResponse({
            'id': 1,
            'nickname': '삼겹살',
            'profileUrl': 'https://avatars3.githubusercontent.com/u/18240792?s=400&u=12f0b35a5ebcaf14e0cf8fa37665174720814593&v=4',
        }));
    } catch (e) {
        next(e);
    }
};
