import { VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const loadingSpinner = cva(
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

export interface LoadingSpinnerVariants
  extends VariantProps<typeof loadingSpinner> {}

export const loadingSpinnerStyles = (
  variants: LoadingSpinnerVariants,
  className?: string
) => twMerge(loadingSpinner({ ...variants, className }));
