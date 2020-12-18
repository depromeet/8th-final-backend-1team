import axios from 'axios';
import * as faker from 'faker';
import {stringify} from 'query-string';
import {decode} from 'jsonwebtoken';
import {OAuth2Client} from 'google-auth-library';
import {config} from '@src/config';
import {OAuthFailedException} from '@src/exception/OAuthFailedException';
import {moduleLogger} from '@src/logger';
import {objectToString} from '@src/util/conversion';
import {signAsync} from '@src/util/jwt';

const logger = moduleLogger('SocialLoginMiddleware');

export const kakaoLoginMiddlewrae = async (req, res, next) => {
    try {
        const {token} = req.body;
        logger.info(`get user info by kakao`);

        const {data} = await axios.get(`https://kapi.kakao.com/v2/user/me`, {
            headers: {Authorization: `Bearer ${token}`},
        }).catch((e) => logger.error(`failed to login by kakao { error: ${e.message}`));

        if (!data || !data.id || !data.properties || !data.properties.nickname) {
            logger.error('cannot find kakao login result data or propoerties');
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

export const googleLoginMiddleware = async (req, res, next) => {
    try {
        const {token} = req.body;
        logger.info(`get user info by google`);

        const client = new OAuth2Client(config.auth.google.clientId);
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: config.auth.google.clientId,
        });
        const payload = ticket.getPayload();
        if (!payload || !payload.sub) {
            logger.error('cannot find google login jwt payload or userId');
            throw new OAuthFailedException('failed to login with google, please check your token');
        }

        req.oauthProvider = {
            provider: 'google',
            id: typeof payload.sub === 'number' ? payload.sub.toString() : payload.sub,
            nickname: payload.name ? payload.name : `Google${faker.name.firstName()}${faker.random.number(10 * 4)}`,
        };

        logger.info(`success get user info by google, { "providerInfo", : ${objectToString(req.oauthProvider)} }`);
        next();
    } catch (e) {
        logger.error(`failed to login by google { error: ${e.message}`);
        next(e);
    }
};

export const appleLoginMiddleware = async (req, res, next) => {
    try {
        const code = req.body.token;
        logger.info(`get user info by apple { "code": "${code}" }`);

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
