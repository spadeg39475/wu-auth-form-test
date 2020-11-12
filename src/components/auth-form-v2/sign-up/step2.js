import classNames from 'classnames/bind'
import React, { Fragment } from 'react'
import Proptypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { ErrorMessage } from 'formik'

import styles from './sign-up.module.scss'

const cx = classNames.bind(styles)

export default function SignUpFormStep2({
  toggleAuthLayout,
  back,
  handleChange,
  handleSubmit,
  isSubmitting,
  termsOfServiceUrl,
  children
}) {
  return (
    <>
      <FontAwesomeIcon
        icon={faArrowLeft}
        className={cx('back')}
        onClick={back}
      />
      <div className={cx('container--auth-form')}>
        <div className={cx('container--main')}>
          <div className={cx('title', 'step2')}>Email 註冊</div>

          <div className={cx('field')}>
            <input
              placeholder='用戶名'
              className={cx('text-input')}
              onChange={handleChange}
              name='username'
              type='text'
            />
          </div>
          <ErrorMessage
            name='username'
            component='div'
            className={cx('field__err-msg')}
          />
          <div className={cx('field')}>
            <input
              placeholder='帳號 Email'
              className={cx('text-input')}
              onChange={handleChange}
              name='email'
              type='email'
            />
          </div>
          <ErrorMessage
            name='email'
            component='div'
            className={cx('field__err-msg')}
          />

          <div className={cx('field')}>
            <input
              placeholder='密碼'
              className={cx('text-input')}
              onChange={handleChange}
              name='password'
              type='password'
            />
          </div>
          <ErrorMessage
            name='password'
            component='div'
            className={cx('field__err-msg')}
          />

          <div className={cx('container--prompt')}>
            註冊即表示您已閱讀並同意
            <br />
            <a target='_blank' className={cx('hint')} href={termsOfServiceUrl}>
              使用者條款
            </a>
          </div>

          <button
            type='button'
            formFor='auth-form'
            className={cx('btn--sign-in')}
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            送出
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
          {children}
        </div>
      </div>
    </>
  )
}

SignUpFormStep2.propTypes = {
  onFinish: Proptypes.func.isRequired,
  onRequest: Proptypes.func.isRequired,
  onSuccess: Proptypes.func,
  onFail: Proptypes.func
}

SignUpFormStep2.defaultProps = {
  onSuccess: null,
  onFail: null
}
