import React, { useState } from 'react';
import { Container, Grid, Paper, Card } from '@mui/material';
import { Context } from './Context.jsx';
import ProfilePic from './features/ProfilePic.jsx';
import NutritionFacts from './features/NutritionFacts.jsx';
import Status from './features/Status.jsx';
import Feed from './features/Feed.jsx';
import Subscribe from './features/Subscribe.jsx';
import Orders from './features/Orders.jsx';
import useStyles from './themes.jsx';

const UserProfile = () => {
  const classes = useStyles();
  const [user, setUser] = useState([]);

  return (
    <Context.Provider value={{ user, setUser }}>
      <Container className={classes.wrapper}>
        <Grid container spacing={3}>

          <Grid item xs={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper className={classes.pic}>
                  <ProfilePic />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.nutrition}>
                  <NutritionFacts />
                </Paper>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper className={classes.status}>
                  <Status />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.feed}>
                  <Feed />
                </Paper>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper className={classes.subscribe}>
                  {/* <Subscribe /> */}
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.order}>
                  <Orders text={'on its way'} />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.order}>
                  <Orders text={'recent orders'} />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.order}>
                  <Orders text={'suggested meals'} />
                </Paper>
              </Grid>
            </Grid>
          </Grid>

        </Grid>
      </Container>
    </Context.Provider>
  );
};

export default UserProfile;
