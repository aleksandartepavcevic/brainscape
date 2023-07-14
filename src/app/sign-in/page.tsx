import React from "react";
import SignInForm from "../components/SignInForm/SignInForm";

const SignInPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="mb-4">Sign in</h1>
      <SignInForm />
    </div>
  );
};

export default SignInPage;
