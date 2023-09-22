import { useState } from "react";
import { ProductDto } from "../redux/types";

const useFilter = (data: ProductDto[]) => {
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [sort, setSort] = useState("");

  const handleCategoryChange = (category: string) => {
    setCategory(category);
  };

  const handlePriceRangeChange = (priceRange: string) => {
    setPriceRange(priceRange);
  };

  const handleSortChange = (sort: string) => {
    setSort(sort);
  };

  const filteredData = data
    .filter((product: ProductDto) => {
      if (category === "") {
        return true;
      } else {
        return product.categoryName === category;
      }
    })
    .filter((product: ProductDto) => {
      if (priceRange === "") {
        return true;
      } else {
        const [minPrice, maxPrice] = priceRange.split("-");
        return (
          product.unitPrice >= parseFloat(minPrice) &&
          product.unitPrice <= parseFloat(maxPrice)
        );
      }
    })
    .sort((a: ProductDto, b: ProductDto) => {
      if (sort === "asc") {
        return a.unitPrice - b.unitPrice;
      } else if (sort === "desc") {
        return b.unitPrice - a.unitPrice;
      } else {
        return 0;
      }
    });

  return {
    filteredData,
    category,
    priceRange,
    sort,
    handleCategoryChange,
    handlePriceRangeChange,
    handleSortChange,
  };
};

export default useFilter;
