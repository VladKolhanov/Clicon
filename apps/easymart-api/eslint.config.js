import {
  baseConfig,
  restrictEnvAccess,
  vitestConfig,
} from '@easymart/eslint-config'

export default [...baseConfig, ...vitestConfig, ...restrictEnvAccess]
