import {Op} from 'sequelize';
import {Sample} from '@src/model/entity/Sample';
import {moduleLogger} from '@src/logger';

const logger = moduleLogger('SampleRepository');

export const findById = async (id) => {
    return Sample.findOne({
        where: {
            seq: {[Op.eq]: id},
        },
        raw: true,
    });
};
