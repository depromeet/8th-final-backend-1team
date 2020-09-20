import {moduleLogger} from '@src/logger';
import {objectToString} from '@src/util/conversion';
import * as SignInService from '@src/service/signin/SignInService';
import {ApiResponse} from '@src/model/api/ApiResponse';

const logger = moduleLogger('SignInController');

export const signInBySocialLogin = async (req, res, next) => {
    const {oauthProvider} = req;
    logger.info(`signInByKakao request, { "providerInfo": ${objectToString(oauthProvider)} }`);

    try {
        const {jwt, userCreated} = await SignInService.signInWithProvider(oauthProvider);

        logger.info(`signInByKakao request success`);

        return res.status(200).json(new ApiResponse({jwt, userCreated}));
    } catch (e) {
        next(e);
    }
};
