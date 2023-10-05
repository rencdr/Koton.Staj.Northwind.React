import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import useAddToCart from "../../hooks/addToCart";
import { Product } from "../../redux/types";
import "./ProductCardStyle.css";
import { useAuthentication } from "../../hooks/useAuthentication";

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart, notification, clearNotification, userId, quantity, increaseQuantity, decreaseQuantity } = useAddToCart();

  const handleAddToCart = () => {
    addToCart(product.productName, product.productID, quantity);
    setTimeout(clearNotification, 2000);
  };

  return (
    <div className="product-card">
      <img
        className="img-fixed-size"
        src={`data:image/jpeg;base64,${product.images}`}
        alt={product.productName}
      />

      <h2>{product.productName}</h2>
      <p>Category: {product.categoryName}</p>
      <p>Price: ${product.unitPrice}</p>
      <p>Description: {product.description}</p>

      <Flex alignItems="center">
        <Box
          
          onClick={handleAddToCart}
          className="black-button"
          
        >
          Add to Cart
        </Box>

        <button className="quantity-button" onClick={increaseQuantity}>+</button>
        <span className="quantity-span">{quantity}</span>
        <button className="quantity-button" onClick={decreaseQuantity}>-</button>
      </Flex>

      {notification && (
        <p className="notification">{`${userId}: ${notification}`}</p>
      )}
    </div>
  );
};

export default ProductCard;
