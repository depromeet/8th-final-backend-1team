import {validateRequestValues} from '@src/util/request-validator';

export const validateParamMiddleware = (
    requestBodyType,
    requestPathType,
    requestQueryType,
) => async (req, res, next) => {
    try {
        if (requestBodyType) {
            await validateRequestValues(requestBodyType, req.body);
        }
        if (requestPathType) {
            await validateRequestValues(requestPathType, req.params);
        }
        if (requestQueryType) {
            await validateRequestValues(requestQueryType, req.query);
        }
        next();
    } catch (e) {
        next(e);
    }
};
