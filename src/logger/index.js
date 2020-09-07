import {createLogger, format, transports} from 'winston';
import {id} from 'cls-rtracer';
import {config} from '@src/config';

const {combine, timestamp, label, printf, colorize, json} = format;

const rTracerFormat = printf(({level, message, label, timestamp}) => {
    const rid = id();
    return rid ?
        `${timestamp} [${label}] ${level}: [trace-id: ${rid}] ${message}` :
        `${timestamp} [${label}] ${level}: ${message}`;
});

const consoleTransport = new transports.Console({
    level: config.server.log.logLevel,
    handleExceptions: true,
    format: combine(
        colorize(),
        label({label: config.server.name}),
        timestamp(),
        rTracerFormat,
    ),
});

export const winstonLogger = createLogger({
    exitOnError: false,
    transports: [consoleTransport],
});

export const moduleLogger = (context = 'default', logger = winstonLogger) => {
    const setMessage = (message) =>
        context? `${context} - ${message}` : message;

    return {
        verbose: (message) => {
            return logger.verbose(setMessage(message));
        },
        debug: (message) => {
            return logger.debug(setMessage(message));
        },
        info: (message) => {
            return logger.info(setMessage(message));
        },
        warn: (message) => {
            return logger.warn(setMessage(message));
        },
        error: (message, trace) => {
            return logger.error(setMessage(message), {trace});
        },
    };
};
