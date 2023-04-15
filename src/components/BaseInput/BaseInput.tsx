import React from "react";
import "./BaseInput.scss";

interface BaseInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  innerRef: React.LegacyRef<HTMLInputElement>;
}

const BaseInput = ({ className = "", innerRef, ...props }: BaseInputProps) => {
  return (
    <input {...props} className={`base-input ${className}`} ref={innerRef} />
  );
};

export default BaseInput;
