import axios from 'axios';
import React, { useState, useContext } from 'react';
import { Grid, TextField, Button } from '@mui/material';
import { ProfileContext } from '../ProfileContext.jsx';

const Status = () => {
  const [status, setStatus] = useState({ id: 10, text: '' });
  const { user, feed, setFeed } = useContext(ProfileContext);

  const handleTextChange = (e) => {
    setStatus({
      id: status.id,
      text: e.target.value,
      // emoji: status.emoji,
    });
  };
  // const handleEmojiChange = (e) => {
  //   setStatus({
  //     id: status.id,
  //     text: status.text,
  //     emoji: e.target.value,
  //   });
  // };
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('/profile/status', status)
      .then(({ data }) => {
        console.log('here is the data ', data);
        setFeed([data, ...feed]);
      });
    setStatus({ id: 10, text: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <TextField fullWidth label="Your Journey" value={status.text} onChange={handleTextChange} />
        </Grid>

        <Grid item xs={12} onSubmit={handleSubmit}>
          <Button variant="contained" type="submit">post</Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Status;
