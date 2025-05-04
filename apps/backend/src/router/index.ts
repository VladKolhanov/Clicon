import express from 'express'

import { ApiResponse } from '~/utils/apiResponse'

const router = express.Router()

router.get(`/`, (_req, res) => {
  ApiResponse.success(res, `Welcome to Initial API!`)
})

router.get('/health', (_req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date(),
    uptime: process.uptime(),
  })
})

export default router
