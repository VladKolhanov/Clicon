import { defineConfig } from 'tsup'

import { baseConfig } from './src/base'

export default defineConfig({
  ...baseConfig,
  entry: ['./src/base.ts'],
  dts: true,
})
