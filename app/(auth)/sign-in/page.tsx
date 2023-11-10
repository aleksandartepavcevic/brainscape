import React from "react";
import Image from "next/image";

import LogoImage from "@/../public/logo.png";
import Link from "@/components/ui/Link";
import { SignIn } from "@/features/auth";

const SignInPage = () => {
  return (
    <div className="w-full pb-6">
      <div className="relative w-[200px] h-[200px] mx-auto">
        <Image
          src={LogoImage}
          alt="Brainscape logo"
          style={{ objectFit: "cover" }}
          fill
        />
      </div>
      <div className="mb-4">
        <h1 className="text-xl font-medium">Sign in to your account</h1>
        <p className="text-sm font-light text-black/50">
          Enter your credentials to access your account
        </p>
      </div>
      <SignIn />
      <p className="text-sm font-light text-black/50 mt-6 text-center">
        Don&apos;t have an account? <Link href="/sign-up">Sign up here!</Link>
      </p>
    </div>
  );
};

export default SignInPage;
