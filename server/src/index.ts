import express, { Request, Response, NextFunction } from 'express';
import indexRoutes from './routes/index';
import userRoutes from './routes/user';
import path from 'path';
import { json } from 'body-parser';
import { test } from './controllers/db';
import { PORT } from './config/constants';

const app = express();

app.use(json());
app.use(express.static(path.resolve(__dirname, '../../client/dist')));

// Routes
app.use('/', indexRoutes);
app.use('/user', userRoutes);

// error middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

test(1);

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
