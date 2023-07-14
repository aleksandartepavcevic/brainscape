import React from "react";
import SignInForm from "../../components/SignInForm/SignInForm";
import Image from "next/image";

import LogoImage from "@/../public/logo.png";

const SignInPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Image src={LogoImage} alt="Brainscape logo" width={200} height={200} />
      <h1 className="mb-4">Sign in</h1>
      <SignInForm />
    </div>
  );
};

export default SignInPage;
