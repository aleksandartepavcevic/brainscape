import React from "react";
import { LinkProps as NextLinkProps } from "next/link";
import { VariantProps } from "class-variance-authority";
import { link } from "./Link.styles";

export interface LinkVariants extends VariantProps<typeof link> {}

export interface LinkProps extends NextLinkProps {
  variant?: LinkVariants;
  children: React.ReactNode;
  className?: string;
}
