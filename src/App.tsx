// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/atoms/Navbar';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
     
        <Route path="/cart">
          <CartPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/" >
          <HomePage />
        </Route>
    </Router>
  );
};

export default App;
