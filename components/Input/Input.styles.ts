import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { ContainerVariants, InputVariants } from "./Input.types";

export const container = cva(
  [
    "relative",
    "flex",
    "items-center",
    "pr-3",
    "rounded-lg",
    "bg-gray-300/10",
    "border",
    "transition-colors",
    "duration-300",
  ],
  {
    variants: {
      isFocused: {
        true: ["border-sky-600", "focus:border-sky-600"],
        false: ["outline-sky-500"],
      },
      error: {
        true: ["border-red-600", "focus:border-red-600"],
        false: [],
      },
    },
    compoundVariants: [
      {
        isFocused: true,
        error: false,
        className: ["outline-focus"],
      },
      {
        isFocused: true,
        error: true,
        className: ["outline-focus-error"],
      },
    ],
    defaultVariants: {
      isFocused: false,
      error: false,
    },
  }
);

export const input = cva([
  "w-full",
  "pl-3",
  "py-3",
  "font-light",
  "text-black",
  "text-md",
  "bg-transparent",
  "outline-none",
]);

export const inputStyles = (variants?: InputVariants, className?: string) =>
  twMerge(input({ ...variants, className }));

export const containerStyles = (
  variants?: ContainerVariants,
  className?: string
) => twMerge(container({ ...variants, className }));
