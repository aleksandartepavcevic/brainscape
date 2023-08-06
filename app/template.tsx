import React from "react";
import { SnackbarProvider } from "@/lib/notistack";
import Providers from "./providers";

const RootTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <Providers>
      <SnackbarProvider>{children}</SnackbarProvider>
    </Providers>
  );
};

export default RootTemplate;
