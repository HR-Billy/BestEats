import React from 'react';
import { Grid, Card, Typography } from '@mui/material';
import useStyles from '../styles.jsx';

const Feed = () => {
  const classes = useStyles();

  return(
    <Grid container>
      <Grid item xs={12}>
        <Typography>Feed</Typography>
      </Grid>

      <Grid item xs={12}>
        <Card className={classes.messageContainer}>
          <Typography>Message</Typography>
        </Card>
      </Grid>

    </Grid>
  );
};

export default Feed;
