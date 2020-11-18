import BaseException from '@src/exception/BaseException';
import {ERROR_CODE} from '@src/exception/ErrorCode';

export class UserNotFoundException extends BaseException {
    constructor(message, errorCode = ERROR_CODE.USER_NOT_FOUND) {
        super(errorCode.httpStatus, errorCode.code, message || errorCode.message, errorCode.name);
    }
}
