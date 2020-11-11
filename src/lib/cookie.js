import Cookies from 'js-cookie';
import _isEmpty from 'lodash.isempty';

export const saveInfo = ({
  key,
  value,
  expires = 7,
  domain = process.env.ANONYMOUS_ID_COOKIE_DOMAIN,
}) => {
  if (!key || !value) return;

  Cookies.set(key, value, { expires, domain });
};

export const get = (key) => Cookies.get(key);
export const removeKey = (key) => Cookies.remove(key);

export default { set: saveInfo, get };

// constants for cookies
const IS_FB_REDIRECT = 'isFbRedirect';
const OCCUPATION = 'occupation';
const EXAM_NAME = 'exam_name';
const REDIRECT_ACTION = 'redirectAction';
const FREE_TRIAL_MATERIAL_ID = 'freeTrialMaterialId';
const GRADE = 'grade';
const MODE = 'mode';

export const FB_LOGIN_FAILED = 'fbLoginFailed';
export const setFbLoginFailedCookie = () => {
  const inOneMinute = new Date(new Date().getTime() + 60 * 1000);
  Cookies.set(FB_LOGIN_FAILED, 'true', { expires: inOneMinute });
};

export const setEventRedirectCookies = ({
  grade,
  mode,
  occupation,
  examName,
  isFbRedirect,
  redirectAction,
}) => {
  const inOneMinute = new Date(new Date().getTime() + 60 * 1000);
  Cookies.set(IS_FB_REDIRECT, isFbRedirect, { expires: inOneMinute });
  Cookies.set(OCCUPATION, occupation, { expires: inOneMinute });
  Cookies.set(EXAM_NAME, examName, { expires: inOneMinute });
  Cookies.set(REDIRECT_ACTION, redirectAction, { expires: inOneMinute });
  Cookies.set(GRADE, grade, { expires: inOneMinute });
  Cookies.set(MODE, mode, { expires: inOneMinute });
};

export const removeEventRedirectCookies = () => {
  Cookies.remove(IS_FB_REDIRECT);
  Cookies.remove(OCCUPATION);
  Cookies.remove(EXAM_NAME);
};

export const getEventRedirectCookies = () => {
  const isRedirect = Cookies.get(IS_FB_REDIRECT);
  const occupation = Cookies.get(OCCUPATION);
  const examName = Cookies.get(EXAM_NAME);

  return {
    isRedirect,
    occupation,
    examName,
  };
};

export const setFBSignInRedirectCookies = ({
  redirectAction,
  materialId,
  isFbRedirect,
  options = {},
}) => {
  const inOneMinute = new Date(new Date().getTime() + 60 * 1000);
  Cookies.set(IS_FB_REDIRECT, isFbRedirect, { expires: inOneMinute });
  Cookies.set(REDIRECT_ACTION, redirectAction, { expires: inOneMinute });
  Cookies.set(FREE_TRIAL_MATERIAL_ID, materialId, { expires: inOneMinute });

  if (_isEmpty(options)) return;

  Object.keys(options).forEach((key) => {
    Cookies.set(key, options[key], { expires: inOneMinute });
  });
};

export const getFBSignInRedirectCookies = (...args) => {
  const isRedirect = Cookies.get(IS_FB_REDIRECT);
  const redirectAction = Cookies.get(REDIRECT_ACTION);
  const materialId = Cookies.get(FREE_TRIAL_MATERIAL_ID);

  const optionsCookies = {};
  [].slice.call(args).forEach((key) => {
    optionsCookies[key] = Cookies.get(key);
  });

  return {
    isRedirect,
    redirectAction,
    materialId,
    ...optionsCookies,
  };
};

export const removeFBSignInRedirectCookies = () => {
  Cookies.remove(IS_FB_REDIRECT);
  Cookies.remove(REDIRECT_ACTION);
  Cookies.remove(FREE_TRIAL_MATERIAL_ID);
};
