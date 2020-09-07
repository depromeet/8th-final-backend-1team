import express from 'express';
import sampleRouter from './sample';

const router = new express.Router();

router.use('/sample', sampleRouter);

export default router;
