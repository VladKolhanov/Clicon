import {
  baseConfig,
  reactConfig,
  restrictEnvAccess,
} from '@clicon/eslint-config'

export default [...baseConfig, ...reactConfig, ...restrictEnvAccess]
