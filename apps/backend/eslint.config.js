import { baseConfig, restrictEnvAccess } from '@clicon/eslint-config'

export default [...baseConfig, ...restrictEnvAccess]
