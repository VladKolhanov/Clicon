import express from 'express'

import { ApiResponse } from '~/utils/apiResponse'

const router = express.Router()

router.get('/health', (_req, res) => {
  ApiResponse.create(res, {
    name: 'ok',
    message: 'Success health check',
    data: { timestamp: new Date().toISOString() },
  })
})

// router.all('*', (_req, res) => {
//   ApiResponse.create(res, {
//     name: 'not_found',
//     message: "This endpoint doesn't exist.",
//   })
// })

export default router
