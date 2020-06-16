import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || 8080;

export const dbConfig = {
  host: process.env.DB_HOST || '127.0.0.1',
  username: process.env.DB_USER || '',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || '',
};
