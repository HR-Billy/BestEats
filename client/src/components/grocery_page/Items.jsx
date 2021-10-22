import React from 'react';
import styled from 'styled-components';
import Item from './Item.jsx';

const Container = styled.div`
  width: 100%;
  margin-top: 65px;
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
