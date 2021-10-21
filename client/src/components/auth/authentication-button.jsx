import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './login-button.jsx';
import LogoutButton from './logout-button.jsx';

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default AuthenticationButton;
