import {v4} from 'uuid';

export const traceIdMiddleware = (req, res, next) => {
    req.headers['trace-id'] = v4().toString();
    next();
};
