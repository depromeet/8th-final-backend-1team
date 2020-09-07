import {moduleLogger} from '@src/logger';
import {ERROR_CODE} from '@src/exception/ErrorCode';
import BaseException from '@src/exception/BaseException';
import {objectToString} from '@src/util/conversion';

const logger = moduleLogger('errorMiddleware');

const createErrorResponse = (exception) => ({
    code: exception.code || '',
    message: exception.message,
    data: null,
});

export const handle404Error = (req, res, next) => {
    const error = ERROR_CODE.NOT_FOUND;
    return res.status(error.httpStatus)
        .json(createErrorResponse(error));
};

export const handleError = (error, req, res, next) => {
    if (error instanceof BaseException) {
        return res.status(error.status)
            .json(createErrorResponse(error));
    }

    if (typeof error === 'object') {
        Object.entries(error).length ?
            logger.error(`error occur without base exception, error: ${objectToString(error)}`) :
            logger.error(error);
    } else {
        logger.error(error);
    }

    if (error instanceof SyntaxError && error.status === 400 && 'body' in error) {
        return res.status(400)
            .json(createErrorResponse(ERROR_CODE.INVALID_PARAMETER));
    }

    const errorCode = ERROR_CODE.INTERNAL_SERVER_ERROR;
    return res.status(errorCode.httpStatus)
        .json(createErrorResponse(errorCode));
};
