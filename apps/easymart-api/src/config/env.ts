import z from 'zod'

const envSchema = z.object({
  PORT: z.coerce.number({ message: 'must be a valid number' }),
  NODE_ENV: z.enum(['development', 'production', 'test'], {
    message: 'must be "development", "production", or "test"',
  }),
  CLIENT_DEV_SERVER_URL: z
    .string()
    .url({ message: 'must be a valid URL' })
    .nonempty({
      message: 'required and cannot be empty',
    }),
  DEFAULT_API_PREFIX: z.string().default(''),
  LOG_LEVEL: z.enum(['error', 'warn', 'info', 'http', 'debug']).default('http'),
})

const parsedEnv = envSchema.safeParse(process.env)

if (!parsedEnv.success) {
  const formattedErrorMessages = parsedEnv.error.errors.map(
    (err) => `${err.path.join(' && ')}: ${err.message}`
  )

  const errorMessage =
    '❌ Invalid environment variables:\n' + formattedErrorMessages.join('\n')

  throw new Error(errorMessage)
}

export const ENV = parsedEnv.data
export const isDev = ENV.NODE_ENV === 'development'
export const isProd = ENV.NODE_ENV === 'production'
export const isTest = ENV.NODE_ENV === 'test'
