import axios from 'axios';
import * as faker from 'faker';
import {stringify} from 'query-string';
import {decode} from 'jsonwebtoken';
import {config} from '@src/config';
import {OAuthFailedException} from '@src/exception/OAuthFailedException';
import {moduleLogger} from '@src/logger';
import {objectToString} from '@src/util/conversion';
import {signAsync} from '@src/util/jwt';

const logger = moduleLogger('SocialLoginMiddleware');

export const kakaoLoginMiddlewrae = async (req, res, next) => {
    try {
        logger.info(`get user info by kakao { "token": "${req.body.token}" }`);

        const {data} = await axios.get(`https://kapi.kakao.com/v2/user/me`, {
            headers: {Authorization: `Bearer ${req.body.token}`},
        }).catch((e) => logger.error(`failed to login by kakao { error: ${e.message}`));

        if (!data || !data.id || !data.properties || !data.properties.nickname) {
            throw new OAuthFailedException('failed to login with kakao, please check your token');
        }

        req.oauthProvider = {
            provider: 'kakao',
            id: typeof data.id === 'number' ? data.id.toString() : data.id,
            nickname: data.properties.nickname,
        };
        logger.info(`success get user info by kakao, { "providerInfo", : ${objectToString(req.oauthProvider)} }`);
        next();
    } catch (e) {
        logger.error(`failed to login by kakao { error: ${e.message}`);
        next(e);
    }
};

export const appleLoginMiddleware = async (req, res, next) => {
    try {
        const code = req.body.token;
        logger.info(`get user info by apple { "token": "${code}" }`);

        const appleJwtClaims = {
            iss: config.auth.apple.teamId,
            iat: Math.floor(Date.now() / 1000),
            exp: Math.floor(Date.now() / 1000) + ( 86400 * 5 ),
            aud: 'https://appleid.apple.com',
            sub: config.auth.apple.clientId,
        };

        const appleJwtOptions = {
            algorithm: 'ES256',
            keyid: config.auth.apple.keyId,
        };

        const appleClientSecret = await signAsync(appleJwtClaims, config.auth.apple.privateKey, appleJwtOptions);

        const appleLoginBody = {
            'client_id': config.auth.apple.clientId,
            'client_secret': appleClientSecret,
            'code': code,
            'grant_type': 'authorization_code',
        };
        const appleBodyString = stringify(appleLoginBody);

        const {data} = await axios.post(
            'https://appleid.apple.com/auth/token',
            appleBodyString,
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            }).catch((e) => logger.error(`failed to login by apple { error: ${e.message}`));

        if (!data || !data.id_token) {
            throw new OAuthFailedException('failed to login with apple, please check your authorized code');
        }

        const appleTokenClaims = decode(data.id_token);

        if (!appleTokenClaims.sub) {
            throw new OAuthFailedException('failed to login with apple');
        }

        req.oauthProvider = {
            provider: 'apple',
            id: typeof appleTokenClaims.sub === 'number' ? appleTokenClaims.sub.toString() : appleTokenClaims.sub,
            // Apple 은 nickname 이 따로 없어 faker 로 설정
            nickname: `Apple${faker.name.firstName()}${faker.random.number(10 * 4)}`,
        };
        logger.info(`success get user info by apple, { "providerInfo", : ${objectToString(req.oauthProvider)} }`);
        next();
    } catch (e) {
        logger.error(`failed to login by apple { error: ${e.message}`);
        next(e);
    }
};
