import React, { useEffect, useState } from 'react';
import { getCartItemsByUserId } from '../hooks/displayCart';
import { deleteCartByUserId } from '../hooks/deleteCart';
import useRemoveCart from '../hooks/removeProductFromCart';
import { Button as ChakraButton } from '@chakra-ui/react'; 
import DisplayCartCard from '../components/molecules/DisplayCartCard';
import './CartContainerStyle.css';

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
    <div className="cart-container">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <div>
         
          <div className="cart-items">
            {cartItems.map((item) => (
              <DisplayCartCard
                
                key={item.productId}
                productName={item.productName}
                quantity={item.quantity}
                unitPrice={item.unitPrice}
                productId={item.productId}
                onRemoveProduct={handleRemoveProduct}
              />
            ))}
          </div>
          <p className="total-price">Total Price: ${calculateTotalPrice()}</p>
          <button
            className="clear-cart-button"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
  
};

export default CartContainer;
