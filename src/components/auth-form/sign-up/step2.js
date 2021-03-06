import classNames from 'classnames/bind'
import React, { Fragment } from 'react'
import Proptypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { ErrorMessage } from 'formik'
import { useTranslation } from 'react-i18next'

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
          <div className={cx('title', 'step2')}>
            {t('signup_form.email_form_title')}
          </div>

          <div className={cx('field')}>
            <input
              placeholder={t('username.plhdr')}
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
              placeholder={t('email.plhdr_signup')}
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

          <div className={cx('container--prompt')}>
            {`${t('terms_of_service.signup_means_agree')}`}

            <a target='_blank' className={cx('hint')} href={termsOfServiceUrl}>
              {t('terms_of_service.policies')}
            </a>
          </div>

          <button
            type='submit'
            formfor='auth-form'
            className={cx('btn--sign-in')}
            onClick={handleSubmit}
          >
            {t('submit')}
          </button>

          <div className={cx('container--prompt')}>
            {t('has_account')}
            <span
              className={cx('hint')}
              onClick={toggleAuthLayout}
              role='button'
              tabIndex='0'
            >
              {t('login')}
            </span>
          </div>
          {children}
        </div>
      </div>
    </Fragment>
  )
}

SignUpFormStep2.propTypes = {
  onFinish: Proptypes.func,
  onRequest: Proptypes.func,
  onSuccess: Proptypes.func,
  onFail: Proptypes.func
}

SignUpFormStep2.defaultProps = {
  onFinish: null,
  onRequest: null,
  onSuccess: null,
  onFail: null
}
