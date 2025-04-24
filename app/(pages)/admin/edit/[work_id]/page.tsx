import { Form } from "@/app/components/Admin/Form";
import { getWorkListUtil } from "@/app/lib/getWorkListUtil";
import { auth } from "@/app/auth";
import { redirect } from "next/navigation";
import { Work } from "@/app/types/Work";

interface PageProps {
  params: Promise<{
    work_id: string;
  }>;
}

export default async function AdminEdit({ params }: PageProps) {
  const { work_id } = await params;
  const session = await auth();
  if (!session?.user.user_id) {
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
