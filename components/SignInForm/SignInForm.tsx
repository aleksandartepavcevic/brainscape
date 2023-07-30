"use client";

import Form from "../Form";
import { signIn } from "next-auth/react";
import Input from "../Input";
import { useState } from "react";
import EyeSlashIcon from "../Icons/EyeSlash";
import EyeIcon from "../Icons/Eye";

export const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="w-full">
      <Form
        onSubmit={(v) => console.log(v)}
        defaultValues={{ email: "", password: "" }}
      >
        <div className="flex flex-col">
          <div className="flex flex-col mb-4">
            <Input
              type="email"
              name="email"
              placeholder="Email"
              options={{
                required: {
                  value: true,
                  message: "This field is required!",
                },
              }}
            />
            <Input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              endAdornment={
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setShowPassword((s) => !s);
                  }}
                >
                  {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
                </button>
              }
              options={{
                required: {
                  value: true,
                  message: "This field is required!",
                },
              }}
            />
            <button type="submit">Sign in</button>
          </div>
        </div>
      </Form>

      <div className="flex flex-col">
        <p className="text-center">Or</p>
        <button
          onClick={async () => {
            try {
              await signIn("google");
            } catch (err) {
              console.log(err);
            }
          }}
        >
          Google
        </button>
      </div>
    </div>
  );
};
