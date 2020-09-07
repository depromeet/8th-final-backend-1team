import * as SampleService from '@src/service/SampleService';
import {moduleLogger} from '@src/logger';
import {objectToString} from '@src/util/conversion';
import {ApiResponse} from '@src/model/api/ApiResponse';
import {SampleOneRequest} from '@src/model/api/SampleOneRequest';
import {Sample} from '@src/model/entity/Sample';

const logger = moduleLogger('SampleController');

export const getOne = async (req, res, next) => {
    try {
        logger.info(`getSampleOne request params: ${objectToString(req.params)}`);
        const sample = await SampleService.getSampleOne(req.params.id);
        return res.status(200).json(new ApiResponse({sample}));
    } catch (e) {
        next(e);
    }
};

export const createOne = async (req, res, next) => {
    try {
        const request = await SampleOneRequest.fromBody(req.body);
        logger.info(`createSampleOne request body: ${objectToString(request)}`);
        const sample = await Sample.create({
            textText: request.text,
        });

        logger.info(`createSampleOne request success sample: ${objectToString(sample.dataValues)}`);

        return res.status(200).json(new ApiResponse({sample}));
    } catch (e) {
        next(e);
    }
};
