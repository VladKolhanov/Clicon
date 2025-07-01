import 'dotenv/config'

import z from 'zod'

import { formatEnvErrors } from '@easymart/utils'

const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  DATABASE_URL: z.string().url({
    message: 'must be a valid URL',
  }),
})

const parsedEnv = envSchema.safeParse(process.env)

if (!parsedEnv.success) {
  const errorMessage = formatEnvErrors(parsedEnv.error.errors)

  console.error(errorMessage)
  process.exit(1)
}

export const ENV = parsedEnv.data
