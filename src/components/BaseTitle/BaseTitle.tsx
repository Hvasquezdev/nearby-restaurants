import React from "react";
import "./BaseTitle.scss";

interface BaseTitleProps {
  children?: string | React.ReactElement;
}

const BaseTitle = ({ children }: BaseTitleProps) => {
  return <h1 className="base-title">{children}</h1>;
};

export default BaseTitle;
