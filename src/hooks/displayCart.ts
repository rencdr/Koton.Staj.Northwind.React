// displayCart.ts
import axios from 'axios';

export const getCartItemsByUserId = async (userId: string, productID: string) => {
  try {
    const response = await axios.get(`http://localhost:5221/api/Cart/getCartItemsByUserId?userId=${userId}&productID=${productID}`);

    if (response.data.success) {
      return response.data.data; // Sepet içeriği başarıyla alındı
    } else {
      throw new Error('Failed to retrieve cart contents.');
    }
  } catch (error) {
    console.error('Sepet içeriği alınırken bir hata oluştu:', error);
    throw new Error('Failed to retrieve cart contents.');
  }
};
