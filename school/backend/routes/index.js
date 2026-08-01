import express from 'express';
import healthRoutes from './healthRoutes.js';
import inquiryRoutes from './inquiryRoutes.js';

const router = express.Router();

router.use('/health', healthRoutes);
router.use('/', inquiryRoutes);

export default router;
