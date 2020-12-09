import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import EnResources from './assets/locales/en/translation.json'
import TwResources from './assets/locales/tw/translation.json'
const resources = {
  en: EnResources,
  tw: TwResources
}

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  // .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  .init({
    resources,
    debug: true,
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    },
    lng: 'tw',
    fallbackLng: 'en'
  })

export default i18n
