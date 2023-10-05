import React, { useState } from 'react';
import axios from 'axios';

const useAddToCart = () => {
  const [notification, setNotification] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1); // Başlangıçta 1 ürün
  const userId = localStorage.getItem('userId');

  const addToCart = async (productName: string, productID: number, quantity: number) => {
    try {
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

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
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
    quantity,
    increaseQuantity,
    decreaseQuantity,
  };
};

export default useAddToCart;
