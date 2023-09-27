import { useState } from 'react';
import axios from 'axios';

const AUTHENTICATION_API_URL = 'http://localhost:5221/api/User/authenticate';
const REGISTER_API_URL = 'http://localhost:5221/api/User/register';

export const useAuthentication = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const authenticate = async () => {
    setLoading(true);
    setError(null);

    const response = await axios.post(AUTHENTICATION_API_URL, {
      username,
      password,
    });

    if (response.data.success) {
      setSuccessMessage('Giriş yapıldı.');
      setToken(response.data.data);
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
  };
};
