import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

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
  );
}
