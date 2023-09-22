// src/pages/HomePage.tsx

import React from 'react';
import useData from '../hooks/getData';
import ProductContainer from '../containers/ProductContainer';


const HomePage: React.FC = () => {
  const { data, loading, error } = useData();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      {/* <h1> Home [ÜRÜNLER]</h1> */}
      <ProductContainer />
    </div>

  );
};

export default HomePage;
