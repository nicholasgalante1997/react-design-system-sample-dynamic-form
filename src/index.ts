import { server } from './server'
import { logger } from './utils/logger'

const PORT = process.env.PORT ?? (3000 as const)
const listenerCb = () => {
  logger.info('Starting `server-driven-form` server...')
};

(function () {
  try {
    server.listen(PORT, listenerCb)
  } catch (e) {
    logger.error(e)
  }
})()
