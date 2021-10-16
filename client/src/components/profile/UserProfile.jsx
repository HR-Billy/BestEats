import React, { useState } from 'react';
import { Context } from './Context.jsx';
import ProfilePic from './features/ProfilePic.jsx';
import NutritionFacts from './features/NutritionFacts.jsx';
import UpdateStatus from './features/UpdateStatus.jsx';
import Feed from './features/Feed.jsx';
import Subscribe from './features/Subscribe.jsx';
import Orders from './features/Orders.jsx';
import { Wrapper, Container } from './profileStyles.jsx';

const UserProfile = () => {
  const [user, setUser] = useState([]);

  return (
    <Context.Provider value={{ user, setUser }}>
      <Wrapper>
        <Container>
          <ProfilePic />
          <NutritionFacts />
        </Container>
        <Container>
          <UpdateStatus />
          <Feed />
        </Container>
        <Container>
          <Subscribe />
          <Orders />
          <Orders />
          <Orders />
        </Container>
      </Wrapper>
    </Context.Provider>
  );
};

export default UserProfile;
