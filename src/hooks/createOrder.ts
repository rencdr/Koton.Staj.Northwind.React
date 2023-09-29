// createOrder.js

import axios from 'axios';

const ORDER_API_URL = 'http://localhost:5221/api/Order/createOrder';

const useCreateOrder = () => {
    const createOrder = async (userId: string, userAddress: string, userPhoneNumber: string) => {
        try {
      const response = await axios.post(ORDER_API_URL, {
        userId,
        userAddress,
        userPhoneNumber,
      });

      return response.data; // Sunucudan gelen yanıtı döndürün
    } catch (error) {
      throw error;
    }
  };

  return {
    createOrder,
  };
};

export default useCreateOrder;
