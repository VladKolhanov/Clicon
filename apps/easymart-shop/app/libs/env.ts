import z from 'zod'

const envSchema = z.object({
  VITE_API_URL: z.string().url(),
  DEV: z.boolean(),
  PROD: z.boolean(),
})

export const ENV = envSchema.parse(import.meta.env)
