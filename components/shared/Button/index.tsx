import { SerializedStyles } from "@emotion/react";
import React from "react";
import { button, getButtonStyles } from "./style";

export type ButtonTypes = "primary" | "default" | "ghost";

interface ButtonProps {
  type: ButtonTypes;
  style?: SerializedStyles;
  children: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, type, style, onClick }) => {
  return (
    <button css={[button, getButtonStyles(type), style]} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
