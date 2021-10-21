import styled from 'styled-components';

const Filter = styled.div`
  width: 800px;
  margin: auto;
`;

const MealCards = styled.div`
  width: 1200px;
  margin: auto;
`;

const Meal = styled.div`
  border: 2px solid red;
  height: auto;
  width: 100%;
  margin-right: -100px;
`;

const MealImage = styled.img`
  width: 100%;
  height: auto;
`;

const SubscribeBar = styled.div`
  background-color: green;
  position: fixed;
  bottom: 0;
  margin-left: -10px;
  width: 101%;
  height: 30px;
  display: flex;
  justify-content: center;
`;

const SubscribeButton = styled.button`
  color: green;
  margin-top: auto;
`;

const StyledCart = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  background-color: red;
  height: 100%;
  width: 15%;
  margin-top: 55px;
`;

const QuantityInput = styled.input`
  width: 50px;
`;

export {
  Filter,
  MealCards,
  Meal,
  MealImage,
  SubscribeBar,
  SubscribeButton,
  StyledCart,
  QuantityInput,
};
