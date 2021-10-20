import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';

const Container = styled.div`
  width: 200px;
  height: 300px;
  padding-top: 20px;
`;

const Input = styled.input`
  width: 30px;
  margin-left: 30px;
`

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
    <Container>
      <img src={product.image} alt="product" height="150px" />
      <h4>{product.name}</h4>
      <h5>{product.price} <Input size={5} type="number" value={cartQuantity} onChange={handleChange} /></h5>
      <button type="button" onClick={handleClick}>Add To Cart</button>
    </Container>
    // <Card sx={{ maxWidth: 200, minHeight: 250, marginBottom: 5, display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
    //   <CardMedia
    //     component="img"
    //     height="100"
    //     image={product.image}
    //     alt="food item"
    //   />
    //   <CardContent>
    //     <Typography gutterBottom variant="body" component="div">
    //       {product.name}
    //     </Typography>
    //     <Typography variant="body2" color="text.secondary">
    //       {product.price}
    //     </Typography>
    //   </CardContent>
    //   <CardActions sx={{ bottom: 0 }}>
    //     <Button size="small">Add To Cart</Button>
    //     <Button size="small">Learn More</Button>
    //   </CardActions>
    // </Card>
  );
}
