import { type ButtonProps } from "../../interfaces";
import React from 'react';

const sizeClasses: Record<string, string> = {
  small: 'px-2 py-1 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-6 py-3 text-lg',
};
const Button: React.FC<ButtonProps> = ({
  size = 'medium',
  shape = 'rounded-md',
  label,
  onClick,
  className = '',
}) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 text-white ${sizeClasses[size]} ${shape} hover:bg-blue-600 transition duration-200 ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
