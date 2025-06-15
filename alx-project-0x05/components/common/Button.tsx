import React from "react";

interface ButtonProps {
  buttonLabel: string;
  buttonBackgroundColor?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  buttonLabel,
  buttonBackgroundColor = "blue",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded text-white font-medium bg-${buttonBackgroundColor}-500 hover:bg-${buttonBackgroundColor}-600 transition`}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;
