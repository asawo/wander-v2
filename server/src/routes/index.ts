import express, { Router } from 'express';
const router = Router();

router.get('/hi', (req, res) => {
  res.send('hi');
});

export default router;
