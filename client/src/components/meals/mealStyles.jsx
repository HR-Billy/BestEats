import styled from 'styled-components';

const Filter = styled.div`
  width: 800px;
  margin: auto;
`;

const MealCards = styled.div`
  width: 1000px;
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

export {
  Filter,
  MealCards,
  Meal,
  MealImage,
  SubscribeBar,
  SubscribeButton,
};
