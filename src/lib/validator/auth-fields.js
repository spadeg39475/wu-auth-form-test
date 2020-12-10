import _isEmpty from 'lodash.isempty'

import i18n from '../../i18n'

export const isValidEmail = (email) =>
  email && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)

export const isValidPwd = (password) => password && password.length >= 6

export function signUpValidate(values) {
  const errors = {}
  const { username, email, password } = values

  if (_isEmpty(username)) {
    errors.username = i18n.t('required_field')
  }

  validatePwd(errors, password)
  validateEmail(errors, email)

  return errors
}

export function signInValidate(values) {
  const errors = {}
  const { email, password } = values

  validatePwd(errors, password)
  validateEmail(errors, email)

  return errors
}

function validatePwd(errors, password) {
  let msg
  if (_isEmpty(password)) msg = i18n.t('required_field')
  if (!isValidPwd(password)) msg = i18n.t('pwd.plhdr_set')

  if (msg) errors.password = msg
}

function validateEmail(errors, email) {
  let msg
  if (_isEmpty(email)) msg = i18n.t('required_field')
  if (!isValidEmail(email)) msg = i18n.t('email.err')

  if (msg) errors.email = msg
}
