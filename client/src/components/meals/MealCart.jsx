import React, { useState, useEffect } from 'react';

const MealCart = () => {
  const [cart, setCart] = useState({ total: 0 });
  const [accordion, setAccordion] = useState(false);

  const clickHandler = () => {
    const test = { test: 3 };
    cart.total += 1;
    setCart({ ...cart, ...test });
  };

  const checkCart = () => {
    if (cart.total > 0) {
      setAccordion(true);
    } else {
      setAccordion(false);
    }
  };

  useEffect(
    checkCart, [cart],
  );

  return (
    <>
      <button type="button" onClick={clickHandler}> Try </button>
      {accordion && <div>Test</div>}
    </>
  );
};

export default MealCart;
