import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

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
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'white' }}
      // sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'white' }}
    >
      <Container sx={{
        mt: 15, mb: 30, display: 'flex', position: 'relative',
      }}
      >
        {/* <Box
          component="img"
          src="/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
        /> */}
        <Grid container spacing={5}>

          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                // src="/static/themes/onepirate/productValues3.svg"
                src={EmojiPeopleIcon}
                alt="handshake"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
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
              <Box
                component="img"
                src="/static/themes/onepirate/productValues1.svg"
                alt="heart"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Health, innovated.
              </Typography>
              <Typography variant="h5">
                We are the cutting edge of the meal planning, healthy recipe curator,
                and online grocery shopping industry.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="/static/themes/onepirate/productValues2.svg"
                alt="exercise"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Lifestyle, not a product.
              </Typography>
              <Typography variant="h5">
                Our focus is teaching you how to live a healthy and sustainable life;
                even after you leave our brand
              </Typography>
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}

export default Tiles;
