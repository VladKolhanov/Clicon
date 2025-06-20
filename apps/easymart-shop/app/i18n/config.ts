import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import resourcesToBackend from 'i18next-resources-to-backend'

export const I18nNamespaces = ['common', 'validation'] as const
export const I18nLanguages = {
  EN: 'en',
  UK: 'uk',
} as const
export const I18nDefaultNamespace = I18nNamespaces[0]
export const I18nDefaultLanguage = I18nLanguages.EN

export type TranslationResource = Record<
  string,
  string | Record<string, string>
>
export type I18nNamespacesType = (typeof I18nNamespaces)[number]
export type I18nLanguagesType =
  (typeof I18nLanguages)[keyof typeof I18nLanguages]

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(
    resourcesToBackend(
      async (language: I18nLanguagesType, namespace: string) =>
        (await import(
          `./locales/${language}/${namespace}.json`
        )) as Promise<TranslationResource>
    )
  )
  .init({
    fallbackLng: I18nDefaultLanguage,
    supportedLngs: Object.values(I18nLanguages),
    defaultNS: I18nDefaultNamespace,
    fallbackNS: I18nDefaultNamespace,
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
