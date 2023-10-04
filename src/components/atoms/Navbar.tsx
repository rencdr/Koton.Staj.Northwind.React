import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Button, Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, Image } from '@chakra-ui/react';
import carticon from '../../icons/carticon.png';
import authicon from '../../icons/authicon.png';
import northlogofast from '../../icons/logoNorth.png'
const Navbar: React.FC = () => {
  const linkStyle = {
    textDecoration: 'none',
    fontWeight: 'bold',
    color: 'black',
  };

  return (
    <Flex as="nav" align="center" justify="space-between" p="4" borderBottom="1px solid #ccc" background-color="#f8bb4b" >
      <Breadcrumb separator="|">
        <BreadcrumbItem>
          <Link to="/" style={linkStyle}>
            <BreadcrumbLink>Home</BreadcrumbLink>
          </Link>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <Link to="/explore" style={linkStyle}>
            <BreadcrumbLink>Explore</BreadcrumbLink>
          </Link>
        </BreadcrumbItem>
      </Breadcrumb>

      {/* Resmi burada görüntüleyin */}
      <Image src={northlogofast} alt="Northwind Traders" width="300px" height="auto" />

      <Flex align="center">
        <Link to="/cart" style={{ marginRight: '30px' }}>
          <Image src={carticon} alt="Cart" width="34px" height="34px" />
        </Link>
        <Link to="/login" style={{ marginRight: '30px' }}>
          <Image src={authicon} alt="Login" width="34px" height="34px" />
        </Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;
