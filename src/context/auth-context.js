import React from 'react';

export const AuthContext = React.createContext({
  isSignIn: false,
  setSignInStatus: () => {},
});
