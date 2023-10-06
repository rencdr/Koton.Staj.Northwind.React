import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAuthentication } from '../hooks/useAuthentication';
import { Button } from '@chakra-ui/react'; 
import Input from '../components/atoms/Input';
import { login, logout } from '../redux/actions/AuthActions';
import { RootState } from '../redux/store';
import './AuthenticationContainerStyle.css';

const AuthenticationContainer: React.FC = () => {
  const {
    username,
    setUsername,
    password,
    setPassword,
    loading,
    error,
    successMessage,
    authenticate,
    register,
    userId,
  } = useAuthentication();

  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogin = () => {
    const actualUserId = userId || '';
    dispatch(login({ userId: actualUserId, username, password }));
    authenticate();
  };

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('userId');
  };

  return (
    <div className="authentication-container">
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
          <Button colorScheme="black" onClick={handleLogin}>
            Sign In
          </Button>
          <Button colorScheme="black" onClick={register}>
            Sign Up
          </Button>
        </>
      )}
      {isAuthenticated && (
        <Button colorScheme="black" onClick={handleLogout}>
          Sign Out
        </Button>
      )}
      {loading && <p>Logging in...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default AuthenticationContainer;
