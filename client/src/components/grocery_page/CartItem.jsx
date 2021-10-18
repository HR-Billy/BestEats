import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 250px;
`;

export default function CartItem({product}) {
  return (
    <Container>
      <h4>{product.name}</h4>
      <p>{product.price}</p>
    </Container>
  );
}
