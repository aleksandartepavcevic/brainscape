import { cva } from "class-variance-authority";

export const loadingSpinnerStyles = cva(["animate-spin", "text-black"], {
  variants: {
    size: {
      small: ["h-3", "w-3"],
      medium: ["h-5", "w-5"],
      large: ["h-7", "h-7"],
    },
  },
  defaultVariants: {
    size: "medium",
  },
});
