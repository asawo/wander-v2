import express, { Request, Response, NextFunction } from 'express';
import indexRoutes from './routes/index';
import userRoutes from './routes/user';
import path from 'path';
// import * as db from './config/database';
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());

app.use(express.static(path.resolve(__dirname, '../../client/dist')));

app.use('/', indexRoutes);
app.use('/user', userRoutes);

// error middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
