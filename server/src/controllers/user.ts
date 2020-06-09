import { Request, Response } from 'express';

export const hi = (req: Request, res: Response) => {
  res.send('Hello');
};

export const awesome = (req: Request, res: Response) => {
  res.send('awesome');
};
