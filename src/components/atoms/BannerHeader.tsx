import React, { useState, useEffect } from "react";
import "./BannerHeaderStyle.css"; // CSS dosyasını içe aktar

import bannerImage1 from "../../images/chaibottle1.png";
import bannerImage2 from "../../images/changbeer.png";

const images = [bannerImage1, bannerImage2];

const BannerHeader: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

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
