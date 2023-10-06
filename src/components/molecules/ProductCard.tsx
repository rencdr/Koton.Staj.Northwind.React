import React from "react";
import { Box, Button, Card, CardBody, CardHeader, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import useAddToCart from "../../hooks/addToCart";
import { Product } from "../../redux/types";
import "./ProductCardStyle.css";

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart, notification, clearNotification, userId } = useAddToCart();

  const handleAddToCart = () => {
    addToCart(product.productName, product.productID);
    setTimeout(clearNotification, 2000);
  };

  return (
    <Card  variant="outline"  zIndex={0}>
      <CardHeader>
        <Image className="img-fixed-size" src={`data:image/jpeg;base64,${product.images}`} />
        <Heading className="product-text" size='md' mt={2}>{product.productName}  </Heading>
      </CardHeader>
      <CardBody>
        {/* <Text className="product-text">Category: {product.categoryName}</Text> */}
        <Text className="product-text">Price: ${product.unitPrice}</Text>
        {/* <Text className="product-text">Description: {product.description}</Text> */}
        <Button className="black-button" onClick={handleAddToCart} >Add to Cart</Button>
        {notification && (
         <p className="notification">{`${userId}: ${notification}`}</p>
       )}
      
      </CardBody>
    </Card>
  );
};

export default ProductCard;
