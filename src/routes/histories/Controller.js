import {moduleLogger} from '@src/logger';
import {objectToString} from '@src/util/conversion';
// import * as HistoryService from '@src/service/history/HistoryService';
import {ApiResponse} from '@src/model/api/ApiResponse';

const logger = moduleLogger('HistoryController');

export const postHistory = async (req, res, next) => {
    logger.debug(`postHistory request start`);

    const historyInfo = req.body;
    // historyInfo.accountId = '사용자 아이디';

    logger.info(`postHistory request, { "historyInfo": ${objectToString(historyInfo)} }`);

    try {
        // const {historyId} = await HistoryService.postHistory(historyInfo);

        logger.info(`postHisotry request success`);

        // return res.status(200).json(new ApiResponse({historyId}));
        return res.status(200).json(new ApiResponse({historyId: 1}));
    } catch (e) {
        next(e);
    }
};

export const getHistory = async (req, res, next) => {
    logger.debug(`getHistory request start`);

    try {
        return res.status(200).json(new ApiResponse({
            'lastId': -1,
            'histories': [
                {
                    'id': 1,
                    'createdAt': '2020-09-24T23:02:12z',
                    'playTime': 300,
                    'incense': {
                        'id': 1,
                        'title': 'Nag Champa',
                        'image': 'https://kscory.com/assets/design/strategy/design-strategy-03.png',
                        'detail': '훈연향 계열로 바디감이 좋으며 혈액순환을 도우며, 영적치유, 살균 효능이 있습니다.',
                    },
                    'memo': [
                        {
                            'id': 1,
                            'detail': '삼겹살 먹어서 기분 짱좋음',
                        },
                    ],
                },
            ],
        }));
    } catch (e) {
        next(e);
    }
};

export const deleteHistory = async (req, res, next) => {
    logger.debug(`deleteHistory request start`);

    try {
        // logger.info(`deleteHisotry request success`);

        return res.status(200).json(new ApiResponse({}));
    } catch (e) {
        next(e);
    }
};
