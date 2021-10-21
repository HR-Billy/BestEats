import styled from 'styled-components';
/* font-family: 'Kalam', cursive;
font-family: 'Permanent Marker', cursive;
font-family: 'Rampart One', cursive;
font-family: 'Source Sans Pro', sans-serif;
font-family: 'Work Sans', sans-serif; */

const Text = styled.span`
  color: black;
  font-size: 1.6em;
  text-decoration: none;
`;

const Login = styled.button`
  font-family: 'Kalam', cursive;
  display: flex;
  align-content: center;
  margin-right: 5px;
  margin-top: 3px;
  font-size: 1.6em;
  &:hover {
    background-color: green;
  }
`;

const NavigationBar = styled.div`
  background-color: white;
  display: flex;
  align-content: center;
  justify-content: space-between;
  margin-left: -10px;
  padding: 5px;
  position: fixed;
  top: 0;
  width: calc(100% + 10px);
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  z-index: 9999;
`;

const CurrentPage = styled.div`
  margin-top: 55px;
`;

const MainSet = styled.div`
  display: flex;
  gap: 80px;
`;

export { Text, NavigationBar, Login, CurrentPage, MainSet };
