import express from 'express'

import { MonitoringController } from '~/controllers/monitoring.controller'

const router = express.Router()
const monitoringController = new MonitoringController()

router.get('/health', monitoringController.getHealth)
router.get('/error', monitoringController.getError)

export { router as monitoringRouter }
