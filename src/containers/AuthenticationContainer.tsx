// AuthenticationContainer.tsx
import React from 'react';
import { useAuthentication } from '../hooks/useAuthentication';
import Button from '../components/atoms/Button';
import Input from '../components/atoms/Input';

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
    userId, // uniqueName'i userId olarak kullanın
  } = useAuthentication();

  return (
    <div>
      <h2>Kullanıcı Girişi / Kayıt Olma</h2>
      {successMessage && (
        <p style={{ color: 'green' }}>Hoş geldiniz, {userId}!</p>
      )}
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
      <Button label="Giriş Yap" onClick={authenticate} />
      <Button label="Kayıt Ol" onClick={register} />
      {loading && <p>Giriş yapılıyor...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default AuthenticationContainer;