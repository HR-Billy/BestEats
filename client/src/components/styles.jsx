import styled from 'styled-components';

const NavigationBar = styled.div`
  background-color: #C4C4C4;
  display: flex;
  align-content: center;
  justify-content: space-between;
  margin-left: -10px;
  padding: 10px;
  position: fixed;
  top: 0;
  width: 100%;
`;

const Text = styled.span`
  color: black;
  font-size: 1.6em;
  text-decoration: none;
`;

const Login = styled.button`
  display: flex;
  margin-right: 50px;
  font-size: 1.6em;
  &:hover {
    background-color: green;
  }
`;

const CurrentPage = styled.div`
  margin-top: 55px;
`;

const MainSet = styled.div`
  display: flex;
  gap: 100px;
`;

export {
  Text,
  NavigationBar,
  Login,
  CurrentPage,
  MainSet,
};
