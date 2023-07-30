import { VariantProps } from "class-variance-authority";
import { buttonStyles } from "./Button.styles";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  children?: React.ReactNode;
  loading?: boolean;
  loadingText?: string;
}
