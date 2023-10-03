// ChakraUIButton.tsx
import React from "react";
import { Button as ChakraButton } from '@chakra-ui/react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <ChakraButton colorScheme="black" onClick={onClick}>
      {label}
    </ChakraButton>
  );
};

export default Button;
