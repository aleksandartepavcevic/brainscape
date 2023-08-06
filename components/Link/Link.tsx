import React from "react";
import NextLink from "next/link";
import { LinkProps } from "./Link.types";
import { linkStyles } from "./Link.styles";

const Link = ({ children, className, variant, ...rest }: LinkProps) => {
  return (
    <NextLink className={linkStyles(variant, className)} {...rest}>
      {children}
    </NextLink>
  );
};

export default Link;
