"use client";

import { Work } from "@/app/types/Work";
import { useRouter } from "next/navigation";
export function WorkTableClient({ works }: Readonly<{ works: Work[] }>) {
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
    }else{
      alert("削除に成功しました");
      router.refresh();
    }
  };
  return (
    <table>
      <thead className="bg-gray-900 text-white">
        <tr>
          <th className="p-2 w-2/7">Title</th>
          <th className="p-2 w-3/7">Description</th>
          <th className="p-2 w-1/7">Edit</th>
          <th className="p-2 w-1/7">Delete</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-700">
      {works.map((work: Work) => (
        <tr key={work.id}>
          <td className="p-2 w-2/7 text-left">{work.title}</td>
          <td className="p-2 w-3/7 text-left">{work.description}</td>
          <td className="p-2 w-1/7 cursor-pointer">
            <button onClick={() => router.push(`/admin/edit/${work.id}`)} className="cursor-pointer p-2 bg-gray-900 rounded-md mx-auto">
              編集
            </button>
          </td>
          <td className="p-2 w-1/7 cursor-pointer">
            <button onClick={() => handleDelete(work.id)} className="cursor-pointer p-2 bg-red-500 rounded-md mx-auto">
              削除
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  );
}
