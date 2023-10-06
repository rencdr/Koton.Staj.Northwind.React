import {
    Box,
    Heading,
    Stack,
    Button,
    Text,
    HStack,
    Flex,
    useColorModeValue as mode,
  } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { getCartItemsByUserId } from '../hooks/displayCart';
import { deleteCartByUserId } from '../hooks/deleteCart';
import useRemoveCart from '../hooks/removeProductFromCart';
import { Button as ChakraButton } from '@chakra-ui/react';
import DisplayCartCard from '../components/molecules/DisplayCartCard';
import CreateOrderCard from '../components/molecules/CreateOrderCard';
import useCreateOrderHook from '../hooks/createOrder';

const CartContainer: React.FC = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const userId = localStorage.getItem('userId');
  const productID = 'ürününKimliği';
  const [notification, setNotification] = useState({ message: '', isError: false });

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

  const { createOrder } = useCreateOrderHook();

  const handleOrderSubmit = async (address: string, phoneNumber: string) => {
    if (userId && address && phoneNumber) {
      try {
        const response = await createOrder(userId, address, phoneNumber);
  
        if (response.success) {
          const orderId = response.data;
          localStorage.setItem('orderId', orderId);
          setNotification({ message: 'Order has been created successfully', isError: false });
  
          console.log('Sipariş başarıyla oluşturuldu.');
        } else {
          setNotification({ message: 'Order creation failed', isError: true });
          console.error('Sipariş oluşturulamadı.');
        }
      } catch (error) {
        setNotification({ message: 'An error occurred while creating the order', isError: true });
        console.error('Sipariş oluşturulurken bir hata oluştu:', error);
      }
    } else {
      setNotification({ message: 'Please fill in all fields', isError: true });
      console.error('Lütfen tüm alanları doldurun.');
    }
  };
  

  return (
    <Box
      className="cart-container"
      maxW={{ base: '3xl', lg: '7xl' }}
      mx="auto"
      px={{ base: '4', md: '8', lg: '12' }}
      py={{ base: '6', md: '8', lg: '12' }}
    >
      <Flex
        direction={{ base: 'column', lg: 'row' }}
      >
        <Box flex="2">
          <Heading fontSize="2xl" fontWeight="extrabold" mb="8">
            Cart
          </Heading>
          {cartItems.length === 0 ? (
            <Text fontSize="lg" color={mode('gray.600', 'gray.400')} mt="4">
              Cart is empty.
            </Text>
          ) : (
            <Stack spacing="8" mt="4">
              {cartItems.map((item) => (
                <DisplayCartCard
                  images={item.images}
                  key={item.productId}
                  productName={item.productName}
                  quantity={item.quantity}
                  unitPrice={item.unitPrice}
                  productId={item.productId}
                  onRemoveProduct={handleRemoveProduct}
                />
              ))}
              <Text fontSize="lg" fontWeight="bold" mt="2">
                Total Price: ${calculateTotalPrice()}
              </Text>
              <Button
                className="clear-cart-button"
                colorScheme="red"
                onClick={handleClearCart}
                size="lg"
              >
                Clear Cart
              </Button>
            </Stack>
          )}
        </Box>
        
        <Box flex="1" ml={{ lg: '8' }}>
          <Heading fontSize="2xl" fontWeight="extrabold" mb="8">
            Create Order
          </Heading>
          <CreateOrderCard onCreateOrder={handleOrderSubmit} />
          {notification.message && (
                <div className={`notification ${notification.isError ? 'error' : 'success'}`}>
                 {notification.message}
                 </div>
                )}

        </Box>
      </Flex>
    </Box>
  );
  
  
};

export default CartContainer;
