// CreateOrderCard.tsx
import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import './CreateOrderCardStyle.css'; // Stil dosyasını içe aktarın

interface CreateOrderCardProps {
  onCreateOrder: (userAddress: string, userPhoneNumber: string) => void;
}

const CreateOrderCard: React.FC<CreateOrderCardProps> = ({ onCreateOrder }) => {
  const [userAddress, setUserAddress] = useState('');
  const [userPhoneNumber, setUserPhoneNumber] = useState('');
  const [notification, setNotification] = useState('');

  const handleOrderSubmit = () => {
    if (userAddress && userPhoneNumber) {
      onCreateOrder(userAddress, userPhoneNumber); 
      setUserAddress('');
      setUserPhoneNumber('');
      setNotification('Order Created'); 

    } else {
      setNotification('Order could not be created'); 
    }
  };

  return (
    <div className="create-order-card">
      {/* <h2>Create Order</h2> */}
      <div>
        <label>Address:</label>
        <input
          type="text"
          value={userAddress}
          onChange={(e) => setUserAddress(e.target.value)}
        />
      </div>
      <div>
        <label>Phone Number:</label>
        <input
          type="text"
          value={userPhoneNumber}
          onChange={(e) => setUserPhoneNumber(e.target.value)}
        />
      </div>

      <Box
        as="button"
        bg="black"
        color="white"
        px={4}
        py={2}
        borderRadius="md"
        _hover={{ bg: 'gray.800' }}
        onClick={handleOrderSubmit}
      >
        Create Order
      </Box>
    </div>
  );
};

export default CreateOrderCard;
