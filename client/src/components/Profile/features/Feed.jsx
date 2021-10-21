import React, { useContext } from 'react';
import moment from 'moment';
import { Grid, Card, Typography } from '@mui/material';
import { ProfileContext } from '../ProfileContext.jsx';
import useStyles from '../styles.jsx';

const Feed = () => {
  const classes = useStyles();
  const { feed } = useContext(ProfileContext);
  let userFeed;

  if (feed) {
    userFeed = feed.map((status) => {
      const { status_id, text, emoji, created_at} = status;
      const time = moment(created_at).calendar();

      return (
        <Grid item xs={12} key={status_id}>
          <Card className={classes.messageContainer}>
            <Typography>{text}</Typography>
            <Typography>{time}</Typography>
          </Card>
        </Grid>
      );
    });
  }

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Typography>Feed</Typography>
      </Grid>

      {userFeed}

    </Grid>
  );
};

export default Feed;
