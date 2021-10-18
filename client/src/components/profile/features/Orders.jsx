import React from 'react';
import { Grid, Box, Typography, Paper, Avatar } from '@mui/material';
import useStyles from '../styles.jsx';

const Orders = ({ text }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={1}>

      <Grid item xs={12}>
        <Typography>{text}</Typography>
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid item xs={4}>

            <Paper className={classes.meal}>
              <Grid container direction="column" alignItems="center">

                <Grid item>
                  <Avatar alt="meal" className={classes.mealPhoto} />
                </Grid>

                <Grid item>
                  <Typography>Meal Name</Typography>
                </Grid>

              </Grid>
            </Paper>

          </Grid>
        </Grid>
      </Grid>

    </Grid>
  );
};

export default Orders;
