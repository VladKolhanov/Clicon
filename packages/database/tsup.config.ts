import { baseConfig } from '@easymart/tsup-config'
import { defineConfig } from 'tsup'

export default defineConfig({
  ...baseConfig,
  entry: ['./src/dbClient.ts', './src/schema.ts'],
  dts: true,
})
