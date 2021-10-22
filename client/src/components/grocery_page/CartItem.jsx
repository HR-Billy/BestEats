import React, { useState } from 'react';
import styled from 'styled-components';
import { ListItem, Divider, ListItemText, ListItemAvatar, Avatar, Typography } from '@mui/material';

const Input = styled.input`
  width: 30px;
  margin-left: 30px;
`;

export default function CartItem({ product, setCart }) {
  const [cartQuantity, setCartQuantity] = useState(product.cartQuantity);

  function handleChange(e) {
    setCartQuantity(Number(e.target.value));
    setCart((cart) => {
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === product.id) {
          cart[i].cartQuantity = Number(e.target.value);
          if (Number(e.target.value) < 1) {
            cart.splice(i, 1);
          }
          return [...cart];
        }
      }
    });
  }

  function handleClick() {
    setCart((cart) => cart.filter((p) => p.id !== product.id));
  }

  return (
    <>
      <ListItem alignItems="flex-start" dense={true}>
        <ListItemAvatar>
          <Avatar alt={product.name} src={product.image} />
        </ListItemAvatar>
        <ListItemText
          primary={product.name}
          secondary={
            <div style={{display: "flex", justifyContent: "space-between"}}>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.secondary"
              >
                {product.price}
              </Typography>
              <Input type="number" value={product.cartQuantity} placeholder="0" onChange={handleChange} />
            </div>
          }
        />
    </ListItem>
    <Divider variant="inset" component="li" />
  </>
  );
}
