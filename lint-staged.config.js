/**
 * @type {import('lint-staged').Configuration}
 */
export default {
  'apps/easymart-api/**/*.{js,jsx,ts,tsx}': [
    'prettier --write',
    'eslint --config ./apps/easymart-api/eslint.config.js --fix',
  ],

  'apps/easymart-shop/**/*.{js,jsx,ts,tsx}': [
    'prettier --write',
    'eslint --config ./apps/easymart-shop/eslint.config.js --fix',
  ],
  'apps/easymart-shop/**/*.css':
    'stylelint --fix --config ./apps/easymart-shop/stylelint.config.js',

  'packages/configs/eslint/**/*.{js,jsx,ts,tsx}': [
    'prettier --write',
    'eslint --config ./packages/configs/eslint/eslint.config.js --fix',
  ],

  'packages/configs/stylelint/**/*.{js,jsx,ts,tsx}': [
    'prettier --write',
    'eslint --config ./packages/configs/stylelint/eslint.config.js --fix',
  ],

  'packages/configs/tsup/**/*.{js,jsx,ts,tsx}': [
    'prettier --write',
    'eslint --config ./packages/configs/tsup/eslint.config.js --fix',
  ],

  'packages/database/**/*.{js,jsx,ts,tsx}': [
    'prettier --write',
    'eslint --config ./packages/database/eslint.config.js --fix',
  ],

  '*.{json,css,html,md,mdx}': 'prettier --write',
}
