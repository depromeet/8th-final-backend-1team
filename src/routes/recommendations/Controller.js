import {moduleLogger} from '@src/logger';
import {ApiResponse} from '@src/model/api/ApiResponse';
import * as RecommendationService from '@src/service/recommendation/RecommendationService';


const logger = moduleLogger('RecommendationController');

export const getRecommendations = async (req, res, next) => {
    logger.debug(`getRecommendations request start`);

    const tagIds = req.query.tag;

    logger.info(`getRecommendations request, { "tagIds": ${tagIds} }`);

    try {
        const recommendations = await RecommendationService.getRecommendations(tagIds);

        logger.info(`getRecommendations request success`);

        return res.status(200).json(new ApiResponse({recommendations}));
    } catch (e) {
        next(e);
    }
};
