import { WorkTableClient } from "@/app/components/Admin/WorkTable";
import { getWorkListUtil } from "@/app/lib/getWorkListUtil";
import Link from "next/link";
import { auth } from "@/app/auth";
import { redirect } from "next/navigation";

export default async function AdminList() {
  const session = await auth();
  if (!session?.user.user_id) {
    redirect("/admin?callbackUrl=/admin/list");
  }
  const works = await getWorkListUtil(session.user.user_id);

  return (
    <div className="text-center flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-20">Work List</h1>
      <Link
        href="/admin/create"
        className="mb-15 cursor-pointer p-3 w-70 bg-gray-900 text-white font-bold rounded-full"
      >
        +Create New Work
      </Link>
      <WorkTableClient works={works} />
    </div>
  );
}
