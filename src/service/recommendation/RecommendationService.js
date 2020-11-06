import {moduleLogger} from '@src/logger';
import {objectToString} from '@src/util/conversion';
import * as IncenseRepository from '@src/repository/IncenseRepository';
import * as TagRepository from '@src/repository/TagRepository';
import {NotFoundException} from '@src/exception/CommonException';

const logger = moduleLogger('RecommendationService');


export const getRecommendations = async (tagIds) => {
    logger.debug(`getRecommendations start, { "tagIds": ${tagIds} }`);

    const Tags = await TagRepository.getTag(tagIds);
    const maxWeightSumCategoryId = await TagRepository.getRecommendationCategoryId(tagIds);
    const recommendations = await IncenseRepository.getRecommendations(maxWeightSumCategoryId[0].category_id);

    if (!recommendations) {
        logger.error(`cannot find recommendations info with tagIds, { "tagIds": "${tagIds}" }`);
        throw new NotFoundException();
    }

    const result = [{tags: Tags, incense: recommendations}];

    logger.info(`getRecommendations success, { "recomendationInfo": ${objectToString(result)} }`);

    return result;
};
