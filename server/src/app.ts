import express, { Request, Response, NextFunction } from 'express';
import indexRoutes from './routes/index';
import userRoutes from './routes/user';
import path from 'path';
import { json } from 'body-parser';
import { getAllUsers, createUser, deleteUser } from './controllers/db';
import session from 'express-session';

export const app = express();

app.use(json());
app.use(express.static(path.resolve(__dirname, '../../client/dist')));

// Routes
app.use('/', indexRoutes);
app.use('/user', userRoutes);

// config express-session
const sess = {
  secret: process.env.SESSION_SECRET || '',
  cookie: { secure: false },
  resave: false,
  saveUninitialized: true,
};

if (app.get('env') === 'production') {
  // Use secure cookies in production (requires SSL/TLS)
  sess.cookie.secure = true;

  // Uncomment the line below if your application is behind a proxy (like on Heroku)
  // or if you're encountering the error message:
  // "Unable to verify authorization request state"
  // app.set('trust proxy', 1);
}

app.use(session(sess));

// Enable cloudproxy to see if it works
// console.log(deleteUser('test123'));
// console.log(createUser('test123', 'password'));
// console.log(getAllUsers());
