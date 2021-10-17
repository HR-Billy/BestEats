import styled from 'styled-components';

const Meals = styled.div`
  display: flex;
  flex-direction: column;
  height: 10em;
  width: 20%;
  border: 2px solid red;
`;

const SubscribeButton = styled.button`
  color: green;
  position: fixed;
  bottom: 0;
`;

export { Meals, SubscribeButton };
