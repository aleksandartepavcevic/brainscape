import React, { useState } from "react";
import { Button } from "../../Button";
import { signIn } from "next-auth/react";
import GoogleIcon from "@/components/Icons/Google";

export const GoogleButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true);
      await signIn("google");
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      className="gap-2"
      variant="outlined"
      loading={isLoading}
      onClick={handleGoogleSignIn}
    >
      <GoogleIcon /> Sign in with Google
    </Button>
  );
};
