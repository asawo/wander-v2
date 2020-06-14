export const PORT = process.env.PORT || 8080;
// export const CONNECTION_STRING = process.env.DATABASE_URL || 'postgres://localhost:5432/wander';

export const dbConfig = {
  host: process.env.SERVICE_DB_HOST || '127.0.0.1',
  username: process.env.SERVICE_DB_USER || 'postgres',
  password: process.env.SERVICE_DB_PASSWORD || '',
  database: process.env.SERVICE_DB_DATABASE || 'wander',
};
