import React, { useEffect, useState } from 'react';
import { getCartItemsByUserId } from '../hooks/displayCart';
import { deleteCartByUserId } from '../hooks/deleteCart'; // Import deleteCart hook

const CartContainer: React.FC = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const userId = localStorage.getItem('userId');
  const productID = 'ürününüzünKimliği'; // Gerçek ürün kimliğinizle değiştirin

  useEffect(() => {
    if (userId) {
      getCartItemsByUserId(userId, productID)
        .then((data) => {
          setCartItems(data);
        })
        .catch((error) => {
          console.error('Sepet içeriği alınırken bir hata oluştu:', error);
        });
    }
  }, [userId, productID]); // Bağımlılıklar dizisine productID'yi de eklediğinizden emin olun

  const handleClearCart = () => {
    if (userId) {
      deleteCartByUserId(userId)
        .then(() => {
          setCartItems([]);
          console.log('Sepet başarıyla temizlendi.');
        })
        .catch((error) => {
          console.error('Sepet temizlenirken bir hata oluştu:', error);
        });
    }
  };

  return (
    <div>
      <h2>Sepet İçeriği</h2>
      {cartItems.length === 0 ? (
        <p>Sepetiniz boş.</p>
      ) : (
        <div>
          <button onClick={handleClearCart}>Sepeti Temizle</button>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                Ürün Adı: {item.productName}, Miktar: {item.quantity}, Fiyat: ${item.unitPrice}, ID: {item.productId}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CartContainer;
