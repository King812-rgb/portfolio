import Link from "next/link";
import LogoutButton from "./LogoutButton";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

const Header = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className="fixed top-0 left-0 right-0 z-50 max-w-7xl mx-auto flex items-center justify-between bg-black p-6">
      <Link
        className="cursor-pointer text-2xl font-bold hover:text-gray-400 transition"
        href="/admin/list"
      >
        Portfolio Admin.
      </Link>
      {session && <LogoutButton />}
    </div>
  );
};

export default Header;
