import React, { useState, Suspense } from 'react'
import WuAuthForm from 'wu-auth-form-test'
import 'wu-auth-form-test/dist/index.css'

const App = () => {
  const [authLayout, setAuthLayout] = useState('sign-up')
  const [lang, setLang] = useState('tw')

  const onChange = ({ target }) => {
    setLang(target.value)
  }

  return (
    <Suspense fallback='loading'>
      <select onChange={onChange}>
        <option value={'tw'}>{'tw'}</option>
        <option value={'en'}>{'en'}</option>
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
