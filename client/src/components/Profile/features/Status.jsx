import axios from 'axios';
import React, { useState, useContext } from 'react';
import { Grid, TextField, Button } from '@mui/material';
import { ProfileContext } from '../ProfileContext.jsx';

const Status = () => {
  const [status, setStatus] = useState('');
  const { user, feed, setFeed } = useContext(ProfileContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const statusObj = { text: status };

    axios.post('/profile/status', statusObj)
      .then(({ data }) => {
        console.log('here is the data ', data);
      });
    setStatus('');
  };

  const handleChange = (e) => {
    setStatus(e.target.value);
  };
  return (
      <form onSubmit={handleSubmit}>
    <Grid container spacing={1}>
        <Grid item xs={12}>
          <TextField fullWidth label="Update status" value={status} onChange={handleChange} />
        </Grid>

        <Grid item xs={12} onSubmit={handleSubmit}>
          <Button variant="contained" type="submit">post</Button>
        </Grid>
    </Grid>
      </form>
  );
};

export default Status;
