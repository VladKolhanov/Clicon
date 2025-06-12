import { defineConfig } from 'tsup'

export const baseConfig = defineConfig({
  outDir: './dist',
  splitting: false,
  bundle: true,
  clean: true,
  loader: { '.json': 'copy' },
  minify: true,
  sourcemap: true,
  format: ['esm'],
  treeshake: true,
})
