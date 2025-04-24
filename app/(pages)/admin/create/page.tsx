import { Form } from "@/app/components/Admin/Form";
import { auth } from "@/app/auth";
import { redirect } from "next/navigation";

export default async function AdminCreate() {
  const session = await auth();
  if (!session) {
    redirect("/admin?callbackUrl=/admin/create");
  }
  return <Form initialData={null} mode="create" />;
}
