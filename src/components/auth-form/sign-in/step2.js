import classNames from 'classnames/bind'
import Proptypes from 'prop-types'
import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { ErrorMessage } from 'formik'
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation()

  return (
    <Fragment>
      <FontAwesomeIcon
        icon={faArrowLeft}
        className={cx('back')}
        onClick={back}
      />
      <div className={cx('container--auth-form')}>
        <div className={cx('container--main')}>
          <div className={cx('field')}>
            <input
              placeholder={t('email.plhdr')}
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
              placeholder={t('pwd.plhdr')}
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
            formfor='auth-form'
            className={cx('btn--sign-in')}
            onClick={handleSubmit}
          >
            {t('login')}
          </button>

          <div className={cx('container--prompt')}>
            {t('dont_have_account_yet')}

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
    </Fragment>
  )
}

SignInFormStep2.propTypes = {
  onFinish: Proptypes.func,
  onRequest: Proptypes.func,
  onSuccess: Proptypes.func,
  onFail: Proptypes.func
}

SignInFormStep2.defaultProps = {
  onFinish: null,
  onRequest: null,
  onSuccess: null,
  onFail: null
}
