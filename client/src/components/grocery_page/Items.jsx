import React from 'react';
import styled from 'styled-components';
import Item from './Item.jsx';

const Container = styled.div`
  margin-top: 75px;
  display: flex;
  flex-direction: row;
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
