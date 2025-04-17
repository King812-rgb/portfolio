import { Form } from "@/app/components/Admin/Form";
import { getWorkListUtil } from "@/app/lib/getWorkListUtil";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { Work } from "@/app/types/Work";
export default async function AdminEdit({
  params,
}: Readonly<{ params: { work_id: string } }>) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/admin?callbackUrl=/admin/edit/" + params.work_id);
  }
  const works = await getWorkListUtil(session?.user.user_id);
  const work = works.find((work: Work) => work.id === params.work_id);
  if (!work) {
    return <div>Work not found</div>;
  }
  return <Form initialData={work} mode="update" />;
}
