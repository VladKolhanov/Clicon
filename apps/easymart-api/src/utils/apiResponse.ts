import type { Response } from 'express'

import { HttpCode, type HttpCodeNames, type HttpCodesType } from '~/config'
import { isDev } from '~/config/env'

interface CreateApiResponse {
  httpCodeName: Lowercase<HttpCodeNames>
  message?: string
  data?: unknown
  stack?: string
  details?: unknown[]
}

interface CommonApiResponse {
  isSuccess: boolean
  code: HttpCodesType
  message: string
  data?: unknown
  stack?: string
  details?: unknown[]
}

export class ApiResponse {
  static create(
    res: Response,
    { httpCodeName, message, data, stack, details }: CreateApiResponse
  ): void {
    const nameUpperCase = httpCodeName.toUpperCase() as Uppercase<HttpCodeNames>
    const statusCode = HttpCode[nameUpperCase]

    const isSuccess = statusCode.toString().startsWith('2')
    const messagef = message
      ? message.trim()
      : httpCodeName.replaceAll('_', ' ')

    let commonApiResponse: CommonApiResponse = {
      isSuccess,
      code: statusCode,
      message: messagef,
    }

    if (isDev && isSuccess) {
      commonApiResponse = { ...commonApiResponse, data }
    }
    if (isDev && !isSuccess) {
      commonApiResponse = { ...commonApiResponse, details, stack }
    }

    res.status(statusCode).json({ ...commonApiResponse, details })
  }
}
