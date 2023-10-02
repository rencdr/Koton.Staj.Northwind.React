import React, { useState } from 'react';
import axios from 'axios';

const useAddToCart = () => {
  const [notification, setNotification] = useState<string | null>(null);
  const userId = localStorage.getItem('userId'); // localStorage'dan userId'i 

  const addToCart = async (productName: string, productID: number) => {
    try {
      // Eklenen ürün bildirimi
      if (userId) {
        const response = await axios.post(
          'http://localhost:5221/api/Cart/addProductToCart',
          {
            userId,
            productID,
            quantity: 1, // Quantity 1 sabit
          }
        );

        if (response.data.success) {
          setNotification(`"${userId}: ${productName}" + "${productID}"  sepete eklendi.`);
        } else {
          setNotification('Ürün eklenirken bir hata oluştu.');
        }
      } else {
        setNotification(`"${productName}" + "${productID}"  sepete eklendi.`);
      }
    } catch (error) {
      console.error('Ürün eklenirken bir hata oluştu:', error);
      setNotification('Ürün eklenirken bir hata oluştu.');
    }
  };

  const clearNotification = () => {
    setNotification(null);
  };

  return {
    addToCart,
    notification,
    clearNotification,
    userId,
  };
};

export default useAddToCart;
