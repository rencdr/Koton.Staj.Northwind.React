import React from "react";
import useData from "../hooks/getData";
import useFilter from "../hooks/useFilter";
import ProductCard from "../components/molecules/ProductCard";
import { ProductDto } from "../redux/types";
import "./ProductContainerStyle.css";

const ProductContainer = () => {
  const { data, loading, error } = useData();
  const { filteredData, category, priceRange, sort, handleCategoryChange, handlePriceRangeChange, handleSortChange } = useFilter(data);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (data === null) {
    return <p>No products found</p>;
  }

  const categoryOptions = [
    "Beverages",
    "Condiments",
    "Confections",
    "Dairy Products",
    "Grains/Cereals",
    "Meat/Poultry",
    "Produce",
    "Seafood",
  ];
  const priceRangeOptions = ["0-10 $", "10-20 $", "20-50 $", "50-300 $"];

  return (
    <div>
      <div className="grid">
        <div className="filter-bar">
          <select
            name="category"
            onChange={(e) => handleCategoryChange(e.target.value)}
            value={category}
          >
            <option value="">Tüm Kategoriler</option>
            {categoryOptions.map((categoryOption: string) => (
              <option key={categoryOption} value={categoryOption}>
                {categoryOption}
              </option>
            ))}
          </select>
          <select
            name="priceRange"
            onChange={(e) => handlePriceRangeChange(e.target.value)}
            value={priceRange}
          >
            <option value="">Tüm Fiyat Aralıkları</option>
            {priceRangeOptions.map((priceRangeOption: string) => (
              <option key={priceRangeOption} value={priceRangeOption}>
                {priceRangeOption}
              </option>
            ))}
          </select>
          <select
            name="sort"
            onChange={(e) => handleSortChange(e.target.value)}
            value={sort}
          >
            <option value="">Sıralama</option>
            <option value="asc">Artan Fiyat</option>
            <option value="desc">Azalan Fiyat</option>
          </select>
        </div>
        <div className="products">
          {filteredData.map((product: ProductDto) => (
            <div key={product.productID} className="grid-item">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductContainer;
