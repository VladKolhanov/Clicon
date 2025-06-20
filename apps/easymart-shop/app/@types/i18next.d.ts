import type { I18nDefaultNamespace } from '~/i18n/config'

import type Resources from './resources'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof I18nDefaultNamespace
    resources: Resources
  }
}
