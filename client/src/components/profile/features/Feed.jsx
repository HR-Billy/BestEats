import React, { useContext } from 'react';
import moment from 'moment';
import { Grid, Card, Typography } from '@mui/material';
import { ProfileContext } from '../ProfileContext.jsx';
import useStyles from '../styles.jsx';

const Feed = () => {
  const classes = useStyles();
  const { feed } = useContext(ProfileContext);
  let userFeed;
  let time;

  if (feed) {
    userFeed = feed.map((status, index) => {
      const { text, emoji, createdAt } = status;

      time = moment(createdAt).calendar();

      return (
        <Grid item xs={12} key={index}>
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
      {userFeed}
    </Grid>
  );
};

export default Feed;
