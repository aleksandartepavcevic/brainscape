import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { InputAdornmentVariants } from "./InputAdornment.types";

export const inputAdornment = cva(
  // ["absolute", "z-3", "flex", "h-fit", "inset-y-1/2", "-translate-y-[50%]"],
  [],
  {
    variants: {
      position: {
        start: ["start-2.5"],
        end: ["end-2.5"],
      },
    },
    defaultVariants: {
      position: "end",
    },
  }
);

export const inputAdornmentStyles = (
  variants?: InputAdornmentVariants,
  className?: string
) => twMerge(inputAdornment({ ...variants, className }));
