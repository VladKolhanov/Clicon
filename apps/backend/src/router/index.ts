import express from 'express'

import { ApiResponse } from '~/utils/apiResponse'
import { AppError } from '~/utils/appError'

const router = express.Router()

router.get('/error', () => {
  throw new AppError('created')
})

router.get('/health', (_req, res) => {
  ApiResponse.create(res, {
    httpCodeName: 'ok',
    message: 'Success health check',
    data: { timestamp: new Date().toISOString() },
  })
})

export default router
