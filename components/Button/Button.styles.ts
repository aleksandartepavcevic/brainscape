import { cva } from "class-variance-authority";

export const buttonStyles = cva(
  [
    "flex",
    "items-center",
    "justify-center",
    "focus:outline-focus",
    "rounded-lg",
    "transition-all",
    "duration-300",
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
    },
    defaultVariants: {
      variant: "contained",
      size: "medium",
    },
  }
);
