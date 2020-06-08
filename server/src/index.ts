import express from 'express';
// import { PORT } from './config/constants';
// import * as db from './config/database';
import * as statusController from './controllers/status';
import path from 'path';
const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());

app.use(express.static(path.resolve(__dirname, '../../client/dist')));

app.use('/user', require('./routes/user'));

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});
