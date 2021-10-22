import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import GrassIcon from '@mui/icons-material/Grass';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function Tiles() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', border: 5, borderColor: 'secondary.light', mt: 5, ml: 5, mb: 5, mr: 5 }}
      // sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'white' }}
    >
      <Container sx={{
        mt: 5, mb: 5, display: 'flex', position: 'relative',
      }}
      >
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <GrassIcon fontSize="large" color="primary" />
              <Typography variant="h6" sx={{ my: 5 }} color="primary">
                Know your farmers.
              </Typography>
              <Typography variant="h5">
                We work closely with local farmers and sustainable businesses giving them
                a platform to interact directly with our users.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <FitnessCenterIcon fontSize="large" color="primary" />
              <Typography variant="h6" sx={{ my: 5 }} color="primary">
                Lifestyle, not a product.
              </Typography>
              <Typography variant="h5">
                Our focus is teaching you how to live a healthy and sustainable life;
                even after you leave our brand.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <FavoriteIcon fontSize="large" color="primary"/>
              <Typography variant="h6" sx={{ my: 5 }} color="primary">
                Health, innovated.
              </Typography>
              <Typography variant="h5">
                We are the cutting edge of the meal planning, healthy recipe curator,
                and online grocery shopping industry.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Tiles;
