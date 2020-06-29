import { app } from './app';
import { PORT } from './config/constants';

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
