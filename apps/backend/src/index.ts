import compression from 'compression'
import cors from 'cors'
import express from 'express'

import { ENV } from '~/libs/env'
import { apiLimiter } from '~/middlewares/rateLimiter'
import router from '~/router'

const app = express()
const port = ENV.PORT
const apiPrefix = ENV.DEFAULT_API_PREFIX

app.use(
  cors({
    origin: ENV.CLIENT_DEV_SERVER_URL,
    optionsSuccessStatus: 200,
    credentials: true,
  })
)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(compression())

app.use(apiPrefix, apiLimiter)
app.use(apiPrefix, router)

app.listen(port, () => {
  console.log(`Server running on port ${port}...`)
})
