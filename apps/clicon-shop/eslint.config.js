import {
  baseConfig,
  reactConfig,
  restrictEnvAccess,
} from '@easymart/eslint-config'

export default [...baseConfig, ...reactConfig, ...restrictEnvAccess]
