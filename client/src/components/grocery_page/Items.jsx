import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Item from './Item.jsx';

const Container = styled.div`
  padding-top: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export default function Items({products, setCart}) {
  return (
    <Container>
      {products.map((product) => (
        <Item product={product} setCart={setCart} key={product.id} />
      ))}
    </Container>
  );
}
