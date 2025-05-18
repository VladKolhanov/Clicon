import { createLogger, format, transports } from 'winston'
import DailyRotateFile from 'winston-daily-rotate-file'

import { ENV } from '~/libs/env'

const { combine, json, timestamp, printf, errors } = format

const logLevels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
}

const myFormat = printf(({ timestamp, level, message, logMetadata, stack }) => {
  const timestampf = `[${timestamp as string}]`
  const levelf = `[${level.toUpperCase()}]`
  const messagef = message as string
  const logMetadataf = logMetadata ? `\nMetadata: ${logMetadata as string}` : ''
  const stackf = stack ? `\n${stack as string}` : ''

  return `${timestampf} ${levelf} ${messagef}${logMetadataf}${stackf}`
})

export const logger = createLogger({
  levels: logLevels,
  level: ENV.LOG_LEVEL as string,
  format: combine(
    errors({ stack: true }),
    timestamp({ format: 'YYYY-MM-DD hh:mm:ss.SSS A' }),
    myFormat
  ),
  transports: [new transports.Console()],
})

const fileRotateTransports = [
  new DailyRotateFile({
    filename: 'logs/app-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d',
    format: combine(errors({ stack: true }), timestamp(), json()),
  }),
  new DailyRotateFile({
    filename: 'logs/app-error-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    level: 'error',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d',
    format: combine(errors({ stack: true }), timestamp(), json()),
  }),
]

fileRotateTransports.forEach((transport) => {
  logger.add(transport)
})
