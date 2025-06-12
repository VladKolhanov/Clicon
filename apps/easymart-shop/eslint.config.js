import {
  baseConfig,
  reactConfig,
  vitestConfig,
  restrictEnvAccess,
} from '@easymart/eslint-config'

export default [
  ...baseConfig,
  ...reactConfig,
  ...vitestConfig,
  ...restrictEnvAccess,
]
