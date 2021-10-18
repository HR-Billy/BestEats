import React, { useState, useEffect } from 'react';
import { createTheme } from '@mui/material/styles';

const myTheme = createTheme({
  typography: {
    h2: {
      fontSize: 36,
      marginbottom: 12,
    },
  },
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

export default myTheme;