import { Form } from "@/app/components/Admin/Form";
import { getWorkListUtil } from "@/app/lib/getWorkListUtil";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { Work } from "@/app/types/Work";

interface AdminEditProps {
  params: {
    work_id: string;
  };
}

export default function AdminEditWrapper({ params }: AdminEditProps) {
  return <AdminEdit params={params} />;
}

async function AdminEdit({ params }: AdminEditProps) {
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
