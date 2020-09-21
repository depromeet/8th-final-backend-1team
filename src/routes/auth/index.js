import {Router} from 'express';
import * as SignInController from './SignInController';
import {kakaoLoginMiddlewrae, appleLoginMiddleware} from '@src/middleware/social-login-middleware';
import {validateBodyMiddleware} from '@src/middleware/request-validate-middleware';
import {
    AppleSignInRequest,
    KakoSignInRequest,
} from '@src/model/api/SignInRequest';

const router = new Router();

router.post(
    '/signin/kakao',
    validateBodyMiddleware(KakoSignInRequest),
    kakaoLoginMiddlewrae,
    SignInController.signInBySocialLogin);

router.post(
    '/signin/apple',
    validateBodyMiddleware(AppleSignInRequest),
    appleLoginMiddleware,
    SignInController.signInBySocialLogin);

export default router;
