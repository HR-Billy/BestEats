import styled from 'styled-components';

const NavigationBar = styled.div`
  background-color: #C4C4C4;
  display: flex;
  justify-content: center;
  gap: 130px;
  margin-left: -10px;
  padding-top: 10px;
  padding-bottom: 10px;
  position: fixed;
  top: 0;
  width: 100%;
`;

const Text = styled.span`
  color: black;
  font-size: 1.6em;
  text-decoration: none;
`;

const CurrentPage = styled.div`
  margin-top: 50px;
`;

export { Text, NavigationBar, CurrentPage };
