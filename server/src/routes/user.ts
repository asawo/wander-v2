import express, { Router } from 'express';
import { createUser, awesome } from '../controllers/user';
const router = Router();

router.post('/register', createUser);
router.get('/awesome', awesome);

export default router;
