import { RegisterOptions } from "react-hook-form";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  options?: RegisterOptions;
  endAdornment?: React.ReactNode;
}
