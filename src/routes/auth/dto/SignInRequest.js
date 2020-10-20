import {IsString} from 'class-validator';

export class SocialSignInRequest {
    @IsString({
        message: 'invalid token parameter',
    })
    token;
}
