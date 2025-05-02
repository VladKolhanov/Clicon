declare module 'eslint-plugin-jsx-a11y' {
  import type { Linter } from 'eslint'

  export const configs: {
    recommended: Linter.LegacyConfig
    strict: Linter.LegacyConfig
  }

  export const flatConfigs: {
    recommended: Linter.Config
    strict: Linter.Config
  }
}
