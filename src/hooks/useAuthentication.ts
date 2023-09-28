// useAuthentication.ts

import { useState } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

const AUTHENTICATION_API_URL = 'http://localhost:5221/api/User/authenticate';
const REGISTER_API_URL = 'http://localhost:5221/api/User/register';

export const useAuthentication = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null); // uniqueName'i userId olarak değiştirin

  const authenticate = async () => {
    setLoading(true);
    setError(null);

    const response = await axios.post(AUTHENTICATION_API_URL, {
      username,
      password,
    });

    if (response.data.success) {
      setSuccessMessage('Giriş yapıldı.');
      const receivedToken = response.data.data;
  
      // Tokeni decode et ve unique name'i `userId` değişkenine kaydet.
      const decodedToken = jwtDecode(receivedToken) as { unique_name: string } | null;
      if (decodedToken && decodedToken.unique_name) {
        setUserId(decodedToken.unique_name); // uniqueName'i userId olarak değiştirin
        // userId'yi localStorage'a kaydet
        localStorage.setItem('userId', decodedToken.unique_name);
      }
  
      setToken(receivedToken);
    } else {
      setError('Kullanıcı adı veya şifre yanlış.');
    }
  
    setLoading(false);
  };
  const getToken = () => {
    return token;
  };

  const register = async () => {
    setLoading(true);
    setError(null);

    const response = await axios.post(REGISTER_API_URL, {
      username,
      password,
    });

    if (response.data.success) {
      setSuccessMessage('Kayıt başarıyla oluşturuldu.');
    } else {
      setError('Kayıt olma sırasında bir hata oluştu.');
    }

    setLoading(false);
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    loading,
    error,
    successMessage,
    authenticate,
    register,
    token,
    getToken,
    userId, // uniqueName'i userId olarak değiştirin
  };
};
