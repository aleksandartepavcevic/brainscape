import { cva } from "class-variance-authority";

export const loadingSpinnerStyles = cva(
  [
    "inline-block animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]",
  ],
  {
    variants: {
      color: {
        white: ["text-white"],
        black: ["text-black"],
      },
      size: {
        small: ["h-3", "w-3"],
        medium: ["h-6", "w-6"],
        large: ["h-9", "h-9"],
      },
    },
    defaultVariants: {
      color: "black",
      size: "medium",
    },
  }
);
