import express from 'express';
import * as SampleController from './SampleController';

const router = new express.Router();

router.post('/', SampleController.createOne);

router.get('/:id', SampleController.getOne);

export default router;
