import {moduleLogger} from '@src/logger';
import {ApiResponse} from '@src/model/api/ApiResponse';

const logger = moduleLogger('IncenseController');

export const getIncense = async (req, res, next) => {
    logger.debug(`getIncense request start`);

    try {
        // logger.info(`getIncense request success`);

        return res.status(200).json(new ApiResponse({
            'incenses': [
                {
                    'id': 1,
                    'title': 'Nag Champa',
                    'detail': '훈연향 계열로 바디감이 좋으며 혈액순환을 도우며, 영적치유, 살균 효능이 있습니다.',
                },
                {
                    'id': 2,
                    'title': 'It;s Incense2',
                    'detail': '이거 향 맞으니까 일단 쓰자',
                },
            ],
        }));
    } catch (e) {
        next(e);
    }
};
