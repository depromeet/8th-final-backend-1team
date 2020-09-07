const createErrorCode = (httpStatus, code, message, name) => ({httpStatus, code, message, name});

export const ERROR_CODE = {
    // global error
    INTERNAL_SERVER_ERROR: createErrorCode(500, '001', 'internal server error', 'INTERNAL_SERVER_ERROR'),
    INVALID_PARAMETER: createErrorCode(400, '002', 'Invalid Parameter', 'INVALID_PARAMETER'),
    INVALID_VALUE: createErrorCode(400, '003', 'Invalid value', 'INVALID_VALUE'),
    UNAUTHORIZED: createErrorCode(401, '004', 'Unauthorized', 'UNAUTHORIZED'),
    NOT_FOUND: createErrorCode(404, '005', 'Not Found', 'NOT_FOUND'),
    API_FAILED: createErrorCode(504, '006', 'Failed to call external api', 'API_FAILED'),
};
