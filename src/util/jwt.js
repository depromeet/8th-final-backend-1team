import {sign, TokenExpiredError, verify} from 'jsonwebtoken';
import {config} from '@src/config';
import {
    JWTExpiredException,
    JWTSignException,
} from '@src/exception/JWTException';
import {moduleLogger} from '@src/logger';
import {UnauthorizedException} from '@src/exception/CommonException';

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

export const verifyJWT = (token) => {
    return new Promise((resolve, reject) => {
        verify(token, config.jwt.secret || 'jwtSecretKey', (err, payload) => {
            if (err) {
                if (err instanceof TokenExpiredError) {
                    reject(new JWTExpiredException());
                }

                logger.error(`failed to verify jwt`);
                reject(new UnauthorizedException());
            } else {
                resolve(payload);
            }
        });
    });
};
