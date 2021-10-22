import React from 'react';
import { List, Button } from '@mui/material';
import CartItem from './CartItem.jsx';
import styled from 'styled-components';

const H3 = styled.h3`
  font-weight: normal;
  margin-left: 14px;
`;

const Span = styled.span`
  margin-left: 14px;
`;

export default function Cart({ cart, setCart }) {
  function getTotal() {
    let total = 0;
    cart.forEach((product) => {
      total += (Number(product.price.slice(1)) * product.cartQuantity);
    });
    return total.toFixed(2);
  }

  const total = getTotal(cart);

  return (
    <List sx={{minWidth: 200, maxWidth: 200, bgcolor: 'background.paper', margin: '70px 20px 0px 50px'}}>
      <H3>Shopping Cart</H3>
      {cart.map((product) => (
        <CartItem product={product} key={product.id} setCart={setCart} />
      ))}
      <br />
      <Span>{`Total $${total}  `}</Span>
      <Button sx={{fontWeight: 'normal'}}variant="text">Checkout</Button>
    </List>
  );
}