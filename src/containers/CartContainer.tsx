import React, { useEffect, useState } from 'react';
import { getCartItemsByUserId } from '../hooks/displayCart';
import { deleteCartByUserId } from '../hooks/deleteCart';
import useRemoveCart from '../hooks/removeProductFromCart';
import { Button as ChakraButton } from '@chakra-ui/react'; // Chakra UI'den Button komponentini içe aktarın

const CartContainer: React.FC = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const userId = localStorage.getItem('userId');
  const productID = 'ürününKimliği';

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
  }, [userId, productID]);

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

  const { removeProductFromCart } = useRemoveCart();
  const handleRemoveProduct = (productId: number) => {
    if (userId) {
      removeProductFromCart(userId, productId)
        .then((success) => {
          if (success) {
            const updatedCartItems = cartItems.filter((item) => item.productId !== productId);
            setCartItems(updatedCartItems);
            console.log('Ürün başarıyla sepetten kaldırıldı.');
          } else {
            console.error('Ürün sepetten kaldırılamadı.');
          }
        })
        .catch((error) => {
          console.error('Ürün kaldırılırken bir hata oluştu:', error);
        });
    }
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (const item of cartItems) {
      totalPrice += item.unitPrice * item.quantity;
    }
    return totalPrice;
  };

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <div>
          <ChakraButton
            colorScheme="red"
            size="sm"
            onClick={handleClearCart}
          >
            Clear Cart
          </ChakraButton>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                Product Name: {item.productName}, Quantity: {item.quantity}, Price: ${item.unitPrice}, ID: {item.productId}
                <ChakraButton
                  colorScheme="red"
                  size="sm"
                  onClick={() => handleRemoveProduct(item.productId)}
                >
                  Remove Product
                </ChakraButton>
              </li>
            ))}
          </ul>
          <p>Total Price: ${calculateTotalPrice()}</p>
        </div>
      )}
    </div>
  );
};

export default CartContainer;
