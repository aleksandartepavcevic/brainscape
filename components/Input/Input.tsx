"use client";

import React, { memo } from "react";
import { useFormContext } from "react-hook-form";
import InputAdornment from "./components/InputAdornment";
import InputErrorMessage from "./components/InputErrorMessage";
import { inputStyles } from "./Input.styles";
import { InputProps } from "./Input.types";

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
          className={`${inputStyles({
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
