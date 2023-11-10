import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { InputAdornmentVariants } from "./InputAdornment.types";

export const inputAdornment = cva(["flex", "h-fit", "mr-3"]);

export const inputAdornmentStyles = (
  variants?: InputAdornmentVariants,
  className?: string
) => twMerge(inputAdornment({ ...variants, className }));
