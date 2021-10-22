import React from 'react';
import { List, Button } from '@mui/material';
import CartItem from './CartItem.jsx';

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
      <h2>Shopping Cart</h2>
      {cart.map((product) => (
        <CartItem product={product} key={product.id} setCart={setCart} />
      ))}
      <br />
      <span><strong>{`Total $${total}  `}</strong></span>
      <Button variant="text">Checkout</Button>
    </List>
  );
}