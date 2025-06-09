import z from 'zod'

const envSchema = z.object({
  VITE_NODE_ENV: z.enum(['development', 'production', 'test'], {
    message: 'must be "development", "production", or "test"',
  }),
  VITE_API_URL: z.string().url({
    message: 'must be a valid URL',
  }),
})

const parsedEnv = envSchema.safeParse(import.meta.env)

if (!parsedEnv.success) {
  const formattedErrorMessages = parsedEnv.error.errors.map(
    (err) => `${err.path.join(' && ')}: ${err.message}`
  )

  const errorMessage =
    '❌ Invalid environment variables:\n' + formattedErrorMessages.join('\n')

  console.error(errorMessage)
  throw new Error(errorMessage)
}

export const ENV = parsedEnv.data
export const isDev = ENV.VITE_NODE_ENV === 'development'
export const isProd = ENV.VITE_NODE_ENV === 'production'
export const isTest = ENV.VITE_NODE_ENV === 'test'
