import { type Request, type Response } from 'express'

import { ApiResponse } from '~/utils/apiResponse'
import { AppError } from '~/utils/appError'

export class MonitoringController {
  getHealth = (_req: Request, res: Response) => {
    const health = {
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      memoryUsage: process.memoryUsage(),
      cpuUsage: process.cpuUsage(),
      nodeVersion: process.version,
      pid: process.pid,
    }

    ApiResponse.create(res, {
      httpCodeName: 'ok',
      message: 'Success health check',
      data: health,
    })
  }

  getError = () => {
    const random = Math.random()

    if (random < 0.3) {
      throw new AppError(
        'internal_server_error',
        'Simulated 500 Internal Server Error'
      )
    } else if (random < 0.6) {
      throw new AppError('bad_request', 'Simulated 400 Bad Request')
    } else {
      throw new AppError('unauthorized', 'Simulated 401 Unauthorized')
    }
  }
}
