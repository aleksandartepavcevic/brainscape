"use client";

import React, { useState } from "react";
import { Button } from "../../Button";
import { signIn } from "next-auth/react";
import GoogleIcon from "@/components/Icons/Google";

export const GoogleButton = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      setIsSubmitting(true);
      await signIn("google");
    } catch (err) {
      console.log(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Button
      className="gap-2"
      variant="outlined"
      loading={isSubmitting}
      onClick={handleGoogleSignIn}
    >
      <GoogleIcon /> Sign in with Google
    </Button>
  );
};
