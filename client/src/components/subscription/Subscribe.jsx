import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { createTheme, ThemeProvider } from '@mui/material/styles';

function Subscribe() {
  const theme = createTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#609e00',
        light: '#B0C800',
      },
      secondary: {
        main: '#F24B6A',
      },
      success: {
        main: '#4caf50',
        light: '#B0C800',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="Subscription">
        <Typography variant="h1">
          Testing this size
        </Typography>
      </div>
      <TextField
        variant="outlined"
        color="primary"
      />
      <Button variant="contained">Hello World</Button>
    </ThemeProvider>
  );
}

export default Subscribe;
