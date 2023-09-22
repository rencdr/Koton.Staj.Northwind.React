// atoms/Button.tsx

import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className="button">
      {label}
    </button>
  );
};

export default Button;
