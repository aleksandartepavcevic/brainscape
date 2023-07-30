"use client";

import Form from "../Form";
import GoogleButton from "../Button/components/GoogleButton";
import { signIn } from "next-auth/react";
import SignInFormFields from "./components/SignInFormFields";

export const SignInForm = () => {
  return (
    <div className="w-full flex flex-col">
      <Form
        onSubmit={async (v) => {
          try {
            await signIn("credentials", {
              email: v.email,
              password: v.password,
            });
          } catch (err) {
            // TODO: Handle error better
            console.log(err);
          }
        }}
        defaultValues={{ email: "", password: "" }}
      >
        <SignInFormFields />
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
