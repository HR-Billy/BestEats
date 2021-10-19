import React from 'react';
import { Grid, TextField, Button } from '@mui/material';

const Status = () => (
  <Grid container spacing={1}>
    <Grid item xs={12}>
      <TextField fullWidth label="update" value="Your journey..." />
    </Grid>

    <Grid item xs={12}>
      <Button variant="contained">post</Button>
    </Grid>
  </Grid>
);

export default Status;

/* <TextField fullWidth label="fullWidth" id="fullWidth" /> */

/* <TextField id="outlined-name" label="update" value="Update" onChange={handleChange} /> */
