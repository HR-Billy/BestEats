import React, { useContext } from 'react';
import { Grid, Card, Typography } from '@mui/material';
import { ProfileContext } from '../ProfileContext.jsx';
import useStyles from '../styles.jsx';

const Feed = () => {
  const classes = useStyles();
  const { feed } = useContext(ProfileContext);
  let userFeed;

  if (feed) {
    userFeed = feed.map((status) => {
      console.log(status);
      const { status_id, text, emoji } = status;

      return (
        <Grid item xs={12} key={status_id}>
          <Card className={classes.messageContainer}>
            <Typography>{text}</Typography>
          </Card>
        </Grid>
      );
    });
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography>Feed</Typography>
      </Grid>

      {userFeed}

    </Grid>
  );
};

export default Feed;
