import express from 'express';
import swaggerUi from 'swagger-ui-express';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import {expressMiddleware as rTracerExpressMiddleware} from 'cls-rtracer';
import swaggerSpecs from '@src/swagger';
import {moduleLogger} from '@src/logger';
import {handle404Error, handleError} from '@src/middleware/error-middleare';
import {traceIdMiddleware} from '@src/middleware/tracerId-middleware';
import {sequelize} from '@src/database/Sequelize';
import v1Router from '@src/routes/v1';

const logger = moduleLogger('App');

const app = express();

app.use(helmet());
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.set('etag', false);

app.use(traceIdMiddleware);
app.use(rTracerExpressMiddleware({
    useHeader: true,
    headerName: 'trace-id',
}));
app.use(morgan('combined', {
    stream: {
        write: (message) => logger.info(message),
    },
}));

app.get('/ping', (req, res, next) => {
    return res.status(200).end('pong');
});

/*
sequelize.sync(
    {force: true}, () => {
        logger.info('DB connection is success');
    });
sequelize.sync(() => {
    logger.info('DB connection is success');
});*/

app.use('/api/v1', v1Router);

if (process.env.NODE_ENV !== 'production') {
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
}

// exception handling
app.use(handle404Error);
app.use(handleError);

export default app;
