import baseTsupConfig from '@easymart/tsup-config'
import { defineConfig } from 'tsup'

export default defineConfig({
  ...baseTsupConfig,
  entry: ['./src/dbClient.ts', './src/schema.ts'],
  dts: true,
})
