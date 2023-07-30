"use client";

import React, { memo } from "react";
import { cva } from "class-variance-authority";
import { RegisterOptions, useFormContext } from "react-hook-form";
import InputAdornment from "./components/InputAdornment";
import InputErrorMessage from "./components/InputErrorMessage";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  options?: RegisterOptions;
  endAdornment?: React.ReactNode;
}

const input = cva(
  [
    "w-full",
    "px-3",
    "py-3",
    "rounded-lg",
    "border",
    "border-black/10",
    "bg-gray-300/10",
    "font-light",
    "text-black",
    "text-sm",
    "outline-0",
    "focus:border-sky-500",
  ],
  {
    variants: {
      error: {
        true: ["border-red-600", "focus:border-red-600"],
      },
    },
  }
);

export const Input = memo(
  ({ name, placeholder, options, endAdornment, ...rest }: InputProps) => {
    const {
      register,
      formState: { errors },
    } = useFormContext();

    const errorMessage = errors[name]?.message as string;
    const error = Boolean(errorMessage);
    const required = Boolean(options?.required);
    const placeholderText = !required ? placeholder : placeholder + "*";

    return (
      <div className="relative my-3">
        <input
          {...register(name, options)}
          className={`${input({
            error,
          })}`}
          required={required}
          placeholder={placeholderText}
          {...rest}
        />
        {endAdornment && (
          <InputAdornment position="end" adornment={endAdornment} />
        )}
        {errorMessage && <InputErrorMessage message={errorMessage} />}
      </div>
    );
  }
);

Input.displayName = "Input";
