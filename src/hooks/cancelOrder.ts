// cancelOrder.ts

import axios from 'axios';

const CANCEL_ORDER_API_URL = 'http://localhost:5221/api/Order/cancelOrderByOrderId';

const useCancelOrder = () => {
  const cancelOrder = async (orderId: number) => {
    try {
        const response = await axios.delete(`${CANCEL_ORDER_API_URL}?orderId=${orderId}`);
        return response.data; // Sunucudan gelen yanıt
    } catch (error) {
      throw error;
    }
  };

  return {
    cancelOrder,
  };
};

export default useCancelOrder;
