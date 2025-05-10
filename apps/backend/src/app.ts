import compression from 'compression'
import cors from 'cors'
import express, { type Express } from 'express'

import { corsOptions } from '~/config'
import { ENV } from '~/libs/env'
import { logger } from '~/libs/logger'
import { httpLoggerMiddleware } from '~/middlewares/httpLogger'
import { apiLimiter } from '~/middlewares/rateLimiter'
import router from '~/router'

import { ApiResponse } from './utils/apiResponse'

export class App {
  app: Express
  apiPrefix: string
  port: number

  constructor() {
    this.app = express()
    this.port = ENV.PORT
    this.apiPrefix = ENV.DEFAULT_API_PREFIX
    this.initMiddlewares()
    this.setupRouter()
  }

  listen() {
    this.app.listen(this.port, () => {
      logger.info(`Server running on port ${this.port}`)
    })
  }

  private initMiddlewares() {
    this.app.use(httpLoggerMiddleware)
    this.app.use(cors(corsOptions))
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(compression())
    this.app.use(this.apiPrefix, apiLimiter)
  }

  private setupRouter() {
    this.app.use(this.apiPrefix, router)

    this.app.use((_req, res) => {
      ApiResponse.create(res, {
        name: 'not_found',
        message: "This endpoint doesn't exist.",
      })
    })
  }
}
