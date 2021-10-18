import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 200px;
  height: 300px;
`;

export default function Item({ product, setCart }) {
  const [cartQuantity, setCartQuantity] = useState(null);

  function handleChange(e) {
    setCartQuantity(e.target.value);
  }

  function handleClick() {
    product.cartQuantity = Number(cartQuantity) || 1;
    setCart((cart) => {
      console.log(cart);
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].id == product.id) {
          cart[i].cartQuantity += Number(cartQuantity);
          return cart;
        }
      }
      return [...cart, product];
    });
  }

  return (
    <Container>
      <img src={product.image} alt="product" height="150px" />
      <h4>{product.name}</h4>
      <p>{product.price}</p>
      <button type="button" onClick={handleClick}>Add To Cart</button>
      <input type="number" placeholder="1" onChange={handleChange} />
    </Container>
  );
}
