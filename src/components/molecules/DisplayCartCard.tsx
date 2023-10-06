import React from 'react';
import { Box, Button, Image } from '@chakra-ui/react';
import './DisplayCartCardStyle.css'; 

interface DisplayCartCardProps {
  productName: string;
  quantity: number;
  unitPrice: number;
  productId: number;
  images: string; // Görsel veriyi içeren bir images prop'u ekleyin
  onRemoveProduct: (productId: number) => void;
}

const DisplayCartCard: React.FC<DisplayCartCardProps> = ({
  productName,
  quantity,
  unitPrice,
  productId,
  images, // Görsel veriyi images prop'u olarak alın
  onRemoveProduct,
}) => {
  const totalPrice = unitPrice * quantity;

  return (
    <div className="cart-card">
      <Image className="img" src={`data:image/jpeg;base64,${images}`} />
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
