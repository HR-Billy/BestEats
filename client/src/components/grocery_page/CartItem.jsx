import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 260px;
  padding-top: 15px;
`;

const Input = styled.input`
  width: 30px;
  margin-left: 30px;
`

export default function CartItem({ product, setCart }) {
  const [cartQuantity, setCartQuantity] = useState(product.cartQuantity);

  function handleChange(e) {
    setCartQuantity(Number(e.target.value));
    setCart((cart) => {
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === product.id) {
          cart[i].cartQuantity = Number(e.target.value);
          return [...cart];
        }
      }
    })
  }

  function handleClick() {
    setCart((cart) => cart.filter((p) => p.id !== product.id));
  }

  return (
    <Container>
      <h4><button onClick={handleClick} type="button">X</button> {product.name}</h4>
      <h5>{product.price} <Input type="number" value={product.cartQuantity} placeholder="0" onChange={handleChange} /></h5>
    </Container>
  );
}
