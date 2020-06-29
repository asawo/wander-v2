import express, { Request, Response, NextFunction } from 'express';
import indexRoutes from './routes/index';
import userRoutes from './routes/user';
import path from 'path';
import { json } from 'body-parser';
import { getAllUsers, createUser, deleteUser } from './controllers/db';

export const app = express();

app.use(json());
app.use(express.static(path.resolve(__dirname, '../../client/dist')));

// Routes
app.use('/', indexRoutes);
app.use('/user', userRoutes);

// Enable cloudproxy to see if it works
console.log(deleteUser('test123'));
console.log(createUser('test123', 'password'));
console.log(getAllUsers());
