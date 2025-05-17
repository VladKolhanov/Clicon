import 'dotenv/config'

import z from 'zod'

const envSchema = z.object({
  DATABASE_URL: z.string().url({
    message: 'DATABASE_URL must be a valid URL',
  }),
})

const parsedEnv = envSchema.safeParse(process.env)

if (!parsedEnv.success) {
  console.error('❌ Invalid environment variables:', parsedEnv.error.format())
  process.exit(1)
}

export const ENV = parsedEnv.data
