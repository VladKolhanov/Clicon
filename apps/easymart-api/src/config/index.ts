import { ENV, isDev } from '~/config/env'

export const HttpCode = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
} as const satisfies Record<string, number>

export type HttpCodeNames = keyof typeof HttpCode
export type HttpCodesType = (typeof HttpCode)[keyof typeof HttpCode]

export const corsOptions = {
  origin: isDev ? '*' : ENV.CLIENT_DEV_SERVER_URL,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
}
