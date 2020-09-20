import * as _ from 'fxjs/Strict';
import {sign} from 'jsonwebtoken';
import {config} from '@src/config';
import {JWTSignException} from '@src/exception/JWTSignException';
import {moduleLogger} from '@src/logger';

const logger = moduleLogger('JwtUtil');

export const signAsync = async (claims, jwtSecret, jwtOptions) =>
    new Promise(((resolve, reject) => {
        sign(claims,
            jwtSecret,
            jwtOptions,
            (err, token) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(token);
                }
            });
    }));

export const createJWT = async (accountId) => {
    const jwtOptions = {
        expiresIn: config.jwt.expiresIn,
    };

    const claims = {
        account_id: accountId,
        iss: config.jwt.iss,
    };

    try {
        return await signAsync(claims, config.jwt.secret, jwtOptions);
    } catch (e) {
        logger.error(`failed to sign jwt token, error: ${e.message}`);
        throw new JWTSignException();
    }
};
