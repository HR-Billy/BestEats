import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useLocation } from 'react-router-dom';
import { Button } from '@mui/material';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const location = useLocation();

  return (
    <Button
      style={{ textDecoration: 'none' }}
      variant="contained"
      sx={{
        mt: 3, mb: 3, mr: 3, p: 0,
      }}
      onClick={() => {
        loginWithRedirect({ appState: { returnTo: location?.pathname } });
      }}
    >
      Log In
    </Button>
  );
};

export default LoginButton;
