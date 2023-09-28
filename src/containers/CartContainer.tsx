//CartContainer.tsx
import React, { useEffect, useState } from 'react';
import { getCartItemsByUserId } from '../hooks/displayCart';
import useRemoveCart from '../hooks/removeProductFromCart'; // useRemoveCart Hook'unu içe aktarın

const CartContainer: React.FC = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const userId = localStorage.getItem('userId');
  const { removeProductFromCart } = useRemoveCart(); // useRemoveCart Hook'unu kullanın

  useEffect(() => {
    if (userId) {
      getCartItemsByUserId(userId)
        .then((data) => {
          setCartItems(data);
        })
        .catch((error) => {
          console.error('Sepet içeriği alınırken bir hata oluştu:', error);
        });
    }
  }, [userId]);

  const handleRemoveItem = (productID: number) => {
    if (userId) {
      // Sepetten ürünü kaldırmak için API isteği yapın
      removeProductFromCart(userId, productID) // useRemoveCart Hook'u ile doğru şekilde çağırın
        .then(() => {
          // Başarılı bir şekilde ürün sepetten kaldırıldığında sepet içeriğini güncelleyin
          getCartItemsByUserId(userId)
            .then((data) => {
              setCartItems(data);
            })
            .catch((error) => {
              console.error('Sepet içeriği alınırken bir hata oluştu:', error);
            });
        })
        .catch((error) => {
          console.error('Ürün kaldırma işlemi başarısız:', error);
        });
    }
  };
  
  return (
    <div>
      <h2>Sepet İçeriği</h2>
      {cartItems.length === 0 ? (
        <p>Sepetiniz boş.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              Ürün Adı: {item.productName}, Miktar: {item.quantity}, Fiyat: ${item.price}
              <button onClick={() => handleRemoveItem(item.productID)}>Ürünü Kaldır</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartContainer;
