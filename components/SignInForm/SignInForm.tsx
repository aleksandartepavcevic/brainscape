"use client";

import Form from "../Form";
import Input from "../Input";
import { useState } from "react";
import EyeSlashIcon from "../Icons/EyeSlash";
import EyeIcon from "../Icons/Eye";
import Button from "../Button";
import GoogleButton from "../Button/components/GoogleButton";

export const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full flex flex-col">
      <Form
        onSubmit={(v) => console.log(v)}
        defaultValues={{ email: "", password: "" }}
      >
        <div className="flex flex-col">
          <Input
            type="email"
            name="email"
            placeholder="Email"
            options={{
              required: true,
            }}
          />
          <Input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            endAdornment={
              <Button
                variant="icon"
                size="small"
                onClick={(e) => {
                  e.preventDefault();
                  setShowPassword((s) => !s);
                }}
              >
                {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
              </Button>
            }
            options={{
              required: true,
            }}
          />
          <Button type="submit" className="mt-3">
            Sign in
          </Button>
        </div>
      </Form>

      <div className="flex gap-4 items-center my-4">
        <span className="w-full h-[1px] bg-gray-200 block"></span>
        <p className="text-sm text-gray-400 font-light">or</p>
        <span className="w-full h-[1px] bg-gray-200 block"></span>
      </div>
      <GoogleButton />
    </div>
  );
};
