import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 200px;
  height: 300px;
`;

export default function Item({product, setCart}) {

  const images = ['https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00000000045490/d15efb0c268b95e85f87e8549b078335_large.png&width=256&type=webp&quality=80', 'https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00228588000001/684d9bb43b365efbd4a1393c27c8af0a_large.png&width=256&type=webp&quality=80', "https://www.terhuneorchards.com/wp-content/uploads/2020/06/products-white_loaf__82103.1586278247.1000.1200.png", "https://ipcdn.freshop.com/resize?url=https://images.freshop.com/1564405684707498128/0efdc54b9b372292829e8f7ca2e7f80b_large.png&width=256&type=webp&quality=80"];

  function handleClick(e) {
    setCart(cart => [...cart, product]);
  }

  return (
    <Container>
      <img src={images[Math.floor(Math.random() * 4)]} alt="product" height="150px"/>
      <h4>{product.name}</h4>
      <p>{product.price}</p>
      <button onClick={handleClick}>Add To Cart</button>
    </Container>
  );
}
