import {IsInt, IsArray} from 'class-validator';

export class HistoryRequest {
    @IsArray({
        message: 'invalid tagIds parameter',
    })
    tagIds;
    @IsInt({
        message: 'invalid incenseId parameter',
    })
    incenseId;
    @IsInt({
        message: 'invalid playTime parameter',
    })
    playTime;
}
