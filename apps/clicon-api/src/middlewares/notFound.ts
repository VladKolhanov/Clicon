import { type Request, type Response } from 'express'

import { ApiResponse } from '~/utils/apiResponse'

export const notFound = (_req: Request, res: Response) => {
  ApiResponse.create(res, {
    httpCodeName: 'not_found',
    message: "This endpoint doesn't exist.",
  })
}
