import 'dotenv/config';
import { app } from './app.js';
import { verificationQueue } from './verificationQueue.js';

const PORT = Number(process.env.PORT) || 3001;

export function startServer() {
  const server = app.listen(PORT, '0.0.0.0', () => {
    console.log(`[VERIF237] API backend running on http://0.0.0.0:${PORT}`);
    verificationQueue.resumePendingTasks();
  });
  return server;
}

startServer();

export { app };
