import express from 'express';
import { createUser, awesome } from '../controllers/user';
const router = express.Router();

router.post('/register', createUser);
router.get('/awesome', awesome);

export default router;
