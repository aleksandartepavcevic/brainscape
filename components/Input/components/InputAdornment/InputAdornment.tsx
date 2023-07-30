import { cva } from "class-variance-authority";
import { memo } from "react";
import { InputAdornmentProps } from "./InputAdornment.types";

const inputAdornment = cva(
  ["absolute", "z-3", "flex", "h-fit", "inset-y-1/2", "-translate-y-[50%]"],
  {
    variants: {
      position: {
        start: "",
        end: ["end-2.5"],
      },
    },
    defaultVariants: {
      position: "end",
    },
  }
);

export const InputAdornment = memo(
  ({ position, adornment }: InputAdornmentProps) => {
    return <div className={inputAdornment()}>{adornment}</div>;
  }
);
InputAdornment.displayName = "InputAdornment";
