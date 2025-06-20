import type { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'

import i18nTestConfig from '../config-test'

export const I18nTestProvider = ({ children }: { children: ReactNode }) => {
  return <I18nextProvider i18n={i18nTestConfig}>{children}</I18nextProvider>
}
