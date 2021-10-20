import React from 'react';
import { ImageList, ImageListItem } from '@mui/material';
import images from './images.js';

const FallGallery = () => (
  <ImageList sx={{ width: 700 }} cols={3} rowHeight={164}>
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
