import 'reflect-metadata';
import {config} from '@src/config';
import app from '@src/app';
import {sequelize} from '@src/database/Sequelize';
import {moduleLogger} from '@src/logger';
import {objectToString} from '@src/util/conversion';

const logger = moduleLogger('www');
sequelize
    .authenticate()
    .then(() => {
        app.listen(config.server.port, () => {
            logger.info(`${config.server.name} is running with port: ${config.server.port}`);
        });
    }).catch((error) => {
        logger.error(`failed to connect database, error: ${objectToString(error)}`);
    });
