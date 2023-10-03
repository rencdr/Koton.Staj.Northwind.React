import React from 'react';
import CartContainer from '../containers/CartContainer';
import OrderContainer from '../containers/OrderContainer';
import DisplayOrderContainer from '../containers/DisplayOrderContainer';

const CartPage: React.FC = () => {
  return (
    <div>
      {/* <h1>Cart [SEPET / SİPARİŞ]</h1> */}
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '10px' }}>
        <div style={{ paddingLeft: '30px' }}>
          <CartContainer />
        </div>
       
        <OrderContainer />
        <div style={{ paddingRight: '30px' }}>
          <DisplayOrderContainer />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
