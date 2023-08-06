"use client";

import React, { useEffect, useState } from "react";
import Button from "@/components/Button";
import EyeIcon from "@/components/Icons/Eye";
import EyeSlashIcon from "@/components/Icons/EyeSlash";
import Input from "@/components/Input";
import { useFormContext } from "react-hook-form";
import { EMAIL_REGEX } from "@/constants/regex";
import { errorMessageMap } from "@/components/Form/Form.constants";

const SignUpFormFields = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { formState } = useFormContext();

  const { isSubmitting, isValid } = formState;

  return (
    <div className="flex flex-col">
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
