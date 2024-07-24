import React from "react";

interface LabelProps {
  htmlFor: string;
  text: string;
  className?: string;
  additionalElement?: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({
  htmlFor,
  text,
  className,
  additionalElement,
}) => {
  return (
    <div className={`flex justify-between items-center mb-2 ${className}`}>
      <label htmlFor={htmlFor} className="text-sm">
        {text}
      </label>
      {additionalElement}
    </div>
  );
};

export default Label;
