import React, { useState } from 'react';
import axios from 'axios';

const useAddToCart = () => {
  const [notification, setNotification] = useState<string | null>(null);
  const userId = localStorage.getItem('userId');

  const addToCart = async (productName: string, productID: number) => {
    try {
      let quantity = 1; // Her zaman 1 ürün ekliyoruz

      if (userId) {
        const response = await axios.post(
          'http://localhost:5221/api/Cart/addProductToCart',
          {
            userId,
            productID,
            quantity, 
          }
        );

        if (response.data.success) {
          setNotification(`"${userId}: ${productName}" + "${productID}" has been added to the cart.`);
        } else {
          setNotification('An error occurred while adding the product.');
        }
      } else {
        setNotification(`"${productName}" + "${productID}" has been added to the cart.`);
      }
    } catch (error) {
      console.error('Ürün eklenirken bir hata oluştu:', error);
      setNotification('An error occurred while adding the product.');
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
