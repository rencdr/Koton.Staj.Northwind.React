//OrderContainer.tsx
import React, { useState } from 'react';
import useCreateOrderHook from '../hooks/createOrder';

const OrderContainer = () => {
  const [userAddress, setUserAddress] = useState('');
  const [userPhoneNumber, setUserPhoneNumber] = useState('');
  const userId = localStorage.getItem('userId');

  const { createOrder } = useCreateOrderHook();

  const handleOrderSubmit = async () => {
    if (userId && userAddress && userPhoneNumber) {
      try {
        const response = await createOrder(userId, userAddress, userPhoneNumber);

if (response.success) {
  const orderId = response.data; // response içinde orderId doğrudan erişilebilir
  localStorage.setItem('orderId', orderId);

  console.log('Sipariş başarıyla oluşturuldu.');
  // Sipariş başarıyla oluşturulduğunda yapılacak işlemleri burada gerçekleştirin
} else {
  console.error('Sipariş oluşturulamadı.');
}

      } catch (error) {
        console.error('Sipariş oluşturulurken bir hata oluştu:', error);
      }
    } else {
      console.error('Lütfen tüm alanları doldurun.');
    }
  };
  
  return (
    <div>
      <h2>Sipariş Ver</h2>
      <div>
        <label>Adres:</label>
        <input
          type="text"
          value={userAddress}
          onChange={(e) => setUserAddress(e.target.value)}
        />
      </div>
      <div>
        <label>Telefon Numarası:</label>
        <input
          type="text"
          value={userPhoneNumber}
          onChange={(e) => setUserPhoneNumber(e.target.value)}
        />
      </div>
      <button onClick={handleOrderSubmit}>Sipariş Ver</button>
    </div>
  );
};

export default OrderContainer;
