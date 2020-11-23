import classNames from 'classnames/bind'
import Proptypes from 'prop-types'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import GoogleLogin from 'react-google-login'

import WebpImg from '../..//webp-img'
import SignUpStep2 from './step2.js'

import styles from './sign-up.module.scss'

const cx = classNames.bind(styles)

export default function SignUpForm({
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
  termsOfServiceUrl,
  state,
  children
}) {
  if (step === 2) {
    return (
      <SignUpStep2
        step={step}
        next={next}
        back={back}
        toggleAuthLayout={toggleAuthLayout}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        children={children}
      />
    )
  }

  return (
    <div className={cx('container--auth-form')}>
      <div className={cx('container--main')}>
        <div className={cx('title')}>註冊新帳號</div>
        <div className={cx('container--image', 'dialog')}>
          <WebpImg
            imgUrl='https://wordup-production-public.s3-ap-northeast-1.amazonaws.com/shop/assets/sign+up+page/dialog.png'
            alt='dialog'
            lazyLoad={false}
          />
        </div>
        <div className={cx('container--image', 'cuties')}>
          <WebpImg
            imgUrl='https://wordup-production-public.s3-ap-northeast-1.amazonaws.com/shop/assets/sign+up+page/sign_up_cuties'
            alt='sign-up cuties'
            lazyLoad={false}
          />
        </div>

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
                Facebook 註冊
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
                  Google 註冊
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
            Email 註冊
          </div>
        </button>

        <div className={cx('container--prompt')}>
          已經有帳號了？{' '}
          <span
            className={cx('hint')}
            onClick={toggleAuthLayout}
            role='button'
            tabIndex='0'
          >
            登入
          </span>
        </div>

        <div className={cx('container--prompt')}>
          註冊即表示您已閱讀並同意
          <br />
          <a target='_blank' className={cx('hint')} href={termsOfServiceUrl}>
            使用者條款
          </a>
        </div>
        {children}
      </div>
    </div>
  )
}

SignUpForm.propTypes = {
  onFinish: Proptypes.func.isRequired,
  onRequest: Proptypes.func.isRequired,
  onSuccess: Proptypes.func,
  onFail: Proptypes.func
}

SignUpForm.defaultProps = {
  onSuccess: null,
  onFail: null
}
