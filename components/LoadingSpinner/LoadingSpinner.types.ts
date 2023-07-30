import { VariantProps } from "class-variance-authority";
import { loadingSpinnerStyles } from "./LoadingSpinner.styles";
import { buttonStyles } from "../Button/Button.styles";

export interface LoadingSpinnerProps
  extends React.HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof buttonStyles> {
  text?: string;
}
