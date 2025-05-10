import type { Response } from 'express'

import { HttpCode, type HttpCodeNames } from '~/config'

interface CreateApiResponse {
  name: Lowercase<HttpCodeNames>
  message?: string
  data?: unknown
}

export class ApiResponse {
  static create(
    res: Response,
    { name, message, data }: CreateApiResponse
  ): void {
    const nameUpperCase = name.toUpperCase() as Uppercase<HttpCodeNames>
    const statusCode = HttpCode[nameUpperCase]

    const isSuccess = statusCode.toString().startsWith('2')
    const messagef = `${name} ${message ? `| ${message}` : ''}`

    if (isSuccess) {
      res.status(statusCode).json({
        isSuccess,
        code: statusCode,
        message: messagef,
        data,
      })
    } else {
      res.status(statusCode).json({
        isSuccess,
        code: statusCode,
        message: messagef,
      })
    }
  }
}
