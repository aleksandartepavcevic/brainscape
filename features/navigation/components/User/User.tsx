import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const User = async () => {
  const session = await getServerSession();
  const { user } = session || {};

  console.log("session ->", session);

  return (
    <Link
      href="/profile"
      className="relative focus:outline-focus w-10 h-10 rounded-xl overflow-hidden cursor-pointer"
    >
      <Image
        src={String(user?.image)}
        alt="Profile picture"
        style={{ objectFit: "cover" }}
        fill
      />
    </Link>
  );
};

export default User;
