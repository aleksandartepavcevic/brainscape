"use client";

import React, { memo, useState } from "react";
import { useFormContext } from "react-hook-form";
import InputAdornment from "./components/InputAdornment";
import InputErrorMessage from "./components/InputErrorMessage";
import { containerStyles, inputStyles } from "./Input.styles";
import { InputProps } from "./Input.types";

const Input = ({
  name,
  placeholder,
  onFocus,
  onBlur,
  endAdornment,
  ...rest
}: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const [isFocused, setIsFocused] = useState(false);
  const errorMessage = errors[name]?.message as string;
  const error = Boolean(errorMessage);

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    onFocus?.(event);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    onBlur?.(event);
  };

  return (
    <div
      className={`my-3 ${containerStyles({
        isFocused,
        error,
      })}`}
    >
      <input
        {...register(name)}
        className={`${inputStyles()}`}
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...rest}
      />
      {endAdornment && (
        <InputAdornment position="end" adornment={endAdornment} />
      )}
      {errorMessage && <InputErrorMessage message={errorMessage} />}
    </div>
  );
};

export default memo(Input);
