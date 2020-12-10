import i18n from 'i18next'

import EnResources from './assets/locales/en/translation.json'
import TwResources from './assets/locales/tw/translation.json'

const LOCALE_TW = 'zh-TW'
const LOCALE_EN = 'en'

const resources = {
  [LOCALE_EN]: EnResources,
  [LOCALE_TW]: TwResources
}

// because the host react-app might have i18n instance already which will cause error
// (actually a white screen without any error messages)
// we need to create new instance
const newInstance = i18n.createInstance(
  {
    resources,
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    },
    lng: LOCALE_TW,
    fallbackLng: LOCALE_EN
  },
  (err, t) => {
    if (err) return console.log('something went wrong loading', err)
  }
)

export const isLocaleTW = (lang) => lang === LOCALE_TW

export const locales = {
  tw: LOCALE_TW,
  en: LOCALE_EN
}

export default newInstance
