import { defineProject } from 'vitest/config'
import path from 'node:path'

export default defineProject({
  test: {
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './app'),
    },
  },
})
