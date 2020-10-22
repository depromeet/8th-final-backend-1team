import BaseException from '@src/exception/BaseException';
import {ERROR_CODE} from '@src/exception/ErrorCode';

export class JWTSignException extends BaseException {
    constructor(message, errorCode = ERROR_CODE.OAUTH_FAILED) {
        super(errorCode.httpStatus, errorCode.code, message || errorCode.message, errorCode.name);
    }
}

export class JWTExpiredException extends BaseException {
    constructor(message, errorCode = ERROR_CODE.JWT_EXPIRED) {
        super(errorCode.httpStatus, errorCode.code, message || errorCode.message, errorCode.name);
    }
}
