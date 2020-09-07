import * as SampleRepository from '@src/repository/SampleRepository';
import {InvalidValueException} from '@src/exception/CommonException';
import {moduleLogger} from '@src/logger';
import {objectToString} from '@src/util/conversion';

const logger = moduleLogger('SampleService');

export const getSampleOne = async (id) => {
    logger.info(`getSampleOne start, id: ${id}`);
    const sample = await SampleRepository.findById(id);
    if (!sample) {
        throw new InvalidValueException();
    }
    logger.info(`getSampleOne success, sample: ${objectToString(sample)}`);
    return sample;
};
