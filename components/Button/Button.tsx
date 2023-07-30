import React from "react";
import { buttonStyles } from "./Button.styles";
import { ButtonProps } from "./Button.types";
import LoadingSpinner from "../LoadingSpinner";

export const Button = ({
  children,
  variant,
  size,
  className,
  loading,
  loadingText,
  ...rest
}: ButtonProps) => {
  return (
    <button className={buttonStyles({ variant, size, className })} {...rest}>
      {loading ? <LoadingSpinner text={loadingText} /> : children}
    </button>
  );
};
