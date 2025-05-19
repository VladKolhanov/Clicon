import { baseConfig, restrictEnvAccess } from '@easymart/eslint-config'

export default [...baseConfig, ...restrictEnvAccess]
