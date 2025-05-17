import { drizzle } from 'drizzle-orm/neon-http'

import { ENV } from './env'

export const dbClient = drizzle(ENV.DATABASE_URL)
