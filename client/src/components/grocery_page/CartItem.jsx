import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 250px;
`;

export default function CartItem({ product, setCart }) {
  function handleClick() {
    setCart((cart) => cart.filter((p) => p.id !== product.id));
  }
  return (
    <Container>
      <button onClick={handleClick} type="button">Remove</button>
      <h4>{product.name}</h4>
      <p>{product.price}</p>
      <p>Quantity {product.cartQuantity}</p>
    </Container>
  );
}
