import baseTsupConfig from '@clicon/tsup-config'
import { defineConfig } from 'tsup'

export default defineConfig({
  ...baseTsupConfig,
  entry: ['./src/index.ts'],
})
