import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Image } from '@chakra-ui/react';
import carticon from '../../icons/carticon.png';
import authicon from '../../icons/authicon.png';
import northlogofast from '../../icons/logoNorth.png';
import './NavbarStyle.css'; 
import ChatBotContainer from '../../containers/ChatBotContainer';
const Navbar: React.FC = () => {
  return (
    <Flex as="nav" align="center" justify="space-between" p="4" borderBottom="1px solid #ccc" className="navbar" zIndex={1}>
      <Breadcrumb separator="|">
        <BreadcrumbItem>
          <Link to="/" className="navbar-link">
            <BreadcrumbLink>
              <img src={northlogofast} alt="Northwind Traders" width="200px" height="auto" />
            </BreadcrumbLink>
          </Link>
        </BreadcrumbItem>

        <BreadcrumbItem>
        <Link to="/explore" className="navbar-link navbar-link-explore">
            <BreadcrumbLink>Explore</BreadcrumbLink>
          </Link>
        </BreadcrumbItem>
      </Breadcrumb>

      <div className="chatbot">
          <ChatBotContainer />
        </div>

      <Flex align="center">
        <Link to="/cart" className="cart-image">
          <Image src={carticon} alt="Cart" width="40px" height="40px"/>
        </Link>
        <Link to="/login" className="auth-image">
          <Image src={authicon} alt="Login" width="40px" height="40px" />
        </Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;
