// deleteCart.ts
import axios from 'axios';

export const deleteCartByUserId = async (userId: string) => {
  try {
    const response = await axios.delete(`http://localhost:5221/api/Cart/clearCartByUserId?userId=${userId}`);

    if (response.data.success) {
      console.log('Sepet başarıyla temizlendi.');
    } else {
      throw new Error('An error occurred while clearing the cart.');
    }
  } catch (error) {
    console.error('Sepet temizlenirken bir hata oluştu:', error);
    throw new Error('An error occurred while clearing the cart.');
  }
};
