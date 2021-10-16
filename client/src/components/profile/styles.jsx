import styled from 'styled-components';

/* ---------------------------------- MAIN ---------------------------------- */
export const Wrapper = styled.div`
  height: 92vh;
  /* padding-left: 1%;
  padding-right: 1%; */

  /* border: 1px solid black; // DELETE */
`;
export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  /* background-color: lightgray; // DELETE */
`;
export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 33.33%;

  /* border: 1px solid black; // DELETE */
`;

/* ------------------------------ PROFILE PIC ------------------------------  */
export const PicContainer = styled.div`
  height: 30%;

  border: 1px solid black; // DELETE
`;

/* ------------------------------- NUTRITION -------------------------------- */
export const NutritionContainer = styled.div`
  height: 70%;

  border: 1px solid black; // DELETE
`;

/* -------------------------------- STATUS ---------------------------------- */
export const StatusContainer = styled.div`
  height: 30%;

  border: 1px solid black; // DELETE
`;

/* --------------------------------- FEED  ---------------------------------- */
export const FeedContainer = styled.div`
  left: 30%;
  height: 70%;

  border: 1px solid black; // DELETE
`;

/* ------------------------------- SUBSCRIBE -------------------------------  */

/* -------------------------------- ORDERS ---------------------------------  */
export const OrdersContainer = styled.div`
  height: 25%;

  border: 1px solid black; // DELETE
`;

export default styled;
