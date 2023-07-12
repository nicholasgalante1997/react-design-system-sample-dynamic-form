import { type NextFunction, type Request, type Response } from 'express'
import { logger } from '@/utils/logger'

interface TraceOptions {
  verbose: boolean
}

export function trace ({ verbose = false }: TraceOptions) {
  return function (req: Request, _res: Response, next: NextFunction) {
    const device = `user-agent: ${req.headers['user-agent']}`
    const host = `host: ${req.headers.host}`
    const path = `path: ${req.path}`
    const method = `method: ${req.method}`
    const url = `original-url: ${req.originalUrl}`
    const logs = [device, host, path, method, url]
    if (verbose) {
      logs.push(`URLSearchParams: ${req.query}`)
      logs.push(`Body: ${req.body}`)
      logs.push(`Actor: ${req.ip}`)
    }
    logger.info(`Block ${Date.now()}\n\t`)
    logger.info(logs.join('\n\t'))
    next()
  }
}
