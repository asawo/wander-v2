import { RequestHandler } from 'express';
import { User } from '../models/user';

const addedUser: User[] = [];

export const createUser: RequestHandler = (req, res) => {
  const username = (req.body as { username: string }).username;
  const password = (req.body as { password: string }).password;
  const newUser = new User(username, password);

  addedUser.push(newUser);

  res.status(201).json({ message: 'Created new user.', createdUser: newUser });
};

export const awesome: RequestHandler = (req, res) => {
  res.send('awesome');
};
