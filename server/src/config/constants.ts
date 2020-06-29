import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || 8080;

export const dbConfig = {
  host: process.env.DB_HOST || '127.0.0.1',
  username: process.env.DB_USER || '',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || '',
};

export const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  dialectOptions: {
    socketPath: process.env.DB_HOST,
  },
});
