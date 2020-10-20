import {moduleLogger} from '@src/logger';
import {ApiResponse} from '@src/model/api/ApiResponse';

const logger = moduleLogger('RecommendationController');

export const getRecommendation = async (req, res, next) => {
    logger.debug(`getRecommendation request start`);

    // const { 태그... } = req.query;

    try {
        // logger.info(`getRecommendation request success`);

        return res.status(200).json(new ApiResponse({
            'recommendations': [
                {
                    'tags': [
                        {
                            'id': 1,
                            'name': '신나는',
                            'weight': 0.7,
                        },
                        {
                            'id': 2,
                            'name': '설레서 웃음 나오는',
                            'weight': 0.2,
                        },
                    ],
                    'incense': {
                        'id': 1,
                        'title': 'Nag Champa',
                        'image': 'https://kscory.com/assets/design/strategy/design-strategy-03.png',
                        'detail': '훈연향 계열로 바디감이 좋으며 혈액순환을 도우며, 영적치유, 살균 효능이 있습니다.',
                    },
                    'music': {
                        'id': 1,
                        'url': 'https://fragraph.xxx.xxx/xxxx/xxx',
                        'contentLength': 300,
                    },
                    'video': {
                        'id': 1,
                        'url': 'https://fragraph.s3.ap-northeast-2.amazonaws.com/6.gif',
                    },
                },
                {
                    'tags': [
                        {
                            'id': 1,
                            'name': '신나는',
                            'weight': 0.7,
                        },
                        {
                            'id': 2,
                            'name': '설레서 웃음 나오는',
                            'weight': 0.2,
                        },
                    ],
                    'incense': {
                        'id': 2,
                        'title': 'Its Incense2',
                        'image': 'https://kscory.com/assets/hyperledger/network-1/hyperledger-network1_structure.png',
                        'detail': '이거 향 맞음',
                    },
                    'music': {
                        'id': 1,
                        'url': 'https://fragraph.xxx.xxx/xxxx/xxx',
                        'contentLength': 300,
                    },
                    'video': {
                        'id': 1,
                        'url': 'https://fragraph.s3.ap-northeast-2.amazonaws.com/6.gif',
                    },
                },
            ],
        }));
    } catch (e) {
        next(e);
    }
};
