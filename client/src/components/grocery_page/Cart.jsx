import React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import CartItem from './CartItem.jsx';

const Container = styled.div`
  width: 250px;
  padding-top: 140px;
  padding-left: 30px;
`;

export default function Cart({products}) {
  function getTotal() {
    let total = 0;
    products.forEach((p) => {
      total += Number(p.price.slice(1));
    });
    return total.toFixed(2);
  }

  const total = getTotal(products);

  return (
    <Container>
      {products.map((product) => (
        <CartItem product={product} key={product.id} />
      ))}
      <span><strong>{`Total $${total}  `}</strong></span>
      <Button variant="contained">Checkout</Button>
    </Container>
  );
}
