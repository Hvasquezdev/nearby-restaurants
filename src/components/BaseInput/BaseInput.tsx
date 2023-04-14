import React from "react";
import "./BaseInput.scss";

const BaseInput = ({
  className = '',
  ...props
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) => {
  return <input className={`base-input ${className}`} {...props} />;
};

export default BaseInput;
