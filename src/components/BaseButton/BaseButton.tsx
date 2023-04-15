import React from "react";
import "./BaseButton.scss";

const BaseButton = ({
  className = "",
  children,
  ...props
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => {
  return (
    <button {...props} className={`base-button ${className}`}>
      {children}
    </button>
  );
};

export default BaseButton;
