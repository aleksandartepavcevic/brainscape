"use client";

import { signIn } from "next-auth/react";
import React from "react";

const SignInForm = () => {
  return (
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
  );
};

export default SignInForm;
