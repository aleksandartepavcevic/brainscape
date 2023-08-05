import { ButtonVariants } from "../Button/Button.styles";
import { LoadingSpinnerVariants } from "./LoadingSpinner.styles";

export interface LoadingSpinnerProps
  extends Omit<React.HtmlHTMLAttributes<HTMLDivElement>, "color">,
    LoadingSpinnerVariants {
  variant?: ButtonVariants["variant"];
  text?: string;
}
