import React, { useState } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, TextField } from '@mui/material';

export default function Item({ product, setCart }) {
  const [cartQuantity, setCartQuantity] = useState(1);

  function handleChange(e) {
    setCartQuantity(Number(e.target.value));
  }

  function handleClick() {
    setCart((cart) => {
      for (let i = 0; i < cart.length; i += 1) {
        if (cart[i].id === product.id) {
          cart[i].cartQuantity += cartQuantity;
          setCartQuantity(1);
          return [...cart];
        }
      }
      product.cartQuantity = cartQuantity;
      setCartQuantity(1);
      return [...cart, product];
    });
  }

  return (
    <Card sx={{ maxWidth: 200, minHeight: 250, maxHeight: 250, margin: "0px 25px 50px 25px", display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="100"
        image={product.image}
        alt="food item"
      />
      <CardContent>
        <Typography gutterBottom variant="body" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.price}
        </Typography>
      </CardContent>
      <CardActions sx={{ bottom: 0}}>
        <Button size="small" sx={{color: "#608200", fontWeight: "normal"}} onClick={handleClick} >Add To Cart</Button>
        <TextField
          id="outlined-number"
          label="Qty"
          type="number"
          value={cartQuantity}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </CardActions>
    </Card>
  );
}
