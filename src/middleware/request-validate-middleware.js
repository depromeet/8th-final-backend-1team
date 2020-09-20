import {validateBody} from '@src/util/request-validator';

export const validateBodyMiddleware = (requestType) => async (req, res, next) => {
    try {
        await validateBody(requestType, req.body);
        next();
    } catch (e) {
        next(e);
    }
};
