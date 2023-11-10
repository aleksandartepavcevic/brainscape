import React from "react";
import { LoadingSpinnerProps } from "./LoadingSpinner.types";
import { loadingSpinnerStyles } from "./LoadingSpinner.styles";

export const LoadingSpinner = ({
  className,
  text,
  variant,
}: LoadingSpinnerProps) => {
  const color = variant === "contained" ? "white" : "black";

  return (
    <div className="flex items-center gap-2">
      <div
        className={loadingSpinnerStyles(
          {
            color,
          },
          className
        )}
        role="status"
      />
      {text && <p>{text}</p>}
    </div>
  );
};
