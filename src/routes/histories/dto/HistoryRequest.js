import {IsInt, IsArray} from 'class-validator';

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
    @IsInt({
        message: 'invalid historyId parameter',
    })
    istoryId;
}

