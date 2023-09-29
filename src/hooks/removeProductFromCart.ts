// removeProductFromCart.ts

import axios from 'axios';

const CART_API_URL = 'http://localhost:5221/api/Cart/removeProductFromCart';

const useRemoveCart = () => {
  const removeProductFromCart = async (userId: string, productId: number) => {
    try {
      const response = await axios.delete(CART_API_URL, {
        data: {
          userId,
          productId,
        },
      });

      return response.data.success; // API yanıtındaki başarı durumunu döndür
    } catch (error) {
      throw error;
    }
  };

  return {
    removeProductFromCart,
  };
};

export default useRemoveCart;
