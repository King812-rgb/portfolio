import { Form } from "@/app/components/Admin/Form";
import { getWorkListUtil } from "@/app/lib/getWorkListUtil";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { Work } from "@/app/types/Work";
export default async function AdminEdit({
  params,
}: {
  params: { work_id: string };
}) {
  const { work_id } = await params;
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/admin?callbackUrl=/admin/edit/" + work_id);
  }
  const works = await getWorkListUtil(session?.user.user_id);
  const work = works.find((work: Work) => work.id === work_id);
  if (!work) {
    return (
      <h1 className="text-5xl font-bold item-center text-center pt-20">
        Work not found
      </h1>
    );
  }
  return <Form initialData={work} mode="update" />;
}
