import React from "react";

interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  children: React.ReactNode;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  className,
  children,
  fullWidth = false,
  ...restProps
}) => {
  const baseClasses =
    "bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500";
  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${baseClasses} ${widthClass}  ${className}`}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
