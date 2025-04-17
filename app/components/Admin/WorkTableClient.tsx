"use client";

import { Work } from "@/app/types/Work";
import Link from "next/link";
import { useRouter } from "next/navigation";
export function WorkTableClient({ works }: { works: Work[] }) {
  const router = useRouter();

  const handleDelete = async (id: string) => {
    const ok = window.confirm("本当に削除してもいいですか？");
    if (!ok) return;
    const result = await fetch(`/api/works/deleteWork`, {
      method: "POST",
      body: JSON.stringify({ id }),
    });
    if (!result.ok) {
      alert(`削除に失敗しました: ${result.status}`);
      return;
    }
    const data = await result.json();

    if (data.status !== "success") {
      alert("削除に失敗しました");
    } else {
      alert("削除に成功しました");
      router.refresh();
    }
  };
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {works.map((work: Work) => (
          <tr key={work.id}>
            <td>{work.title}</td>
            <td>
              <Link href={`/admin/edit/${work.id}`}>編集</Link>
            </td>
            <td>
              <button onClick={() => handleDelete(work.id)}>削除</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
