import {moduleLogger} from '@src/logger';
import {ApiResponse} from '@src/model/api/ApiResponse';
import * as UserService from '@src/service/UserService';

const logger = moduleLogger('MeController');

export const getMe = async (req, res, next) => {
    const accountId = req.accountId;
    logger.info(`getMe request with accountId: ${accountId}`);
    try {
        const userInfo = await UserService.getUserInfoWithProvider({userId: accountId});
        return res.status(200).json(new ApiResponse(userInfo));
    } catch (e) {
        next(e);
    }
};

export const putMe = async (req, res, next) => {
    const accountId = req.accountId;
    const {nickname} = req.body;
    logger.info(`putMe request with { "accountId": "${accountId}", "nickname": "${nickname}" }`);

    try {
        const myInfo = await UserService.updateUserInfo({
            userId: accountId,
            nickname: nickname,
        });
        return res.status(200).json(new ApiResponse(myInfo));
    } catch (e) {
        next(e);
    }
};
