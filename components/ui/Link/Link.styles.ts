import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { LinkVariants } from "./Link.types";

export const link = cva([
  "font-medium",
  "text-black",
  "focus:outline-focus",
  "rounded-lg",
]);

export const linkStyles = (variants?: LinkVariants, className?: string) =>
  twMerge(link({ ...variants, className }));
