"use client";

import React, { useState } from "react";
import Input from "@/components/ui/Input";
import { useFormContext } from "react-hook-form";
import { EMAIL_REGEX } from "@/constants/regex";
import { errorMessageMap } from "@/components/ui/Form/Form.constants";
import { Button } from "@/components/ui/Button";
import { EyeIcon, EyeSlashIcon } from "@/components/Icons";

export const SignInFormFields = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { formState } = useFormContext();

  const { isSubmitting, isValid } = formState;

  const handleShowPassword = () => {
    setShowPassword((s) => !s);
  };

  return (
    <div className="flex flex-col">
      <Input
        type="email"
        name="email"
        placeholder="Email"
        options={{
          required: true,
          pattern: {
            value: EMAIL_REGEX,
            message: errorMessageMap["email"],
          },
        }}
      />
      <Input
        type={showPassword ? "text" : "password"}
        name="password"
        placeholder="Password"
        endAdornment={
          <Button
            type="button"
            variant="icon"
            size="small"
            onClick={handleShowPassword}
          >
            {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
          </Button>
        }
        options={{
          required: true,
        }}
      />
      <Button
        type="submit"
        className="mt-3"
        disabled={!isValid}
        loading={isSubmitting}
      >
        Sign in
      </Button>
    </div>
  );
};
