import {Router} from 'express';
import * as SignInController from './SignInController';
import {kakaoLoginMiddlewrae, appleLoginMiddleware} from '@src/middleware/social-login-middleware';
import {validateBodyMiddleware} from '@src/middleware/request-validate-middleware';
import {
    SocialSignInRequest,
} from '@src/routes/auth/dto/SignInRequest';

const router = new Router();

router.post(
    '/kakao/signin',
    validateBodyMiddleware(SocialSignInRequest),
    kakaoLoginMiddlewrae,
    SignInController.signInBySocialLogin);

router.post(
    '/apple/signin',
    validateBodyMiddleware(SocialSignInRequest),
    appleLoginMiddleware,
    SignInController.signInBySocialLogin);

export default router;
