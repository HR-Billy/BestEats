import React from 'react';
import {
  Button,
  Box,
  Grid,
  ImageList,
  ImageListItem,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import images from './images.js';

const FallGallery = () => (
  <>
    <Box sx={{ backgroundColor: '#e9ba9f' }}>
      <Grid container align="center" justify="center" alignItems="center">
        <Grid item>
          <ImageList
            sx={{ width: 700, mt: 0, mb: 0 }}
            cols={3}
            rowHeight={164}
            gap={0}
          >
            {images.map((item) => (
              <ImageListItem key={item.url}>
                <img
                  src={`${item.url}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.url}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
        <Grid item style={{ textAlign: 'center', margin: 'auto' }}>
          {/* <Grid item style={{ align: center }}> */}

          <Typography color="#333333" variant="h2" marked="center">
            We love Fall too.
          </Typography>
          <Link
            to={{
              pathname: '/store',
              state: {
                fall: true,
              },
            }}
            style={{ textDecoration: 'none' }}
          >
            {/* <Button style={{ margin: '0 auto', display: 'flex' }}>Go to Fall items</Button> */}
            <Button
              color="primary"
              variant="contained"
              size="large"
              // component="a"
              // href="/premium-themes/onepirate/sign-up/"
              sx={{ mt: 2, minWidth: 200 }}
            >
              Start Shopping
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Box>
  </>
);

export default FallGallery;

// const getFallItems = (req, res) => {
//   db.query('select * from products where promo = true;', (error, results) => {
//     if (error) {
//       res.send(error);
//     } else {
//       res.send(results.rows);
//     }
//   });
// };
