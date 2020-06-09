import express from 'express';
import * as statusController from '../controllers/status';
const router = express.Router();

router.get('/', statusController.hi);
router.get('/awesome', statusController.awesome);

export default router;
