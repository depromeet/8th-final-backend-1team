import fs from 'fs';
import path from 'path';
import {Sequelize} from 'sequelize';
import * as _ from 'fxjs/Strict';
import {config} from '@src/config';
import {moduleLogger} from '@src/logger';

const logger = moduleLogger('Sequelize');

const sequelize = new Sequelize({
    dialect: config.db.default.dialect,
    // dialect: 'sqlite',
    // storage: 'memory',
    database: config.db.default.database,
    username: config.db.default.username,
    password: config.db.default.password,
    host: config.db.default.host,
    port: config.db.default.port,
    logging: config.db.default.logging ? (msg) => logger.debug(msg) : false,
    pool: {
        max: config.db.default.maximumPoolSize,
        min: 0,
        idle: config.db.default.idlePoolSize,
    },
    dialectOptions: {
        timeout: config.db.default.connectionTimeout,
    },
});

const modelPath = `${__dirname}/../model/entity/`;
_.go(
    fs.readdirSync(modelPath),
    _.map((file) => {
        const model = require(path.join(modelPath, file));
        model.init(sequelize);
        return model;
    }),
    _.filter((model) => !!model.associate),
    _.map((model) => model.associate()),
);

export {
    sequelize,
};
