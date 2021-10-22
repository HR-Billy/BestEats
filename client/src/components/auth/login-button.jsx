import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useLocation } from 'react-router-dom';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const location = useLocation();

  return (
    <button
      className="btn btn-primary btn-block"
      onClick={() => {
        loginWithRedirect({ appState: { returnTo: location?.pathname } });
      }}
    >
      Log In
    </button>
  );
};

export default LoginButton;
