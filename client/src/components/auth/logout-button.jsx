import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <Button
      variant="contained"
      sx={{
        mt: 3, mb: 3, mr: 3, p: 0,
      }}
      onClick={() => logout({
        returnTo: window.location.origin,
      })}
    >
      Log Out
    </Button>
  );
};

export default LogoutButton;
