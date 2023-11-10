import { VariantProps } from "class-variance-authority";
import { RegisterOptions } from "react-hook-form";
import { container, input } from "./Input.styles";

export interface InputVariants extends VariantProps<typeof input> {}

export interface ContainerVariants extends VariantProps<typeof container> {}
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  options?: RegisterOptions;
  endAdornment?: React.ReactNode;
}
