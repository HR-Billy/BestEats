import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import Search from './Search.jsx';
import Category from './Category.jsx';
import Items from './Items.jsx';
import Cart from './Cart.jsx';

const H1 = styled.h1`
  padding-top: 60px;
  text-align: center;
  font-size: 80px;
  color: #608200;
  font-family: "Kalam";
  padding-bottom: 0px;
  margin-bottom: 0px;
`;

const H3 = styled.div`
  text-align: center;
  font-size: 40px;
  font-family: "Kalam";
  padding-top: -30px;
  margin-top: -30px;
  color: #B0C800;
`;

const Container = styled.div`
  width: 85%;
  margin: auto;
  font-family: Sans-Serif;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const useDidMountEffect = (func, deps) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      func();
    } else {
      didMount.current = true;
    }
  }, deps);
};

export default function Store() {
  const [activeCategory, setActiveCategory] = useState('Produce');
  const [products, setProducts] = useState(null);
  const [activeProducts, setActiveProducts] = useState(null);
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get('api/store/produce')
      .then(({ data }) => {
        setActiveProducts(data);
      });
  }, []);

  useEffect(() => {
    axios.get('api/store/products')
      .then(({ data }) => {
        setProducts(data);
      });
  }, []);

  useDidMountEffect(() => {
    const filteredProducts = products.filter((d) => d.category === activeCategory);
    setActiveProducts(filteredProducts);
  }, [activeCategory]);

  useDidMountEffect(() => {
    if (search === '') {
      setActiveCategory('Produce');
      const filteredProducts = products.filter((d) => d.category === activeCategory);
      setActiveProducts(filteredProducts);
    } else {
      setActiveCategory(null);
      const filteredProducts = products.filter((d) => d.name.toLowerCase().includes(search.toLowerCase()));
      setActiveProducts(filteredProducts);
    }
  }, [search]);

  return (
    <>
    <Container>
      <H1>Best Eats</H1>
      <H3>Grocery</H3>
      <Search setSearch={setSearch}/>
      <Category setActiveCategory={setActiveCategory} activeCategory={activeCategory}/>
      <Wrapper>
        {cart.length > 0 && <Cart cart={cart} setCart={setCart} />}
        {activeProducts && <Items products={activeProducts} setCart={setCart} />}
      </Wrapper>
    </Container>
    </>
  );
}
