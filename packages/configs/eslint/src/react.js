import jsxA11y from 'eslint-plugin-jsx-a11y'
import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'

/** @type {Awaited<import('typescript-eslint').Config>} */
export default [
  reactHooks.configs['recommended-latest'],
  jsxA11y.flatConfigs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      react: reactPlugin,
    },
    rules: {
      ...reactPlugin.configs['jsx-runtime'].rules,
      'react/boolean-prop-naming': [
        'error',
        { rule: '^(is|has|as)[A-Z]([A-Za-z0-9]?)+' },
      ],
      'react/function-component-definition': [
        'warn',
        {
          namedComponents: ['arrow-function', 'function-declaration'],
        },
      ],
      'react/hook-use-state': ['error', { allowDestructuredState: true }],
      'react/jsx-fragments': ['error', 'syntax'],
      'react/jsx-no-useless-fragment': 'error',
      'react/jsx-props-no-spread-multi': 'error',
      'react/no-this-in-sfc': 'error',
      'react/style-prop-object': 'error',
      'react/self-closing-comp': [
        'error',
        {
          component: true,
          html: true,
        },
      ],
    },
    languageOptions: {
      globals: {
        React: 'writable',
      },
    },
  },
]
