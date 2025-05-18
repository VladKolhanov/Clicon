import { defineConfig } from 'tsup'

export default defineConfig({
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
