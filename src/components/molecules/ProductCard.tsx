import React from "react";
import { Box } from "@chakra-ui/react";
import useAddToCart from "../../hooks/addToCart";
import { Product } from "../../redux/types";
import "./ProductCardStyle.css";
import { useAuthentication } from "../../hooks/useAuthentication";

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart, notification, clearNotification, userId } = useAddToCart();

  const handleAddToCart = () => {
    addToCart(product.productName, product.productID);
    setTimeout(clearNotification, 2000);
  };

  return (
    <div className="product-card">
      <img className="img-fixed-size"
      src={`data:image/jpeg;base64,${product.images}`}
      alt={product.productName}
      />


      <h2>{product.productName}</h2>
      <p>Category: {product.categoryName}</p>
      <p>Price: ${product.unitPrice}</p>
      <p>Description: {product.description}</p>

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
