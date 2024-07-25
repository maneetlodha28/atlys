import React, { LabelHTMLAttributes } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
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
    <div className={`flex justify-between items-center w-full ${className}`}>
      <label htmlFor={htmlFor} className="text-sm text-primary">
        {text}
      </label>
      {additionalElement}
    </div>
  );
};

export default Label;
