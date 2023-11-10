import { VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { ButtonVariants } from "./Button.types";

// TODO: Fix issue with the outline on the safari
// TODO: Fix issue with rounded-full for the icon variant

export const button = cva(
  [
    "flex",
    "items-center",
    "justify-center",
    "focus:outline-focus",
    "outline-sky-500",
    "transition-colors",
    "duration-300",
    "rounded-lg",
  ],
  {
    variants: {
      variant: {
        contained: [
          "bg-sky-500",
          "text-white",
          "focus:bg-sky-700",
          "hover:bg-sky-700",
        ],
        outlined: [
          "bg-transparent",
          "ring-1",
          "ring-gray-300",
          "hover:ring-sky-700",
        ],
        icon: ["rounded-full"],
      },
      size: {
        small: ["p-1", "text-sm"],
        medium: ["p-3", "text-md"],
        large: ["p-5", "text-lg"],
      },
      disabled: {
        true: [
          "bg-gray-500",
          "focus:bg-gray-500",
          "hover:bg-gray-500",
          "cursor-not-allowed",
        ],
      },
    },
    defaultVariants: {
      variant: "contained",
      size: "medium",
      disabled: false,
    },
  }
);

export const buttonStyles = (variants: ButtonVariants, className?: string) =>
  twMerge(button({ ...variants, className }));
