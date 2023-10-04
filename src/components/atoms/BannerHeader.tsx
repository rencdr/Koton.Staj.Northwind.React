import React, { useState, useEffect } from "react";
import "./BannerHeaderStyle.css"; 

import bannerImage1 from "../../images/BlackF.jpeg";
import bannerImage2 from "../../images/Healthy.jpeg";
import bannerImage3 from "../../images/Christ.jpeg";


const images = [bannerImage1, bannerImage2, bannerImage3];

const BannerHeader: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="banner-header">
      <img src={images[currentImageIndex]} alt="Banner Image" />
    </div>
  );
};

export default BannerHeader;
