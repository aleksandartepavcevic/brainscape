import React from "react";
import LoadingSpinner from "../LoadingSpinner";
import { ButtonProps } from "./Button.types";
import { buttonStyles } from "./Button.styles";

export const Button = ({
  children,
  className,
  disabled,
  variant,
  size,
  loading,
  loadingText,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={buttonStyles({ variant, size, disabled }, className)}
      disabled={disabled}
      {...rest}
    >
      {loading && <LoadingSpinner text={loadingText} variant={variant} />}
      {!loading && children}
    </button>
  );
};
