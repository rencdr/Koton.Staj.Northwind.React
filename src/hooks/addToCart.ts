import { useState } from 'react';

const useAddToCart = () => {
    const [notification, setNotification] = useState<string | null>(null);

  const addToCart = (productName: string) => {
    // Sepete ürünü ekle işlemleri (Redux kullanarak)
    // Eklenen ürün bildirimi
    setNotification(`"${productName}" sepete eklendi.`);
  };

  // Bildirimi temizle
  const clearNotification = () => {
    setNotification(null);
  };

  return {
    addToCart,
    notification,
    clearNotification,
  };
};

export default useAddToCart;
