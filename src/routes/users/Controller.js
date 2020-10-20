import {moduleLogger} from '@src/logger';
import {ApiResponse} from '@src/model/api/ApiResponse';

const logger = moduleLogger('UserController');

export const getUser = async (req, res, next) => {
    logger.debug(`getUser request start`);

    try {
        // logger.info(`getUser request success`);

        return res.status(200).json(new ApiResponse({
            'nickname': '삼겹살',
            'profileUrl': 'https://xxx.xxx.xxx/xxxx.jpg',
        }));
    } catch (e) {
        next(e);
    }
};
