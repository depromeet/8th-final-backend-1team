import {IsNumberString, IsString} from 'class-validator';

export class MemoBodyParameter {
    @IsString({
        message: 'invalid title parameter',
    })
    title;

    @IsString({
        message: 'invalid detail parameter',
    })
    detail;
}

export class PostMemoPathParameter {
    @IsNumberString({
        message: 'invalid historyId parameter',
    })
    historyId;
}

export class MemoPathParameter {
    @IsNumberString({
        message: 'invalid historyId parameter',
    })
    historyId;
    @IsNumberString({
        message: 'invalid memoId parameter',
    })
    memoId;
}

