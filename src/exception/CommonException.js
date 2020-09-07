import BaseException from '@src/exception/BaseException';
import {ERROR_CODE} from './ErrorCode';

export class InternalServerException extends BaseException {
    constructor(message, errorCode = ERROR_CODE.INTERNAL_SERVER_ERROR) {
        super(errorCode.httpStatus, errorCode.code, message || errorCode.message, errorCode.name);
    }
}

export class ParameterException extends BaseException {
    constructor(message, errorCode = ERROR_CODE.INVALID_PARAMETER) {
        super(errorCode.httpStatus, errorCode.code, message || errorCode.message, errorCode.name);
    }
}

export class InvalidValueException extends BaseException {
    constructor(message, errorCode = ERROR_CODE.INVALID_VALUE) {
        super(errorCode.httpStatus, errorCode.code, message || errorCode.message, errorCode.name);
    }
}

export class UnauthorizedException extends BaseException {
    constructor(message, errorCode = ERROR_CODE.UNAUTHORIZED) {
        super(errorCode.httpStatus, errorCode.code, message || errorCode.message, errorCode.name);
    }
}

export class NotFoundException extends BaseException {
    constructor(message, errorCode = ERROR_CODE.NOT_FOUND) {
        super(errorCode.httpStatus, errorCode.code, message || errorCode.message, errorCode.name);
    }
}

export class ApiFailedException extends BaseException {
    constructor(message, errorCode = ERROR_CODE.API_FAILED) {
        super(errorCode.httpStatus, errorCode.code, message || errorCode.message, errorCode.name);
    }
}
