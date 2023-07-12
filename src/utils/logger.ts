import pino from 'pino'

export const logger = pino({
  name: 'spectrum-form-logger',
  level: 'info',
  base: undefined,
  browser: {
    asObject: true
  }
})
