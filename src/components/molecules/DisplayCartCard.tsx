import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import './DisplayCartCardStyle.css'; 
interface DisplayCartCardProps {
  productName: string;
  quantity: number;
  unitPrice: number;
  productId: number;
  onRemoveProduct: (productId: number) => void;
}

const DisplayCartCard: React.FC<DisplayCartCardProps> = ({
  productName,
  quantity,
  unitPrice,
  productId,
  onRemoveProduct,
}) => {
  const totalPrice = unitPrice * quantity;

  return (
    <div className="cart-card">
      <h3>{productName}</h3>
      <p>Quantity: {quantity}</p>
      <p>Price: ${unitPrice}</p>
      <p>Total Price: ${totalPrice}</p>
      <Button
        colorScheme="red"
        size="sm"
        onClick={() => onRemoveProduct(productId)}
      >
        Remove Product
      </Button>
    </div>
  );
};

export default DisplayCartCard;
