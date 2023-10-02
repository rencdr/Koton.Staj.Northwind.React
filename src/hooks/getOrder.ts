import axios from 'axios';

const ORDER_API_URL = 'http://localhost:5221/api/Order/getOrdersByUserId';

const getOrder = async (userId: string) => {
  try {
    const response = await axios.get(
      ORDER_API_URL,
      {
        params: {
          userId,
        },
      }
    );

    if (response.data.success) {
      return response.data.data;
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    console.error('Siparişler alınırken bir hata oluştu:', error);
  }
};

export default getOrder;
