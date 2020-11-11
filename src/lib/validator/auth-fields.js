import _isEmpty from 'lodash.isempty';

export const isValidEmail = email =>
  email && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

export const isValidPwd = password => password && password.length >= 6;

export function signUpValidate(values) {
  const errors = {};
  const { username, email, password } = values;

  if (_isEmpty(username)) {
    errors.username = '必填欄位';
  }

  if (_isEmpty(password)) {
    errors.password = '必填欄位';
  } else if (!isValidPwd(password)) {
    errors.password = '密碼至少為 6 位英數字';
  }

  if (_isEmpty(email)) {
    errors.email = '必填欄位';
  } else if (!isValidEmail(email)) {
    errors.email = 'Email 格式錯誤';
  }

  return errors;
}

export function signInValidate(values) {
  const errors = {};
  const { email, password } = values;

  if (_isEmpty(password)) {
    errors.password = '必填欄位';
  } else if (!isValidPwd(password)) {
    errors.password = '密碼至少為 6 位英數字';
  }

  if (_isEmpty(email)) {
    errors.email = '必填欄位';
  } else if (!isValidEmail(email)) {
    errors.email = 'Email 格式錯誤';
  }

  return errors;
}
