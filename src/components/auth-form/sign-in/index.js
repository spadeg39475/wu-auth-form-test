import classNames from 'classnames/bind'
import Proptypes from 'prop-types'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import GoogleLogin from 'react-google-login'
import AppleLogin from 'react-apple-login'
import { useTranslation } from 'react-i18next'

import WebpImg from '../../webp-img'
import SignInStep2 from './step2.js'

import styles from './sign-in.module.scss'

const cx = classNames.bind(styles)

export default function SignInForm({
  toggleAuthLayout,
  next,
  back,
  handleChange,
  handleSubmit,
  isSubmitting,
  step,
  handleFBError,
  responseFacebook,
  handleGoogleError,
  responseGoogle,
  checkShouldShowGoogleLogin,
  redirectUri,
  facebookAppId,
  googleClientId,
  state,
  children
}) {
  const { t } = useTranslation()

  if (step === 2) {
    return (
      <SignInStep2
        step={step}
        next={next}
        back={back}
        toggleAuthLayout={toggleAuthLayout}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        isSubmitting={isSubmitting}
        children={children}
      />
    )
  }

  return (
    <div className={cx('container--auth-form')}>
      <div className={cx('container--main')}>
        <div className={cx('title')}>{t('login')}</div>

        <FacebookLogin
          appId={facebookAppId}
          fields='name,email'
          scope='public_profile,email'
          callback={responseFacebook}
          responseType='token'
          redirectUri={redirectUri}
          onFailure={handleFBError}
          state={state}
          // isMobile={false}
          // disableMobileRedirect={true}
          render={(renderProps) => (
            <button
              className={cx('container--action')}
              onClick={renderProps.onClick}
              type='button'
            >
              <div className={cx('content')}>
                <div className={cx('container--icon')}>
                  <WebpImg
                    imgUrl='https://wordup-production-public.s3-ap-northeast-1.amazonaws.com/shop/assets/sign+up+page/facebook.png'
                    alt='facebook'
                    lazyLoad={false}
                  />
                </div>
                <div className={cx('btn-txt')}> {t('facebook.login')}</div>
              </div>
            </button>
          )}
        />

        {checkShouldShowGoogleLogin() && (
          <GoogleLogin
            clientId={googleClientId}
            buttonText='Google 登入'
            onSuccess={responseGoogle}
            onFailure={handleGoogleError}
            cookiePolicy='single_host_origin'
            className={cx('btn-google-login')}
            render={(renderProps) => (
              <button
                className={cx('container--action')}
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                type='button'
              >
                <div className={cx('content')}>
                  <div className={cx('container--icon')}>
                    <WebpImg
                      imgUrl='https://wordup-production-public.s3-ap-northeast-1.amazonaws.com/shop/assets/sign+up+page/google.png'
                      alt='google'
                      lazyLoad={false}
                    />
                  </div>
                  <div className={cx('btn-txt')}> {t('google.login')}</div>
                </div>
              </button>
            )}
          />
        )}

        <button
          className={cx('container--action')}
          onClick={next}
          type='button'
        >
          <div className={cx('content')}>
            <FontAwesomeIcon
              icon={faEnvelope}
              className={cx('container--icon')}
            />
            <div className={cx('btn-txt')}> {t('email.login')}</div>
          </div>
        </button>

        <div className={cx('container--prompt')}>
          {`${t('dont_have_account_yet')} `}
          <span
            className={cx('hint')}
            onClick={toggleAuthLayout}
            role='button'
            tabIndex='0'
          >
            {t('signup')}
          </span>
        </div>
        {children}
      </div>
    </div>
  )
}

SignInForm.propTypes = {
  onFinish: Proptypes.func.isRequired,
  onRequest: Proptypes.func,
  onSuccess: Proptypes.func,
  onFail: Proptypes.func
}

SignInForm.defaultProps = {
  onSuccess: null,
  onFail: null,
  onRequest: null
}
