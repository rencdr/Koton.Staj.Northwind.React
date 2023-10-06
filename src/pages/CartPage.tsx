import React from 'react';
import CartContainer from '../containers/CartContainer';
import OrderContainer from '../containers/OrderContainer';
import DisplayOrderContainer from '../containers/DisplayOrderContainer';
import CombinedContainer from '../containers/CombinedContainer'
const CartPage: React.FC = () => {
  return (
    <div>
      {/* <h1>Cart [SEPET / SİPARİŞ]</h1> */}
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '10px' }}>
        <div style={{ paddingLeft: '15px' }}>
          <CartContainer />
          {/* <CombinedContainer /> */}
        </div>
       
        <div style={{ paddingLeft: '50px', paddingRight:'15px'}}>
        <OrderContainer />

          <DisplayOrderContainer />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
