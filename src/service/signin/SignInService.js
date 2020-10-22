import {moduleLogger} from '@src/logger';
import {objectToString} from '@src/util/conversion';
import {createJWT} from '@src/util/jwt';
import * as AccountRepository from '@src/repository/AccountRepository';
import * as ProviderRepository from '@src/repository/ProviderRepository';

const logger = moduleLogger('SignInService');

export const signInWithProvider = async (providerInfo) => {
    logger.debug(`signInWithProvider start, { "providerInfo": ${objectToString(providerInfo)} }`);

    const accountInfo = await ProviderRepository.findProviderOneById(providerInfo.id);
    if (accountInfo) {
        logger.info(`signInWithProvider success with existed account, { "accountInfo": ${objectToString(accountInfo)} }`);
        return {
            jwt: await createJWT(accountInfo.id),
            userCreated: false,
        };
    }

    const savedAccount = await AccountRepository.saveAccount({
        nickname: providerInfo.nickname,
        profileUrl: undefined,
    });

    const savedProvider = await ProviderRepository.saveProvider({
        providerId: providerInfo.id,
        providerName: providerInfo.provider,
        accountId: savedAccount.id,
    });

    logger.info(`signInWithProvider success with new account, { "accountInfo": ${objectToString(savedAccount)}, "providerInfo": ${objectToString(savedProvider)}  } `);

    return {
        jwt: await createJWT(savedAccount.id),
        userCreated: true,
    };
};
