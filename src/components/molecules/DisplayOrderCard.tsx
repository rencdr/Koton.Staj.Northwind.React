// DisplayOrderCard.tsx

import React from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';
import './DisplayOrderCardStyle.css'; 

interface Order {
  orderId: number;
  productId: number;
  quantity: number;
  userAddress: string;
  userPhoneNumber: string;
  orderDate: string;
}

interface DisplayOrderCardProps {
  order: Order;
  onCancelOrder: (orderId: number) => void;
}

const DisplayOrderCard: React.FC<DisplayOrderCardProps> = ({ order, onCancelOrder }) => {
  return (
    <div className="order-card">
      <p>Order ID: {order.orderId}</p>
      <p>Product ID: {order.productId}</p>
      <p>Quantity: {order.quantity}</p>
      <p>Address: {order.userAddress}</p>
      <p>Phone Number: {order.userPhoneNumber}</p>
      <p>Order Date: {order.orderDate}</p>
      
      {/* Siyah Chakra UI düğmesi */}
      <ChakraButton
        colorScheme="black"
        onClick={() => onCancelOrder(order.orderId)}
      >
        Cancel Order
      </ChakraButton>
    </div>
  );
};

export default DisplayOrderCard;
