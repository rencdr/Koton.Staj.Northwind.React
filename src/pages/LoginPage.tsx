import React from 'react';
import AuthenticationContainer from '../containers/AuthenticationContainer';


const LoginPage: React.FC = () => {
  return (
    <div>
      <h1>Login [GİRİŞ YAP / KAYIT OL]</h1>
      <AuthenticationContainer /> {/* Giriş formu */}
    </div>
  );
};

export default LoginPage;
