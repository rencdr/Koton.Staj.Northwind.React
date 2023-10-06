// OrderContainer.tsx
import React, { useState } from 'react';
import useCreateOrderHook from '../hooks/createOrder';
import { Box } from '@chakra-ui/react';
import CreateOrderCard from '../components/molecules/CreateOrderCard';
import './OrderContainerStyle.css';

const OrderContainer = () => {
  const [userAddress, setUserAddress] = useState('');
  const [userPhoneNumber, setUserPhoneNumber] = useState('');
  const userId = localStorage.getItem('userId');
  const [notification, setNotification] = useState({ message: '', isError: false });

  const { createOrder } = useCreateOrderHook();

  const handleOrderSubmit = async (address: string, phoneNumber: string) => { // İşlevi güncelledik
    if (userId && address && phoneNumber) {
      try {
        const response = await createOrder(userId, address, phoneNumber);

        if (response.success) {
          const orderId = response.data;
          localStorage.setItem('orderId', orderId);

          setNotification({ message: 'Order has been created successfully', isError: false });

          console.log('Sipariş başarıyla oluşturuldu.');
        } else {
          setNotification({ message: 'Order creation failed.', isError: true });

          console.error('Sipariş oluşturulamadı.');
        }
      } catch (error) {
        setNotification({ message: 'An error occurred while creating the order', isError: true });

        console.error('Sipariş oluşturulurken bir hata oluştu:', error);
      }
    } else {
      setNotification({ message: 'Please fill in all fields', isError: true });

      console.error('Lütfen tüm alanları doldurun.');
    }
  };

  const clearNotification = () => {
    setNotification({ message: '', isError: false });
  };

  return (
    <div>
      <h2 className='header'>Create Order</h2>
      <CreateOrderCard onCreateOrder={handleOrderSubmit} />

      {/* Bildirim div'i */}
      {notification.message && (
        <div className={`notification ${notification.isError ? 'error' : 'success'}`}>
          {notification.message}
        </div>
      )}
    </div>
  );
};

export default OrderContainer;
