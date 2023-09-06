import React from 'react';

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, disabled = false, children }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-red-500 rounded-full text-white py-36 px-36  relative flex items-center justify-center ${disabled ? 'bg-blue-500' : 'cursor-pointer hover:bg-red-600'}`}>
      {children}
    </button>
  );
};

export default Button;