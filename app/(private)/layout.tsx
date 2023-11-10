import { Navigation } from "@/features/navigation";
import React from "react";

const PrivateLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
};

export default PrivateLayout;
