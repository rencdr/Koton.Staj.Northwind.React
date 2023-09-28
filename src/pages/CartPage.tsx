//CartPage.tsx
import React from 'react';
import CartContainer from '../containers/CartContainer'; // CartContainer dosyasını import edin

const CartPage: React.FC = () => {
  return (
    <div>
      <h1>Cart [SEPET / SİPARİŞ]</h1>
      <CartContainer /> {/* CartContainer component'ini buraya ekleyin */}
    </div>
  );
};

export default CartPage;
