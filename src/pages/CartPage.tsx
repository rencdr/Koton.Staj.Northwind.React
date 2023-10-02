//CartPage.tsx
import React from 'react';
import CartContainer from '../containers/CartContainer'; 
import OrderContainer from '../containers/OrderContainer';
import DisplayOrderContainer from '../containers/DisplayOrderContainer';

const CartPage: React.FC = () => {
  return (
    <div>
      <h1>Cart [SEPET / SİPARİŞ]</h1>
      <CartContainer /> 
      <OrderContainer />
      <DisplayOrderContainer />
    </div>
  );
};

export default CartPage;
