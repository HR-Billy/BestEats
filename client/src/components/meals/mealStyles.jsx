import styled from 'styled-components';

const Filter = styled.div`
  z-index: -10;
  width: 800px;
  margin: auto;
`;

const MealCards = styled.div`
  width: 1200px;
  margin: auto;
  margin-bottom: 100px;
`;

const Meal = styled.div`
  height: auto;
  width: 100%;
  margin-right: -100px;
  box-shadow: 0 0 3px #ccc;
`;

const MealImage = styled.img`
  width: 100%;
  height: auto;
`;

const SubscribeBar = styled.div`
  background-color: white;
  position: fixed;
  bottom: 0;
  margin-left: -10px;
  width: 101%;
  height: 80px;
  display: flex;
  justify-content: center;
  border-top: 2px solid #e9eae8;
  border-bottom: 2px solid #e9eae8;
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

const BottomCard = styled.div`
  border-left: 1px solid #e9eae8;
  border-right: 1px solid #e9eae8;
  border-bottom: 1px solid #e9eae8;
`;

const QuantitySet = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const SubscribeButton = styled.div`
  margin: auto;
`;

const ThankYouMessage = styled.div`
  padding: 70px 100px 100px 100px;
  margin: auto;
  width: 80%;
  height: auto;
  background-color: #e9eae8;
`;

export {
  Filter,
  MealCards,
  Meal,
  MealImage,
  SubscribeBar,
  StyledCart,
  QuantityInput,
  QuantitySet,
  NameText,
  DescriptionText,
  PropertiesText,
  BottomCard,
  SubscribeButton,
  ThankYouMessage,
};
