import React from "react";

interface FieldProps {
  id: string;
  type: string;
  value: string;
  placeholder: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Field: React.FC<FieldProps> = ({
  id,
  type,
  value,
  placeholder,
  className,
  onChange,
}) => {
  return (
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      className={`w-full bg-gray-800 rounded px-3 py-2 text-white placeholder-gray-500 ${className}`}
      placeholder={placeholder}
    />
  );
};

export default Field;
