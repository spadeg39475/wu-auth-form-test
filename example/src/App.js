import React, { useState, Suspense } from 'react'
import WuAuthForm from 'wu-auth-form-test'
import 'wu-auth-form-test/dist/index.css'

const locale_TW = 'zh-TW'
const locale_EN = 'en'

const App = () => {
  const [authLayout, setAuthLayout] = useState('sign-up')
  const [lang, setLang] = useState(locale_TW)

  const onChange = ({ target }) => {
    setLang(target.value)
  }

  return (
    <Suspense fallback='loading'>
      <select onChange={onChange}>
        <option value={locale_TW}>{locale_TW}</option>
        <option value={locale_EN}>{locale_EN}</option>
      </select>

      <WuAuthForm
        authLayout={authLayout}
        setAuthLayout={setAuthLayout}
        language={lang}
      />
    </Suspense>
  )
}

export default App
