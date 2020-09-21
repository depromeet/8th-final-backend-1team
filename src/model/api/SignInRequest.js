import {IsString} from 'class-validator';

export class KakoSignInRequest {
    @IsString({
        message: 'invalid token parameter',
    })
    token;
}

export class AppleSignInRequest {
    @IsString({
        message: 'invalid code parameter',
    })
    code;
}
