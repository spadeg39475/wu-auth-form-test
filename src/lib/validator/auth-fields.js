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

  errors.password = validatePwd(password)
  errors.email = validateEmail(email)

  return errors
}

export function signInValidate(values) {
  const errors = {}
  const { email, password } = values

  errors.password = validatePwd(password)
  errors.email = validateEmail(email)

  return errors
}

function validatePwd(password) {
  if (_isEmpty(password)) return i18n.t('required_field')
  if (!isValidPwd(password)) return i18n.t('pwd.plhdr_set')

  return null
}

function validateEmail(email) {
  if (_isEmpty(email)) return i18n.t('required_field')
  if (!isValidEmail(email)) return i18n.t('email.err')

  return null
}
