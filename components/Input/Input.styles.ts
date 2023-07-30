import { cva } from "class-variance-authority";

export const inputStyles = cva(
  [
    "w-full",
    "px-3",
    "py-3",
    "rounded-lg",
    "border",
    "border-black/10",
    "bg-gray-300/10",
    "font-light",
    "text-black",
    "text-md",
    "outline-0",
    "focus:border-sky-500",
    "focus:outline-focus",
    "transition-all",
    "duration-300",
  ],
  {
    variants: {
      error: {
        true: ["border-red-600", "focus:border-red-600"],
      },
    },
  }
);
