import * as dotenv from 'dotenv';
dotenv.config();

export const config = {
    server: {
        port: process.env.PORT || '31923',
        name: process.env.SERVER_NAME || 'fragraph-server',
        env: process.env.NODE_ENV || 'development',
        log: {
            useFile: process.env.LOG_USE_FILE === 'true',
            logLevel: process.env.LOG_LEVEL || 'debug',
            filepath: process.env.LOG_FILE_PATH || '/data/fragraph-server/logs',
        },
    },
    db: {
        default: {
            dialect: process.env.DB_DEFAULT_TYPE || 'mysql',
            username: process.env.DB_DEFAULT_USERNAME || '',
            password: process.env.DB_DEFAULT_PASSWORD || '',
            database: process.env.DB_DEFAULT_DATABASE ||'fragraph',
            schema: process.env.DB_DEFAULT_SCHEMA ||'fragraph',
            host: process.env.DB_DEFAULT_HOST || '127.0.0.1',
            port: process.env.DB_DEFAULT_PORT ?
                parseInt(process.env.DB_DEFAULT_PORT) :
                3306,
            logging: process.env.DB_DEFAULT_LOGGING === 'true',
            maximumPoolSize: process.env.DB_DEFAULT_MAXIMUM_POOL_SIZE ?
                parseInt(process.env.DB_DEFAULT_MAXIMUM_POOL_SIZE) :
                30,
            idlePoolSize: process.env.DB_DEFAULT_IDLE_POOL_SIZE ?
                parseInt(process.env.DB_DEFAULT_IDLE_POOL_SIZE) :
                5000,
            connectionTimeout: process.env.DB_DEFAULT_CONNECTION_TIMEOUT ?
                parseInt(process.env.DB_DEFAULT_CONNECTION_TIMEOUT) :
                10000,
        },
    },
    jwt: {
        secret: process.env.JWT_SECRET || '',
        expiresIn: process.env.JWT_EXPIRATION || '7d',
        iss: process.env.JWT_ISS || 'accounts.depromeet.com',
    },
    auth: {
        kakao: {
            apiKey: process.env.KAKAO_API_KEY || '',
        },
        apple: {
            teamId: process.env.APPLE_TEAM_ID || '',
            keyId: process.env.APPLE_KEY_ID || '',
            privateKey: process.env.APPLE_PRIVATE_KEY || '',
            clientId: process.env.APPLE_CLIENT_ID || '',
        },
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID || '',
        },
    },
};
