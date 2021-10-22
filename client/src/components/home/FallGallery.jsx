import React from 'react';
import {
  Button, Box, Grid, ImageList, ImageListItem, Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import images from './images.js';

const FallGallery = () => (
  <>
    <Grid container>
      <Grid item>
        <ImageList sx={{ width: 700 }} cols={3} rowHeight={164} gap={0}>
          {images.map((item) => (
            <ImageListItem key={item.img}>
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
      <Grid item style={{ marginTop: 140, marginLeft: 140 }}>
        <Typography color="inherit" align="center" variant="h2" marked="center">We love Fall too.</Typography>
        <Link
          to={{
            pathname: '/store',
            state: {
              fall: true,
            },
          }}
          style={{ textDecoration: 'none' }}
        >
          <Button style={{ margin: '0 auto', display: 'flex' }}>Go to Fall items</Button>
        </Link>
      </Grid>
    </Grid>

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
