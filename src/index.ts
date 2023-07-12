import { server } from './server';
import { logger } from './utils/logger';

const PORT = process.env.PORT ?? (3000 as const);
const listenerCb = () => {
  logger.info('Starting `server-driven-form` server...');
};

process.on('exit', (code) => {
  if (code === 0) {
    logger.info('Process exited successfully.');
  }
  if (code === 1) {
    logger.warn('Process exited due to a Server issue.')
  }
  if (code === 2) {
    logger.warn('Process exited from a Database issue');
  }
});

(function () {
  try {
    server.listen(PORT, listenerCb);
  } catch (e) {
    logger.error(e);
  }
})();
