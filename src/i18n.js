import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import EnResources from './assets/locales/en/translation.json'
import TwResources from './assets/locales/tw/translation.json'
const resources = {
  en: EnResources,
  tw: TwResources
}

// because the host react-app might have i18n instance already which will cause error
// (actually a white screen without any error messages)
// we need to create new instance
const newInstance = i18n.use(initReactI18next).createInstance(
  {
    resources,
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    },
    lng: 'tw',
    fallbackLng: 'en'
  },
  (err, t) => {
    if (err) return console.log('something went wrong loading', err)
  }
)

export default newInstance
