import React, { useState } from 'react';
import useCreateOrderHook from '../hooks/createOrder';
import { Box } from "@chakra-ui/react";

const OrderContainer = () => {
  const [userAddress, setUserAddress] = useState('');
  const [userPhoneNumber, setUserPhoneNumber] = useState('');
  const userId = localStorage.getItem('userId');
  const [notification, setNotification] = useState({ message: '', isError: false });

  const { createOrder } = useCreateOrderHook();

  const handleOrderSubmit = async () => {
    if (userId && userAddress && userPhoneNumber) {
      try {
        const response = await createOrder(userId, userAddress, userPhoneNumber);

        if (response.success) {
          const orderId = response.data;
          localStorage.setItem('orderId', orderId);

          // Başarılı bildirimi göster
          setNotification({ message: 'Order has been created successfully', isError: false });

          console.log('Sipariş başarıyla oluşturuldu.');
        } else {
          // Başarısız bildirimi göster
          setNotification({ message: 'Order creation failed.', isError: true });

          console.error('Sipariş oluşturulamadı.');
        }

      } catch (error) {
        // Hata bildirimi göster
        setNotification({ message: 'An error occurred while creating the order', isError: true });

        console.error('Sipariş oluşturulurken bir hata oluştu:', error);
      }
    } else {
      // Eksik alan bildirimi göster
      setNotification({ message: 'Please fill in all fields', isError: true });

      console.error('Lütfen tüm alanları doldurun.');
    }
  };

  const clearNotification = () => {
    setNotification({ message: '', isError: false });
  };

  return (
    <div>
      <h2>Order</h2>
      <div>
        <label>Address:</label>
        <input
          type="text"
          value={userAddress}
          onChange={(e) => setUserAddress(e.target.value)}
        />
      </div>
      <div>
        <label>Phone Number:</label>
        <input
          type="text"
          value={userPhoneNumber}
          onChange={(e) => setUserPhoneNumber(e.target.value)}
        />
      </div>

      {/* Bildirim div'i */}
      {notification.message && (
        <div className={`notification ${notification.isError ? 'error' : 'success'}`}>
          {notification.message}
        </div>
      )}

      {/* Box komponentini kullanarak siyah bir düğme */}
      <Box
        as="button"
        bg="black"
        color="white"
        px={4}
        py={2}
        borderRadius="md"
        _hover={{ bg: "gray.800" }}
        onClick={handleOrderSubmit}
      >
        Create Order
      </Box>
    </div>
  );
};

export default OrderContainer;
