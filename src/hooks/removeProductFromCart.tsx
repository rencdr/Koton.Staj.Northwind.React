//removeProductFromCart.tsx
import { useState } from 'react';
import axios from 'axios';

const CART_API_URL = 'http://localhost:5221/api/Cart/removeProductFromCart';

const useRemoveCart = () => {
  const [notification, setNotification] = useState<string | null>(null);

  const removeProductFromCart = async (userId: string, productID: number) => {
    try {
      const response = await axios.delete(CART_API_URL, {
        data: {
          userId,
          productID,
        },
      });

      if (response.data.success) {
        setNotification('Ürün sepetten kaldırıldı.');
      } else {
        setNotification('Ürün kaldırma işlemi başarısız.');
      }
    } catch (error) {
      setNotification('Ürün kaldırma işlemi sırasında bir hata oluştu.');
    }
  };

  const clearNotification = () => {
    setNotification(null);
  };

  return {
    removeProductFromCart,
    notification,
    clearNotification,
  };
};

export default useRemoveCart;
