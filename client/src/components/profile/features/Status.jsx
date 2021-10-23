import axios from 'axios';
import React, { useState, useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Grid, TextField, Button } from '@mui/material';
import { ProfileContext } from '../ProfileContext.jsx';

const Status = () => {
  const { user } = useAuth0();
  const auth = user.sub;
  const [status, setStatus] = useState({ authId: auth, text: '' });
  const { feed, setFeed } = useContext(ProfileContext);

  const handleTextChange = (e) => {
    setStatus({
      authId: auth,
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
        setFeed([data, ...feed]);
      });
    setStatus({ authId: auth, text: '' });
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
