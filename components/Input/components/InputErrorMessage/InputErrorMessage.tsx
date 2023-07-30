import { cva } from "class-variance-authority";
import React from "react";

interface InputErrorMessageProps {
  message: string;
}

const inputErrorMessage = cva([
  "absolute",
  "left-1",
  "top-full",
  "py-1",
  "text-xs",
  "text-red-500",
]);

export const InputErrorMessage = ({ message }: InputErrorMessageProps) => {
  return <p className={inputErrorMessage()}>{message}</p>;
};
