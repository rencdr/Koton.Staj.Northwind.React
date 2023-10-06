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
      <div className="create-order-card-content"> {/* content sınıfını ekleyin */}
        <label>Address:</label>
        <input
          type="text"
          value={userAddress}
          onChange={(e) => setUserAddress(e.target.value)}
          className="create-order-card-input" 
        />
      </div>
      <div className="create-order-card-content"> 
        <label>Phone Number:</label>
        <input
          type="text"
          value={userPhoneNumber}
          onChange={(e) => setUserPhoneNumber(e.target.value)}
          className="create-order-card-input" 
        />
      </div>
      <button className='create-order-card button' onClick={handleOrderSubmit}>Create Order</button>
  
      
    </div>
  );
  
};

export default CreateOrderCard;