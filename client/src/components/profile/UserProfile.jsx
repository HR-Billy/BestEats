import React, { useState } from 'react';
import { Context } from './Context.jsx';
import ProfilePic from './features/ProfilePic.jsx';
import NutritionFacts from './features/NutritionFacts.jsx';
import UpdateStatus from './features/UpdateStatus.jsx';
import Feed from './features/feed.jsx';
import Subscribe from './features/Subscribe.jsx';
import Orders from './features/Orders.jsx';

const UserProfile = () => {
  const [user, setUser] = useState([]);

  return (
    <Context.Provider value={{ user, setUser }}>
      <div>
        <ProfilePic />
        <NutritionFacts />

        <UpdateStatus />
        <Feed />

        <Subscribe />
        <Orders />
        <Orders />
        <Orders />
      </div>
    </Context.Provider>
  );
};

export default UserProfile;
