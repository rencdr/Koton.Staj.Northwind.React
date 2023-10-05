import React, { useEffect, useState } from 'react';
import getOrder from '../hooks/getOrder';
import useCancelOrder from '../hooks/cancelOrder';
import { Button as ChakraButton } from '@chakra-ui/react'; 
import DisplayOrderCard from "../components/molecules/DisplayOrderCard";

interface Order {
  orderId: number;
  productId: number;
  quantity: number;
  userAddress: string;
  userPhoneNumber: string;
  orderDate: string;
}

const DisplayOrderContainer = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [userId, setUserId] = useState<string | null>(null);
  const { cancelOrder } = useCancelOrder();

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  useEffect(() => {
    if (userId) {
      fetchOrders();
    }
  }, [userId]);

  const fetchOrders = async () => {
    try {
      const ordersData = await getOrder(userId!); 
      setOrders(ordersData);
    } catch (error) {
      console.error('Siparişleri alma sırasında bir hata oluştu:', error);
    }
  };

  const handleCancelOrder = async (orderId: number) => {
    try {
      const response = await cancelOrder(orderId);
      if (response.success) {
        fetchOrders();
        console.log('Sipariş iptal edildi.');
      } else {
        console.error('Sipariş iptal edilemedi.');
      }
    } catch (error) {
      console.error('Sipariş iptal edilirken bir hata oluştu:', error);
    }
  };

  return (
    <div>
      <h2>Orders List</h2>
      {orders && orders.map((order) => (
        <DisplayOrderCard
          key={order.orderId}
          order={order}
          onCancelOrder={handleCancelOrder}
        />
      ))}
    </div>
  );
};

export default DisplayOrderContainer;