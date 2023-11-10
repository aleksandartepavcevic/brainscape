"use client";

import { SessionProvider } from "next-auth/react";
import { SnackbarProvider } from "notistack";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SnackbarProvider>
      <SessionProvider>{children}</SessionProvider>
    </SnackbarProvider>
  );
};

export default Providers;
