import React, { useState } from 'react';
import styled from 'styled-components';
import Cat from './Cat.jsx';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default function Category({ setActiveCategory, activeCategory }) {
  const categories = [
    { name: 'Produce', src: 'https://static.onecms.io/wp-content/uploads/sites/19/2018/02/13/fruits-vegetables-rainbow-hero-getty-2000.jpg' },
    { name: 'Dairy', src: 'https://www.mashed.com/img/gallery/the-reason-some-people-mistakenly-believe-eggs-are-dairy/intro-1619683011.webp' },
    { name: 'Meat', src: 'https://cdn.winsightmedia.com/platform/files/public/2020-06/background/shutterstock_472568125_1592417390.jpg?VersionId=MpiZqNLalk9jTQhhmzezH.5gTbHbHLSZ' },
    { name: 'Bakery', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfqk_5sX80P786E4VmQNbCWgHRL0gQcoQX_g&usqp=CAU' },
  ];

  function handleClick(e) {
    setActiveCategory(e.target.name);
  }

  return (
    <Container>
      {categories.map((cat, idx) => {
        if (activeCategory === cat.name || activeCategory == null) {
          return <Cat handleClick={handleClick} data={cat} brightness="100%" key={idx} />
        } else {
          return <Cat handleClick={handleClick} data={cat} brightness="50%" key={idx} />
        }
      })}
    </Container>
  );
}
