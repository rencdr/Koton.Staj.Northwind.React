import React from 'react';
import { Button, Card, CardBody, Input } from '@chakra-ui/react';
import { useAuthentication } from '../../hooks/useAuthentication';
import './AuthenticationCardStyle.css';

interface AuthenticationCardProps {
  isAuthenticated: boolean;
  onLogin: () => void;
  onLogout: () => void;
  onRegister: () => void;
  className: string; // className özelliğini alın
}

const AuthenticationCard: React.FC<AuthenticationCardProps> = ({
  isAuthenticated,
  onLogin,
  onLogout,
  onRegister,
  className, // className özelliğini alın
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
    <Card className={className} variant="outline" p={4} borderWidth="1px" borderColor="gray.200" borderRadius="md" maxW="sm">
      <CardBody>
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
              mb={2}
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              mb={2}
            />
            <Button colorScheme="black" onClick={onLogin} mb={2}>
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
      </CardBody>
    </Card>
  );
};

export default AuthenticationCard;
