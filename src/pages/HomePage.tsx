import React from 'react';
import useData from '../hooks/getData';
import BannerHeader from ".././components/atoms/BannerHeader";
import HomeProductContainer from "../containers/HomeProductContainer";
import './HomePageStyle.css'; // Yeni stil dosyasını içe aktar

const HomePage: React.FC = () => {
  
  return (
    <div className="home-page-container">
      <BannerHeader />
      <div className="our-products-container">
        <h2>Our Products</h2>
        <HomeProductContainer />
      </div>
      <div className="for-more-container">
        <a href="/explore">For More</a>
      </div>
    </div>
  );
};

export default HomePage;
