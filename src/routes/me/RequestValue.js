import {IsString} from 'class-validator';

export class PutMeBodyParameter {
    @IsString({
        message: 'invalid nickname parameter',
    })
    nickname;
}
