/** @typedef {import("prettier").Config} PrettierConfig */

/** @type { PrettierConfig } */
const config = {
  printWidth: 80,
  trailingComma: 'es5',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  plugins: ['prettier-plugin-packagejson'],
}

export default config
