import React from "react";
import useData from "../hooks/getData";
import ProductCard from "../components/molecules/ProductCard";
import { Product } from '../redux/types';
import "./ProductContainerStyle.css"; // CSS dosyasını içe aktar

const ProductContainer = () => {
  const { data, loading, error } = useData();

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
        {data.map((product) => (
          <div key={product.id} className="grid-item">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductContainer;
