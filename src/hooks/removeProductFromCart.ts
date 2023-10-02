import axios from 'axios';

const CART_API_URL = 'http://localhost:5221/api/Cart/removeProductFromCart';

const useRemoveCart = () => {
  const removeProductFromCart = async (userId: string, productId: number) => {
    try {
      const response = await axios.delete(`${CART_API_URL}?userId=${userId}&productId=${productId}`);

      return response.data.success; // API yanıtı döndür
    } catch (error) {
      throw error;
    }
  };

  return {
    removeProductFromCart,
  };
};

export default useRemoveCart;
