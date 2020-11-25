import classNames from 'classnames/bind'
import React, { useState, useContext } from 'react'
import Proptypes from 'prop-types'
import { Formik, Form } from 'formik'

import {
  signInValidate,
  signUpValidate
} from '../../lib/validator/auth-fields.js'

import { isIosWebview, isAndroidWebview } from '../../lib/device.js'

import SignIn from './sign-in'
import SignUp from './sign-up'

import styles from './auth-form.module.scss'

const cx = classNames.bind(styles)

export default function AuthForm({
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
  children
}) {
  const [step, setStep] = useState(1)

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
      validator: signInValidate,
      defaultCtaText: '登入'
    },
    'sign-up': {
      initialValues: {
        username: '',
        email: '',
        password: '',
        passwordConfirmation: ''
      },
      validator: signUpValidate,
      defaultCtaText: '註冊新帳號'
    }
  }

  const { initialValues, validator } = SETTINGS_MAPPING[authLayout]

  const checkShouldShowGoogleLogin = () => {
    if (isIosWebview() || isAndroidWebview()) return false
    return true
  }

  const componentOnFinish = () => {
    if (onFinish) onFinish()
  }

  return (
    <Formik
      initialValues={initialValues}
      validate={(values) => validator(values)}
      onSubmit={(value, actions) => {
        try {
          onSubmit()
        } catch (err) {
          console.log(err)
        } finally {
          actions.setSubmitting(false)
        }
      }}
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
  )
}

AuthForm.propTypes = {
  onFinish: Proptypes.func.isRequired,
  onRequest: Proptypes.func.isRequired,
  onSuccess: Proptypes.func,
  onFail: Proptypes.func,
  authLayout: Proptypes.string,
  setAuthLayout: Proptypes.func
}

AuthForm.defaultProps = {
  onSuccess: null,
  onFail: null,
  authLayout: 'sign-in'
}
