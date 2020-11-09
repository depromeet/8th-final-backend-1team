import {IsString} from 'class-validator';

export class GetUserPathParameter {
    @IsString({
        message: 'invalid userId parameter',
    })
    userId;
}
