import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./src/dbClient.ts', './src/schema.ts'],
  splitting: false,
  bundle: true,
  outDir: './dist',
  clean: true,
  dts: true,
  loader: { '.json': 'copy' },
  minify: true,
  sourcemap: true,
  format: ['esm'],
  treeshake: true,
})
