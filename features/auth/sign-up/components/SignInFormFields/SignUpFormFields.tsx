"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import EyeIcon from "@/components/Icons/Eye";
import EyeSlashIcon from "@/components/Icons/EyeSlash";
import Input from "@/components/ui/Input";
import { useFormContext } from "react-hook-form";

const SignUpFormFields = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { formState } = useFormContext();

  const { isSubmitting, isValid } = formState;

  return (
    <div className="flex flex-col">
      <Input type="text" name="username" placeholder="Username" />
      <Input type="email" name="email" placeholder="Email" />
      <Input
        type={showPassword ? "text" : "password"}
        name="password"
        placeholder="Password"
        endAdornment={
          <Button
            type="button"
            variant="icon"
            size="small"
            onClick={() => setShowPassword((s) => !s)}
          >
            {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
          </Button>
        }
      />
      <Input
        type={showConfirmPassword ? "text" : "password"}
        name="confirmPassword"
        placeholder="Confirm Password"
        endAdornment={
          <Button
            type="button"
            variant="icon"
            size="small"
            onClick={() => setShowConfirmPassword((s) => !s)}
          >
            {showConfirmPassword ? <EyeSlashIcon /> : <EyeIcon />}
          </Button>
        }
      />
      <Button
        type="submit"
        className="mt-3"
        disabled={!isValid}
        loading={isSubmitting}
      >
        Sign up
      </Button>
    </div>
  );
};

export default SignUpFormFields;
