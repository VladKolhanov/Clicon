import { defineConfig } from 'drizzle-kit'
import { ENV } from './src/env'

export default defineConfig({
  out: './migrations',
  schema: './src/schema.ts',
  dialect: 'postgresql',
  casing: 'snake_case',
  dbCredentials: {
    url: ENV.DATABASE_URL,
  },
})
