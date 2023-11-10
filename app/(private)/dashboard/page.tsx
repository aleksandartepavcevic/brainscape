import { SignOutButton } from "@/components/ui/Button";
import { getUserSession } from "@/lib/session";
import Link from "next/link";
import React from "react";

const Dashboard = async () => {
  const user = await getUserSession();
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="mb-4">Dashboard</h1>
      <p>{user?.name}</p>
      <p>{user?.email}</p>
      <Link href="/profile">Go to profile</Link>
      <SignOutButton />
    </div>
  );
};

export default Dashboard;
