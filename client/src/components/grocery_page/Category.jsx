import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Cat = styled.div`
  text-align: center;
`;

const Image = styled.img`
  border-radius: 30px;
`;

export default function Category({setActiveCategory}) {

  function handleClick(e) {
    setActiveCategory(e.target.name);
  }

  return (
    <Container>
      <Cat>
        <Image onClick={handleClick} name="Dairy" src="https://www.mashed.com/img/gallery/the-reason-some-people-mistakenly-believe-eggs-are-dairy/intro-1619683011.webp" width="243px" height="135px" />
        <h2>Dairy/Eggs</h2>
      </Cat>
      <Cat>
        <Image onClick={handleClick} name="Produce" src="https://media-exp1.licdn.com/dms/image/C561BAQECKYPL5SZdgA/company-background_10000/0/1614115930420?e=2159024400&v=beta&t=iLyQjii2ykrlQBvL5eeDnAaGJR4e0t23JN3XHd-tssU" width="243px" height="135px" />
        <h2>Produce</h2>
      </Cat>
      <Cat>
        <Image onClick={handleClick} name="Bakery" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfqk_5sX80P786E4VmQNbCWgHRL0gQcoQX_g&usqp=CAU" width="243px" height="135px" />
        <h2>Bakery</h2>
      </Cat>
      <Cat>
        <Image onClick={handleClick} name="Meat" src="https://cdn.winsightmedia.com/platform/files/public/2020-06/background/shutterstock_472568125_1592417390.jpg?VersionId=MpiZqNLalk9jTQhhmzezH.5gTbHbHLSZ" width="243px" height="135px" />
        <h2>Meat/Produce</h2>
      </Cat>
    </Container>
  );
}
