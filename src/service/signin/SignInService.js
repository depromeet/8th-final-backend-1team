import {moduleLogger} from '@src/logger';
import {v4} from 'uuid';
import {objectToString} from '@src/util/conversion';
import {createJWT} from '@src/util/jwt';
import * as AccountRepository from '@src/repository/AccountRepository';

const logger = moduleLogger('SignInService');

export const signInWithProvider = async (providerInfo) => {
    logger.debug(`signInWithProvider start, { "providerInfo": ${objectToString(providerInfo)} }`);

    const accountInfo = await AccountRepository.getAccountOneByProviderId(providerInfo.id);
    if (accountInfo) {
        logger.info(`signInWithProvider success with existed account, { "accountInfo": ${objectToString(accountInfo)} }`);
        return {
            jwt: await createJWT(accountInfo.uuid),
            userCreated: false,
        };
    }

    const savedAccount = await AccountRepository.saveAccount({
        uuid: v4().toString(),
        nickname: providerInfo.nickname,
        profileUrl: undefined,
        provider: providerInfo.provider,
        providerId: providerInfo.id,
    });

    logger.info(`save account success, { "accountInfo": ${objectToString(savedAccount)} }`);

    logger.info(`signInWithProvider success with new account, { "accountInfo": ${objectToString(savedAccount)} }`);
    return {
        jwt: await createJWT(savedAccount.uuid),
        userCreated: true,
    };
};
