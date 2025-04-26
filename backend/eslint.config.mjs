import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier/flat'
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort'

const jsRules = {
  files: ['**/*.{ts,js,jsx,tsx}'],
  rules: {
    eqeqeq: 'error',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-duplicate-imports': 'error',
    'no-eval': 'error',
    'no-template-curly-in-string': 'error',
    'no-unreachable': 'error',
    'no-useless-catch': 'error',
    'no-var': 'error',
    'prefer-template': 'error',
  },
}

const tsRules = {
  files: ['**/*.{ts,js,jsx,tsx}'],
  rules: {
    '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '^_' }],
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/consistent-indexed-object-style': 'error',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    '@typescript-eslint/no-unnecessary-template-expression': 'error',
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',
    '@typescript-eslint/no-useless-empty-export': 'error',
    '@typescript-eslint/prefer-literal-enum-member': 'error',
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/promise-function-async': 'error',
    '@typescript-eslint/unified-signatures': 'error',
    '@typescript-eslint/use-unknown-in-catch-callback-variable': 'error',
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { fixStyle: 'inline-type-imports' },
    ],
  },
}

const importRules = {
  files: ['**/*.{ts,js,jsx,tsx}'],
  rules: {
    'simple-import-sort/imports': [
      'error',
      {
        groups: [['^@?[a-z]'], ['^@/(?!styles)'], ['^\\.']],
      },
    ],
    'simple-import-sort/exports': 'error',
  },
}

export default tseslint.config(
  {
    ignores: ['node_modules', 'dist'],
  },
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['eslint.config.mjs'],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    plugins: {
      'simple-import-sort': simpleImportSortPlugin,
    },
  },

  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  eslintConfigPrettier,

  jsRules,
  tsRules,
  importRules
)
