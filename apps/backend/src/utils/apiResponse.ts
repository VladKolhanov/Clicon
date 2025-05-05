import type { Response } from 'express'

import { ENV } from '~/libs/env'

export class ApiResponse {
  static success(
    res: Response,
    data: unknown = null,
    message = 'Success'
  ): void {
    res.status(200).json({
      success: true,
      message,
      data,
    })
  }

  static error(
    res: Response,
    message: string,
    statusCode = 400,
    code?: string
  ): void {
    res.status(statusCode).json({
      success: false,
      message,
      code,
      ...(ENV.NODE_ENV === 'development' && {
        stack: new Error().stack,
      }),
    })
  }
}
