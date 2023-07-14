"use client";

import React from "react";
import { signIn } from "next-auth/react";

const SignInForm = () => {
  return (
    <div className="w-full">
      <form>
        <div className="flex flex-col">
          <div className="flex flex-col mb-4">
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <button>Sign in</button>
          </div>
        </div>
      </form>
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
