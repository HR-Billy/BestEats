import React, { useState } from 'react';
import { Container, Grid, Paper } from '@mui/material';
import { Context } from './Context.jsx';
import ProfilePic from './features/ProfilePic.jsx';
import NutritionFacts from './features/NutritionFacts.jsx';
import Status from './features/Status.jsx';
import Feed from './features/Feed.jsx';
import Subscribe from './features/Subscribe.jsx';
import Orders from './features/Orders.jsx';
import useStyles from './theme.jsx';

// export default function SimplePaper() {
//   const classes = useStyles();

//   return (
//     <div>
//       <Paper className={classes.paper}>
//         <Card className={classes.card}>
//           <CardContent>Hello World</CardContent>
//         </Card>
//       </Paper>
//     </div>
//   );
// }

const UserProfile = () => {
  const classes = useStyles();
  const [user, setUser] = useState([]);

  return (
    <Context.Provider value={{ user, setUser }}>
      <Container>
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
                <Paper>
                  <Status />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper>
                  <Feed />
                </Paper>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper>
                  <Subscribe />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper>
                  <Orders />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper>
                  <Orders />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper>
                  <Orders />
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
