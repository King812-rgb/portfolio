"use client";
import { Suspense } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

const AuthButton = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") ?? "/admin/list";
  return (
    <button
      onClick={() => signIn("google", { callbackUrl })}
      className="cursor-pointer p-3 w-80 bg-white text-black font-bold rounded-full"
    >
      Sign in with Google
    </button>
  );
};

const AuthButtonWrapper = () => (
  <Suspense>
    <AuthButton />
  </Suspense>
);

export default AuthButtonWrapper;
