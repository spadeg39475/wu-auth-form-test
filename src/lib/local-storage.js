import store from 'store';

export const saveInfo = (key, value) => store.set(key, value);

export const getInfo = (key) => store.get(key);

export const getCredential = () => store.get('credential') || {};

export const saveCredential = (credential) =>
  store.set('credential', credential);

export const clearAll = (cb = null) => {
  store.clearAll();
  if (typeof cb === 'function') cb();
};

export const getEmail = () => {
  if (typeof window === 'undefined') return null;

  const credential = getCredential();
  if (!credential) return null;

  return credential.uid;
};

export const getUserId = () => {
  if (typeof window === 'undefined') return null;
  return store.get('userId');
};

export const getUserInfo = () => {
  if (typeof window === 'undefined') return {};
  return store.get('userInfo');
};

export const saveUserId = ({ userId, userInfo }) => {
  store.set('userId', userId);
  if (userInfo) store.set('userInfo', userInfo);
};

export const saveFbRequestPageInfo = (pageInfo) =>
  store.set('fbRequestPage', pageInfo);

export const getFbRequestPageInfo = () => store.get('fbRequestPage');

export const getIosWebviewVersion = () => {
  const credential = getCredential();
  if (!credential || !credential['Client-Info']) return null;

  const [platform, version] = credential['Client-Info'].split('/');
  if (platform !== 'ios') return null;

  return version;
};
