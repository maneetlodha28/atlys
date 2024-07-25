import React, { InputHTMLAttributes, useState } from "react";
import { ReactComponent as EyeIcon } from "src/assets/icons/eye.svg";
interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  type: string;
  value?: string;
  placeholder: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Field: React.FC<FieldProps> = ({
  id,
  type,
  value,
  placeholder,
  className,
  onChange,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="relative">
      <input
        type={type === "password" && showPassword ? "text" : type}
        id={id}
        value={value}
        onChange={onChange}
        className={`w-full bg-primary px-3 py-2 text-white ${className}`}
        placeholder={placeholder}
      />
      {type === "password" && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400"
        >
          <EyeIcon className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};

export default Field;
