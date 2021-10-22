import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <Button
      variant="contained"
      sx={{ mt: 3, mx: 3 }}
      className="btn btn-danger btn-block"
      onClick={() => logout({
        returnTo: window.location.origin,
      })}
    >
      Log Out
    </Button>
  );
};

export default LogoutButton;
