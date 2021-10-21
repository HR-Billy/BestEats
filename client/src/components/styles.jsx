import styled from 'styled-components';
/* font-family: 'Kalam', cursive;
font-family: 'Permanent Marker', cursive;
font-family: 'Rampart One', cursive;
font-family: 'Source Sans Pro', sans-serif;
font-family: 'Work Sans', sans-serif; */

const NavigationBar = styled.div`
  background-color: white;
  display: flex;
  align-content: center;
  justify-content: space-between;
  margin-left: -10px;
  padding: 5px;
  position: fixed;
  top: 0;
  width: 100vw;
  zIndex: 9999;
`;

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

const CurrentPage = styled.div`
  margin-top: 55px;
`;

const MainSet = styled.div`
  display: flex;
  gap: 100px;
`;

export { Text, NavigationBar, Login, CurrentPage, MainSet };
