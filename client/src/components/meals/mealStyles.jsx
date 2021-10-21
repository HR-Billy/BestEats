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
  height: 40px;
  display: flex;
  justify-content: center;
`;

const StyledCart = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  background-color: white;
  height: 100%;
  width: 18%;
  margin-top: 90px;
`;

const QuantityInput = styled.input`
  width: 50px;
`;

const NameText = styled.h4`
  font-size: 1.2em;
  margin-top: -1%;
  margin-left: 1%;
  margin-bottom: 0;
`;

const DescriptionText = styled.p`
  font-size: .9em;
  margin-top: 0;
  margin-left: 1%
`;

const PropertiesText = styled.p`
  font-size: .9em;
  margin-bottom: 0;
  margin-left: 1%;
`;

export {
  Filter,
  MealCards,
  Meal,
  MealImage,
  SubscribeBar,
  StyledCart,
  QuantityInput,
  NameText,
  DescriptionText,
  PropertiesText,
};
