import { VariantProps } from "class-variance-authority";
import { button } from "./Button.styles";

export interface ButtonVariants extends VariantProps<typeof button> {}
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    Omit<ButtonVariants, "disabled"> {
  children?: React.ReactNode;
  loading?: boolean;
  loadingText?: string;
}
