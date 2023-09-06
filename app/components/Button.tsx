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
      className="bg-red-500 rounded-full text-white py-36 px-36 hover:bg-red-600 cursor-pointer relative flex items-center justify-center">
      {children}
    </button>
  );
};

export default Button;