import {IsInt, IsNumberString} from 'class-validator';

export class PostHistoryBodyParameter {
    // @IsArray({
    //     message: 'invalid tagIds parameter',
    // })
    // tagIds;
    // @IsInt({
    //     message: 'invalid incenseId parameter',
    // })
    // incenseId;
    @IsInt({
        message: 'invalid playTime parameter',
    })
    playTime;
}

export class DeleteHistoryPathParameter {
    @IsNumberString({
        message: 'invalid historyId parameter',
    })
    historyId;
}

