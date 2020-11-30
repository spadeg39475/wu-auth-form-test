import classNames from 'classnames/bind'
import Proptypes from 'prop-types'
import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { ErrorMessage } from 'formik'

import styles from './sign-in.module.scss'

const cx = classNames.bind(styles)

export default function SignInFormStep2({
  toggleAuthLayout,
  back,
  handleChange,
  handleSubmit,
  isSubmitting,
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
          <div className={cx('field')}>
            <input
              placeholder='帳號- Email'
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

          <button
            type='submit'
            formFor='auth-form'
            className={cx('btn--sign-in')}
            onClick={handleSubmit}
          >
            登入
          </button>

          <div className={cx('container--prompt')}>
            還沒有帳號？{' '}
            <span
              className={cx('hint')}
              onClick={toggleAuthLayout}
              role='button'
              tabIndex='0'
            >
              註冊
            </span>
          </div>
          {children}
        </div>
      </div>
    </>
  )
}

SignInFormStep2.propTypes = {
  onFinish: Proptypes.func.isRequired,
  onRequest: Proptypes.func.isRequired,
  onSuccess: Proptypes.func,
  onFail: Proptypes.func
}

SignInFormStep2.defaultProps = {
  onSuccess: null,
  onFail: null
}
