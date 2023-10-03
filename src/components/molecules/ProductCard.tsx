import React from "react";
import { Box } from "@chakra-ui/react"; // Box komponentini içe aktarın
import useAddToCart from "../../hooks/addToCart";
import { Product } from "../../redux/types";
import "./ProductCardStyle.css"; // CSS dosyasını içe aktar
import { useAuthentication } from "../../hooks/useAuthentication";

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart, notification, clearNotification, userId } = useAddToCart();

  const handleAddToCart = () => {
    addToCart(product.productName, product.productID);
    setTimeout(clearNotification, 2000);
  };

  return (
    <div className="product-card">
      {/* Ürün resmini ekle */}
      {/* <img src={product.imageUrl} alt={product.productName} /> */}

      <h2>{product.productName}</h2>
      <p>Category: {product.categoryName}</p>
      {/* <p>ID: {product.productID}</p> */}
      <p>Price: ${product.unitPrice}</p> {/* Başına dolar işareti ekle */}
      <p>Description: {product.description}</p>

      {/* Box komponentini kullanarak düzeltilmiş buton */}
      <Box
        as="button"
        bg="black"
        color="white"
        px={4}
        py={2}
        borderRadius="md"
        _hover={{ bg: "gray.800" }}
        onClick={handleAddToCart}
        className="black-button"
      >
        Add to Cart
      </Box>

      {notification && <p className="notification">{`${userId}: ${notification}`}</p>}
    </div>
  );
};

export default ProductCard;
