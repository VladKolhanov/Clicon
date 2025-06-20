import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'

import {
  I18nDefaultLanguage,
  I18nDefaultNamespace,
  I18nNamespaces,
  type I18nNamespacesType,
  type TranslationResource,
} from './config'
import enCommonTranslations from './locales/en/common.json'
import enValidationTranslations from './locales/en/validation.json'

const resources: Record<I18nNamespacesType, TranslationResource> = {
  common: enCommonTranslations,
  validation: enValidationTranslations,
}

await i18n.use(initReactI18next).init({
  lng: I18nDefaultLanguage,
  fallbackLng: I18nDefaultLanguage,
  ns: I18nNamespaces,
  defaultNS: I18nDefaultNamespace,
  interpolation: {
    escapeValue: false,
  },
  resources: { en: resources },
})

export default i18n
