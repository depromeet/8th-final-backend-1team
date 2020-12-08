import {objectToString} from '@src/util/conversion';
import {moduleLogger} from '@src/logger';
import * as AccountRepository from '@src/repository/AccountRepository';
import {UserNotFoundException} from '@src/exception/UserException';

const logger = moduleLogger('UserService');

export const getUserInfo = async ({userId}) => {
    const userInfo = await getUserInfoWithProvider({userId});
    delete userInfo.provider;
    return userInfo;
};

export const getUserInfoWithProvider = async ({userId}) => {
    logger.info(`getUserInfo start, { "userId": "${userId}" }`);

    const accountInfo = await AccountRepository.findOneById(userId);
    if (!accountInfo) {
        logger.error(`cannot find user info with userId, { "userId": "${userId}" }`);
        throw new UserNotFoundException();
    }
    logger.info(`getUserInfo success account Info, { "accountInfo": ${objectToString(accountInfo.dataValues)} } `);

    return {
        id: accountInfo.id,
        nickname: accountInfo.nickname,
        profileUrl: accountInfo.profileImage,
        provider: accountInfo.provider.providerName,
    };
};

export const updateUserInfo = async ({userId, nickname}) => {
    logger.info(`getUserInfo start, { "userId": "${userId}", "nickname": "${nickname}" }`);
    await AccountRepository.updateById({
        id: userId,
        nickname: nickname,
    });

    return getUserInfoWithProvider({userId});
};
