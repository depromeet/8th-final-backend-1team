class BaseException extends Error {
    constructor(
        status = 500,
        code = 0,
        message = 'Internal Server Error',
        name = 'Error',
    ) {
        super();
        Error.captureStackTrace(this, this.constructor);
        this.code = code;
        this.status = status;
        this.message = message;
        this.name = name;
    }
}

export default BaseException;
