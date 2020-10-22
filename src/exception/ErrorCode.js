const createErrorCode = (httpStatus, code, message, name) => ({httpStatus, code, message, name});

export const ERROR_CODE = {
    // global error
    INTERNAL_SERVER_ERROR: createErrorCode(500, 'G001', 'internal server error', 'INTERNAL_SERVER_ERROR'),
    INVALID_PARAMETER: createErrorCode(400, 'G002', 'Invalid Parameter', 'INVALID_PARAMETER'),
    INVALID_VALUE: createErrorCode(400, 'G003', 'Invalid value', 'INVALID_VALUE'),
    UNAUTHORIZED: createErrorCode(401, 'G004', 'Unauthorized', 'UNAUTHORIZED'),
    NOT_FOUND: createErrorCode(404, 'G005', 'Not Found', 'NOT_FOUND'),
    API_FAILED: createErrorCode(504, 'G006', 'Failed to call external api', 'API_FAILED'),
    JWT_SIGN_FAILED: createErrorCode(500, 'G007', 'Failed to sign jwt', 'JWT_SIGN_FAILED'),

    // auth
    OAUTH_FAILED: createErrorCode(400, 'A001', 'Failed to login with oauth', 'OAUTH_FAILED'),

    // user
    USER_NOT_FOUND: createErrorCode(400, 'U001', 'cannot find user info', 'USER_NOT_FOUND'),
};
