// AuthenticationCard.tsx

import React from 'react';
import { Button } from '@chakra-ui/react'; 
import Input from '../atoms/Input';
import { useAuthentication } from '../../hooks/useAuthentication';
import './AuthenticationCardStyle.css'; 

interface AuthenticationCardProps {
  isAuthenticated: boolean;
  onLogin: () => void;
  onLogout: () => void;
  onRegister: () => void;
}

const AuthenticationCard: React.FC<AuthenticationCardProps> = ({
  isAuthenticated,
  onLogin,
  onLogout,
  onRegister,
}) => {
  const {
    username,
    setUsername,
    password,
    setPassword,
    loading,
    error,
    successMessage,
    userId,
  } = useAuthentication();

  return (
    <div className="authentication-card">
      <h2>Authentication</h2>
      {successMessage && (
        <p style={{ color: 'green' }}>Welcome {userId}!</p>
      )}
      {!isAuthenticated && (
        <>
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button colorScheme="black" onClick={onLogin}>
            Sign In
          </Button>
          <Button colorScheme="black" onClick={onRegister}>
            Sign Up
          </Button>
        </>
      )}
      {isAuthenticated && (
        <Button colorScheme="black" onClick={onLogout}>
          Sign Out
        </Button>
      )}
      {loading && <p>Logging in...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default AuthenticationCard;
