import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarStyle.css'; 

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/explore">Explore</Link>
        </li>
        <li className="navbar-item">
          <div className="search-bar">
            <input type="text" placeholder="Search" />
            <button>Search</button>
          </div>
        </li>
        <li className="navbar-item">
          <Link to="/cart">Cart</Link>
        </li>
        <li className="navbar-item">
          <Link to="/login">Login</Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
