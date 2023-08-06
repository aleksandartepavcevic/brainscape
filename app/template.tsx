import React from "react";
import { SnackbarProvider } from "@/lib/notistack";

const RootTemplate = ({ children }: { children: React.ReactNode }) => {
  return <SnackbarProvider>{children}</SnackbarProvider>;
};

export default RootTemplate;
