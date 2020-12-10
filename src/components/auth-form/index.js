import React, { useState, useEffect } from 'react'
import Proptypes from 'prop-types'
import { Formik, Form } from 'formik'
import { I18nextProvider } from 'react-i18next'

import { signInValidate, signUpValidate } from '../../lib/validator/auth-fields'
import { isIosWebview, isAndroidWebview } from '../../lib/device'
import i18nInstance from '../../i18n'

import SignIn from './sign-in'
import SignUp from './sign-up'

function AuthForm({
  onFail,
  onFinish,
  onRequest,
  onSuccess,
  onSubmit,
  handleOnSuccess,
  responseFacebook,
  handleFBError,
  responseGoogle,
  handleGoogleError,
  redirectUri,
  facebookAppId,
  googleClientId,
  authLayout,
  setAuthLayout,
  toggleAuthLayout,
  termsOfServiceUrl,
  state,
  children,
  language = 'tw'
}) {
  const [step, setStep] = useState(1)

  useEffect(() => {
    i18nInstance.changeLanguage(language)
  }, [language])

  const next = () => {
    setStep((prevState) => prevState + 1)
  }

  const back = () => {
    setStep((prevState) => prevState - 1)
  }

  const toggleAuth = () => {
    if (toggleAuthLayout) return toggleAuthLayout()

    let layout
    if (authLayout === 'sign-up') {
      layout = 'sign-in'
    } else {
      layout = 'sign-up'
    }

    setAuthLayout(layout)
    setStep(1)
  }

  const FormComp = authLayout === 'sign-in' ? SignIn : SignUp

  const SETTINGS_MAPPING = {
    'sign-in': {
      initialValues: {
        email: '',
        password: ''
      },
      validator: signInValidate
    },
    'sign-up': {
      initialValues: {
        username: '',
        email: '',
        password: '',
        passwordConfirmation: ''
      },
      validator: signUpValidate
    }
  }

  const { initialValues, validator } = SETTINGS_MAPPING[authLayout]

  const checkShouldShowGoogleLogin = () => {
    if (isIosWebview() || isAndroidWebview()) return false
    return true
  }

  const componentOnFinish = () => {
    if (typeof onFinish === 'function') onFinish()
  }

  return (
    <I18nextProvider i18n={i18nInstance}>
      <Formik
        initialValues={initialValues}
        validate={(values) => validator(values)}
        onSubmit={onSubmit}
        render={(formikProps) => {
          const { handleChange, handleSubmit, isSubmitting } = formikProps

          return (
            <Form id='auth-form'>
              <FormComp
                onSuccess={handleOnSuccess}
                onFinish={componentOnFinish}
                onRequest={onRequest}
                onFail={onFail}
                step={step}
                toggleAuthLayout={toggleAuth}
                next={next}
                back={back}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                isSubmitting={isSubmitting}
                responseFacebook={responseFacebook}
                handleFBError={handleFBError}
                responseGoogle={responseGoogle}
                handleGoogleError={handleGoogleError}
                checkShouldShowGoogleLogin={checkShouldShowGoogleLogin}
                redirectUri={redirectUri}
                facebookAppId={facebookAppId}
                googleClientId={googleClientId}
                termsOfServiceUrl={termsOfServiceUrl}
                state={state}
                children={children}
              />
            </Form>
          )
        }}
      />
    </I18nextProvider>
  )
}

AuthForm.propTypes = {
  onFinish: Proptypes.func,
  onRequest: Proptypes.func,
  onSuccess: Proptypes.func,
  onFail: Proptypes.func,
  authLayout: Proptypes.string.isRequired,
  setAuthLayout: Proptypes.func.isRequired
}

AuthForm.defaultProps = {
  onFinish: null,
  onRequest: null,
  onSuccess: null,
  onFail: null
}

export default AuthForm
