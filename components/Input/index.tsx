"use client";

import { cva } from "class-variance-authority";
import React from "react";
import { RegisterOptions, useFormContext } from "react-hook-form";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  options?: RegisterOptions;
}

const input = cva([
  "px-2",
  "py-1",
  "my-1",
  "rounded",
  "border-2",
  "border-blue-300",
]);

const Input = ({ name, options, type, placeholder }: InputProps) => {
  const { register } = useFormContext();
  return (
    <input
      {...register(name, options)}
      className={`${input()}`}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
