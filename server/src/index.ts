import express from 'express';
import { PORT } from './config/constants';
import path from 'path';

const app = express();
app.use(express.json());

app.use(express.static(path.resolve(__dirname, '../../client/dist')));

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
// });

app.listen(PORT, () => {
    console.log(`Server is listening on localhost:${PORT}`);
});
