import type { NextFunction, Request, Response } from 'express'

import { isDev } from '~/config/env'
import { logger } from '~/libs/logger'
import { ApiResponse } from '~/utils/apiResponse'
import { isAppError } from '~/utils/appError'

export const errorHandler = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  logger.error(error)

  ApiResponse.create(res, {
    httpCodeName: isAppError(error)
      ? error.httpCodeName
      : 'internal_server_error',
    message: error.message,
    stack: isDev ? error.stack : undefined,
    details: isAppError(error) ? error.details : [],
  })
}
