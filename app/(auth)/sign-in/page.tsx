import React from "react";
import Image from "next/image";

import LogoImage from "@/../public/logo.png";
import SignInForm from "@/components/SignInForm";

const SignInPage = () => {
  return (
    <div className="w-full">
      <Image
        src={LogoImage}
        alt="Brainscape logo"
        width={200}
        height={200}
        className="mx-auto"
      />
      <div className="mb-4">
        <h1 className="text-xl font-medium">Sign in to your account</h1>
        <p className="text-sm font-light text-black/50">
          Enter your credentials to access your account
        </p>
      </div>
      <SignInForm />
    </div>
  );
};

export default SignInPage;
