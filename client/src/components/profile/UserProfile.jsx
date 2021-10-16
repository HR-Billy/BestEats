import React, { useState } from 'react';
import { Context } from './Context.jsx';
import ProfilePic from './features/ProfilePic.jsx';
import NutritionFacts from './features/NutritionFacts.jsx';
import Status from './features/Status.jsx';
import Feed from './features/Feed.jsx';
import Subscribe from './features/Subscribe.jsx';
import Orders from './features/Orders.jsx';
import { Wrapper, Container, Section } from './styles.jsx';

const UserProfile = () => {
  const [user, setUser] = useState([]);

  return (
    <Context.Provider value={{ user, setUser }}>
      <Wrapper>
        <Container>

          <Section>
            <ProfilePic />
            <NutritionFacts />
          </Section>

          <Section>
            <Status />
            <Feed />
          </Section>

          <Section>
            <Subscribe />
            <Orders />
            <Orders />
            <Orders />
          </Section>

        </Container>
      </Wrapper>
    </Context.Provider>
  );
};

export default UserProfile;
