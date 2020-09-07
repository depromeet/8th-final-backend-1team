import {IsString} from 'class-validator';
import {validateBody} from '@src/util/request-validator';

export class SampleOneRequest {
    @IsString({
        message: 'invalid text parameter',
    })
    text;

    static async fromBody(body) {
        await validateBody(SampleOneRequest, body);
        const request = new SampleOneRequest();
        request.text = body.text;
        return request;
    }
}
