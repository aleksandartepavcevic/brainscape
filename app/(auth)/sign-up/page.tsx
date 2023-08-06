import React from "react";
import Image from "next/image";

import LogoImage from "@/../public/logo.png";
import SignUpForm from "@/components/SignUpForm";
import Link from "@/components/Link";

const SignUpPage = () => {
  return (
    <div className="w-full pb-6">
      <div className="relative w-[200px] h-[200px] mx-auto">
        <Image
          src={LogoImage}
          alt="Brainscape logo"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="mb-4">
        <h1 className="text-xl font-medium">Sign up to your account</h1>
        <p className="text-sm font-light text-black/50">
          Enter credentials for your account
        </p>
      </div>
      <SignUpForm />
      <p className="text-sm font-light text-black/50 mt-6 text-center">
        Already have an account? <Link href="/sign-in">Sign in here!</Link>
      </p>
    </div>
  );
};

export default SignUpPage;
