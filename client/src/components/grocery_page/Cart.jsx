import React from 'react';
import styled from 'styled-components';
import CartItem from './CartItem.jsx';

const Container = styled.div`
  width: 260px;
  padding-top: 140px;
  padding-left: 30px;
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
    <Container>
      <h2>Shopping Cart</h2>
      {cart.map((product) => (
        <CartItem product={product} key={product.id} setCart={setCart} />
      ))}
      <br></br>
      <span><strong>{`Total $${total}  `}</strong></span>
      <button>Checkout</button>
    </Container>
  );
}
