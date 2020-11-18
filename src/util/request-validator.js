import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {validate} from 'class-validator';
import {moduleLogger} from '@src/logger';
import {objectToString} from '@src/util/conversion';
import {ParameterException} from '@src/exception/CommonException';

const logger = moduleLogger('requestValidator');

export const validateRequestValues = async (requestType, requestValues) => {
    logger.debug(`start validate request value, body: ${objectToString(requestValues)}`);
    const obj = plainToClass(requestType, requestValues);
    logger.debug(`plainToClass success, obj: ${objectToString(obj)}`);
    const errors = await validate(obj);
    if (errors.length > 0) {
        const message = errors[0].constraints?.[Object.keys(errors[0].constraints)[0]] || '';
        logger.error(`request parameter is not match, { "requestValues": "${objectToString(requestValues)} }"`);
        throw new ParameterException(message);
    }
    return obj;
};
