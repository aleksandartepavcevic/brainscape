import React from "react";
import { inputAdornment } from "./InputAdornment.styles";
import { VariantProps } from "class-variance-authority";

export interface InputAdornmentVariants
  extends VariantProps<typeof inputAdornment> {}
export interface InputAdornmentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  position: "start" | "end";
  adornment: React.ReactNode;
}
