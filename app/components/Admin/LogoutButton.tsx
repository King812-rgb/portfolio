"use client";
import { signOut } from "next-auth/react";

const LogoutButton = () => {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className="cursor-pointer p-3 bg-red-500 text-white rounded-md"
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
