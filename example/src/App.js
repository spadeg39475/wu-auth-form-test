import React, { useState, Suspense } from 'react'
import WuAuthForm from 'wu-auth-form-test'
import 'wu-auth-form-test/dist/index.css'

const App = () => {
  const [authLayout, setAuthLayout] = useState('sign-up')

  return (
    <Suspense fallback='loading'>
      <WuAuthForm authLayout={authLayout} setAuthLayout={setAuthLayout} />
    </Suspense>
  )
}

export default App
