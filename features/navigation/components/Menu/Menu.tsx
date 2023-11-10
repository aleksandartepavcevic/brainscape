"use client";

import Link from "next/link";
import { SquaresIcon } from "@/components/Icons";
import UIMenu from "@/components/ui/Menu";
import { signOut } from "next-auth/react";

const Menu = () => {
  return (
    <UIMenu>
      <UIMenu.Trigger>
        <SquaresIcon />
      </UIMenu.Trigger>
      <UIMenu.Content>
        <UIMenu.Item>
          <Link href="/profile" className="font-semibold text-gray-900">
            Profile
            <span className="absolute inset-0"></span>
          </Link>
        </UIMenu.Item>
        <UIMenu.Item>
          <Link href="/settings" className="font-semibold text-gray-900">
            Settings
            <span className="absolute inset-0"></span>
          </Link>
        </UIMenu.Item>
        <UIMenu.Item>
          <div
            onClick={() => signOut()}
            className="font-semibold text-gray-900 cursor-pointer"
          >
            Sign out
            <span className="absolute inset-0"></span>
          </div>
        </UIMenu.Item>
      </UIMenu.Content>
    </UIMenu>
  );
};

export default Menu;
