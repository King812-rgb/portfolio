import { Form } from "@/app/components/Admin/Form";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function AdminCreate() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/admin?callbackUrl=/admin/create");
  }
  return <Form initialData={null} mode="create"/>;
}
