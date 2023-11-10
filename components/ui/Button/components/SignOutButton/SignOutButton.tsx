"use client";

import { signOut } from "next-auth/react";
import React from "react";
import Button from "../../Button";

const SignOutButton = () => {
  return (
    <Button
      onClick={() => {
        signOut();
      }}
    >
      Sign out
    </Button>
  );
};

export default SignOutButton;
