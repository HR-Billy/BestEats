import axios from 'axios';
import React, { useState, useContext } from 'react';
import { Grid, TextField, Button } from '@mui/material';
import { ProfileContext } from '../ProfileContext.jsx';

const Status = () => {
  const [status, setStatus] = useState('');
  const { user, feed, setFeed } = useContext(ProfileContext);

  const handleSubmit = () => {
    axios.post('/profile/status')
      .then(({ data }) => {
        console.log(data);
      });
  };

  const handleChange = (e) => {
    setStatus(e.target.value);
  };
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <TextField fullWidth label="Update status" value={status} onChange={handleChange} />
      </Grid>

      <Grid item xs={12}>
        <Button variant="contained" onClick={handleSubmit}>post</Button>
      </Grid>
    </Grid>
  );
};

export default Status;
