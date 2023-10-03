import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAuthentication } from '../hooks/useAuthentication';
import { Button } from '@chakra-ui/react'; // Chakra UI'den Button bileşenini içe aktarın
import Input from '../components/atoms/Input';
import { login, logout } from '../redux/actions/AuthActions';
import { RootState } from '../redux/store';

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
    <div>
      <h2>Kullanıcı Girişi / Kayıt Olma</h2>
      {successMessage && (
        <p style={{ color: 'green' }}>Hoş geldiniz, {userId}!</p>
      )}
      {!isAuthenticated && (
        <>
          <Input
            type="text"
            placeholder="Kullanıcı Adı"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Şifre"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button colorScheme="black" onClick={handleLogin}>
            Giriş Yap
          </Button>
          <Button colorScheme="black" onClick={register}>
            Kayıt Ol
          </Button>
        </>
      )}
      {isAuthenticated && (
        <Button colorScheme="black" onClick={handleLogout}>
          Çıkış
        </Button>
      )}
      {loading && <p>Giriş yapılıyor...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default AuthenticationContainer;
