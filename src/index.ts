import { server } from './server';
import { logger } from './utils/logger';
import {
  pollDatabaseConnection,
  existingDatabases,
  buildFormTable,
  buildFormDB,
} from './mysql-db-orm';

const PORT = process.env.PORT ?? (3000 as const);
const listenerCb = () => {
  logger.info('Starting `server-driven-form` server...');
};

(async function () {
  try {
    if (await pollDatabaseConnection()) {
      const hasExistingDatabases = await existingDatabases();
      if (!hasExistingDatabases) {
        await buildFormDB();
      }
      await buildFormTable();
      server.listen(PORT, listenerCb);
    } else {
      /**
       * If we cant connect to the db,
       * docker is likely still setting it up, but we can kill the process
       * and allow the container to restart at a later time when the db is set up
       */
      throw new Error('Unable to connect to DB');
    }
  } catch (e) {
    logger.error(e);
    process.exit(1);
  }
})();
