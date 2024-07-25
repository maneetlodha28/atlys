import React, { ButtonHTMLAttributes } from "react";
import "./styles.css";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  children: React.ReactNode;
  fullWidth?: boolean;
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  className,
  children,
  variant = "primary",
  fullWidth = false,
  ...restProps
}) => {
  const getButtonBaseClasses = () => {
    switch (variant) {
      case "primary":
        return "btn-primary";
    }
  };
  const baseClasses = getButtonBaseClasses();
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
