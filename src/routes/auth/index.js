import {Router} from 'express';
import * as SignInController from './SignInController';
import {kakaoLoginMiddlewrae, appleLoginMiddleware} from '@src/middleware/social-login-middleware';

const router = new Router();

router.post(
    '/signin/kakao',
    kakaoLoginMiddlewrae,
    SignInController.signInBySocialLogin);

router.post(
    '/signin/apple',
    appleLoginMiddleware,
    SignInController.signInBySocialLogin);

export default router;
