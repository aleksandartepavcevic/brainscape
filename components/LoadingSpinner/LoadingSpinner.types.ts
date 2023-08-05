import { VariantProps } from "class-variance-authority";
import { ButtonVariants } from "../Button/Button.types";
import { loadingSpinner } from "./LoadingSpinner.styles";

export interface LoadingSpinnerVariants
  extends VariantProps<typeof loadingSpinner> {}
export interface LoadingSpinnerProps
  extends Omit<React.HtmlHTMLAttributes<HTMLDivElement>, "color">,
    LoadingSpinnerVariants {
  variant?: ButtonVariants["variant"];
  text?: string;
}
