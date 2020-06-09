import express from 'express';
import { createUser, awesome } from '../controllers/user';
const router = express.Router();

router.get('/', createUser);
router.get('/awesome', awesome);

export default router;
