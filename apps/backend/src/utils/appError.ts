import { type HttpCodeNames } from '~/config'

export class AppError extends Error {
  public readonly httpCodeName: Lowercase<HttpCodeNames>
  public readonly details: unknown[]

  constructor(
    httpCodeName: Lowercase<HttpCodeNames>,
    message?: string,
    details: unknown[] = []
  ) {
    super(message)
    this.httpCodeName = httpCodeName
    this.details = details

    Error.captureStackTrace(this, this.constructor)
  }
}

export const isAppError = (error: unknown): error is AppError => {
  return error instanceof AppError
}
