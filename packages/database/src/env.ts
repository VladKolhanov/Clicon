import 'dotenv/config'

import z from 'zod'

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
  const formattedErrorMessages = parsedEnv.error.errors.map(
    (err) => `${err.path.join(' && ')}: ${err.message}`
  )

  const errorMessage = `❌ Invalid environment variables:\n${formattedErrorMessages.join('\n')}`

  console.error(errorMessage)
  process.exit(1)
}

export const ENV = parsedEnv.data
