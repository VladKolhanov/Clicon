import {
  drizzle as neonDriver,
  type NeonHttpDatabase,
} from 'drizzle-orm/neon-http'
import {
  drizzle as pgDriver,
  type NodePgDatabase,
} from 'drizzle-orm/node-postgres'

import { ENV } from './env'

type DatabaseClient = NeonHttpDatabase | NodePgDatabase

function createDbClient(): DatabaseClient {
  const isProd = ENV.NODE_ENV === 'production'

  return isProd ? neonDriver(ENV.DATABASE_URL) : pgDriver(ENV.DATABASE_URL)
}

export const dbClient = createDbClient()
