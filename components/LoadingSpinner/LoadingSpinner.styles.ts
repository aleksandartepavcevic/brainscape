import { cva } from "class-variance-authority";

export const loadingSpinnerStyles = cva(["animate-spin", "text-black"], {
  variants: {
    size: {
      small: ["h-3", "w-3"],
      medium: ["h-6", "w-6"],
      large: ["h-9", "h-9"],
    },
  },
  defaultVariants: {
    size: "medium",
  },
});
