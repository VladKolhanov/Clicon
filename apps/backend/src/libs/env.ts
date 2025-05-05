import z from 'zod'

const envSchema = z.object({
  PORT: z.coerce.number(),
  NODE_ENV: z.enum(['development', 'production', 'test']),
  CLIENT_DEV_SERVER_URL: z.string(),
  DEFAULT_API_PREFIX: z.string(),
})

export const ENV = envSchema.parse(process.env)
