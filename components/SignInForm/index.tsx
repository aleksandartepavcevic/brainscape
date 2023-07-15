"use client";

import React from "react";
import { signIn } from "next-auth/react";
import Input from "../Input";
import Form from "../Form";

const SignInForm = () => {
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
              options={{ required: true }}
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              options={{ required: true }}
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

export default SignInForm;
