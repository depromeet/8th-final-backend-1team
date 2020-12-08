import * as HistoryService from '@src/service/history/HistoryService';
import {ApiResponse} from '@src/model/api/ApiResponse';

export const getReports = async (req, res, next) => {
    const {accountId} = req;
    try {
        const reportsInfo = await HistoryService.getReportsData({accountId});
        return res.status(200).json(new ApiResponse(reportsInfo));
    } catch (e) {
        next(e);
    }
};
