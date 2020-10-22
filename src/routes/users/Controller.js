import {moduleLogger} from '@src/logger';
import {ApiResponse} from '@src/model/api/ApiResponse';
import * as UserService from '@src/service/UserService';

const logger = moduleLogger('UserController');

export const getUser = async (req, res, next) => {
    const userId = req.params.userId;
    logger.info(`getUser request with userId: ${userId}`);
    try {
        const userInfo = await UserService.getUserInfo({userId});
        return res.status(200).json(new ApiResponse(userInfo));
    } catch (e) {
        next(e);
    }
};
