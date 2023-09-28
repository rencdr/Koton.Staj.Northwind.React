import React from "react";
import useData from "../hooks/getData";
import ProductCard from "../components/molecules/ProductCard";
import { Product } from '../redux/types';
import "./ProductContainerStyle.css"; 

const HomeProductContainer = () => {
  const { data, loading, error } = useData();

  const randomProducts = () => {
    if (data && data.length > 6) {
      // Rastgele 6 ürün seç
      return data.sort(() => Math.random() - 0.5).slice(0, 6);
    } else {
      return data;
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (data === null) {
    return <p>No products found</p>;
  }

  return (
    <div>
      {/* <h1>Ürünler</h1> */}
      <div className="grid">
        {randomProducts().map((product) => (
          <div key={product.productID} className="grid-item">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeProductContainer;
