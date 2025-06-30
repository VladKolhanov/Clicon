import {
  drizzle as neonDriver,
  type NeonHttpDatabase,
} from 'drizzle-orm/neon-http'
import {
  drizzle as pgDriver,
  type PostgresJsDatabase,
} from 'drizzle-orm/postgres-js'

import { ENV } from './env'

type DatabaseClient = NeonHttpDatabase | PostgresJsDatabase

function createDbClient(): DatabaseClient {
  const isProd = ENV.NODE_ENV === 'production'

  return isProd ? neonDriver(ENV.DATABASE_URL) : pgDriver(ENV.DATABASE_URL)
}

export const dbClient = createDbClient()
