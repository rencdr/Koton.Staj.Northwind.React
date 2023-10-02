import React, { useEffect, useState } from 'react';
import getOrder from '../hooks/getOrder';
import useCancelOrder from '../hooks/cancelOrder';

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
      <h2>Siparişler</h2>
      <ul>
        {orders && orders.map((order) =>  (
          <li key={order.orderId}>
            <p>Sipariş ID: {order.orderId}</p>
            <p>Ürün ID: {order.productId}</p>
            <p>Miktar: {order.quantity}</p>
            <p>Adres: {order.userAddress}</p>
            <p>Telefon Numarası: {order.userPhoneNumber}</p>
            <p>Sipariş Tarihi: {order.orderDate}</p>
            <button onClick={() => handleCancelOrder(order.orderId)}>Siparişi İptal Et</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayOrderContainer;
