import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      style={{ textDecoration: 'none' }}
      variant="contained"
      sx={{ px: 1, m: 3 }}
      className="btn btn-primary btn-block"
      onClick={() => loginWithRedirect()}
    >
      Login
    </Button>
  );
};

export default LoginButton;
