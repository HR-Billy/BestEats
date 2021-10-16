import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { createTheme, ThemeProvider } from '@mui/material/styles';

function Subscribe() {
  const theme = createTheme({
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

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justify="center">
          <Grid item xs={12} sm={6}>
            <Paper style={{ height: 75, width: 50 }} />
          </Grid>
          <Grid item>
            <Paper style={{ height: 75, width: 50 }} />
          </Grid>
          <Grid item>
            <Paper style={{ height: 75, width: 50 }} />
          </Grid>
        </Grid>
        <div className="Subscription">
          <Typography variant="h2" component="div">
            Testing this size
          </Typography>
        </div>
        <TextField
          variant="outlined"
          color="primary"
        />
        <Button variant="contained">Hello World</Button>
      </Container>
    </ThemeProvider>
  );
}

export default Subscribe;
