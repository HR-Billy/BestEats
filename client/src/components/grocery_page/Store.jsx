import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Search from './Search.jsx';
import Category from './Category.jsx';
import Items from './Items.jsx';
import Cart from './Cart.jsx';
const data = require('./MOCK_DATA');

const H1 = styled.h1`
  padding-top: 60px;
  text-align: center;
  font-size: 80px;
`

const Container = styled.div`
  width: 85%;
  margin: auto;
  font-family: Sans-Serif;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
`

export default function Store() {
  const [activeCategory, setActiveCategory] = useState('Produce');
  const [activeProducts, setActiveProducts] = useState(null);
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const filteredProducts = data.filter((d) => d.category === activeCategory);
    setActiveProducts(filteredProducts);
  }, [activeCategory]);

  useEffect(() => {
    if (search === '') setActiveCategory(activeCategory);
    else {
      const filteredProducts = data.filter((d) => d.name.toLowerCase().includes(search.toLowerCase()));
      setActiveProducts(filteredProducts);
    }
  }, [search]);

  return (
    <Container>
      <H1>Best Eats</H1>
      <Search setSearch={setSearch}/>
      <Category setActiveCategory={setActiveCategory} />
      <Wrapper>
        {cart.length > 0 && <Cart cart={cart} setCart={setCart} />}
        {activeProducts && <Items products={activeProducts} setCart={setCart} />}
      </Wrapper>
    </Container>
  );
}
